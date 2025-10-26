// === STATE ===
let currentView = 'library-view';
let baseSkills = []; // Will be initialized with proper lock state
let fusedSkills = []; // Created fusions
let allSkills = []; // Combined pool (base + fused)
let filteredSkills = []; // Current filtered view
let virtualGrid = null; // Virtualized grid controller for skill list
let ownedSkillIds = []; // IDs of owned skills (5 per engine)
let fusionSlots = { slot1: null, slot2: null, slot3: null };
let currentSlot = null; // For skill selector
let kpBalance = 500; // Player currency
let unlockedExtraIds = new Set(); // Unlocked beyond initial owned
let upgrades = {}; // { skillId: level }
let savedRecipes = []; // persistent across resets
let seedBalance = 10; // Fusion seeds currency

// === ECONOMY & SHOP ===
const SHOP_ENABLED = true;
let inventory = { upgradeTokens: 0, rerollTokens: 0, fusionCatalyst: 0 };
let workshopUpgrades = { seedSaver: 0, synergyFloor: 0, critBoost: 0 };
let useCatalyst = false;

const ECONOMY = {
    UNLOCK_KP_COST: 50,
    SHOP_CATALOG: {
        skillPacks: [
            { id:'randomTrio', title:'Random Trio', desc:'Unlock 3 random base skills', price:{ kp:300 }, grant:{ type:'unlock_random', count:3 } },
            { id:'focusPack', title:'Focus Pack', desc:'Unlock 3 skills from a chosen engine', price:{ kp:450 }, grant:{ type:'unlock_random_school', count:3 } },
            { id:'tier3', title:'Tier 3 Guarantee', desc:'Unlock a Tier 3 base skill', price:{ kp:600 }, grant:{ type:'unlock_by_tier', tier:3, count:1 } }
        ],
        currency: [
            { id:'seed5', title:'Seed Pack ×5', desc:'Get 5 Seeds', price:{ kp:50 }, grant:{ type:'currency', seeds:5 } },
            { id:'seed15', title:'Seed Bundle ×15', desc:'Get 15 Seeds', price:{ kp:130 }, grant:{ type:'currency', seeds:15 } }
        ],
        utilities: [
            { id:'upgradeToken', title:'Upgrade Token', desc:'+1 Upgrade Token', price:{ kp:150 }, grant:{ type:'inventory', key:'upgradeTokens', amount:1 } },
            { id:'engineReroll', title:'Engine Reroll', desc:'Reroll owned skills pool', price:{ kp:200 }, grant:{ type:'inventory', key:'rerollTokens', amount:1 } },
            { id:'fusionCatalyst', title:'Fusion Catalyst', desc:'Boosts synergy and crit; consumed on fusion', price:{ kp:120 }, grant:{ type:'inventory', key:'fusionCatalyst', amount:1 } }
        ],
        specials: []
    }
};

let shopState = null;
let activeShopCategory = 'skillPacks';
function loadShopState(){
    try { shopState = JSON.parse(localStorage.getItem('shopState')||'{}'); } catch(_) { shopState = {}; }
    if (!shopState || typeof shopState !== 'object') shopState = {};
    shopState.lastSpecialsAt = shopState.lastSpecialsAt || null;
    shopState.specials = Array.isArray(shopState.specials) ? shopState.specials : [];
    shopState.limits = shopState.limits || {};
}
function saveShopState(){ try{ localStorage.setItem('shopState', JSON.stringify(shopState)); }catch(_){} }
function todayKey(){ const d = new Date(); const y=d.getFullYear(); const m=String(d.getMonth()+1).padStart(2,'0'); const da=String(d.getDate()).padStart(2,'0'); return `${y}-${m}-${da}`; }
function ensureDailySpecials(){
    loadShopState();
    const key = todayKey();
    if (shopState.lastSpecialsAt === key && shopState.specials.length) return;
    const allItems = [...ECONOMY.SHOP_CATALOG.skillPacks, ...ECONOMY.SHOP_CATALOG.currency, ...ECONOMY.SHOP_CATALOG.utilities];
    const pool = allItems.slice();
    const specials = [];
    const pickCount = Math.min(5, pool.length);
    while (specials.length < pickCount && pool.length){
        const i = Math.floor(Math.random()*pool.length);
        const item = pool.splice(i,1)[0];
        const baseKp = item.price?.kp || 0;
        const baseSeeds = item.price?.seeds || 0;
        const hasPrice = baseKp > 0 || baseSeeds > 0;
        if (!hasPrice) continue;
        const discount = 0.15 + Math.random()*0.25; // 15%-40%
        const sale = {
            id: item.id,
            price: {
                kp: baseKp ? Math.max(1, Math.round(baseKp*(1-discount))) : 0,
                seeds: baseSeeds ? Math.max(1, Math.round(baseSeeds*(1-discount))) : 0
            },
            discountPercent: Math.round(discount*100)
        };
        specials.push(sale);
    }
    shopState.lastSpecialsAt = key;
    shopState.specials = specials;
    saveShopState();
}
function getSpecialFor(itemId){ if (!shopState || !Array.isArray(shopState.specials)) return null; return shopState.specials.find(s => s.id === itemId) || null; }
function openShop(){
    ensureDailySpecials();
    const modal = document.getElementById('shop-modal');
    if (!modal) return;
    activeShopCategory = 'skillPacks';
    renderShopCategories(activeShopCategory);
    renderShopGrid(activeShopCategory);
    updateShopBalances();
    modal.classList.add('active');
    if (window.Effects){ try{ Effects.modalOpen(modal); }catch(_){} }
}
function renderShopCategories(active){
    activeShopCategory = active;
    const el = document.getElementById('shop-categories');
    if (!el) return;
    el.innerHTML = '';
    const cats = [
        {id:'skillPacks', label:'Skill Packs'},
        {id:'currency', label:'Currency'},
        {id:'utilities', label:'Utilities'},
        {id:'specials', label:'Specials'}
    ];
    cats.forEach(c=>{
        const chip = document.createElement('button');
        chip.className = 'shop-chip' + (c.id===active?' active':'');
        chip.textContent = c.label;
        chip.onclick = ()=>{ 
            document.querySelectorAll('.shop-chip').forEach(x=>x.classList.remove('active'));
            chip.classList.add('active');
            activeShopCategory = c.id;
            renderShopGrid(activeShopCategory);
        };
        el.appendChild(chip);
    });
}
function itemEffectivePrice(item){
    const sale = getSpecialFor(item.id);
    const price = { kp: item.price?.kp || 0, seeds: item.price?.seeds || 0 };
    if (sale){
        return { ...price, kp: sale.price.kp ?? price.kp, seeds: sale.price.seeds ?? price.seeds, salePercent: sale.discountPercent };
    }
    return price;
}
function renderShopGrid(category){
    const grid = document.getElementById('shop-grid');
    if (!grid) return;
    grid.innerHTML = '';
    let items = [];
    if (category === 'specials'){
        const specials = (shopState?.specials)||[];
        const map = new Map();
        [...ECONOMY.SHOP_CATALOG.skillPacks, ...ECONOMY.SHOP_CATALOG.currency, ...ECONOMY.SHOP_CATALOG.utilities].forEach(it=> map.set(it.id, it));
        items = specials.map(sale => ({ ...map.get(sale.id), _sale: sale })).filter(Boolean);
    } else {
        items = ECONOMY.SHOP_CATALOG[category] || [];
    }
    const frag = document.createDocumentFragment();
    items.forEach(item=>{
        const card = document.createElement('div');
        card.className = 'shop-item';
        const price = itemEffectivePrice(item);
        const hasSale = typeof price.salePercent === 'number';
        const kpTxt = price.kp ? `<span class="price-badge">💰 ${price.kp} KP${hasSale && item.price?.kp ? ` <s>${item.price.kp}</s>`:''}</span>` : '';
        const sdTxt = price.seeds ? `<span class="price-badge">🌱 ${price.seeds}${hasSale && item.price?.seeds ? ` <s>${item.price.seeds}</s>`:''}</span>` : '';
        card.innerHTML = `
      <div class="shop-item-header">
        <div class="shop-item-title">${item.title}</div>
        ${hasSale ? `<div class="sale-badge">-${price.salePercent}%</div>`:''}
      </div>
      <div class="shop-item-desc">${item.desc||''}</div>
      <div class="shop-item-prices">${kpTxt} ${sdTxt}</div>
      <div class="shop-item-actions">
        <button class="btn-primary">Buy</button>
      </div>
    `;
        const btn = card.querySelector('button');
        btn.disabled = (price.kp && kpBalance < price.kp) || (price.seeds && seedBalance < price.seeds);
        btn.onclick = ()=> purchaseItem(item);
        frag.appendChild(card);
    });
    grid.appendChild(frag);
}
function updateShopBalances(){
    const kpEl = document.getElementById('shop-kp');
    const sdEl = document.getElementById('shop-seeds');
    if (kpEl) kpEl.textContent = kpBalance;
    if (sdEl) sdEl.textContent = seedBalance;
}
function purchaseItem(item){
    const price = itemEffectivePrice(item);
    const needsKP = price.kp||0, needsSeeds = price.seeds||0;
    if ((needsKP && kpBalance < needsKP) || (needsSeeds && seedBalance < needsSeeds)) { alert('Not enough currency'); return; }
    const label = `${item.title}\nCost: ${needsKP?`${needsKP} KP`:''}${(needsKP && needsSeeds)?' + ':''}${needsSeeds?`${needsSeeds} Seeds`:''}`;
    if (!confirm(`Purchase?\n\n${label}`)) return;
    if (needsKP) spendKP(needsKP, 'shop');
    if (needsSeeds) spendSeeds(needsSeeds);
    grantItem(item.grant);
    saveProgress();
    updateShopBalances();
    renderShopGrid(activeShopCategory);
    if (window.Effects){ try{ Effects.showSuccessBadge(); }catch(_){} }
    alert(`Purchased: ${item.title}`);
}
function grantItem(grant){
    if (!grant) return;
    switch (grant.type){
        case 'currency':
            if (typeof grant.kp === 'number') kpBalance += grant.kp;
            if (typeof grant.seeds === 'number') seedBalance += grant.seeds;
            updateStats();
            break;
        case 'inventory':
            inventory[grant.key] = (inventory[grant.key]||0) + (grant.amount||1);
            break;
        case 'unlock_random':
            unlockRandomSkills(grant.count||1);
            break;
        case 'unlock_random_school':
            unlockRandomSkillsBySchool(grant.count||1);
            break;
        case 'unlock_by_tier':
            unlockByTier(grant.tier, grant.count||1);
            break;
    }
}
function getLockedBaseSkills(){ return baseSkills.filter(s => !s.unlocked && !s.fusionIngredients); }
function unlockRandomSkills(count){
    const pool = getLockedBaseSkills();
    if (pool.length === 0){ alert('No locked base skills left.'); return; }
    let unlocked = 0;
    for (let i=0; i<count && pool.length>0; i++){
        const idx = Math.floor(Math.random()*pool.length);
        const s = pool.splice(idx,1)[0];
        s.unlocked = true; unlockedExtraIds.add(s.id); unlocked++;
    }
    rebuildSkillPool(); renderSkillList(); updateStats();
    alert(`Unlocked ${unlocked} skill(s).`);
}
function promptEngineId(){
    const list = ENGINES.map(e => `${e.id} (${e.name})`).join(', ');
    const chosen = prompt(`Choose engine id:\n${list}`);
    if (!chosen) return null;
    const id = chosen.trim();
    const ok = ENGINES.some(e => e.id === id);
    if (!ok){ alert('Invalid engine id'); return null; }
    return id;
}
function unlockRandomSkillsBySchool(count){
    const engineId = promptEngineId();
    if (!engineId) return;
    const pool = baseSkills.filter(s => s.engine === engineId && !s.unlocked && !s.fusionIngredients);
    if (pool.length === 0){ alert('No locked skills available in that engine.'); return; }
    let unlocked = 0;
    for (let i=0; i<count && pool.length>0; i++){
        const idx = Math.floor(Math.random()*pool.length);
        const s = pool.splice(idx,1)[0];
        s.unlocked = true; unlockedExtraIds.add(s.id); unlocked++;
    }
    rebuildSkillPool(); renderSkillList(); updateStats();
    alert(`Unlocked ${unlocked} ${engineId} skill(s).`);
}
function unlockByTier(tier, count){
    let pool = baseSkills.filter(s => s.tier === tier && !s.unlocked && !s.fusionIngredients);
    let unlocked = 0;
    while (unlocked < count){
        if (pool.length === 0){
            tier = tier - 1;
            if (tier < 0) break;
            pool = baseSkills.filter(s => s.tier === tier && !s.unlocked && !s.fusionIngredients);
            continue;
        }
        const idx = Math.floor(Math.random()*pool.length);
        const s = pool.splice(idx,1)[0];
        s.unlocked = true; unlockedExtraIds.add(s.id); unlocked++;
    }
    rebuildSkillPool(); renderSkillList(); updateStats();
    alert(`Unlocked ${unlocked} tiered skill(s).`);
}

