// content.js의 SITE 데이터를 화면에 그립니다. 내용 수정은 content.js에서 하세요.
(function () {
  const $ = (id) => document.getElementById(id);

  function el(tag, opts, children) {
    const node = document.createElement(tag);
    if (opts) {
      if (opts.cls) node.className = opts.cls;
      if (opts.text) node.textContent = opts.text;
      if (opts.href) node.href = opts.href;
    }
    (children || []).forEach((c) => c && node.appendChild(c));
    return node;
  }

  function titleNode(item) {
    return item.url
      ? el("a", { text: item.title, href: item.url })
      : el("span", { cls: "title", text: item.title });
  }

  function empty(container) {
    const p = el("p", { cls: "empty", text: "Nothing here yet. First write-up coming soon." });
    if (container.tagName === "UL") {
      container.replaceWith(p);
    } else {
      container.appendChild(p);
    }
  }

  // Profile
  const p = SITE.profile;
  const gh = p.github ? "https://github.com/" + p.github : "";
  document.title = p.name + " | Blockchain security study notes";
  $("handle").textContent = p.handle || p.name;
  $("eyebrow").textContent = [p.name, p.affiliation].filter(Boolean).join(" · ");
  $("headline").textContent = p.headline;
  $("intro").textContent = p.intro;
  if (gh) {
    $("hero-link").appendChild(el("a", { text: "github.com/" + p.github, href: gh }));
    $("footer-links").appendChild(el("a", { text: "GitHub", href: gh }));
  } else {
    $("hero-link").remove();
  }
  if (p.email) {
    $("footer-links").prepend(el("a", { text: p.email, href: "mailto:" + p.email }));
  }

  // 01 Hack analyses (cards)
  const hacks = $("hacks-list");
  if (!SITE.hacks.length) empty(hacks);
  SITE.hacks.forEach((h) => {
    const meta = [h.date, h.loss ? h.loss + " lost" : ""].filter(Boolean).join(" · ");
    hacks.appendChild(
      el("article", { cls: "card" }, [
        h.bugClass ? el("span", { cls: "tag " + (h.severity || "high"), text: h.bugClass }) : null,
        el("h3", null, [titleNode(h)]),
        h.summary ? el("p", { text: h.summary }) : null,
        meta ? el("p", { cls: "meta", text: meta }) : null,
      ])
    );
  });

  // 02-04 Row lists
  [["ctf", "ctf-list"], ["protocols", "protocols-list"], ["tech", "tech-list"]].forEach(([key, id]) => {
    const list = $(id);
    const items = SITE[key] || [];
    if (!items.length) return empty(list);
    items.forEach((it) => {
      list.appendChild(
        el("li", null, [titleNode(it), it.meta ? el("span", { cls: "meta", text: it.meta }) : null])
      );
    });
  });
})();
