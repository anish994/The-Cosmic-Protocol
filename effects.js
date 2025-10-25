// effects.js - optional visual enhancements using PixiJS + GSAP + Lottie
(function(){
  const Effects = {
    pixi: null,
    starfield: null,
    // --- SFX & Haptics ---
    ctx: null,
    sfx(type='tap'){
      try{
        if (!this.ctx) this.ctx = new (window.AudioContext||window.webkitAudioContext)();
        const ctx = this.ctx;
        const o = ctx.createOscillator();
        const g = ctx.createGain();
        o.connect(g).connect(ctx.destination);
        let f = 420; let t = 0.06;
        if (type==='success'){ f=660; t=0.12; }
        if (type==='tick'){ f=540; t=0.04; }
        if (type==='tap'){ f=360; t=0.03; }
        o.frequency.value = f; g.gain.value = 0.0001; o.start();
        const now = ctx.currentTime;
        g.gain.exponentialRampToValueAtTime(0.15, now+0.005);
        g.gain.exponentialRampToValueAtTime(0.0001, now+t);
        o.stop(now+t+0.01);
      }catch(e){}
    },
    haptic(kind='light'){
      try{
        if (!('vibrate' in navigator)) return;
        const map = { light: 10, soft: 18, success: [18,8,18] };
        navigator.vibrate(map[kind]||10);
      }catch(e){}
    },
    init() {
      // Init Pixi background (safe)
      if (window.PIXI) {
        try {
          const app = new PIXI.Application({
            resizeTo: window,
            backgroundAlpha: 0,
            antialias: true,
            powerPreference: 'high-performance'
          });
          this.pixi = app;
          // Style canvas behind content but above video overlay
Object.assign(app.view.style, {
            position: 'fixed',
            top: '0', left: '0', width: '100vw', height: '100vh',
            zIndex: '3', pointerEvents: 'none'
          });
          document.body.appendChild(app.view);

          // ensure zIndex sorting within stage
          app.stage.sortableChildren = true;

          // Starfield
          this.initStarfield();
          window.addEventListener('resize', () => this.resetStarfield());
        } catch (e) { console.warn('Pixi init failed', e); }
      }
    },
    initStarfield() {
      if (!this.pixi) return;
      const app = this.pixi;
      if (this.starfield) { app.stage.removeChild(this.starfield.container); this.starfield = null; }

      const g = new PIXI.Graphics();
      g.beginFill(0xffffff).drawCircle(0,0,1.2).endFill();
      const tex = app.renderer.generateTexture(g);

      const container = new PIXI.ParticleContainer(500, { scale: true, alpha: true });
      const stars = [];
      const { innerWidth:w, innerHeight:h } = window;
      for (let i=0;i<180;i++) {
        const s = new PIXI.Sprite(tex);
        s.x = Math.random()*w; s.y = Math.random()*h;
        s.alpha = 0.25 + Math.random()*0.55;
        s.scale.set(0.5 + Math.random()*1.2);
        s.speed = 0.15 + Math.random()*0.6;
        container.addChild(s); stars.push(s);
      }
      app.stage.addChild(container);

      const ticker = (delta)=>{
        const { innerWidth:W, innerHeight:H } = window;
        for (const s of stars) { s.y += s.speed*delta; if (s.y>H) { s.y= -2; s.x = Math.random()*W; } }
      };
      app.ticker.add(ticker);
      this.starfield = { container, stars, ticker };
    },
    resetStarfield(){
      if (!this.pixi || !this.starfield) return;
      // Just reposition next tick; Pixi resizes automatically via resizeTo
    },
    modalOpen(modal){
      if (!window.gsap || !modal) return;
      const content = modal.querySelector('.modal-content');
      if (!content) return;
      gsap.killTweensOf(content);
      gsap.fromTo(content, { y: 16, opacity: 0, scale: 0.98 }, { y:0, opacity:1, scale:1, duration:0.25, ease:'power2.out' });
    },
    modalClose(modal){
      if (!modal) return modal.classList.remove('active');
      const content = modal.querySelector('.modal-content');
      if (!window.gsap || !content) { modal.classList.remove('active'); return; }
      gsap.killTweensOf(content);
      gsap.to(content, { y: 10, opacity:0, scale:0.98, duration:0.18, ease:'power1.in', onComplete:()=>{
        modal.classList.remove('active');
        // reset styles so next open anim is clean
        content.style.transform = '';
        content.style.opacity = '';
      }});
    },
    fusionBurstCenter(){
      // Confetti-like particles using Pixi (safe)
      if (!this.pixi) return;
      const app = this.pixi;
      const g = new PIXI.Graphics(); g.beginFill(0xffffff).drawCircle(0,0,2).endFill();
      const tex = app.renderer.generateTexture(g);
const container = new PIXI.Container();
      container.zIndex = 100;
      const { innerWidth:w, innerHeight:h } = window;
      const cx = w/2, cy = h/2;
      const particles = [];
      for (let i=0;i<80;i++){
const p = new PIXI.Sprite(tex);
        p.blendMode = PIXI.BLEND_MODES.ADD;
        p.tint = (Math.random()*0xFFFFFF)|0;
        p.x = cx; p.y = cy; p.alpha = 1; p.scale.set(0.8+Math.random()*0.8);
        p.vx = (Math.random()-0.5)*6; p.vy = (Math.random()-0.5)*6 - 2;
        p.va = 0.02 + Math.random()*0.03;
        particles.push(p); container.addChild(p);
      }
      app.stage.addChild(container);
      let life = 60;
      const step = ()=>{
        life--; for (const p of particles){ p.x+=p.vx; p.y+=p.vy; p.alpha-=p.va; }
        if (life<=0){ app.ticker.remove(step); app.stage.removeChild(container); }
      };
      app.ticker.add(step);
      if (window.gsap){ gsap.fromTo('.fusion-container', {x:-2}, {x:0, duration:0.12, yoyo:true, repeat:2, ease:'power1.inOut'}); }
    }
  };

  // Lottie badge (optional)
  Effects.showSuccessBadge = function(){
    try{
      let host = document.getElementById('fusion-success-badge');
      if (!host){
        host = document.createElement('div');
        host.id = 'fusion-success-badge';
        Object.assign(host.style, {
          position:'fixed', right:'16px', top:'16px', width:'120px', height:'120px',
          pointerEvents:'none', zIndex:'9999', display:'none'
        });
        document.body.appendChild(host);
      }
      host.style.display = 'block';
      if (window.lottie){
        const anim = lottie.loadAnimation({ container: host, renderer:'svg', loop:false, autoplay:true,
          path:'https://assets10.lottiefiles.com/packages/lf20_qp1q7mct.json' // success/confetti
        });
        anim.addEventListener('complete', ()=>{ setTimeout(()=>{ host.innerHTML=''; host.style.display='none'; }, 300); });
      } else if (window.gsap){
        host.innerHTML = '<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:64px;">✨</div>';
        gsap.fromTo(host, {scale:0.6, opacity:0}, {scale:1, opacity:1, duration:0.25, ease:'back.out(1.8)'});
        gsap.to(host, {opacity:0, duration:0.25, delay:0.9, onComplete:()=>{ host.innerHTML=''; host.style.display='none'; }});
      }
    }catch(e){ console.warn('Lottie badge failed', e); }
  };

  window.Effects = Effects;
})();