// === INIT ===
document.addEventListener('DOMContentLoaded', () => {
initializeOwnedSkills(); // Initialize base skills with proper lock state (40 owned)
    loadSavedRecipes(); // persistent recipes
    loadProgress(); // KP, extra unlocks, upgrades
    loadFusedSkills(); // Load saved fusions
    rebuildSkillPool(); // Merge base + fused
    
    // Sync with SkillSystem bridge
    if (window.SkillSystem) {
        SkillSystem.saveBaseSkills(baseSkills);
        console.log('🔗 Synced with SkillSystem:', SkillSystem.getStats());
    }
    
    // Bind core listeners early so UI still works even if a render fails
    setupEventListeners();
    setupShop();

    // Init virtual grid
    try { initVirtualGrid(); } catch (e) { console.error('Virtual grid init failed:', e); }
    
    // Render UI (safe)
    try { renderEngineChips(); bindEngineTabClicks(); } catch (e) { console.error('Engine tabs render failed:', e); }
    try { renderSkillList(); } catch (e) { console.error('Skill list render failed:', e); }
    try { renderFusedSkills(); } catch (e) { console.error('Fused list render failed:', e); }
    try { updateStats(); } catch (e) { console.error('Stats update failed:', e); }

    if (window.Effects) { try { Effects.init(); } catch (e) { console.warn('Effects init failed', e); } }
    // Initialize non-invasive fusion FX (does not touch skill data/cards)
    try { initFusionFXOverlay(); } catch(_){}
});

function initFusionFXOverlay(){
  const panel = document.querySelector('.panel-center');
  const originalBtn = document.getElementById('create-fusion');
  if (!panel || !originalBtn) return;
  // Create overlay once
  let fx = document.getElementById('fusion-fx');
  if (!fx){
    fx = document.createElement('div');
    fx.id = 'fusion-fx';
    panel.appendChild(fx);
  }
  // Replace button to prevent double handlers; wrap createFusion with FX
  const btn = originalBtn.cloneNode(true);
  originalBtn.parentNode.replaceChild(btn, originalBtn);
  btn.addEventListener('click', (ev)=>{
    ev.preventDefault(); ev.stopPropagation();
    // Clear and show overlay (panel-local)
    fx.innerHTML = '';
    fx.classList.add('show');
    const panelRect = panel.getBoundingClientRect();
    const center = { x: panelRect.width/2, y: panelRect.height/2 };
    const filled = Array.from(document.querySelectorAll('.fusion-slot.filled'));
    const ghosts = [];

    // Vignette background
    const vig = document.createElement('div'); vig.className='vignette'; fx.appendChild(vig);

    // Swirl Lottie (amped)
    if (window.lottie){
      const l = document.createElement('div'); l.className='lottie'; fx.appendChild(l);
      try {
        const anim = lottie.loadAnimation({ container: l, renderer:'svg', loop:true, autoplay:true,
          path:'https://assets6.lottiefiles.com/packages/lf20_iGv8Jm.json' });
        anim.setSpeed(1.4);
        setTimeout(()=> { try{ anim.destroy(); l.remove(); }catch(_){} }, 2200);
      } catch(_){ }
    }

    // Create glowing ghost boxes at slot positions
    filled.forEach(el=>{
      const r = el.getBoundingClientRect();
      const g = document.createElement('div'); g.className='ghost-slot';
      g.style.width = r.width+'px'; g.style.height = r.height+'px';
      g.style.left = (r.left - panelRect.left)+'px'; g.style.top = (r.top - panelRect.top)+'px';
      fx.appendChild(g); ghosts.push({g,r});
      // pulse the real slot too
      el.classList.add('gathering'); setTimeout(()=> el.classList.remove('gathering'), 2600);
    });
    if (window.Effects){ try{ Effects.sfx('tick'); }catch(_){} }

    // After ~2.6s, merge ghosts to center and flash + burst lottie
    setTimeout(()=>{
      if (ghosts.length === 0){
        // fallback center flash
        const flash = document.createElement('div'); flash.className='flash';
        flash.style.position='absolute'; flash.style.inset='0';
        flash.style.background='radial-gradient(circle at 50% 50%, rgba(255,255,255,0.95), transparent 60%)';
        flash.style.opacity='0'; fx.appendChild(flash);
        flash.animate([{opacity:0},{opacity:1, offset:0.5},{opacity:0}], {duration:300, easing:'ease-out'});
      }
      ghosts.forEach(({g,r})=>{
        const gx = r.left - panelRect.left + r.width/2;
        const gy = r.top - panelRect.top + r.height/2;
        const dx = center.x - gx; const dy = center.y - gy;
        g.style.transform = `translate(${dx}px, ${dy}px) scale(0.9)`;
        g.style.boxShadow = '0 0 40px rgba(0,227,214,0.6), 0 0 80px rgba(0,195,255,0.45)';
      });
      if (window.Effects){ try{ Effects.sfx('success'); }catch(_){} }
      // burst lottie
      if (window.lottie){
        const burst = document.createElement('div'); burst.className='lottie'; fx.appendChild(burst);
        try {
          const anim2 = lottie.loadAnimation({ container: burst, renderer:'svg', loop:false, autoplay:true,
            path:'https://assets10.lottiefiles.com/packages/lf20_qp1q7mct.json' });
          anim2.setSpeed(1.2);
          anim2.addEventListener('complete', ()=>{ try{ anim2.destroy(); burst.remove(); }catch(_){} });
        } catch(_){ }
      }
    }, 2600);

    // After full 3s, clear FX then actually create fusion
    setTimeout(()=> {
      fx.classList.remove('show'); fx.innerHTML='';
      try { createFusion(); } catch(e){ console.error('createFusion failed', e); }
    }, 3000);
  });
}

// === PROGRESSION (Save/Load/KP) ===
function saveProgress() {
    try {
        const data = {
            kp: kpBalance,
            seeds: seedBalance,
            unlocked: Array.from(unlockedExtraIds),
            upgrades,
            spendLog: window._spendLog || { unlock:0, upgrade:0, starter:0, engine:0 },
            inventory,
            workshopUpgrades
        };
        localStorage.setItem('playerProgress', JSON.stringify(data));
        console.log('💾 Progress saved');
    } catch (e) { console.error('Save failed', e); }
}

function loadProgress() {
    try {
        const raw = localStorage.getItem('playerProgress');
        if (!raw) { console.log('No progress found, using defaults'); return; }
        const data = JSON.parse(raw);
kpBalance = Number.isFinite(data.kp) ? data.kp : kpBalance;
        seedBalance = Number.isFinite(data.seeds) ? data.seeds : seedBalance;
        upgrades = data.upgrades || {};
        unlockedExtraIds = new Set(data.unlocked || []);
        window._spendLog = data.spendLog || { unlock:0, upgrade:0, starter:0, engine:0 };
        inventory = data.inventory || inventory;
        workshopUpgrades = data.workshopUpgrades || workshopUpgrades;
        // apply unlocks and upgrades
        baseSkills.forEach(s => {
            if (unlockedExtraIds.has(s.id)) s.unlocked = true;
            if (upgrades[s.id]) s.upgradeLevel = upgrades[s.id];
        });
        console.log('📂 Progress loaded');
    } catch (e) { console.error('Load failed', e); }
}

function resetProgress() {
    // NOTE: does not clear savedRecipes (persists across resets)
    if (!confirm('Reset all progress to defaults?')) return;
    // Compute refund: all KP spent on unlocks, upgrades, packs in this save
    const log = window._spendLog || { unlock:0, upgrade:0, starter:0, engine:0 };
const refund = (log.unlock||0) + (log.upgrade||0) + (log.starter||0) + (log.engine||0);
    const seedRefund = (log.seeds||0);
    // Clear fused skills
    fusedSkills = [];
    saveFusedSkills();
    // Re-init baseline (refund only what was spent this run, no extra base added)
kpBalance = kpBalance + refund;
    seedBalance = seedBalance + seedRefund;
    unlockedExtraIds = new Set();
    upgrades = {};
window._spendLog = { unlock:0, upgrade:0, starter:0, engine:0, seeds:0 };
    initializeOwnedSkills();
    rebuildSkillPool();
    updateStats();
    renderSkillList();
    saveProgress();
    if (window.Effects){ try{ Effects.haptic('success'); Effects.sfx('success'); }catch(_){} }
alert(`Progress reset. Refunded ${refund} KP and ${seedRefund} Seeds.`);
}

function adjustKP(delta) {
    kpBalance = Math.max(0, kpBalance + delta);
    updateStats();
    saveProgress();
}

function setupShop(){
    const btnShop = document.getElementById('open-shop');
    const btnReset = document.getElementById('reset-progress');
    const btnRecipes = document.getElementById('open-recipes');
    const shopModal = document.getElementById('shop-modal');
    const recipesModal = document.getElementById('recipes-modal');
    if (btnShop) btnShop.onclick = openShop;
    if (btnReset) btnReset.onclick = resetProgress;
    if (btnRecipes) btnRecipes.onclick = openRecipes;
    const buyStarter = document.getElementById('buy-starter-pack');
    const buyEngine = document.getElementById('buy-engine-pack');
    if (buyStarter) buyStarter.onclick = ()=> buyPack('starter');
    if (buyEngine) buyEngine.onclick = ()=> buyPack('engine');
}

