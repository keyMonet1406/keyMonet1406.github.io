// content.js의 SITE 데이터를 화면에 그립니다. 내용 수정은 content.js에서 하세요.
// 메인 페이지(index.html)는 섹션마다 최근 글 HOME_LIMIT개만, 섹션 페이지는 전부 보여줍니다.
(function () {
  const HOME_LIMIT = 3;

  const SECTIONS = [
    { key: "hacks", num: "01", title: "Hack analyses", page: "hacks.html", kind: "cards",
      lede: "Past incidents taken apart: what the code did, what the attacker did, and what would have stopped it." },
    { key: "ctf", num: "02", title: "CTF write-ups", page: "ctf.html", kind: "rows",
      lede: "How I solved each challenge and the concept behind it." },
    { key: "protocols", num: "03", title: "Protocol studies", page: "protocols.html", kind: "rows",
      lede: "Well-known protocols read line by line, with notes on why each part is built the way it is." },
    { key: "tech", num: "04", title: "Tech notes", page: "tech.html", kind: "rows",
      lede: "Cryptography and infrastructure topics, explained the way I wish they had been explained to me." },
  ];

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

  function card(h) {
    const meta = [h.date, h.loss ? h.loss + " lost" : ""].filter(Boolean).join(" · ");
    return el("article", { cls: "card" }, [
      h.bugClass ? el("span", { cls: "tag " + (h.severity || "high"), text: h.bugClass }) : null,
      el("h3", null, [titleNode(h)]),
      h.summary ? el("p", { text: h.summary }) : null,
      meta ? el("p", { cls: "meta", text: meta }) : null,
    ]);
  }

  function row(it) {
    return el("li", null, [titleNode(it), it.meta ? el("span", { cls: "meta", text: it.meta }) : null]);
  }

  // 한 섹션의 글 목록 (limit이 있으면 앞에서부터 그만큼만)
  function listNode(section, limit) {
    const all = SITE[section.key] || [];
    if (!all.length) {
      return el("p", { cls: "empty", text: "Nothing here yet. First write-up coming soon." });
    }
    const items = limit ? all.slice(0, limit) : all;
    return section.kind === "cards"
      ? el("div", { cls: "cards" }, items.map(card))
      : el("ul", { cls: "rows" }, items.map(row));
  }

  // 공통: 왼쪽 위 이름, 아래쪽 링크
  const p = SITE.profile;
  const gh = p.github ? "https://github.com/" + p.github : "";
  $("handle").textContent = p.handle || p.name;
  if (p.email) $("footer-links").appendChild(el("a", { text: p.email, href: "mailto:" + p.email }));
  if (gh) $("footer-links").appendChild(el("a", { text: "GitHub", href: gh }));

  const current = document.body.dataset.section;

  if (!current) {
    // 메인 페이지
    document.title = p.name + " | Blockchain security study notes";
    $("eyebrow").textContent = [p.name, p.affiliation].filter(Boolean).join(" · ");
    $("headline").textContent = p.headline;
    if (p.intro) $("intro").textContent = p.intro; else $("intro").remove();
    if (gh) $("hero-link").appendChild(el("a", { text: "github.com/" + p.github, href: gh }));
    else $("hero-link").remove();

    SECTIONS.forEach((s) => {
      const total = (SITE[s.key] || []).length;
      const sec = el("section", null, [
        el("div", { cls: "head" }, [
          el("span", { cls: "num", text: s.num }),
          el("h2", null, [el("a", { text: s.title, href: s.page })]),
        ]),
        el("p", { cls: "lede", text: s.lede }),
        listNode(s, HOME_LIMIT),
        total > HOME_LIMIT
          ? el("p", { cls: "more" }, [el("a", { text: "View all " + total + " →", href: s.page })])
          : null,
      ]);
      $("sections").appendChild(sec);
    });
  } else {
    // 섹션 페이지: 전체 목록
    const s = SECTIONS.find((x) => x.key === current);
    const total = (SITE[s.key] || []).length;
    document.title = s.title + " | " + p.name;
    $("page").appendChild(
      el("section", { cls: "page-head" }, [
        el("p", { cls: "eyebrow", text: s.num + (total ? " · " + total + (total === 1 ? " post" : " posts") : "") }),
        el("h1", { text: s.title }),
        el("p", { cls: "intro", text: s.lede }),
      ])
    );
    $("page").appendChild(el("section", null, [listNode(s)]));
  }
})();
