// === STATE ===
let currentView = 'library-view';
let baseSkills = []; // Will be initialized with proper lock state
let fusedSkills = []; // Created fusions
let allSkills = []; // Combined pool (base + fused)
let filteredSkills = []; // Current filtered view
let virtualGrid = null; // Virtualized grid controller for skill list
let ownedSkillIds = []; // IDs of owned skills (5 per engine)
let fusionSlots = { slot1: null, slot2: null };
let currentSlot = null; // For skill selector
let kpBalance = 500; // Player currency
let unlockedExtraIds = new Set(); // Unlocked beyond initial owned
let upgrades = {}; // { skillId: level }
let savedRecipes = []; // persistent across resets
let seedBalance = 10; // Fusion seeds currency

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
});

// === PROGRESSION (Save/Load/KP) ===
function saveProgress() {
    try {
        const data = {
            kp: kpBalance,
            seeds: seedBalance,
            unlocked: Array.from(unlockedExtraIds),
            upgrades,
            spendLog: window._spendLog || { unlock:0, upgrade:0, starter:0, engine:0 }
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
    if (btnShop) btnShop.onclick = ()=>{ shopModal.classList.add('active'); if (window.Effects) Effects.modalOpen(shopModal); };
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
            filterSkills(tab.dataset.engine);
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
        searchSkills('');
    });

    // Search
    // Debounced search for mobile smoothness
    let searchTimer = null;
    document.getElementById('search').addEventListener('input', (e) => {
        if (searchTimer) clearTimeout(searchTimer);
        const val = e.target.value;
        searchTimer = setTimeout(()=> searchSkills(val), 120);
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
        for (let i = state.index; i < end; i++) {
            const skill = state.data[i];
            const card = createSkillCard(skill);
            container.insertBefore(card, state.sentinel);
        }
        state.index = end;
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
    if (virtualGrid) {
        virtualGrid.setData(filteredSkills);
        return;
    }
    const container = document.getElementById('skill-list');
    container.innerHTML = '';
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

function createSkillCard(skill) {
    const engine = ENGINES.find(e => e.id === skill.engine);
    const div = document.createElement('div');
    div.className = `skill-card ${skill.unlocked ? '' : 'locked'}`;
    
    // Check if this is a fused skill
    const ingredientsHtml = skill.fusionIngredients ? 
        `<div class=\"fusion-ingredients\">from: ${skill.fusionIngredients}</div>` : '';
    
    div.innerHTML = `
        <div class=\"skill-header\">
            <div class="skill-name">${skill.name}</div>
            <div class="skill-status">${skill.unlocked ? '🔓' : '🔒'}</div>
        </div>
        ${ingredientsHtml}
        <div class="skill-meta">
            <span>${engine?.icon || ''} ${engine?.name || skill.engine}</span>
            <span class=\"skill-tier\">Tier ${getTierLabel(skill.tier)}</span>
        </div>
        <div class="skill-stats">
            <span>⚡ ${computedPower(skill)}</span>
            <span>🕐 ${skill.cooldown}s</span>
            <span>🌱 ${seedCost} Seeds</span>
            <span>💰 ${skill.cost?.kp || 0} KP</span>
        </div>
    `;
    
    // Action row: unlock/upgrade buttons
    const actionRow = document.createElement('div');
    actionRow.style.cssText = 'display:flex; gap:0.5rem; margin-top:0.5rem; flex-wrap:wrap;';

    if (!skill.unlocked && !skill.fusionIngredients) {
        const cost = skill.cost?.kp || 1;
        const btn = document.createElement('button');
        btn.className = 'btn-primary';
        btn.textContent = `Unlock (${cost} KP)`;
        btn.disabled = kpBalance < cost;
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

function searchSkills(query) {
    const q = query.toLowerCase();
    filteredSkills = allSkills.filter(s => 
        s.name.toLowerCase().includes(q) ||
        s.description.toLowerCase().includes(q) ||
        s.keywords.some(k => k.includes(q))
    );
    renderSkillList();
}

// === SKILL DETAIL MODAL ===
function openSkillDetail(skill) {
    const engine = ENGINES.find(e => e.id === skill.engine);
    const modal = document.getElementById('detail-modal');
    const content = document.getElementById('detail-content');
    
    content.innerHTML = `
        <h2>${skill.name}</h2>
        <div class="skill-meta" style="margin: 1rem 0;">
            <span>${engine?.icon || ''} ${engine?.name || skill.engine}</span>
            <span class=\"skill-tier\">Tier ${getTierLabel(skill.tier)}</span>
            ${skill.category ? `<span class="skill-tier">${skill.category}</span>` : ''}
        </div>
        <div class="skill-stats" style="margin: 1rem 0;">
            <span>⚡ Power: ${skill.powerScore || skill.power || 'N/A'}</span>
            <span>🕐 Cooldown: ${skill.cooldown}s</span>
            <span>💰 Cost: ${skill.cost?.kp || 0} KP</span>
        </div>
        <p style="margin: 1rem 0; line-height: 1.6;">${skill.description}</p>
        <div style="margin: 1rem 0;">
            <strong>Effects:</strong>
            <ul style="margin-top: 0.5rem; padding-left: 1.5rem;">
                ${skill.effects.map(e => `<li>${e}</li>`).join('')}
            </ul>
        </div>
        <div style="margin: 1rem 0;">
            <strong>Keywords:</strong>
            <div style="display: flex; gap: 0.5rem; flex-wrap: wrap; margin-top: 0.5rem;">
                ${skill.keywords.map(k => `<span class="skill-tier">${k}</span>`).join('')}
            </div>
        </div>
    `;
    
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
    const otherSlotKey = currentSlot === '1' ? 'slot2' : 'slot1';
    
    // Prevent selecting the same skill twice
    if (fusionSlots[otherSlotKey] && fusionSlots[otherSlotKey].id === skill.id) {
        alert('⚠️ Cannot fuse a skill with itself!\nPlease select a different skill.');
        return;
    }
    
    fusionSlots[slotKey] = skill;
    
    // Update slot display
    const slotElement = document.getElementById(`slot-${currentSlot}`);
    const placeholder = slotElement.querySelector('.slot-placeholder');
    const skillDisplay = slotElement.querySelector('.slot-skill');
    
    const engine = ENGINES.find(e => e.id === skill.engine);
    placeholder.style.display = 'none';
    skillDisplay.style.display = 'block';
    skillDisplay.innerHTML = `
        <div style="text-align: center;">
            <div style="font-weight: 600; margin-bottom: 0.5rem;">${skill.name}</div>
            <div style="font-size: 0.85rem; color: #666;">${engine?.icon || ''} ${engine?.name || skill.engine} • Tier ${skill.tier}</div>
            <div style="margin-top: 0.5rem;">⚡ ${skill.powerScore || skill.power || 0}</div>
        </div>
    `;
    
    // Check if both slots filled
    if (fusionSlots.slot1 && fusionSlots.slot2) {
        calculateFusion();
    }
}

// === FUSION LOGIC ===
function computeFusionSeedCost(s1, s2, synergy){
    const avgTier = (Number(s1.tier||0) + Number(s2.tier||0)) / 2;
    let cost = 1;
    if (avgTier >= 2) cost += 1;
    if (avgTier >= 4) cost += 1;
    if (s1.engine !== s2.engine && synergy >= 70) cost += 1;
    return cost;
}

function calculateFusion() {
    const skill1 = fusionSlots.slot1;
    const skill2 = fusionSlots.slot2;
    
    // Simple synergy calculation
    let synergy = 50;
    if (skill1.engine === skill2.engine) synergy += 20;
    if (Math.abs(skill1.tier - skill2.tier) <= 1) synergy += 15;
    
    // Shared keywords
    const sharedKeywords = skill1.keywords.filter(k => skill2.keywords.includes(k));
    synergy += sharedKeywords.length * 5;
    
    synergy = Math.min(synergy, 100);
    
    // Show synergy
    document.getElementById('fusion-synergy').style.display = 'block';
    document.getElementById('synergy-score').textContent = synergy;
    
    // Compute seed cost
    const seedCost = computeFusionSeedCost(skill1, skill2, synergy);

    // Generate preview
    const fusedSkill = generateFusedSkill(skill1, skill2, synergy);
    displayFusionPreview(fusedSkill);
    
    // Enable create button
    const createBtn = document.getElementById('create-fusion');
    createBtn.disabled = seedBalance < seedCost;
    createBtn.textContent = seedBalance < seedCost ? `Need ${seedCost} Seeds` : 'Create Fusion';
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

function generateFusedSkill(skill1, skill2, synergy) {
    const power1 = skill1.powerScore || skill1.power || 0;
    const power2 = skill2.powerScore || skill2.power || 0;
    
    // Generate smart name using fusion naming engine (safe)
    const fusionName = safeCreateFusionName(skill1, skill2, synergy);
    const ingredientsText = `${skill1.name} + ${skill2.name}`;
    
    return {
        id: Date.now(),
        name: fusionName,
        fusionIngredients: ingredientsText, // Store ingredients
        engine: skill1.engine, // Use primary skill engine
        category: 'Fused',
        tier: Math.max(skill1.tier, skill2.tier),
        powerScore: Math.round((power1 + power2) * (synergy / 100)),
        power: Math.round((power1 + power2) * (synergy / 100)),
        cost: { kp: (skill1.cost?.kp || 0) + (skill2.cost?.kp || 0) },
        cooldown: Math.max(skill1.cooldown, skill2.cooldown),
        unlocked: true,
        description: `Fusion of ${skill1.name} and ${skill2.name}`,
        effects: [...skill1.effects, ...skill2.effects],
        keywords: [...new Set([...skill1.keywords, ...skill2.keywords])],
        parents: [skill1.id, skill2.id],
        synergy: synergy
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

function displayFusionPreview(skill) {
    const engine = ENGINES.find(e => e.id === skill.engine);
    const preview = document.getElementById('preview-card');
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
        const skill1 = fusionSlots.slot1;
        const skill2 = fusionSlots.slot2;
        if (!skill1 || !skill2) {
            alert('Select two skills first.');
            return;
        }
        const synergyEl = document.getElementById('synergy-score');
const synergy = synergyEl ? parseInt(synergyEl.textContent) : 50;
        const seedCost = computeFusionSeedCost(skill1, skill2, synergy);
        if (seedBalance < seedCost) { alert(`Not enough Seeds (need ${seedCost}).`); return; }
        
        const preCount = fusedSkills.length;
const fusedSkill = generateFusedSkill(skill1, skill2, synergy);
fusedSkills.push(fusedSkill);
        spendSeeds(seedCost);
        // Save recipe permanently
        addSavedRecipe(fusedSkill);
        console.log(`✨ Fused skill created: ${fusedSkill.name} (total ${preCount} -> ${fusedSkills.length})`);
        
        // Save to localStorage
        saveFusedSkills();
        
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
        alert(`✨ Fusion Created!\n\n${fusedSkill.name}\n\nPower: ${fusedSkill.powerScore}\nSynergy: ${synergy}%\nCost: ${fusedSkill.cost.kp} KP`);
        // Ensure slots are reset even after alert
        clearFusion();
    } catch (e) {
        console.error('Create fusion failed:', e);
        alert('Failed to create fusion. Check console for details.');
    }
}

function clearFusion() {
    fusionSlots = { slot1: null, slot2: null };
    
    document.querySelectorAll('.fusion-slot').forEach(slot => {
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
            <button class="btn-delete" data-index="${index}">🗑️ Delete</button>
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
    if (confirm(`🗑️ Delete "${skill.name}"?`)) {
        fusedSkills.splice(index, 1);
        saveFusedSkills();
        rebuildSkillPool(); // Rebuild main pool
        renderFusedSkills();
        updateStats();
        
        // Refresh library if user switches back
        if (currentView === 'library-view') {
            renderSkillList();
        }
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
    const cost = skill.cost?.kp || 1;
    if (kpBalance < cost) { alert('Not enough KP'); return; }
    skill.unlocked = true;
    unlockedExtraIds.add(skill.id);
    spendKP(cost, 'unlock');
    rebuildSkillPool();
    renderSkillList();
    saveProgress();
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