function openRecipes(){
    const modal = document.getElementById('recipes-modal');
    const list = document.getElementById('recipes-list');
    list.innerHTML = '';

    const items = savedRecipes.map(r => {
        const div = document.createElement('div');
        div.className = 'skill-card';
        div.innerHTML = `
            <div class=\"skill-header\">
                <div class=\"skill-name\">${r.name}</div>
                <div class=\"skill-status\">✨</div>
            </div>
            <div class=\"skill-meta\"><span>${r.engine}</span><span class=\"skill-tier\">Synergy ${r.synergy || 0}%</span></div>
            <div style=\"font-size:0.85rem; color:#aaa;\">${r.path || ''} ➜ <strong>${r.name}</strong></div>
            <div style=\"display:flex; gap:0.5rem; margin-top:0.5rem;\">
                <button class=\"btn-danger\" data-remove=\"${r.id}\">Remove</button>
            </div>
        `;
        return div;
    });
    if (items.length === 0){
        list.innerHTML = '<div class=\"empty-state\"><p>📄</p><p>No saved fusions yet</p></div>';
    } else {
        items.forEach(el => list.appendChild(el));
    }

    // Remove buttons
    list.querySelectorAll('[data-remove]').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const id = e.currentTarget.getAttribute('data-remove');
            removeSavedRecipe(id);
            openRecipes(); // re-render
        });
    });

    const copyBtn = document.getElementById('copy-recipes');
    if (copyBtn) copyBtn.onclick = ()=>{
        const data = savedRecipes.map(r => ({ name:r.name, engine:r.engine, synergy:r.synergy, path: r.path, parents:r.parents, createdAt:r.createdAt }));
        navigator.clipboard?.writeText(JSON.stringify(data, null, 2));
        alert('Copied recipes to clipboard');
    };

    modal.classList.add('active');
    if (window.Effects) Effects.modalOpen(modal);
}

function getActiveEngineFilter(){
    const active = document.querySelector('#engine-filters .engine-tab.active');
    return active ? active.dataset.engine : 'all';
}

function buyPack(type){
    const cost = type==='starter' ? 100 : 150;
    if (kpBalance < cost) { alert('Not enough KP'); return; }
    // Determine pool
    let pool = baseSkills.filter(s => !s.unlocked && !s.fusionIngredients);
    if (type==='engine'){
        const eng = getActiveEngineFilter();
        const engine = (eng && eng!=='all' && eng!=='fused' && eng!=='owned') ? eng : (ENGINES[Math.floor(Math.random()*ENGINES.length)].id);
        pool = pool.filter(s => s.engine === engine);
    }
    if (pool.length === 0) { alert('No skills available to unlock in this pack.'); return; }
    const toUnlock = [];
    while (toUnlock.length < 3 && pool.length>0){
        const idx = Math.floor(Math.random()*pool.length);
        toUnlock.push(pool[idx]);
        pool.splice(idx,1);
    }
toUnlock.forEach(s => { s.unlocked = true; unlockedExtraIds.add(s.id); });
    spendKP(cost, type==='starter' ? 'starter' : 'engine');
    rebuildSkillPool();
    renderSkillList();
    saveProgress();
    if (window.Effects){ try{ Effects.showSuccessBadge(); }catch(_){} }
    alert(`Unlocked ${toUnlock.length} new skills!`);
}

// === OWNED SKILLS SYSTEM ===
function initializeOwnedSkills() {
    // Create a deep copy of SAMPLE_SKILLS and lock everything first
    baseSkills = SAMPLE_SKILLS.map(skill => ({
        ...skill,
        unlocked: false // Lock all by default
    }));
    
    // Select 5 skills per engine to be owned
    const ownedIds = [];
    
    ENGINES.forEach(engine => {
        const engineSkills = baseSkills.filter(s => s.engine === engine.id);
        // Take first 5 skills from each engine
        const owned = engineSkills.slice(0, 5);
        ownedIds.push(...owned.map(s => s.id));
    });
    
    ownedSkillIds = ownedIds;
    console.log(`🎁 Initialized ${ownedSkillIds.length} owned skills (5 per engine)`);
    
    // Now unlock only the owned skills
    baseSkills.forEach(skill => {
        if (ownedSkillIds.includes(skill.id)) {
            skill.unlocked = true;
        }
    });
    console.log(`🔓 Unlocked ${ownedSkillIds.length} owned skills`);
    console.log(`🔒 Locked ${baseSkills.length - ownedSkillIds.length} skills`);
}

// === ENGINE TABS ===
function renderEngineChips() {
    const container = document.getElementById('engine-filters');
    
    ENGINES.forEach(engine => {
        const tab = document.createElement('button');
        tab.className = 'engine-tab';
        tab.dataset.engine = engine.id;
        tab.innerHTML = `
            <span class="tab-icon" style="pointer-events:none">${engine.icon}</span>
            <span class="tab-label" style="pointer-events:none">${engine.name}</span>
            <span class="tab-count" style="pointer-events:none">0</span>
        `;
        container.appendChild(tab);
    });
    
    updateEngineCounts();
}

function bindEngineTabClicks() {
    // Bind direct listeners to all engine tabs (static + dynamic)
    document.querySelectorAll('#engine-filters .engine-tab').forEach(tab => {
        tab.addEventListener('click', () => {
            document.querySelectorAll('#engine-filters .engine-tab').forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            if (window.gsap){ gsap.fromTo(tab, {scale:0.98}, {scale:1, duration:0.12, ease:'power2.out'}); }
            if (window.Effects){ try{ Effects.haptic('light'); Effects.sfx('tick'); }catch(_){} }
            // Drive engine filter via command bar for a single source of truth
            const engine = tab.dataset.engine;
            const s = document.getElementById('search');
            let q = (s.value||'').replace(/\bengine:[^\s]+/gi,'').trim();
            if (engine && engine !== 'all') q = (q? q + ' ' : '') + `engine:${engine}`;
            s.value = q.trim();
            applyCommandSearch(s.value);
        });
    });
}

function updateEngineCounts() {
    // Count skills per engine
    const ownedSkills = allSkills.filter(s => s.unlocked && !s.fusionIngredients); // exclude fused
    const counts = { 
        all: allSkills.length,
        owned: ownedSkills.length,
        fused: fusedSkills.length
    };
    
    ENGINES.forEach(engine => {
        counts[engine.id] = allSkills.filter(s => s.engine === engine.id).length;
    });
    
    // Update tab counts
    document.querySelectorAll('.engine-tab').forEach(tab => {
        const engine = tab.dataset.engine;
        const countEl = tab.querySelector('.tab-count');
        if (countEl) {
            countEl.textContent = counts[engine] || 0;
        }
    });
}

// === EVENT LISTENERS ===
function setupEventListeners() {
    // Bottom navigation
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const view = e.currentTarget.dataset.view;
            switchView(view);
        });
    });

    // Engine filters (delegated event handling for tabs)
    document.getElementById('engine-filters').addEventListener('click', (e) => {
        console.log('Clicked:', e.target);
        const tab = e.target.closest('.engine-tab');
        console.log('Found tab:', tab);
        if (tab) {
            console.log('Tab engine:', tab.dataset.engine);
            document.querySelectorAll('.engine-tab').forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            filterSkills(tab.dataset.engine);
        }
    });
    
    // Search clear button
    const searchInput = document.getElementById('search');
    const clearBtn = document.getElementById('clear-search');
    
    searchInput.addEventListener('input', (e) => {
        clearBtn.style.display = e.target.value ? 'flex' : 'none';
    });
    
    clearBtn.addEventListener('click', () => {
        searchInput.value = '';
        clearBtn.style.display = 'none';
        applyCommandSearch('');
    });

    // Search collapse toggle
    const adv = document.querySelector('.search-advanced');
    const collapseBtn = document.getElementById('search-collapse');
    function setCollapsed(val){
        if (!adv || !collapseBtn) return;
        adv.classList.toggle('collapsed', !!val);
        collapseBtn.setAttribute('aria-expanded', (!val).toString());
        collapseBtn.title = val ? 'Expand' : 'Collapse';
        try { localStorage.setItem('ui.searchCollapsed', JSON.stringify(!!val)); } catch(_){}
    }
    // init from storage
    try {
        const saved = JSON.parse(localStorage.getItem('ui.searchCollapsed')||'false');
        setCollapsed(saved);
    } catch(_) { setCollapsed(false); }
    if (collapseBtn){
        collapseBtn.addEventListener('click', ()=>{
            const isCollapsed = adv.classList.contains('collapsed');
            setCollapsed(!isCollapsed);
        });
    }

    // Search - Smart Command Bar
    let searchTimer = null;
    const searchEl = document.getElementById('search');
    searchEl.addEventListener('input', (e) => {
        if (searchTimer) clearTimeout(searchTimer);
        const val = e.target.value;
        searchTimer = setTimeout(()=> applyCommandSearch(val), 120);
    });
    searchEl.addEventListener('keydown', (e)=>{
        if (e.key === 'Enter') {
            if (searchTimer) clearTimeout(searchTimer);
            applyCommandSearch(e.target.value);
        }
    });

    // Fusion slots
    const slots = document.querySelectorAll('.fusion-slot');
    console.log(`🧪 Binding fusion slot clicks: found ${slots.length}`);
    slots.forEach(slot => {
        slot.addEventListener('click', (e) => {
            currentSlot = e.currentTarget.dataset.slot;
            console.log(`🧪 Slot clicked -> ${currentSlot}`);
            if (window.Effects){ try{ Effects.haptic('soft'); Effects.sfx('tap'); }catch(_){} }
            openSkillSelector();
        });
    });

    // Catalyst toggle
    const catBtn = document.getElementById('toggle-catalyst');
    if (catBtn){
        catBtn.addEventListener('click', ()=>{
            if ((inventory.fusionCatalyst||0) <= 0){ alert('No catalysts available'); return; }
            useCatalyst = !useCatalyst;
            catBtn.classList.toggle('active', useCatalyst);
            catBtn.textContent = useCatalyst ? `Catalyst ON (x${inventory.fusionCatalyst||0})` : `Apply Catalyst (x${inventory.fusionCatalyst||0})`;
            if (fusionSlots.slot1 && fusionSlots.slot2) calculateFusion();
        });
        // initial count display
        catBtn.textContent = `Apply Catalyst (x${inventory.fusionCatalyst||0})`;
    }

    // Upgrades modal
    const btnUp = document.getElementById('open-upgrades');
    if (btnUp) btnUp.addEventListener('click', openUpgrades);

    // Fusion actions
    document.getElementById('clear-fusion').addEventListener('click', clearFusion);
    document.getElementById('create-fusion').addEventListener('click', createFusion);

    // Modal closes
    document.querySelectorAll('.modal-close').forEach(btn => {
        btn.addEventListener('click', () => {
            closeModal();
        });
    });

    // Click outside modal to close
    document.querySelectorAll('.modal').forEach(modal => {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) closeModal();
        });
    });
    
    // Clear all fused skills (if button exists)
    const clearAllBtn = document.getElementById('clear-all-btn');
    if (clearAllBtn) clearAllBtn.addEventListener('click', clearAllFusedSkills);
}

// === VIEW SWITCHING ===
function switchView(viewId) {
    document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
    document.getElementById(viewId).classList.add('active');
    
    document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.remove('active'));
    document.querySelector(`[data-view="${viewId}"]`).classList.add('active');
    
    currentView = viewId;

    // Update view-specific content
    if (viewId === 'created-view') {
        renderFusedSkills();
    } else if (viewId === 'library-view') {
        renderSkillList(); // Refresh library to show new fusions
    }
}

