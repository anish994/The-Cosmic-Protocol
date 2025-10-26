/* KeywordTooltip.js - simple DOM enhancer for [Keyword] tooltips (Wave 5) */
(function(global){
  function loadTooltips(url){
    return fetch(url).then(r=>r.json()).then(j=>j.tooltips||{});
  }
  function enhance(container, tooltips){
    if (!container) return;
    const walk = document.createTreeWalker(container, NodeFilter.SHOW_TEXT, null);
    const nodes=[]; let n; while(n=walk.nextNode()) nodes.push(n);
    nodes.forEach(textNode=>{
      const t=textNode.nodeValue;
      if(!t || t.indexOf('[')===-1) return;
      const frag=document.createDocumentFragment();
      const regex=/\[(.*?)\]/g; let last=0, m;
      while((m=regex.exec(t))){
        const pre=t.slice(last, m.index); if(pre) frag.appendChild(document.createTextNode(pre));
        const key=m[1];
        const span=document.createElement('span');
        span.className='kw';
        span.textContent='['+key+']';
        span.title=tooltips[key]||key;
        frag.appendChild(span);
        last=regex.lastIndex;
      }
      const rest=t.slice(last); if(rest) frag.appendChild(document.createTextNode(rest));
      textNode.parentNode.replaceChild(frag, textNode);
    });
  }
  async function init(containerSelector, tooltipsUrl){
    try{
      const container = typeof containerSelector==='string' ? document.querySelector(containerSelector) : containerSelector;
      const tips = await loadTooltips(tooltipsUrl||'/ui/keywords_tooltips.json');
      enhance(container || document.body, tips);
    }catch(e){ console.warn('KeywordTooltip init failed', e); }
  }
  global.KeywordTooltip = { init, enhance };
})(window);
