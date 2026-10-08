(() => {
  const C = DADOS.contatos;

  $("pitch").textContent = DADOS.pitch;
  $("meta").innerHTML = DADOS.meta.map(m => `<li${m.linha ? ' class="full"' : ""}>${svg(m.icone)}${esc(m.texto)}</li>`).join("");
  $("heroCta").innerHTML = `
    <a class="btn primary" href="#projetos">Ver projetos</a>
    ${DADOS.curriculoPdf ? `<a class="btn ghost" href="${esc(DADOS.curriculoPdf)}" download>Baixar currículo</a>` : ""}
    ${C.github ? `<a class="icon-link" href="${esc(C.github)}" target="_blank" rel="noopener" aria-label="GitHub">${svg("github")}</a>` : ""}
    ${C.linkedin ? `<a class="icon-link" href="${esc(C.linkedin)}" target="_blank" rel="noopener" aria-label="LinkedIn">${svg("linkedin")}</a>` : ""}`;

  function links(p){
    if (!p.demo && !p.codigo) return "";
    return `<div class="links">
      ${p.demo ? `<a href="${esc(p.demo)}" target="_blank" rel="noopener">Ver ao vivo</a>` : ""}
      ${p.codigo ? `<a href="${esc(p.codigo)}" target="_blank" rel="noopener">Ver código</a>` : ""}
    </div>`;
  }
  const cab = p => `<div class="p-head">${p.icone ? `<span class="p-icon">${svg(p.icone)}</span>` : ""}<h3>${esc(p.titulo)}</h3></div>`;
  $("projects").innerHTML = DADOS.projetos.map(p => {
    const tags = p.tags ? `<ul class="tags">${p.tags.map(t => `<li>${esc(t)}</li>`).join("")}</ul>` : "";
    const lista = p.fiz ? `<ul class="did">${p.fiz.map(f => `<li>${esc(f)}</li>`).join("")}</ul>` : "";
    if (p.destaque) return `
      <article class="project featured">
        <div class="col">
          ${cab(p)}<p>${esc(p.descricao)}</p>${tags}${links(p)}
        </div>
        <div class="col">${lista}</div>
      </article>`;
    return `
      <article class="project">
        ${cab(p)}<p>${esc(p.descricao)}</p>${lista}${tags}${links(p)}
      </article>`;
  }).join("");

  $("traits").innerHTML = DADOS.diferenciais.map(d =>
      `<div class="trait"><h3>${esc(d.titulo)}</h3><p>${esc(d.texto)}</p></div>`).join("");

  $("stackGrid").innerHTML = DADOS.stacks.map(g => `
    <div class="stack-group">
      <h3>${svg(g.icone)}${esc(g.grupo)}</h3>
      <ul class="chips">${g.itens.map(i => `<li>${esc(i)}</li>`).join("")}</ul>
    </div>`).join("");

  $("courses").innerHTML = DADOS.cursos.map(c =>
      `<li><span class="c-name">${esc(c.nome)}</span><span class="c-org">${esc(c.org)}</span></li>`).join("");

  $("timeline").innerHTML = DADOS.trajetoria.map(t => `
    <li>
      <div class="when">${esc(t.quando)}</div>
      <h3>${esc(t.titulo)}</h3>
      <div class="where">${esc(t.onde)}</div>
      ${t.produto ? `<div class="product">${esc(t.produto)}</div>` : ""}
      ${t.texto ? `<p>${esc(t.texto)}</p>` : ""}
    </li>`).join("");

  $("year").textContent = new Date().getFullYear();
  const contatos = [["LinkedIn", C.linkedin], ["GitHub", C.github], ["WhatsApp", C.whatsapp]].filter(([,u]) => u);
  $("socials").innerHTML = contatos.map(([n,u]) =>
      `<a class="btn ghost" href="${esc(u)}" ${u.startsWith("http") ? 'target="_blank" rel="noopener"' : ""}>${n}</a>`).join("");
})();