// === VIRTUAL GRID (Performance) ===
function initVirtualGrid() {
    const container = document.getElementById('skill-list');
    if (!container) return;

    const BATCH = 60;
    const MAX_NODES = 240; // cap DOM nodes to keep mobile smooth

    const state = { index: 0, data: [], observer: null, sentinel: null };

    function clear() {
        container.innerHTML = '';
        state.index = 0;
        if (state.observer && state.sentinel) {
            state.observer.unobserve(state.sentinel);
        }
        state.sentinel = document.createElement('div');
        state.sentinel.style.height = '1px';
        state.sentinel.style.width = '100%';
        container.appendChild(state.sentinel);
        state.observer = new IntersectionObserver((entries)=>{
            entries.forEach(entry => {
                if (entry.isIntersecting) loadMore();
            });
        }, { root: container.parentElement, rootMargin: '800px 0px', threshold: 0 });
        state.observer.observe(state.sentinel);
    }

    function loadMore() {
        const end = Math.min(state.index + BATCH, state.data.length);
        let inserted = 0;
        for (let i = state.index; i < end; i++) {
            const skill = state.data[i];
            const card = createSkillCard(skill);
            container.insertBefore(card, state.sentinel);
            inserted++;
        }
        state.index = end;
        // Fallback: if nothing inserted and we have data, render directly
        if (inserted === 0 && state.data.length > 0 && container.children.length <= 1) {
            container.innerHTML = '';
            state.data.forEach(s => container.appendChild(createSkillCard(s)));
            return;
        }
        // trim from top
        if (container.children.length > MAX_NODES) {
            const excess = container.children.length - MAX_NODES;
            let removed = 0;
            // keep last child as sentinel; remove from top
            while (removed < excess) {
                const first = container.firstElementChild;
                if (!first || first === state.sentinel) break;
                container.removeChild(first);
                removed++;
            }
        }
        if (state.index >= state.data.length) {
            // no more observing
            if (state.observer && state.sentinel) state.observer.unobserve(state.sentinel);
        }
    }

    virtualGrid = {
        setData(data) {
            state.data = data || [];
            clear();
            loadMore();
        }
    };
}

// === SKILL RENDERING ===
function renderSkillList() {
    try {
        if (virtualGrid) {
            virtualGrid.setData(filteredSkills);
            return;
        }
    } catch (e) { console.warn('Virtual grid render failed, falling back', e); }
    const container = document.getElementById('skill-list');
    container.innerHTML = '';
    if (!filteredSkills || filteredSkills.length === 0) {
        container.innerHTML = '<div class="empty-state"><p>📭</p><p>No skills to show</p></div>';
        return;
    }
    filteredSkills.forEach(skill => container.appendChild(createSkillCard(skill)));
}

function computedPower(skill){
    const base = Number(skill.powerScore || skill.power || 0);
    const lvl = Number(skill.upgradeLevel || 0);
    return Math.round(base * (1 + 0.1*lvl));
}

function getTierLabel(tier) {
    try {
        if (typeof TIER_NAMES === 'object' && TIER_NAMES !== null && TIER_NAMES[tier] !== undefined) {
            return TIER_NAMES[tier];
        }
    } catch (e) {}
    return tier === 0 ? '0' : tier;
}

