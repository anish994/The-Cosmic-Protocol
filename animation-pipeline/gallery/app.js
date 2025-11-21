/* Build a fast, filterable gallery using the prebuilt window.ANIMATIONS */
(function(){
  const data = (window.ANIMATIONS || []);

  const els = {
    grid: document.getElementById('grid'),
    cat: document.getElementById('filter-category'),
    group: document.getElementById('filter-group'),
    search: document.getElementById('filter-search'),
    hoverPlay: document.getElementById('opt-hoverplay'),
    count: document.getElementById('count'),
  };

  // Build group options (character groups)
  const groups = Array.from(new Set(data.filter(d => d.category === 'characters' && d.group).map(d => d.group))).sort();
  for (const g of groups) {
    const opt = document.createElement('option');
    opt.value = g; opt.textContent = g; els.group.appendChild(opt);
  }

  // State
  const state = { cat: 'all', group: 'all', q: '' };

  els.cat.addEventListener('change', () => {
    state.cat = els.cat.value;
    els.group.disabled = state.cat !== 'characters';
    render();
  });
  els.group.addEventListener('change', () => { state.group = els.group.value; render(); });
  els.search.addEventListener('input', () => { state.q = els.search.value.toLowerCase(); render(); });
  els.hoverPlay.addEventListener('change', () => { render(); });

  // Grid rendering with lazy video loading
  const io = new IntersectionObserver((entries) => {
    for (const e of entries) {
      const v = e.target.querySelector('video');
      if (!v) continue;
      if (e.isIntersecting) {
        if (!v.src && v.dataset.src) v.src = v.dataset.src;
        if (els.hoverPlay.checked === false) { v.play().catch(()=>{}); }
      } else {
        v.pause();
      }
    }
  }, { root: null, rootMargin: '200px', threshold: 0.01 });

  function card(item){
    const div = document.createElement('div');
    div.className = 'card';
    const thumb = document.createElement('div'); thumb.className = 'thumb';
    const vid = document.createElement('video');
    vid.muted = true; vid.loop = true; vid.playsInline = true; vid.preload = 'metadata';
    vid.dataset.src = item.src;

    if (els.hoverPlay.checked) {
      div.addEventListener('mouseenter', () => { if (vid.src || vid.dataset.src) { if (!vid.src) vid.src = vid.dataset.src; vid.play().catch(()=>{}); } });
      div.addEventListener('mouseleave', () => vid.pause());
    }

    thumb.appendChild(vid); div.appendChild(thumb);

    const meta = document.createElement('div'); meta.className = 'meta';
    const name = document.createElement('div'); name.className = 'name'; name.textContent = item.name;
    const sub = document.createElement('div'); sub.className = 'sub';
    const badges = [];
    if (item.category) badges.push(tag(item.category));
    if (item.group) badges.push(tag(item.group));
    if (item.animation) badges.push(tag(item.animation));
    if (item.fps && item.frames) badges.push(tag(`${item.fps}fps · ${item.frames}f`));
    for (const b of badges) sub.appendChild(b);
    meta.appendChild(name); meta.appendChild(sub);
    div.appendChild(meta);

    io.observe(div);
    return div;
  }

  function tag(txt){ const s = document.createElement('span'); s.className = 'badge'; s.textContent = txt; return s; }

  function matches(item){
    if (state.cat !== 'all' && item.category !== state.cat) return false;
    if (state.cat === 'characters' && state.group !== 'all' && item.group !== state.group) return false;
    if (state.q) {
      const hay = `${item.name} ${item.group||''} ${item.variant||''} ${item.animation||''}`.toLowerCase();
      if (!hay.includes(state.q)) return false;
    }
    return true;
  }

  function render(){
    els.grid.innerHTML = '';
    const items = data.filter(matches);
    els.count.textContent = `${items.length} / ${data.length}`;
    const frag = document.createDocumentFragment();
    for (const it of items) frag.appendChild(card(it));
    els.grid.appendChild(frag);
  }

  // Initial
  render();
})();
