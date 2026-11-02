/* Portafolio de Felix Arocha. Sin dependencias, sin listeners de scroll (IntersectionObserver). */
(function () {
  "use strict";

  var P = window.PROJECTS || [];
  var SHOTS = window.SHOTS || {};
  var LOGOS = window.LOGOS || {};
  var OWNER = window.OWNER || "felixxcito";
  var reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };

  function el(tag, attrs, kids) {
    var n = document.createElement(tag);
    Object.keys(attrs || {}).forEach(function (k) {
      if (k === "class") n.className = attrs[k];
      else if (k === "text") n.textContent = attrs[k];
      else if (k.slice(0, 2) === "on") n.addEventListener(k.slice(2), attrs[k]);
      else n.setAttribute(k, attrs[k]);
    });
    (kids || []).forEach(function (c) { if (c) n.appendChild(typeof c === "string" ? document.createTextNode(c) : c); });
    return n;
  }
  function icon(name) {
    var s = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    s.setAttribute("class", "ico"); s.setAttribute("aria-hidden", "true");
    var u = document.createElementNS("http://www.w3.org/2000/svg", "use");
    u.setAttribute("href", "#i-" + name); s.appendChild(u);
    return s;
  }
  function logo(key, label) {
    var s = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    s.setAttribute("viewBox", "0 0 24 24"); s.setAttribute("role", "img"); s.setAttribute("aria-label", label || key);
    var t = document.createElementNS("http://www.w3.org/2000/svg", "title"); t.textContent = label || key; s.appendChild(t);
    var p = document.createElementNS("http://www.w3.org/2000/svg", "path"); p.setAttribute("d", LOGOS[key] || ""); s.appendChild(p);
    return s;
  }
  var LOGO_NAMES = { python: "Python", typescript: "TypeScript", react: "React", nextdotjs: "Next.js", nodedotjs: "Node.js", docker: "Docker", postgresql: "PostgreSQL", mongodb: "MongoDB", go: "Go", openjdk: "Java", fastapi: "FastAPI", tailwindcss: "Tailwind CSS", prisma: "Prisma", vercel: "Vercel", git: "Git", sqlite: "SQLite", redis: "Redis", wordpress: "WordPress", electron: "Electron", vite: "Vite", nginx: "Nginx", supabase: "Supabase" };
  var repoUrl = function (p) { return p.repo ? "https://github.com/" + OWNER + "/" + p.repo : null; };
  var bySlug = {}; P.forEach(function (p) { bySlug[p.slug] = p; });
  var shotsOf = function (p) { return (SHOTS[p.slug] || []).map(function (s) { return { src: "assets/screens/" + p.slug + "/" + s.file, cap: s.caption || "" }; }); };

  /* Tema */
  $("#themeBtn").addEventListener("click", function () {
    var next = document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    try { localStorage.setItem("tema", next); } catch (e) {}
  });

  /* Revelado */
  var io = new IntersectionObserver(function (es) {
    es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } });
  }, { threshold: 0.12 });
  function observe(root) { $$(".reveal", root).forEach(function (n) { io.observe(n); }); }
  observe(document);

  /* Navegación activa */
  var navIO = new IntersectionObserver(function (es) {
    es.forEach(function (e) {
      if (!e.isIntersecting) return;
      $$(".nav-links a").forEach(function (a) { a.classList.toggle("is-on", a.dataset.sec === e.target.id); });
    });
  }, { rootMargin: "-40% 0px -55% 0px" });
  ["proyectos", "skills", "perfil"].forEach(function (id) { var n = document.getElementById(id); if (n) navIO.observe(n); });

  /* Logos */
  var strip = $("#logos");
  ["python", "typescript", "react", "nextdotjs", "nodedotjs", "java", "go", "docker", "postgresql", "mongodb", "fastapi", "prisma", "git"].forEach(function (k) {
    var key = k === "java" ? "openjdk" : k;
    if (!LOGOS[key]) return;
    strip.appendChild(el("li", {}, [logo(key, LOGO_NAMES[key])]));
  });

  /* Tarjetas de proyecto */
  var grid = $("#grid");
  var cyc = new WeakMap();
  function startCycle(card, imgs) {
    if (reduce || imgs.length < 2 || cyc.get(card)) return;
    var i = imgs.findIndex(function (n) { return n.classList.contains("on"); });
    cyc.set(card, setInterval(function () {
      imgs[i].classList.remove("on"); i = (i + 1) % imgs.length; imgs[i].classList.add("on");
    }, 1400));
  }
  function stopCycle(card, imgs) {
    clearInterval(cyc.get(card)); cyc.delete(card);
    imgs.forEach(function (n, k) { n.classList.toggle("on", k === 0); });
  }
  function card(p) {
    var shots = shotsOf(p);
    var c = el("article", { class: "card reveal" + (p.featured ? " is-featured" : "") + (p.wide ? " is-wide" : ""), "data-kind": p.kind });
    var media;
    if (shots.length) {
      media = el("button", { class: "card-media", type: "button", "aria-label": "Ver capturas de " + p.title, onclick: function () { openModal(p.slug); } });
      var imgs = shots.slice(0, 5).map(function (s, k) {
        return el("img", { src: s.src, alt: k === 0 ? "Captura de " + p.title : "", loading: "lazy", decoding: "async", class: k === 0 ? "on" : "" });
      });
      imgs.forEach(function (n) { media.appendChild(n); });
      media.appendChild(el("span", { class: "peek" }, [icon("images"), "Ver teaser"]));
      c.addEventListener("mouseenter", function () { startCycle(c, imgs); });
      c.addEventListener("mouseleave", function () { stopCycle(c, imgs); });
      media.addEventListener("focus", function () { startCycle(c, imgs); });
      media.addEventListener("blur", function () { stopCycle(c, imgs); });
    } else {
      media = el("button", { class: "card-lock", type: "button", "aria-label": "Ver detalles de " + p.title, onclick: function () { openModal(p.slug); }, style: "width:100%;border:0;cursor:pointer" },
        [icon(p.private ? "lock-simple" : "images"), el("span", { text: p.private ? "Repositorio privado. Muestro la idea, no los datos." : "Capturas en camino." })]);
    }
    var foot = el("div", { class: "card-foot" });
    var url = repoUrl(p);
    if (url) foot.appendChild(el("a", { class: "btn btn-ghost", href: url, target: "_blank", rel: "noopener" }, [icon("github-logo"), "Código"]));
    else foot.appendChild(el("span", { class: "btn btn-ghost", "aria-disabled": "true", style: "opacity:.6;cursor:default" }, [icon("lock-simple"), "Privado"]));
    if (p.live) foot.appendChild(el("a", { class: "btn btn-primary", href: p.live, target: "_blank", rel: "noopener" }, [icon("arrow-up-right"), "Ver en vivo"]));
    else foot.appendChild(el("button", { class: "btn btn-ghost", type: "button", onclick: function () { openModal(p.slug); } }, [icon("images"), "Detalles"]));
    var logos = el("div", { class: "card-logos" });
    (p.logos || []).slice(0, 6).forEach(function (k) { if (LOGOS[k]) logos.appendChild(logo(k, LOGO_NAMES[k])); });
    c.appendChild(media);
    c.appendChild(el("div", { class: "card-body" }, [
      el("p", { class: "card-course mono", text: p.course }),
      el("h3", { text: p.title }),
      el("p", { class: "card-tag", text: p.tagline }),
      logos, foot
    ]));
    return c;
  }
  P.forEach(function (p) { grid.appendChild(card(p)); });
  observe(grid);

  /* Filtros */
  $("#cAll").textContent = P.length;
  $("#cUni").textContent = P.filter(function (p) { return p.kind === "uni"; }).length;
  $("#cPer").textContent = P.filter(function (p) { return p.kind === "personal"; }).length;
  $$(".filters .chip").forEach(function (b) {
    b.addEventListener("click", function () {
      $$(".filters .chip").forEach(function (x) { x.classList.toggle("is-on", x === b); });
      $$(".card", grid).forEach(function (c) { c.classList.toggle("is-hidden", b.dataset.f !== "all" && c.dataset.kind !== b.dataset.f); });
    });
  });

  /* Modal */
  var modal = $("#modal"), cur = null, idx = 0, lastFocus = null;
  function setShot(i) {
    var s = cur.shots[i]; if (!s) return;
    idx = i; $("#mImg").src = s.src; $("#mImg").alt = s.cap || ("Captura de " + cur.p.title); $("#mCap").textContent = s.cap;
    $$("#mThumbs button").forEach(function (b, k) { if (k === i) b.setAttribute("aria-current", "true"); else b.removeAttribute("aria-current"); });
  }
  function openModal(slug) {
    var p = bySlug[slug]; if (!p) return;
    lastFocus = document.activeElement;
    cur = { p: p, shots: shotsOf(p) };
    $("#mCourse").textContent = p.course; $("#mTitle").textContent = p.title; $("#mDesc").textContent = p.description;
    var pts = $("#mPoints"); pts.textContent = ""; (p.points || []).forEach(function (t) { pts.appendChild(el("li", { text: t })); });
    var st = $("#mStack"); st.textContent = ""; (p.stack || []).forEach(function (t) { st.appendChild(el("li", { text: t })); });
    var lk = $("#mLinks"); lk.textContent = "";
    var url = repoUrl(p);
    if (url) lk.appendChild(el("a", { class: "btn btn-primary", href: url, target: "_blank", rel: "noopener" }, [icon("github-logo"), "Ver código en GitHub"]));
    else lk.appendChild(el("span", { class: "btn btn-ghost", style: "opacity:.7" }, [icon("lock-simple"), "Repositorio privado"]));
    if (p.live) lk.appendChild(el("a", { class: "btn btn-ghost", href: p.live, target: "_blank", rel: "noopener" }, [icon("arrow-up-right"), "Demo en vivo"]));
    var view = $(".m-view"), stage = $("#mStage"), th = $("#mThumbs"); th.textContent = "";
    $$(".m-empty", view).forEach(function (n) { n.remove(); });
    if (cur.shots.length) {
      stage.style.display = ""; view.classList.toggle("single", cur.shots.length < 2);
      cur.shots.forEach(function (s, k) {
        th.appendChild(el("button", { type: "button", "aria-label": "Captura " + (k + 1), onclick: function () { setShot(k); } }, [el("img", { src: s.src, alt: "", loading: "lazy" })]));
      });
      setShot(0);
    } else {
      stage.style.display = "none"; view.classList.add("single"); $("#mCap").textContent = "";
      view.insertBefore(el("div", { class: "m-empty" }, [icon(p.private ? "lock-simple" : "images"), el("p", { text: p.private ? "Este repositorio es privado porque contiene datos personales. Puedo mostrarlo en una llamada." : "Aún no hay capturas de este proyecto." })]), stage);
    }
    modal.hidden = false; document.body.classList.add("lock");
    $(".modal-x").focus();
  }
  function closeModal() { modal.hidden = true; document.body.classList.remove("lock"); if (lastFocus && lastFocus.focus) lastFocus.focus(); }
  $$("[data-close]", modal).forEach(function (n) { n.addEventListener("click", closeModal); });
  $("#mPrev").addEventListener("click", function () { setShot((idx - 1 + cur.shots.length) % cur.shots.length); });
  $("#mNext").addEventListener("click", function () { setShot((idx + 1) % cur.shots.length); });
  document.addEventListener("keydown", function (e) {
    if (modal.hidden) return;
    if (e.key === "Escape") closeModal();
    else if (e.key === "ArrowLeft" && cur.shots.length > 1) $("#mPrev").click();
    else if (e.key === "ArrowRight" && cur.shots.length > 1) $("#mNext").click();
    else if (e.key === "Tab") { /* trampa de foco simple */
      var f = $$("button, a[href]", $(".modal-box")).filter(function (n) { return n.offsetParent !== null; });
      if (!f.length) return;
      var first = f[0], last = f[f.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    }
  });

  /* Skills */
  var groups = window.SKILL_GROUPS || [];
  var tabs = $("#tabs"), panel = $("#skillPanel");
  function showGroup(g) {
    $$(".tab", tabs).forEach(function (t) { t.setAttribute("aria-selected", String(t.dataset.id === g.id)); });
    panel.textContent = "";
    panel.appendChild(el("p", { class: "blurb", text: g.blurb }));
    g.skills.forEach(function (s) {
      var ev = el("div", { class: "ev" });
      if (s.ev.length) s.ev.forEach(function (slug) {
        if (bySlug[slug]) ev.appendChild(el("button", { class: "ev-link", type: "button", onclick: function () { openModal(slug); } }, [bySlug[slug].title]));
      });
      else ev.appendChild(el("span", { class: "ev-none", text: "Experiencia profesional, sin repo público" }));
      panel.appendChild(el("div", { class: "skill" }, [el("h4", { text: s.name }), el("p", { text: s.note }), ev]));
    });
  }
  groups.forEach(function (g, i) {
    var b = el("button", { class: "tab", role: "tab", type: "button", "data-id": g.id, onclick: function () { showGroup(g); } }, [icon(g.icon), g.label]);
    tabs.appendChild(b);
  });
  if (groups[0]) showGroup(groups[0]);

  /* Terminal estilo Claude Code */
  var out = $("#termOut"), form = $("#termForm"), input = $("#termIn"), chips = $("#termChips");
  function say(html, cls) {
    var d = el("div", { class: "l " + (cls || "out") });
    d.innerHTML = html; out.appendChild(d); out.scrollTop = out.scrollHeight; return d;
  }
  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); }
  var COMMANDS = {
    "/help": function () {
      return "<b>Comandos</b>\n/sobre       quién soy\n/skills      mis skills por área\n/proyectos   lista de proyectos\n/abrir &lt;nombre&gt;   abre un proyecto\n/cv          descarga mi CV\n/contacto    cómo escribirme\n/github      mi GitHub\n/clear       limpia la terminal";
    },
    "/sobre": function () { return "<b>Felix Arocha</b>. Ingeniero en Computación (2027).\nConstruyo software con IA, datos y automatización.\n3 años de desarrollo asistido por IA, con Claude Code como herramienta principal."; },
    "/skills": function () {
      return groups.map(function (g) { return "<b>" + esc(g.label) + "</b>\n  " + g.skills.map(function (s) { return esc(s.name); }).join(", "); }).join("\n");
    },
    "/proyectos": function () {
      return P.map(function (p) { return "<button type=\"button\" data-open=\"" + p.slug + "\">/abrir " + p.slug + "</button>  " + esc(p.title); }).join("\n");
    },
    "/cv": function () { return "Descarga directa: <a href=\"assets/Felix-Arocha-CV.pdf\" download>Felix-Arocha-CV.pdf</a>"; },
    "/contacto": function () { return "Correo: <a href=\"mailto:felixarocha1@gmail.com\">felixarocha1@gmail.com</a>\nGitHub: <a href=\"https://github.com/" + OWNER + "\" target=\"_blank\" rel=\"noopener\">github.com/" + OWNER + "</a>"; },
    "/github": function () { return "<a href=\"https://github.com/" + OWNER + "\" target=\"_blank\" rel=\"noopener\">github.com/" + OWNER + "</a>"; }
  };
  function run(raw) {
    var line = raw.trim(); if (!line) return;
    if (line[0] !== "/") line = "/" + line;
    say(esc(line), "cmd");
    var parts = line.split(/\s+/), name = parts[0].toLowerCase();
    if (name === "/clear") { out.textContent = ""; return; }
    if (name === "/abrir") {
      var q = (parts[1] || "").toLowerCase();
      var hit = P.filter(function (p) { return p.slug === q || p.slug.indexOf(q) === 0 || p.title.toLowerCase().indexOf(q) >= 0; })[0];
      if (!q || !hit) { say("Dime cuál: escribe /proyectos para ver la lista."); return; }
      say("Abriendo <b>" + esc(hit.title) + "</b>."); openModal(hit.slug); return;
    }
    if (COMMANDS[name]) { say(COMMANDS[name]()); return; }
    say("No conozco <b>" + esc(name) + "</b>. Prueba con /help.");
  }
  out.addEventListener("click", function (e) {
    var b = e.target.closest("[data-open]"); if (b) { run("/abrir " + b.dataset.open); }
  });
  form.addEventListener("submit", function (e) { e.preventDefault(); run(input.value); input.value = ""; });
  ["/skills", "/proyectos", "/sobre", "/cv", "/contacto"].forEach(function (c) {
    chips.appendChild(el("button", { type: "button", onclick: function () { run(c); } }, [c]));
  });
  function intro() {
    say("Claude Code, versión de portafolio. Escribe <b>/help</b> o toca un atajo.");
    if (reduce) { run("/skills"); return; }
    var text = "/skills", i = 0, t = el("div", { class: "l cmd" }); out.appendChild(t);
    var timer = setInterval(function () {
      t.textContent = text.slice(0, ++i);
      if (i >= text.length) { clearInterval(timer); out.removeChild(t); run(text); }
    }, 90);
  }
  var introDone = false;
  new IntersectionObserver(function (es, ob) {
    if (es[0].isIntersecting && !introDone) { introDone = true; ob.disconnect(); intro(); }
  }, { threshold: 0.35 }).observe($("#term"));
})();