function getEngineColor(engineId){
    const e = ENGINES.find(x=> x.id===engineId);
    return e?.color || '#666';
}
function resolveParentEngines(skill){
    const engines = [];
    if (Array.isArray(skill.parents) && skill.parents.length){
        for (const pid of skill.parents){
            const s = allSkills.find(x=> x.id===pid);
            if (s && s.engine) engines.push(s.engine);
            if (engines.length>=2) break;
        }
    }
    if (!engines.length) engines.push(skill.engine);
    if (engines.length===1) engines.push(skill.engine);
    return engines;
}
function drawGenerativeIcon(canvas, seedText){
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const w = canvas.width = 32, h = canvas.height = 32;
    // simple deterministic RNG
    let s = 0; for (let i=0;i<seedText.length;i++) s = (s*31 + seedText.charCodeAt(i)) >>> 0;
    const rnd = ()=> (s = (s*1664525 + 1013904223) >>> 0, (s>>>8)/0xFFFFFF);
    ctx.clearRect(0,0,w,h);
    // base shape
    ctx.fillStyle = `hsl(${Math.floor(rnd()*360)},70%,60%)`;
    const r = 8 + rnd()*6; ctx.beginPath(); ctx.arc(w/2, h/2, r, 0, Math.PI*2); ctx.fill();
    // overlay wedges
    for (let i=0;i<3;i++){
        const ang = rnd()*Math.PI*2; const rad = r*(0.6 + rnd()*0.6);
        ctx.fillStyle = `hsla(${Math.floor(rnd()*360)},80%,70%,0.7)`;
        ctx.beginPath(); ctx.moveTo(w/2,h/2);
        ctx.arc(w/2,h/2, rad, ang, ang+0.9, false); ctx.closePath(); ctx.fill();
    }
    // center dot
    ctx.fillStyle = 'rgba(255,255,255,0.9)'; ctx.beginPath(); ctx.arc(w/2,h/2, 2.2, 0, Math.PI*2); ctx.fill();
}
function createSkillCard(skill) {
    const engine = ENGINES.find(e => e.id === skill.engine);
    const div = document.createElement('div');
    const fusedCls = skill.fusionIngredients ? 'fused' : '';
    const critCls = skill.crit ? 'crit' : '';
    const unCls = skill.unstable ? 'unstable' : '';
    div.className = `skill-card ${skill.unlocked ? '' : 'locked'} ${fusedCls} ${critCls} ${unCls}`;
    
    // Check if this is a fused skill
    const ingredientsHtml = skill.fusionIngredients ? 
        `<div class=\"fusion-ingredients\">from: ${skill.fusionIngredients}</div>` : '';
    
    div.innerHTML = `
        <div class=\"skill-visual\">\r
            <div class=\"skill-icon-wrap\"><canvas class=\"skill-icon\"></canvas></div>
            <div style=\"display:flex; flex-direction:column; gap:2px;\">\r
                <div class=\"skill-header\">\r
                    <div class=\"skill-name\">${skill.name}</div>
                    <div class=\"skill-status\">${skill.unlocked ? '🔓' : '🔒'}</div>
                </div>
                ${ingredientsHtml}
                <div class=\"meta-chips\">\r
                    <span class=\"chip engine\">${engine?.icon || ''} ${engine?.name || skill.engine}</span>
                    <span class=\"chip tier\">Tier ${getTierLabel(skill.tier)}</span>
                    ${skill.category ? `<span class=\"chip category\">${skill.category}</span>` : ''}
                </div>
            </div>
        </div>
        <div class=\"skill-stats\">\r
            <span class=\"stat-badge power\">⚡ ${computedPower(skill)}</span>
            <span class=\"stat-badge cd\">⏱️ ${skill.cooldown}s</span>
            <span class=\"stat-badge cost\">💰 ${skill.cost?.kp || 0} KP</span>
        </div>
    `;
    
    // theme colors
    const [engA, engB] = resolveParentEngines(skill);
    const colA = getEngineColor(engA), colB = getEngineColor(engB);
    div.style.setProperty('--engine-a', colA);
    div.style.setProperty('--engine-b', colB);
    
    // icon draw
    const iconCanvas = div.querySelector('.skill-icon');
    drawGenerativeIcon(iconCanvas, skill.name + '|' + (skill.keywords||[]).join(','));
    
    // Aura overlay
    const auraLayer = document.createElement('div');
    auraLayer.className = 'aura-overlay';
    const auraLayer2 = document.createElement('div');
    auraLayer2.className = 'aura-overlay2';
    const pattern = document.createElement('div');
    pattern.className = 'aura-pattern';
    div.appendChild(auraLayer);
    div.appendChild(auraLayer2);
    div.appendChild(pattern);
    applyAura(div, skill);
    
    // Action row: unlock/upgrade buttons
    const actionRow = document.createElement('div');
    actionRow.style.cssText = 'display:flex; gap:0.5rem; margin-top:0.5rem; flex-wrap:wrap;';

    if (!skill.unlocked && !skill.fusionIngredients) {
        const price = (typeof ECONOMY?.UNLOCK_KP_COST === 'number') ? ECONOMY.UNLOCK_KP_COST : 50;
        const btn = document.createElement('button');
        btn.className = 'btn-primary';
        btn.textContent = `Unlock (${price} KP)`;
        btn.disabled = kpBalance < price;
        btn.onclick = (e)=>{ e.stopPropagation(); unlockSkill(skill); };
        actionRow.appendChild(btn);
    }

    if (skill.unlocked && !skill.fusionIngredients) {
        const level = Number(skill.upgradeLevel||0);
        if (level < 3){
            const cost = upgradeCost(skill);
            const btnU = document.createElement('button');
            btnU.textContent = `Upgrade (+10%) (${cost} KP)`;
            btnU.onclick = (e)=>{ e.stopPropagation(); upgradeSkill(skill); };
            btnU.className = 'btn-secondary';
            btnU.disabled = kpBalance < cost;
            actionRow.appendChild(btnU);
        }
    }

    if (actionRow.children.length>0) div.appendChild(actionRow);

    // spawn animation (lightweight)
    try {
        if (window.gsap){
            gsap.fromTo(div, {opacity:0, y:8, scale:0.98}, {opacity:1, y:0, scale:1, duration:0.28, ease:'power2.out'});
            if (fusedCls){
                gsap.fromTo(div, {filter:'brightness(1.2)'}, {filter:'brightness(1)', duration:0.6, ease:'sine.out'});
            }
        }
    } catch(_){ }

    div.addEventListener('click', () => {
        if (window.Effects){ try{ Effects.haptic('soft'); Effects.sfx('tap'); }catch(_){} }
        if (skill.unlocked) {
            openSkillDetail(skill);
        }
    });
    
    return div;
}

// === SKILL POOL MANAGEMENT ===
function rebuildSkillPool() {
    // Merge base skills + fused skills into one pool
    allSkills = [...baseSkills, ...fusedSkills];
    filteredSkills = [...allSkills];
    console.log(`🔄 Skill pool rebuilt: ${baseSkills.length} base + ${fusedSkills.length} fused = ${allSkills.length} total`);
}

// === FILTERING ===
function filterSkills(engine) {
    if (engine === 'all') {
        filteredSkills = [...allSkills];
    } else if (engine === 'owned') {
        // Show only owned (unlocked) skills
        filteredSkills = allSkills.filter(s => s.unlocked && !s.fusionIngredients);
    } else if (engine === 'fused') {
        // Show only fused skills
        filteredSkills = fusedSkills;
    } else {
        filteredSkills = allSkills.filter(s => s.engine === engine);
    }
    renderSkillList();
}

// Smart Command Bar parsing and application
function parseCommandQuery(input){
    const tokens = (input||'').trim().split(/\s+/).filter(Boolean);
    const filters = { engine:null, tier:null, type:null, sort:null, cooldown:null, power:null, costkp:null, keyword:null, name:null };
    const terms = [];
    const cmpRe = /^(<=|>=|=)?(\d+)$/;
    for (const t of tokens){
        const m = t.match(/^([a-zA-Z]+)(?::|<=|>=|=)?(.+)?$/);
        if (m && m[1]){
            const key = m[1].toLowerCase();
            const raw = (m[2]||'').toLowerCase();
            const valMatch = raw.match(cmpRe) || t.match(/^(?:cooldown|cd|power|p|costkp)(<=|>=|=)(\d+)$/i);
            const asVal = valMatch ? { op: (valMatch[1]||'='), num: parseInt(valMatch[2],10) } : null;
            if (key==='engine' || key==='e') filters.engine = raw || null;
            else if (key==='tier' || key==='t') filters.tier = raw || null;
            else if (key==='type') filters.type = raw || null; // base|owned|fused
            else if (key==='sort' || key==='s') filters.sort = raw || null; // name|power|tier|recent
            else if (key==='cooldown' || key==='cd') filters.cooldown = asVal;
            else if (key==='power' || key==='p') filters.power = asVal;
            else if (key==='costkp') filters.costkp = asVal;
            else if (key==='keyword' || key==='k') filters.keyword = raw || null;
            else if (key==='name' || key==='n') filters.name = raw || null;
            else terms.push(t);
        } else {
            terms.push(t);
        }
    }
    return { filters, text: terms.join(' ').toLowerCase() };
}
function buildQueryFromFilters(filters, text){
    const parts = [];
    if (filters.engine) parts.push(`engine:${filters.engine}`);
    if (filters.tier) parts.push(`tier:${filters.tier}`);
    if (filters.type) parts.push(`type:${filters.type}`);
    if (filters.sort) parts.push(`sort:${filters.sort}`);
    if (filters.cooldown) parts.push(`cooldown${filters.cooldown.op}${filters.cooldown.num}`);
    if (filters.power) parts.push(`power${filters.power.op}${filters.power.num}`);
    if (filters.costkp) parts.push(`costkp${filters.costkp.op}${filters.costkp.num}`);
    if (filters.keyword) parts.push(`keyword:${filters.keyword}`);
    if (filters.name) parts.push(`name:${filters.name}`);
    if (text) parts.push(text);
    return parts.join(' ');
}
function renderSearchTags(parsed){
    const wrap = document.getElementById('search-tags');
    if (!wrap) return;
    wrap.innerHTML = '';
    const mk = (key,label,value)=>{
        const d=document.createElement('span');
        d.className=`search-tag ${key}`;
        const icon = {
            engine:'🧠', tier:'🎯', type:'🧩', sort:'↕️', cooldown:'⏱️', power:'⚡', costkp:'💰', keyword:'🏷️', name:'🔤', text:'🔎'
        }[key] || '🔸';
        d.innerHTML=`<span class="k">${icon} ${label}</span> ${value} <span class="tag-close" data-key="${key}">×</span>`;
        return d;
    };
    const {engine,tier,type,sort,cooldown,power,costkp,keyword,name} = parsed.filters;
    if (engine) wrap.appendChild(mk('engine','engine', engine));
    if (tier) wrap.appendChild(mk('tier','tier', tier));
    if (type) wrap.appendChild(mk('type','type', type));
    if (sort) wrap.appendChild(mk('sort','sort', sort));
    if (cooldown) wrap.appendChild(mk('cooldown','cooldown', `${cooldown.op}${cooldown.num}`));
    if (power) wrap.appendChild(mk('power','power', `${power.op}${power.num}`));
    if (costkp) wrap.appendChild(mk('costkp','cost', `${costkp.op}${costkp.num}`));
    if (keyword) wrap.appendChild(mk('keyword','keyword', keyword));
    if (name) wrap.appendChild(mk('name','name', name));
    if (parsed.text) wrap.appendChild(mk('text','text', parsed.text));
    // tag removal handlers
    wrap.querySelectorAll('.tag-close').forEach(btn => {
        btn.addEventListener('click', (e)=>{
            const key = e.currentTarget.getAttribute('data-key');
            const f = parsed.filters;
            let text = parsed.text;
            if (key in f) f[key] = null;
            else if (key==='text') text = '';
            const s = document.getElementById('search');
            s.value = buildQueryFromFilters(f, text);
            applyCommandSearch(s.value);
        });
    });
}
function renderSearchSuggestions(parsed){
    const el = document.getElementById('search-suggestions');
    if (!el) return;
    el.innerHTML = '';
    const chips = [];
    const f = parsed.filters;
    if (!f.engine){ ENGINES.forEach(e=> chips.push({label:`${e.icon} ${e.name}`, token:`engine:${e.id}`})); }
    if (!f.type){ ['base','owned','fused'].forEach(t=> chips.push({label:`type:${t}`, token:`type:${t}`})); }
    if (!f.tier){ ['0-1','2-3','3'].forEach(t=> chips.push({label:`tier:${t}`, token:`tier:${t}`})); }
    if (!f.sort){ ['name','power','tier','recent'].forEach(s=> chips.push({label:`sort:${s}`, token:`sort:${s}`})); }
    if (!f.cooldown){ ['cd<=2','cd<=3'].forEach(c=> chips.push({label:c, token:c.replace('cd','cooldown')})); }
    if (!f.power){ ['power>=60','power>=80'].forEach(p=> chips.push({label:p, token:p})); }
    chips.slice(0,14).forEach(c=>{
        const d = document.createElement('span'); d.className='suggestion-chip'; d.textContent=c.label; d.onclick=()=>{
            const s = document.getElementById('search');
            let q = s.value||'';
            // remove conflicting keys
            const key = c.token.split(':')[0];
            q = q.replace(new RegExp(`\\b${key}:[^\\s]+`,'gi'),'').trim();
            s.value = (q? q+' ' : '') + c.token;
            applyCommandSearch(s.value);
        };
        el.appendChild(d);
    });
}
function renderSearchQuick(parsed, list){
    const el = document.getElementById('search-quick');
    if (!el) return;
    el.innerHTML='';
    list.slice(0,6).forEach(s=>{
        const d = document.createElement('span');
        d.className='quick-chip';
        const eng = ENGINES.find(e=> e.id===s.engine);
        d.innerHTML = `${eng?.icon||''} ${s.name} <span class="engine">• ${eng?.name||s.engine}</span>`;
        d.onclick = ()=> openSkillDetail(s);
        el.appendChild(d);
    });
}
function applyCommandSearch(input){
    const parsed = parseCommandQuery(input);
    renderSearchTags(parsed);
    let list = [...allSkills];
    const f = parsed.filters;
    // engine filter
    if (f.engine && f.engine!=='all') list = list.filter(s => (s.engine||'').toLowerCase() === f.engine);
    // type filter
    if (f.type){
        if (f.type==='owned') list = list.filter(s => s.unlocked && !s.fusionIngredients);
        else if (f.type==='fused') list = list.filter(s => !!s.fusionIngredients);
        else if (f.type==='base') list = list.filter(s => !s.fusionIngredients);
    }
    // tier filter (supports single value or range like 2-3)
    if (f.tier){
        const m = f.tier.match(/^(\d+)(?:-(\d+))?$/);
        if (m){
            const a = parseInt(m[1],10); const b = m[2]? parseInt(m[2],10) : a;
            list = list.filter(s => Number(s.tier||0) >= Math.min(a,b) && Number(s.tier||0) <= Math.max(a,b));
        }
    }
    // attribute filters
    const cmp = (val, cond)=>{
        if (!cond) return true;
        const n = Number(val||0);
        if (cond.op==='<=') return n <= cond.num;
        if (cond.op===">=") return n >= cond.num;
        return n === cond.num;
    };
    if (f.cooldown) list = list.filter(s => cmp(s.cooldown, f.cooldown));
    if (f.power) list = list.filter(s => cmp(computedPower(s), f.power));
    if (f.costkp) list = list.filter(s => cmp(s.cost?.kp||0, f.costkp));
    if (f.keyword) list = list.filter(s => Array.isArray(s.keywords) && s.keywords.some(k => (k||'').toLowerCase().includes(f.keyword)));
    if (f.name) list = list.filter(s => (s.name||'').toLowerCase().includes(f.name));

    // text search
    if (parsed.text){
        const q = parsed.text;
        list = list.filter(s => (s.name||'').toLowerCase().includes(q)
            || (s.description||'').toLowerCase().includes(q)
            || (Array.isArray(s.keywords) && s.keywords.some(k => (k||'').toLowerCase().includes(q))));
    }
    // sort
    const sortKey = (f.sort||'').toLowerCase();
    if (sortKey==='name') list.sort((a,b)=> (a.name||'').localeCompare(b.name||''));
    else if (sortKey==='power') list.sort((a,b)=> (computedPower(b) - computedPower(a)));
    else if (sortKey==='tier') list.sort((a,b)=> (Number(b.tier||0) - Number(a.tier||0)));
    else if (sortKey==='recent') list.sort((a,b)=> (Number(b.createdAt||0) - Number(a.createdAt||0)));
    
    filteredSkills = list;
    renderSkillList();
    // suggestions + quick results
    renderSearchSuggestions(parsed);
    renderSearchQuick(parsed, list);
}

// === SKILL DETAIL MODAL ===
function formatSkillDesc(desc){
    let s = String(desc||'');
    s = s.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    s = s.replace(/\[(.*?)\]/g, '<span class="sd-tag">$1</span>');
    return s;
}
function hashSeed(text){ let s=0; for(let i=0;i<text.length;i++) s=(s*31+text.charCodeAt(i))>>>0; return s>>>0; }
function seeded(s){ return ()=> (s=(s*1664525+1013904223)>>>0, (s>>>8)/0xFFFFFF); }
// palettes: array of [main, secondary, accent]
const AURA_COLORS = {
    structure: [ ['#7f8fa6','#718093','#b2bec3'], ['#95afc0','#535c68','#dfe6e9'] ],
    field:     [ ['#9c88ff','#8c7ae6','#dcd6ff'], ['#c56cf0','#845ef7','#e0c3fc'] ],
    heal:      [ ['#55efc4','#00b894','#a3f7bf'], ['#2ed573','#1abc9c','#b8ffdf'] ],
    strike:    [ ['#ff7675','#d63031','#ffd1d1'], ['#ff4d4d','#c23616','#ffb3b3'] ],
    fire:      [ ['#ff6b6b','#ff9f43','#ffd180'], ['#ff7f50','#ff6d00','#ffc371'] ],
    water:     [ ['#74b9ff','#0984e3','#a4d8ff'], ['#00a8ff','#0097e6','#b2e4ff'] ],
    storm:     [ ['#a29bfe','#6c5ce7','#d6ccff'], ['#7d5fff','#4834d4','#c8b6ff'] ],
    shadow:    [ ['#636e72','#2d3436','#95a5a6'], ['#2f3640','#353b48','#7f8fa6'] ],
    nature:    [ ['#6ab04c','#26de81','#c8f7c5'], ['#2ecc71','#20bf6b','#b8f2c2'] ],
    time:      [ ['#f5cd79','#f3a683','#ffeaa7'], ['#fdcb6e','#e17055','#ffe4a1'] ],
    metal:     [ ['#bdc3c7','#95a5a6','#ecf0f1'], ['#ced6e0','#a4b0be','#f1f2f6'] ],
    void:      [ ['#2f3640','#000000','#718093'], ['#1e272e','#0d1117','#6b778d'] ]
};
function detectAuras(skill){
    const kws = (skill.keywords||[]).map(k=>k.toLowerCase());
    const score = {structure:0, field:0, heal:0, strike:0, fire:0, water:0, storm:0, shadow:0, nature:0, time:0, metal:0, void:0};
    kws.forEach(k=>{
        if (k.includes('structure')) score.structure++;
        if (k.includes('field')) score.field++;
        if (k.includes('heal')) score.heal++;
        if (k.includes('strike')||k.includes('damage')||k.includes('attack')) score.strike++;
        if (k.includes('fire')||k.includes('burn')) score.fire++;
        if (k.includes('water')||k.includes('ice')||k.includes('frost')) score.water++;
        if (k.includes('storm')||k.includes('lightning')||k.includes('shock')) score.storm++;
        if (k.includes('shadow')||k.includes('dark')) score.shadow++;
        if (k.includes('nature')||k.includes('leaf')||k.includes('growth')) score.nature++;
        if (k.includes('time')||k.includes('clock')||k.includes('temporal')) score.time++;
        if (k.includes('metal')||k.includes('steel')||k.includes('iron')) score.metal++;
        if (k.includes('void')||k.includes('space')||k.includes('cosmic')) score.void++;
    });
    const arr = Object.entries(score).sort((a,b)=> b[1]-a[1]);
    const top = arr.filter(x=>x[1]>0).map(x=>x[0]).slice(0,2);
    if (!top.length) return ['structure','field'];
    if (top.length===1) top.push('shadow');
    return top;
}
function applyAura(el, skill){
    const [a1,a2] = detectAuras(skill);
    const seed = hashSeed((skill.name||'') + '|' + (skill.keywords||[]).join(','));
    const rng = seeded(seed);
    // pick palette variants
    const pal1 = AURA_COLORS[a1][Math.floor(rng()*AURA_COLORS[a1].length)] || ['#fff','#ddd','#bbb'];
    const pal2 = AURA_COLORS[a2][Math.floor(rng()*AURA_COLORS[a2].length)] || ['#fff','#ddd','#bbb'];
    el.style.setProperty('--aura1', pal1[0]);
    el.style.setProperty('--aura1b', pal1[1]);
    el.style.setProperty('--aura1c', pal1[2]);
    el.style.setProperty('--aura2', pal2[0]);
    el.style.setProperty('--aura2b', pal2[1]);
    el.style.setProperty('--aura2c', pal2[2]);
    // variations (slightly stronger defaults)
    const ang = Math.floor(rng()*60 - 30); // -30..30
    const seam = 1.5 + rng()*2.5; // 1.5..4px
    const intensity = 18 + Math.min(28, (Number(skill.tier||0)*5)) + (skill.crit?12:0) - (skill.unstable?2:0);
    el.style.setProperty('--aura-angle', ang+'deg');
    el.style.setProperty('--seam-w', seam+'px');
    el.style.setProperty('--aura-intensity', intensity+'%');
    el.style.setProperty('--aura-opacity', 0.82 + (rng()*0.18));
    el.style.setProperty('--bg-angle', (100 + Math.floor(rng()*90))+'deg');
    el.style.setProperty('--swirl-angle', Math.floor(rng()*360)+'deg');
    el.style.setProperty('--swirl-speed', (22 + Math.floor(rng()*18))+'s');
    // attach pattern class to the dedicated pattern layer
    const pat = el.querySelector('.aura-pattern');
    if (pat){
        pat.classList.remove('aura-pattern-field','aura-pattern-fire','aura-pattern-water','aura-pattern-storm','aura-pattern-shadow','aura-pattern-nature','aura-pattern-time','aura-pattern-void');
        const map = { field:'aura-pattern-field', fire:'aura-pattern-fire', water:'aura-pattern-water', storm:'aura-pattern-storm', shadow:'aura-pattern-shadow', nature:'aura-pattern-nature', time:'aura-pattern-time', void:'aura-pattern-void' };
        const cls = map[a1];
        if (cls) pat.classList.add(cls);
    }
}

function kwClass(k){
    const s = String(k||'').toLowerCase();
    if (s.includes('structure')) return 'kw-structure';
    if (s.includes('field')) return 'kw-field';
    if (s.includes('heal')) return 'kw-heal';
    if (s.includes('strike')||s.includes('damage')||s.includes('attack')) return 'kw-strike';
    if (s.includes('fire')||s.includes('burn')) return 'kw-fire';
    if (s.includes('water')||s.includes('ice')||s.includes('frost')) return 'kw-water';
    if (s.includes('storm')||s.includes('lightning')||s.includes('shock')) return 'kw-storm';
    if (s.includes('shadow')||s.includes('dark')) return 'kw-shadow';
    if (s.includes('nature')||s.includes('leaf')||s.includes('growth')) return 'kw-nature';
    if (s.includes('time')||s.includes('clock')||s.includes('temporal')) return 'kw-time';
    if (s.includes('metal')||s.includes('steel')||s.includes('iron')) return 'kw-metal';
    if (s.includes('void')||s.includes('space')||s.includes('cosmic')) return 'kw-void';
    return '';
}
function openSkillDetail(skill) {
    const engine = ENGINES.find(e => e.id === skill.engine);
    const modal = document.getElementById('detail-modal');
    const content = document.getElementById('detail-content');
    
    const [engA, engB] = resolveParentEngines(skill);
    const colA = getEngineColor(engA), colB = getEngineColor(engB);
    const critCls = skill.crit ? 'crit' : '';
    const unCls = skill.unstable ? 'unstable' : '';
    
    const descHtml = formatSkillDesc(skill.description);
    const effectsHtml = (skill.effects||[]).map(e => `<li>${e}</li>`).join('');
    const kwHtml = (skill.keywords||[]).map(k => {
        const c = kwClass(k);
        return `<span class=\"chip ${c}\">${k}</span>`;
    }).join('');
    
    content.innerHTML = `
        <div class="skill-detail ${critCls} ${unCls}" style="--engine-a:${colA}; --engine-b:${colB};">
            <div class="sd-header">
                <div class="sd-icon-wrap"><canvas class="sd-icon"></canvas></div>
                <div class="sd-titleblock">
                    <h2>${skill.name}</h2>
                    <div class="sd-badges">
                        <span class="chip engine">${engine?.icon || ''} ${engine?.name || skill.engine}</span>
                        <span class="chip tier">Tier ${getTierLabel(skill.tier)}</span>
                        ${skill.category ? `<span class="chip category">${skill.category}</span>` : ''}
                    </div>
                </div>
            </div>
            <div class="sd-stats">
                <div class="sd-stat">⚡ <strong>${skill.powerScore || skill.power || 'N/A'}</strong></div>
                <div class="sd-stat">🕐 <strong>${skill.cooldown}s</strong></div>
                <div class="sd-stat">💰 <strong>${skill.cost?.kp || 0} KP</strong></div>
            </div>
            <div class="sd-body">
                <div class="sd-desc">${descHtml}</div>
                <div class="sd-effects">
                    <strong>Effects</strong>
                    <ul>${effectsHtml}</ul>
                </div>
                <div>
                    <strong>Keywords</strong>
                    <div class="sd-keywords">${kwHtml}</div>
                </div>
            </div>
        </div>
    `;
    
    // Draw icon & apply aura
    const iconCanvas = content.querySelector('.sd-icon');
    drawGenerativeIcon(iconCanvas, skill.name + '|' + (skill.keywords||[]).join(','));
    applyAura(content.querySelector('.skill-detail'), skill);
    
    // Animate section
    try {
        if (window.gsap){
            gsap.fromTo(content.querySelector('.sd-header'), {y:8, opacity:0}, {y:0, opacity:1, duration:0.25, ease:'power2.out'});
            gsap.fromTo(content.querySelector('.sd-stats'), {y:10, opacity:0}, {y:0, opacity:1, delay:0.05, duration:0.25});
            gsap.fromTo(content.querySelector('.sd-body'), {y:12, opacity:0}, {y:0, opacity:1, delay:0.1, duration:0.3});
        }
    } catch(_){ }
    
    modal.classList.add('active');
    if (window.Effects) Effects.modalOpen(modal);
}

