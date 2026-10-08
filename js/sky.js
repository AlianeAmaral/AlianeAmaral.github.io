(() => {
  const cv = $("sky"), ctx = cv.getContext("2d");
  let W, H, estrelas = [], cadente = null, proximaCadente = performance.now() + 6000;
  const corEstrela = () => getComputedStyle(document.documentElement).getPropertyValue("--star").trim();
  function redimensionar(){
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    W = innerWidth; H = innerHeight;
    cv.width = W * dpr; cv.height = H * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    const n = Math.round(W * H / 4200);
    estrelas = Array.from({length:n}, () => ({
      x:Math.random()*W, y:Math.random()*H,
      r:Math.random() < .92 ? Math.random()*1.1 + .2 : Math.random()*1.4 + 1.1,
      fase:Math.random()*Math.PI*2, vel:.15 + Math.random()*.45
    }));
  }
  function desenhar(t){
    const rgb = corEstrela(), claro = document.documentElement.dataset.theme === "light";
    ctx.clearRect(0, 0, W, H);
    for (const s of estrelas){
      const a = (claro ? .35 : .5) + Math.sin(t/1000*s.vel + s.fase) * (claro ? .25 : .45);
      ctx.beginPath(); ctx.arc(s.x, s.y, s.r, 0, Math.PI*2);
      ctx.fillStyle = `rgba(${rgb},${Math.max(0,a)})`; ctx.fill();
      if (s.r > 1.2 && a > .7){
        ctx.strokeStyle = `rgba(${rgb},${(a-.7)*1.5})`; ctx.lineWidth = .6;
        ctx.beginPath(); ctx.moveTo(s.x - s.r*4, s.y); ctx.lineTo(s.x + s.r*4, s.y);
        ctx.moveTo(s.x, s.y - s.r*4); ctx.lineTo(s.x, s.y + s.r*4); ctx.stroke();
      }
    }
    if (!claro && !reduz){
      if (!cadente && t > proximaCadente) cadente = { x:Math.random()*W*.7 + W*.2, y:Math.random()*H*.35, vida:0 };
      if (cadente){
        cadente.vida += 16;
        const p = cadente.vida / 900, x = cadente.x - p*260, y = cadente.y + p*130;
        const g = ctx.createLinearGradient(x, y, x + 90, y - 45);
        g.addColorStop(0, `rgba(${rgb},${.8*(1-p)})`); g.addColorStop(1, `rgba(${rgb},0)`);
        ctx.strokeStyle = g; ctx.lineWidth = 1.3;
        ctx.beginPath(); ctx.moveTo(x, y); ctx.lineTo(x + 90, y - 45); ctx.stroke();
        if (p >= 1){ cadente = null; proximaCadente = t + 9000 + Math.random()*12000; }
      }
    }
    if (!reduz) requestAnimationFrame(desenhar);
  }
  redimensionar();
  addEventListener("resize", redimensionar);
  requestAnimationFrame(desenhar);
})();
