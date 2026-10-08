/* Animação do Cartão */
(() => {
  const CODIGO = [
    ["k","const "],["v","ally"],["p"," = {\n"],
    ["v","  atuação"],["p",": "],["s",'"Full-stack"'],["p",",\n"],
    ["v","  experiencia"],["p",": "],["s",'"8 anos em TI"'],["p",",\n"],
    ["v","  backend"],["p",": ["],["s",'"Java"'],["p",", "],["s",'"Spring Boot"'],["p",", "],["s",'"Node.js"'],["p","],\n"],
    ["v","  frontend"],["p",": ["],["s",'"Angular"'],["p",", "],["s",'"React"'],["p",", "],["s",'"Vue.js"'],["p","],\n"],
    ["v","  mobile"],["p",": ["],["s",'"React Native"'],["p",", "],["s",'"Expo"'],["p","],\n"],
    ["v","  dados"],["p",": ["],["s",'"PostgreSQL"'],["p",", "],["p","],\n"],
    ["v","  deploy"],["p",": ["],["s",'"Docker"'],["p",", "],["s",'"Nginx"'],["p",", "],["s",'"CI/CD"'],["p","],\n"],
    ["v","  interesses"],["p",": "],["s",'"UI atrativa, animações e testes"'],["p",",\n"],
    ["p","};"]
  ];
  (function digitar(){
    const pre = $("code");
    if (reduz){ pre.innerHTML = CODIGO.map(([c,t]) => `<span class="${c}">${esc(t)}</span>`).join(""); return; }
    const caret = document.createElement("span"); caret.className = "caret";
    pre.appendChild(caret);
    let seg = 0, ch = 0, span = null;
    function passo(){
      if (seg >= CODIGO.length) return;
      const [cls, txt] = CODIGO[seg];
      if (!span){ span = document.createElement("span"); span.className = cls; pre.insertBefore(span, caret); }
      span.textContent += txt[ch++];
      if (ch >= txt.length){ seg++; ch = 0; span = null; }
      setTimeout(passo, txt[ch-1] === "\n" ? 140 : 18 + Math.random()*30);
    }
    setTimeout(passo, 1500);
  })();
})();