// === SKILL SELECTOR (for fusion) ===
function openSkillSelector() {
    const modal = document.getElementById('selector-modal');
    if (!modal) {
        console.error('Selector modal not found');
        return;
    }
    
    // Prefer owned base skills only (exclude fused)
    const ownedSkills = allSkills.filter(s => s.unlocked && !s.fusionIngredients);
    if (ownedSkills.length === 0) {
        alert('No owned skills available. Buy/unlock skills first.');
    }
    
    const engineContainer = document.getElementById('selector-engine-filters');
    const list = document.getElementById('selector-list');
    
    // Fallback: if enhanced UI elements missing, render simple list
    if (!engineContainer || !list) {
        console.warn('Enhanced selector UI not found, falling back to simple list');
        const fallbackList = document.getElementById('selector-list') || document.createElement('div');
        if (fallbackList) {
            fallbackList.innerHTML = '';
            ownedSkills.forEach(skill => {
                const card = createSkillCard(skill);
                card.addEventListener('click', () => {
                    selectSkillForFusion(skill);
                    closeModal();
                });
                fallbackList.appendChild(card);
            });
        }
        modal.classList.add('active');
        return;
    }
    
    // Enhanced UI path
    engineContainer.innerHTML = '';
    const ownedEngines = [...new Set(ownedSkills.map(s => s.engine))];

    const allTab = createSelectorTab('all', '🌐', 'All', ownedSkills.length);
    allTab.classList.add('active');
    engineContainer.appendChild(allTab);

    ENGINES.forEach(engine => {
        if (ownedEngines.includes(engine.id)) {
            const count = ownedSkills.filter(s => s.engine === engine.id).length;
            const tab = createSelectorTab(engine.id, engine.icon, engine.name, count);
            engineContainer.appendChild(tab);
        }
    });

    renderSelectorList('all');
    
    const searchInput = document.getElementById('selector-search');
    if (searchInput) {
        searchInput.value = '';
        searchInput.oninput = (e) => renderSelectorList('all', e.target.value);
    }
    
    modal.classList.add('active');
}

function createSelectorTab(engineId, icon, name, count) {
    const tab = document.createElement('button');
    tab.className = 'engine-tab';
    tab.dataset.engine = engineId;
    tab.innerHTML = `
        <span class="tab-icon">${icon}</span>
        <span class="tab-label">${name}</span>
        <span class="tab-count">${count}</span>
    `;
    tab.addEventListener('click', () => {
        document.querySelectorAll('#selector-engine-filters .engine-tab').forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        document.getElementById('selector-search').value = ''; // Reset search
        renderSelectorList(engineId);
    });
    return tab;
}

function renderSelectorList(engineFilter = 'all', searchQuery = '') {
    const list = document.getElementById('selector-list');
    list.innerHTML = '';
    
    let skillsToShow = allSkills.filter(s => s.unlocked);

    // Apply engine filter
    if (engineFilter !== 'all') {
        skillsToShow = skillsToShow.filter(s => s.engine === engineFilter);
    }

    // Apply search query
    if (searchQuery) {
        const q = searchQuery.toLowerCase();
        skillsToShow = skillsToShow.filter(s => s.name.toLowerCase().includes(q));
    }
    
    skillsToShow.forEach(skill => {
        const card = createSkillCard(skill);
        card.addEventListener('click', () => {
            selectSkillForFusion(skill);
            closeModal();
        });
        list.appendChild(card);
    });
}

function selectSkillForFusion(skill) {
    const slotKey = `slot${currentSlot}`;
    // Prevent selecting duplicate across any other slot
    for (const [k,v] of Object.entries(fusionSlots)){
        if (k !== slotKey && v && v.id === skill.id){
            alert('⚠️ Cannot fuse a skill with itself!\nPlease select a different skill.');
            return;
        }
    }
    fusionSlots[slotKey] = skill;
    
    // Update slot display
    const slotElement = document.getElementById(`slot-${currentSlot}`);
    const placeholder = slotElement.querySelector('.slot-placeholder');
    const skillDisplay = slotElement.querySelector('.slot-skill');
    
    // mark as filled for visual emphasis
    slotElement.classList.add('filled');
    slotElement.classList.remove('charging');
    
    const engine = ENGINES.find(e => e.id === skill.engine);
    placeholder.style.display = 'none';
    skillDisplay.style.display = 'block';
    skillDisplay.innerHTML = `
        <div style=\"text-align: center;\">\r
            <div style=\"font-weight: 600; margin-bottom: 0.5rem;\">${skill.name}</div>
            <div style=\"font-size: 0.85rem; color: #999;\">${engine?.icon || ''} ${engine?.name || skill.engine} • Tier ${skill.tier}</div>
            <div style=\"margin-top: 0.5rem;\">⚡ ${skill.powerScore || skill.power || 0}</div>
        </div>
    `;
    ensureSlotClearButton(currentSlot);
    
    // Check if at least two slots filled
    const hasTwo = (fusionSlots.slot1 && fusionSlots.slot2) || (fusionSlots.slot1 && fusionSlots.slot3) || (fusionSlots.slot2 && fusionSlots.slot3);
    if (hasTwo) {
        calculateFusion();
    } else {
        // ensure CTA state updates when only one slot filled
        const btn = document.getElementById('create-fusion');
        if (btn){ btn.disabled = true; btn.classList.remove('ready'); }
        document.getElementById('fusion-synergy').style.display = 'none';
        document.getElementById('fusion-preview').style.display = 'none';
    }
}

