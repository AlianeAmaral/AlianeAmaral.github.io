(() => {
  if (!reduz){
    addEventListener("click", e => {
      for (let i = 0; i < 6; i++){
        const s = document.createElement("span");
        s.className = "spark";
        const ang = Math.random()*Math.PI*2, d = 16 + Math.random()*24;
        s.style.left = e.clientX - 2 + "px"; s.style.top = e.clientY - 2 + "px";
        s.style.setProperty("--dx", Math.cos(ang)*d + "px");
        s.style.setProperty("--dy", Math.sin(ang)*d + "px");
        document.body.appendChild(s);
        setTimeout(() => s.remove(), 800);
      }
    });
  }

  const io = new IntersectionObserver(es => es.forEach(e => {
    if (e.isIntersecting){ e.target.classList.add("in"); io.unobserve(e.target); }
  }), { threshold:.1 });
  document.querySelectorAll(".reveal").forEach(el => io.observe(el));
})();
