/* Modo Claro e Escuro */
(() => {
  const SOL = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>';
  const LUA = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"><path d="M20 14.5A8 8 0 1 1 9.5 4a6.5 6.5 0 0 0 10.5 10.5z"/></svg>';
  function aplicarTema(t){
    document.documentElement.dataset.theme = t;
    const btn = $("themeBtn");
    btn.innerHTML = t === "dark" ? `${SOL}<span>Modo Claro</span>` : `${LUA}<span>Modo Escuro</span>`;
    btn.setAttribute("aria-label", t === "dark" ? "Ativar modo claro" : "Ativar modo escuro");
    try { localStorage.setItem("tema", t); } catch(e){}
  }
  let salvo = null;
  try { salvo = localStorage.getItem("tema"); } catch(e){}
  aplicarTema(salvo || "dark");
  $("themeBtn").addEventListener("click", () =>
      aplicarTema(document.documentElement.dataset.theme === "dark" ? "light" : "dark"));
})();