// === FUSION LOGIC ===
function computeFusionSeedCost(s1, s2, s3, synergy){
    const tiers = [Number(s1?.tier||0), Number(s2?.tier||0)];
    if (s3) tiers.push(Number(s3.tier||0));
    const avgTier = tiers.reduce((a,b)=>a+b,0) / tiers.length;
    let cost = 1;
    if (avgTier >= 2) cost += 1;
    if (avgTier >= 4) cost += 1;
    if (s1 && s2 && s1.engine !== s2.engine && synergy >= 70) cost += 1;
    if (s3) cost += 1; // extra slot surcharge
    // workshop seed saver
    cost = Math.max(1, cost - (workshopUpgrades.seedSaver||0));
    return cost;
}

function calculateFusion() {
    const s1 = fusionSlots.slot1;
    const s2 = fusionSlots.slot2;
    const s3 = fusionSlots.slot3;
    const haveTwo = (s1 && s2) || (s1 && s3) || (s2 && s3);
    if (!haveTwo) return;

    // Base synergy
    const a = s1 || s2; // pick any present
    const b = s2 && s1 ? s2 : s3; // second present
    let synergy = 50;
    if (a.engine === b.engine) synergy += 20; else synergy += 5;
    if (Math.abs((a.tier||0) - (b.tier||0)) <= 1) synergy += 15;
    const sharedAB = a.keywords.filter(k => b.keywords.includes(k));
    synergy += sharedAB.length * 5;

    if (s3 && s1 && s2){
        // third slot influence
        const sameEngine = [s1.engine,s2.engine,s3.engine].every(e=>e===s1.engine);
        synergy += sameEngine ? 10 : 5;
        const commonWith3 = new Set(s1.keywords.filter(k=>s3.keywords.includes(k)).concat(s2.keywords.filter(k=>s3.keywords.includes(k))));
        synergy += commonWith3.size * 3;
    }

    // Upgrades: synergy floor
    const floor = 50 + (workshopUpgrades.synergyFloor||0)*5;
    synergy = Math.max(synergy, floor);
    synergy = Math.min(synergy, 100);

    // Crit & Unstable chances
    let critChance = Math.min(60, Math.round(synergy/2) + (workshopUpgrades.critBoost||0)*5 + (useCatalyst?15:0));
    let unstableChance = Math.max(0, 40 - Math.round(synergy/2));

    // Show synergy & chances
    const synEl = document.getElementById('fusion-synergy');
    if (synEl) synEl.style.display = 'block';
    const ss = document.getElementById('synergy-score'); if (ss) ss.textContent = synergy;
    const cc = document.getElementById('crit-chance'); if (cc) cc.textContent = critChance;
    const uc = document.getElementById('unstable-chance'); if (uc) uc.textContent = unstableChance;

    // Compute seed cost
    const seedCost = computeFusionSeedCost(s1||a, b, s3 && s1 && s2 ? s3 : null, synergy);

    // Generate preview
    const fusedSkill = generateFusedSkill(s1||a, b, s3 && s1 && s2 ? s3 : null, synergy, { critChance, unstableChance });
    displayFusionPreview(fusedSkill, seedCost);

    // Enable create button
    const createBtn = document.getElementById('create-fusion');
    createBtn.disabled = seedBalance < seedCost;
    createBtn.textContent = seedBalance < seedCost ? `Need ${seedCost} Seeds` : 'Create Fusion';
    createBtn.classList.toggle('ready', !createBtn.disabled);

    // Update synergy bar fill
    const barFill = document.getElementById('synergy-bar-fill');
    if (barFill) barFill.style.width = `${synergy}%`;
}

function safeCreateFusionName(skill1, skill2, synergy) {
    try {
        if (typeof generateFusionName === 'function') {
            return generateFusionName(skill1, skill2, synergy);
        }
    } catch (e) {
        console.warn('Fusion naming engine not available, using fallback');
    }
    // Fallback name
    return `${skill1.name.split(' ')[0]}-${skill2.name.split(' ')[0]} Fusion`;
}

function generateFusedSkill(skill1, skill2, skill3, synergy, odds) {
    const power1 = skill1?.powerScore || skill1?.power || 0;
    const power2 = skill2?.powerScore || skill2?.power || 0;
    const power3 = skill3 ? (skill3.powerScore || skill3.power || 0) : 0;
    const basePower = power1 + power2 + power3;

    // roll crit/unstable preview only (for createFusion we re-roll to avoid desync)
    const crit = false; // preview neutral
    const unstable = false;

    // Generate smart name using fusion naming engine (safe)
    const fusionName = safeCreateFusionName(skill1, skill2, synergy);
    const names = [skill1?.name, skill2?.name, skill3?.name].filter(Boolean);
    const ingredientsText = names.join(' + ');

    const tier = Math.max(skill1?.tier||0, skill2?.tier||0, skill3?.tier||0);
    let power = Math.round(basePower * (synergy / 100));
    let cooldown = Math.max(skill1?.cooldown||0, skill2?.cooldown||0, skill3?.cooldown||0);

    return {
        id: Date.now(),
        name: fusionName,
        fusionIngredients: ingredientsText,
        engine: skill1?.engine || skill2?.engine,
        category: skill3 ? 'Fused+' : 'Fused',
        tier,
        powerScore: power,
        power,
        cost: { kp: (skill1?.cost?.kp||0) + (skill2?.cost?.kp||0) + (skill3?.cost?.kp||0) },
        cooldown,
        unlocked: true,
        description: `Fusion of ${ingredientsText}`,
        effects: [...(skill1?.effects||[]), ...(skill2?.effects||[]), ...((skill3?.effects)||[])],
        keywords: [...new Set([...(skill1?.keywords||[]), ...(skill2?.keywords||[]), ...((skill3?.keywords)||[])])],
        parents: [skill1?.id, skill2?.id, skill3?.id].filter(Boolean),
        synergy,
        crit,
        unstable
    };
}

function addSavedRecipe(fused){
    // simple dedupe by name+parents
    const key = `${fused.name}|${(fused.parents||[]).join('+')}`;
    const exists = savedRecipes.some(r => `${r.name}|${(r.parents||[]).join('+')}` === key);
    if (!exists){
        const entry = {
            id: `${Date.now()}_${Math.random().toString(36).slice(2)}`,
            name: fused.name,
            engine: fused.engine,
            synergy: fused.synergy,
            parents: fused.parents || [],
            path: fused.fusionIngredients || '',
            createdAt: Date.now()
        };
        savedRecipes.push(entry);
        saveSavedRecipes();
    }
}

function saveSavedRecipes(){
    try { localStorage.setItem('savedRecipes', JSON.stringify(savedRecipes)); } catch (e) {}
}

function loadSavedRecipes(){
    try { savedRecipes = JSON.parse(localStorage.getItem('savedRecipes')||'[]'); } catch (e) { savedRecipes = []; }
}

function removeSavedRecipe(id){
    const idx = savedRecipes.findIndex(r => r.id === id);
    if (idx >= 0){ savedRecipes.splice(idx,1); saveSavedRecipes(); }
}

function displayFusionPreview(skill, seedCost) {
    const engine = ENGINES.find(e => e.id === skill.engine);
    const preview = document.getElementById('preview-card');
    const seeds = typeof seedCost === 'number' ? seedCost : 1;
    preview.innerHTML = `
        <div style="text-align: center; margin-bottom: 1rem;">
            <h3 style="margin-bottom: 0.5rem;">${skill.name}</h3>
            <div style="font-size: 0.9rem; color: #666;">
                ${engine?.icon || ''} ${engine?.name || skill.engine} • Tier ${skill.tier}
            </div>
        </div>
        <div style="display: flex; gap: 1rem; justify-content: center; margin-bottom: 1rem;">
            <span>⚡ ${skill.powerScore || skill.power || 0}</span>
            <span>🕐 ${skill.cooldown}s</span>
            <span>🌱 ${seeds} Seeds</span>
        </div>
        <div style="font-size: 0.9rem;">
            <strong>Combined Effects:</strong>
            <ul style="margin-top: 0.5rem; padding-left: 1.5rem;">
                ${skill.effects.slice(0, 3).map(e => `<li>${e}</li>`).join('')}
            </ul>
        </div>
    `;
    
    document.getElementById('fusion-preview').style.display = 'block';
}
function createFusion() {
    try {
        const s1 = fusionSlots.slot1;
        const s2 = fusionSlots.slot2;
        const s3 = fusionSlots.slot3;
        const haveTwo = (s1 && s2) || (s1 && s3) || (s2 && s3);
        if (!haveTwo) { alert('Select at least two skills first.'); return; }
        const synergyEl = document.getElementById('synergy-score');
        const synergy = synergyEl ? parseInt(synergyEl.textContent) : 50;
        const seedCost = computeFusionSeedCost(s1||s2, (s1&&s2)?s2:s3, (s1&&s2&&s3)?s3:null, synergy);
        if (seedBalance < seedCost) { alert(`Not enough Seeds (need ${seedCost}).`); return; }

        // Roll crit/unstable
        const critChance = parseInt((document.getElementById('crit-chance')?.textContent)||'0');
        const unstableChance = parseInt((document.getElementById('unstable-chance')?.textContent)||'0');
        const roll = Math.random()*100;
        const crit = roll < critChance;
        const roll2 = Math.random()*100;
        const unstable = !crit && (roll2 < unstableChance);

        // Build fused
        let fusedSkill = generateFusedSkill(s1||s2, (s1&&s2)?s2:s3, (s1&&s2&&s3)?s3:null, synergy, {critChance, unstableChance});
        // Apply crit/unstable modifiers
        if (crit){
            fusedSkill.powerScore = Math.round(fusedSkill.powerScore * 1.25);
            fusedSkill.power = fusedSkill.powerScore;
            fusedSkill.crit = true;
        } else if (unstable){
            fusedSkill.powerScore = Math.round(fusedSkill.powerScore * 1.15);
            fusedSkill.power = fusedSkill.powerScore;
            fusedSkill.cooldown = Math.round(fusedSkill.cooldown * 1.5) || (fusedSkill.cooldown+1);
            fusedSkill.unstable = true;
        }

        const preCount = fusedSkills.length;
        fusedSkills.push(fusedSkill);
        spendSeeds(seedCost);

        // Consume catalyst if used
        if (useCatalyst && (inventory.fusionCatalyst||0) > 0){
            inventory.fusionCatalyst -= 1;
            useCatalyst = false;
            const catBtn = document.getElementById('toggle-catalyst');
            if (catBtn){ catBtn.classList.remove('active'); catBtn.textContent = `Apply Catalyst (x${inventory.fusionCatalyst||0})`; }
        }

        // timestamp for sorting by recent
        fusedSkill.createdAt = Date.now();
        // Save recipe permanently
        addSavedRecipe(fusedSkill);
        console.log(`✨ Fused skill created: ${fusedSkill.name} (total ${preCount} -> ${fusedSkills.length})`);
        
        // Save to localStorage
        saveFusedSkills();
        saveProgress();
        
        // Rebuild skill pool to include new fusion
        rebuildSkillPool();
        
        // Refresh ALL views
        try { renderSkillList(); } catch (e) { console.error('Render library failed:', e); }
        try { renderFusedSkills(); } catch (e) { console.error('Render fused list failed:', e); }
        
        // Clear fusion
        clearFusion();
        
        // Update stats
        updateStats();
        
        if (window.Effects){ try{ Effects.haptic('success'); Effects.sfx('success'); }catch(_){} }
        // Visual effects
        if (window.Effects) { 
            try { Effects.fusionBurstCenter(); } catch (e) { console.warn('Fx failed', e); }
            try { Effects.showSuccessBadge(); } catch (e) { console.warn('Badge failed', e); }
        }

        // Show success (simple alert for now)
        alert(`✨ Fusion Created!\n\n${fusedSkill.name}\n\nPower: ${fusedSkill.powerScore}\nSynergy: ${synergy}%${crit?'\nCritical Fusion!':''}${unstable?'\nUnstable Variant':''}`);
        // Ensure slots are reset even after alert
        clearFusion();
    } catch (e) {
        console.error('Create fusion failed:', e);
        alert('Failed to create fusion. Check console for details.');
    }
}

function ensureSlotClearButton(slotNum){
    try{
        const slotEl = document.getElementById(`slot-${slotNum}`);
        if (!slotEl) return;
        let btn = slotEl.querySelector('.slot-clear');
        if (!btn){
            btn = document.createElement('button');
            btn.className = 'slot-clear';
            btn.title = 'Remove';
            btn.textContent = '×';
            btn.addEventListener('click', (ev)=>{ ev.stopPropagation(); clearSlot(slotNum); });
            slotEl.appendChild(btn);
        } else {
            btn.style.display = 'grid';
        }
    }catch(_){ }
}

function clearSlot(slotNum){
    try{
        const key = `slot${slotNum}`;
        fusionSlots[key] = null;
        const el = document.getElementById(`slot-${slotNum}`);
        if (el){
            el.classList.remove('filled','charging');
            const ph = el.querySelector('.slot-placeholder');
            const sk = el.querySelector('.slot-skill');
            const clr = el.querySelector('.slot-clear');
            if (ph) ph.style.display = 'block';
            if (sk) sk.style.display = 'none';
            if (clr) clr.remove();
        }
        const hasTwo = (fusionSlots.slot1 && fusionSlots.slot2) || (fusionSlots.slot1 && fusionSlots.slot3) || (fusionSlots.slot2 && fusionSlots.slot3);
        if (hasTwo){
            calculateFusion();
        } else {
            const btn = document.getElementById('create-fusion');
            if (btn){ btn.disabled = true; btn.classList.remove('ready'); }
            document.getElementById('fusion-synergy').style.display = 'none';
            document.getElementById('fusion-preview').style.display = 'none';
        }
    }catch(e){ console.warn('clearSlot failed', e); }
}

function clearFusion() {
    fusionSlots = { slot1: null, slot2: null, slot3: null };
    
    document.querySelectorAll('.fusion-slot').forEach(slot => {
        slot.classList.remove('filled','charging');
        slot.querySelector('.slot-placeholder').style.display = 'block';
        slot.querySelector('.slot-skill').style.display = 'none';
    });
    
    document.getElementById('fusion-synergy').style.display = 'none';
    document.getElementById('fusion-preview').style.display = 'none';
    document.getElementById('create-fusion').disabled = true;
}

// === FUSED SKILLS DISPLAY ===
function renderFusedSkills() {
    const container = document.getElementById('fused-list');
    const clearBtn = document.getElementById('clear-all-btn');

    // If the fused list UI isn't present (2-panel layout), safely skip rendering
    if (!container) {
        return;
    }

    if (fusedSkills.length === 0) {
        container.innerHTML = `
            <div class="empty-state">
                <p>🌟</p>
                <p>No fused skills yet</p>
                <p style="font-size: 0.9rem;">Create your first fusion!</p>
            </div>
        `;
        if (clearBtn) clearBtn.style.display = 'none';
        return;
    }
    
    if (clearBtn) clearBtn.style.display = 'block';
    container.innerHTML = '';
    
    fusedSkills.forEach((skill, index) => {
        const card = createSkillCard(skill);
        
        // Add synergy and delete button
        const extraInfo = document.createElement('div');
        extraInfo.style.cssText = 'display: flex; justify-content: space-between; align-items: center; margin-top: 0.5rem;';
        extraInfo.innerHTML = `
            <span style="font-size: 0.85rem; color: #666;">Synergy: ${skill.synergy}%</span>
            <button class=\"btn-delete\" data-index=\"${index}\">🧩 Dismantle</button>
        `;
        
        card.appendChild(extraInfo);
        
        // Click to view details (but not on delete button)
        card.addEventListener('click', (e) => {
            if (!e.target.classList.contains('btn-delete')) {
                openSkillDetail(skill);
            }
        });
        
        container.appendChild(card);
    });
    
    // Add delete button listeners
    document.querySelectorAll('.btn-delete').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const index = parseInt(e.target.dataset.index);
            deleteFusedSkill(index);
        });
    });
}

function deleteFusedSkill(index) {
    const skill = fusedSkills[index];
    if (confirm(`🧩 Dismantle "${skill.name}" for partial refund?`)) {
        fusedSkills.splice(index, 1);
        // partial refund
        const seedRefund = 1;
        const kpRefund = 25;
        seedBalance += seedRefund;
        kpBalance += kpRefund;
        saveFusedSkills();
        rebuildSkillPool();
        renderFusedSkills();
        updateStats();
        alert(`Recovered +${seedRefund} Seeds and +${kpRefund} KP`);
        if (currentView === 'library-view') { renderSkillList(); }
    }
}

// === STATS ===
function updateStats() {
    const unlockedCount = allSkills.filter(s => s.unlocked && !s.fusionIngredients).length;
const kpEl = document.getElementById('kp-balance'); if (kpEl) kpEl.textContent = kpBalance;
    const seedEl = document.getElementById('seed-balance'); if (seedEl) seedEl.textContent = seedBalance;
    document.getElementById('unlocked-count').textContent = unlockedCount;
    document.getElementById('fused-count').textContent = fusedSkills.length;
    
    // Update library panel stats
    const libUnlocked = document.getElementById('unlocked-count-lib');
    const libFused = document.getElementById('fused-count-lib');
    if (libUnlocked) libUnlocked.textContent = unlockedCount;
    if (libFused) libFused.textContent = fusedSkills.length;
    
    // Update engine counts
    updateEngineCounts();
    
    // Persist progress snapshot
    saveProgress();
}

function unlockSkill(skill){
    const price = (typeof ECONOMY?.UNLOCK_KP_COST === 'number') ? ECONOMY.UNLOCK_KP_COST : 50;
    if (kpBalance < price) { alert('Not enough KP'); return; }
    skill.unlocked = true;
    unlockedExtraIds.add(skill.id);
    spendKP(price, 'unlock');
    rebuildSkillPool();
    renderSkillList();
    saveProgress();
    if (window.Effects){ try{ Effects.showSuccessBadge(); }catch(_){} }
}

function upgradeCost(skill){
    const lvl = Number(skill.upgradeLevel||0);
    const tier = Number(skill.tier||0);
    return 25 + tier*25 + lvl*25;
}

function upgradeSkill(skill){
    const cost = upgradeCost(skill);
    if (kpBalance < cost) { alert('Not enough KP'); return; }
    skill.upgradeLevel = (skill.upgradeLevel||0) + 1;
    upgrades[skill.id] = skill.upgradeLevel;
    spendKP(cost, 'upgrade');
    rebuildSkillPool();
    renderSkillList();
    saveProgress();
}

function spendSeeds(amount){
    seedBalance = Math.max(0, seedBalance - amount);
    if (!window._spendLog) window._spendLog = { unlock:0, upgrade:0, starter:0, engine:0, seeds:0 };
    window._spendLog.seeds += amount;
    updateStats();
}

function spendKP(amount, tag){
    kpBalance = Math.max(0, kpBalance - amount);
    // Track spend for refunds
if (!window._spendLog) window._spendLog = { unlock:0, upgrade:0, starter:0, engine:0, seeds:0 };
    if (tag==='unlock') window._spendLog.unlock += amount;
    else if (tag==='upgrade') window._spendLog.upgrade += amount;
    else if (tag==='starter') window._spendLog.starter += amount;
    else if (tag==='engine') window._spendLog.engine += amount;
    updateStats();
}

// === LOCAL STORAGE ===
function saveFusedSkills() {
    try {
        localStorage.setItem('fusedSkills', JSON.stringify(fusedSkills));
        console.log(`💾 Saved ${fusedSkills.length} fused skills`);
    } catch (error) {
        console.error('Failed to save fused skills:', error);
    }
}

function loadFusedSkills() {
    try {
        const saved = localStorage.getItem('fusedSkills');
        if (saved) {
            fusedSkills = JSON.parse(saved);
            console.log(`📂 Loaded ${fusedSkills.length} fused skills`);
        }
    } catch (error) {
        console.error('Failed to load fused skills:', error);
        fusedSkills = [];
    }
    // Rebuild pool after loading
    rebuildSkillPool();
}

function clearAllFusedSkills() {
    // NOTE: does not clear savedRecipes
    if (confirm('⚠️ Delete ALL fused skills?\nThis cannot be undone!')) {
        fusedSkills = [];
        saveFusedSkills(); // keep savedRecipes intact
        rebuildSkillPool(); // Rebuild main pool
        renderFusedSkills(); // Update fused panel
        renderSkillList();   // Update library
        updateStats();
        
        alert('🗑️ All fused skills deleted');
    }
}

// === WORKSHOP UPGRADES ===
function openUpgrades(){
    const modal = document.getElementById('upgrades-modal');
    renderUpgrades();
    modal.classList.add('active');
    if (window.Effects){ try{ Effects.modalOpen(modal); }catch(_){} }
}
function renderUpgrades(){
    const list = document.getElementById('upgrades-list');
    if (!list) return;
    list.innerHTML = '';
    const items = [
        { key:'seedSaver', name:'Seed Saver', desc:'-1 Seed cost (min 1)', baseCost:200, level: workshopUpgrades.seedSaver||0, max:3 },
        { key:'synergyFloor', name:'Synergy Floor', desc:'+5 min synergy', baseCost:200, level: workshopUpgrades.synergyFloor||0, max:4 },
        { key:'critBoost', name:'Critical Boost', desc:'+5% crit chance', baseCost:250, level: workshopUpgrades.critBoost||0, max:4 }
    ];
    const frag = document.createDocumentFragment();
    items.forEach(it=>{
        const cost = it.baseCost + it.level*100;
        const card = document.createElement('div');
        card.className = 'shop-item';
        card.innerHTML = `
            <div class="shop-item-header"><div class="shop-item-title">${it.name} (Lv. ${it.level}/${it.max})</div></div>
            <div class="shop-item-desc">${it.desc}</div>
            <div class="shop-item-prices"><span class="price-badge">💰 ${cost} KP</span></div>
            <div class="shop-item-actions"><button class="btn-primary">${it.level>=it.max?'Maxed':'Buy'}</button></div>
        `;
        const btn = card.querySelector('button');
        btn.disabled = it.level>=it.max || kpBalance < cost;
        btn.onclick = ()=> buyUpgrade(it.key, cost, it.max);
        frag.appendChild(card);
    });
    list.appendChild(frag);
}
function buyUpgrade(key, cost, max){
    if ((workshopUpgrades[key]||0) >= max) return;
    if (kpBalance < cost) { alert('Not enough KP'); return; }
    spendKP(cost, 'upgrade');
    workshopUpgrades[key] = (workshopUpgrades[key]||0) + 1;
    saveProgress();
    renderUpgrades();
}

// === MODAL CONTROL ===

function closeModal() {
    document.querySelectorAll('.modal').forEach(m => {
        if (window.Effects) {
            Effects.modalClose(m);
        } else {
            m.classList.remove('active');
        }
    });
}
