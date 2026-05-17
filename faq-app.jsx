/* global React, ReactDOM, FAQ_CATEGORIES, FAQ_ITEMS, FAQ_POPULAR_IDS */
/* eslint-disable no-undef */

const { useState, useEffect, useMemo, useRef } = React;

// ─── i18n strings ────────────────────────────────────────────────────────
const STRINGS = {
  th: {
    nav_buy: "สั่งซื้อบน LINE",
    chip: "HELP CENTER · FAQ",
    hero_h1_a: "คำถามที่พบบ่อย",
    hero_h1_b: "แผ่นแปะคนยุคใหม่",
    hero_sub: "รวมทุกเรื่องที่คุณควรรู้ก่อนเริ่มใช้งานแผ่นแปะ The Buddy by Better Day",
    search_placeholder: "ค้นหา",
    popular_label: "คำถามยอดฮิต",
    sidebar_title: "หมวดหมู่",
    sidebar_all: "ทั้งหมด",
    no_results_h: "ไม่พบคำตอบที่คุณค้นหา",
    no_results_p: "ลองคำอื่น หรือทักหาเราโดยตรงที่ LINE OA — ทีมพร้อมตอบทุกวัน 09:00 – 20:00",
    no_results_cta: "ทักเลย",
    cta_h: "Peel. Stick. Feel.",
    cta_p: "Happier Moment In A Patch",
    cta_btn: "ติดต่อ LINE OA",
    cta_shopee: "สั่งซื้อบน\nShopee",
    cta_lazada: "สั่งซื้อบน\nLazada",
    footer_tag: "Best Buddy Sticks Around.",
    footer_legal: ""
  },
  en: {
    nav_buy: "Order on LINE",
    chip: "HELP CENTER · FAQ",
    hero_h1_a: "everything to know",
    hero_h1_b: "before your first patch.",
    hero_sub: "Vitamins and natural extracts in an 8-hour patch — every answer you need before you stick one on.",
    search_placeholder: "Search",
    popular_label: "popular",
    sidebar_title: "Categories",
    sidebar_all: "All",
    no_results_h: "We couldn't find that one.",
    no_results_p: "Try different words — or message us directly on LINE OA. We're around daily, 9 AM – 8 PM.",
    no_results_cta: "Message us",
    cta_h: "Peel. Stick. Feel.",
    cta_p: "Happier Moment In A Patch",
    cta_btn: "Contact LINE OA",
    cta_shopee: "Buy on\nShopee",
    cta_lazada: "Buy on\nLazada",
    footer_tag: "Best Buddy Sticks Around.",
    footer_legal: ""
  }
};

// ─── Icons (line-art, no emoji slop) ─────────────────────────────────────
function Icon({ name, size = 18 }) {
  const props = {
    width: size, height: size, viewBox: "0 0 24 24",
    fill: "none", stroke: "currentColor", strokeWidth: 1.6,
    strokeLinecap: "round", strokeLinejoin: "round"
  };
  switch (name) {
    case "rocket":
      return <svg {...props}><path d="M4.5 16.5c-1.5 1-2 5-2 5s4-.5 5-2c.6-.9.5-2.3-.3-3.2-.9-.8-2.3-.9-3.2-.3z" /><path d="M14 16l-3-3" /><path d="M18.4 11.6 13 6.2c.7-2 3-4 5.5-4 .5 0 1 .1 1.5.3.2.5.3 1 .3 1.5 0 2.5-2 4.8-4 5.5z" /><path d="M11 6.2 14 9l-5 5-3-3 5-5z" /></svg>;
    case "shield":
      return <svg {...props}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><path d="m9 12 2 2 4-4" /></svg>;
    case "molecule":
      return <svg {...props}><circle cx="6" cy="7" r="2.2" /><circle cx="18" cy="7" r="2.2" /><circle cx="12" cy="17" r="2.2" /><path d="m7.8 8.5 2.8 7M16.2 8.5l-2.8 7M8 7h8" /></svg>;
    case "leaf":
      return <svg {...props}><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.5 19 2c1 5 0 17-8 18z" /><path d="M2 21c0-3 1.85-5.95 5.5-7.5" /></svg>;
    case "tag":
      return <svg {...props}><path d="M20 12 12 4H4v8l8 8 8-8z" /><circle cx="8.5" cy="8.5" r="1.2" /></svg>;
    case "box":
      return <svg {...props}><path d="M21 8 12 3 3 8v8l9 5 9-5V8z" /><path d="m3 8 9 5 9-5M12 13v8" /></svg>;
    case "rotate":
      return <svg {...props}><path d="M3 12a9 9 0 0 1 15.5-6.3L21 8" /><path d="M21 3v5h-5" /><path d="M21 12a9 9 0 0 1-15.5 6.3L3 16" /><path d="M3 21v-5h5" /></svg>;
    case "chat":
      return <svg {...props}><path d="M21 12c0 4.4-4 8-9 8-1.4 0-2.7-.3-3.9-.8L3 21l1.8-4.5C3.6 15.1 3 13.6 3 12c0-4.4 4-8 9-8s9 3.6 9 8z" /></svg>;
    case "search":
      return <svg {...props}><circle cx="11" cy="11" r="7" /><path d="m20 20-3.5-3.5" /></svg>;
    case "chev":
      return <svg {...props}><path d="m6 9 6 6 6-6" /></svg>;
    case "x":
      return <svg {...props}><path d="M18 6 6 18M6 6l12 12" /></svg>;
    case "arrow":
      return <svg {...props}><path d="M5 12h14M13 5l7 7-7 7" /></svg>;
    case "globe":
      return <svg {...props}><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" /></svg>;
    default:
      return null;
  }
}

// ─── Patch glyph for hero + favicon-ish bits ─────────────────────────────
function PatchGlyph({ size = 64, sku = "revive" }) {
  const c = { revive: ["#7DE3C4", "#3FB8C9", "#78A2EE"],
    focus: ["#FAE0B5", "#F5C46B", "#ED7E3C"],
    night: ["#E8D9F0", "#B399D6", "#6F5BA8"] }[sku] || ["#7DE3C4", "#3FB8C9", "#78A2EE"];
  const gid = `pg-${sku}-${size}`;
  const hid = `pgh-${sku}-${size}`;
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" style={{ display: "block" }}>
      <defs>
        <radialGradient id={gid} cx="35%" cy="30%" r="80%">
          <stop offset="0%" stopColor="#fff" stopOpacity="0.95" />
          <stop offset="35%" stopColor={c[0]} stopOpacity="0.9" />
          <stop offset="75%" stopColor={c[1]} stopOpacity="0.9" />
          <stop offset="100%" stopColor={c[2]} stopOpacity="0.95" />
        </radialGradient>
        <linearGradient id={hid} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#fff" stopOpacity="0.7" />
          <stop offset="100%" stopColor="#fff" stopOpacity="0" />
        </linearGradient>
      </defs>
      <rect x="8" y="8" width="84" height="84" rx="22" fill={`url(#${gid})`} stroke="#fff" strokeOpacity="0.5" />
      <rect x="14" y="14" width="72" height="32" rx="14" fill={`url(#${hid})`} />
      <circle cx="32" cy="28" r="6" fill="#fff" fillOpacity="0.55" />
    </svg>);

}

// ─── Aurora background ───────────────────────────────────────────────────
function Aurora({ palette, motion, intensity }) {
  // intensity: 0..1 controls opacity
  const op = intensity;
  const palettes = {
    revive: ["#7DE3C4", "#3FB8C9", "#78A2EE", "#A8D8E8"],
    focus: ["#FAE0B5", "#F5C46B", "#F8B373", "#ED7E3C"],
    night: ["#E8D9F0", "#B399D6", "#A78BD0", "#8870B8"],
    neutral: ["#E8DFD0", "#D8E3E8", "#C9D6E0", "#E0D8E8"]
  };
  const [a, b, c, d] = palettes[palette] || palettes.revive;
  return (
    <div className={`aurora ${motion ? "is-motion" : ""}`} aria-hidden="true">
      <div className="aurora-blob b1" style={{ background: a, opacity: 0.55 * op }} />
      <div className="aurora-blob b2" style={{ background: b, opacity: 0.55 * op }} />
      <div className="aurora-blob b3" style={{ background: c, opacity: 0.45 * op }} />
      <div className="aurora-blob b4" style={{ background: d, opacity: 0.5 * op }} />
      <div className="aurora-grain" />
    </div>);

}

// ─── Nav ─────────────────────────────────────────────────────────────────
function Nav({ lang, setLang, t }) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <nav className={`nav ${scrolled ? "is-scrolled" : ""}`}>
      <div className="nav-inner">
        <a className="nav-brand" href="#top">
          <PatchGlyph size={28} sku="revive" />
          <span>The Buddy by Better Day</span>
        </a>
        <div className="nav-right">
          <button className="lang-toggle" onClick={() => setLang(lang === "th" ? "en" : "th")} aria-label="Switch language">
            <Icon name="globe" size={15} />
            <span className={lang === "th" ? "is-on" : ""}>TH</span>
            <span className="lang-sep">·</span>
            <span className={lang === "en" ? "is-on" : ""}>EN</span>
          </button>
          <a className="nav-cta" href="https://lin.ee/HFaPgO8" target="_blank" rel="noreferrer">
            {t.nav_buy}
            <Icon name="arrow" size={14} />
          </a>
        </div>
      </div>
    </nav>);

}

// ─── Hero ───────────────────────────────────────────────────────────────
const POPULAR_CHIPS = [
{ id: "how-to-use" },
{ id: "best-spot" },
{ id: "kids" },
{ id: "vs-pills" },
{ id: "when-effect", th: "ออกฤทธิ์ยังไง?", en: "How does it activate?" },
{ id: "ship-time" }];


function Hero({ lang, t, query, setQuery, onPopular }) {
  const popular = POPULAR_CHIPS.
  map((c) => {
    const item = FAQ_ITEMS.find((it) => it.id === c.id);
    if (!item) return null;
    const label = lang === "th" ? c.th || item.q_th : c.en || item.q_en;
    return { id: item.id, label };
  }).
  filter(Boolean);
  return (
    <header className="hero" id="top">
      <div className="hero-inner">
        <div className="hero-chip">
          <span className="dot-pulse" />
          {t.chip}
        </div>
        <h1 className="hero-h1">
          {t.hero_h1_a}<br />
          <em>{t.hero_h1_b}</em>
        </h1>
        <p className="hero-sub">{t.hero_sub}</p>
        <div className="search">
          <Icon name="search" size={18} />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={t.search_placeholder}
            aria-label="Search FAQ" />
          
          {query &&
          <button className="search-clear" onClick={() => setQuery("")} aria-label="Clear">
              <Icon name="x" size={14} />
            </button>
          }
        </div>
        <div className="popular">
          <span className="popular-label">{t.popular_label}</span>
          <div className="popular-chips">
            {popular.map((c) =>
            <button key={c.id} className="chip" onClick={() => onPopular(c.id)}>
                {c.label}
              </button>
            )}
          </div>
        </div>
      </div>
      <div className="hero-patches" aria-hidden="true">
        <div className="hp hp1"><PatchGlyph size={120} sku="revive" /></div>
        <div className="hp hp2"><PatchGlyph size={80} sku="focus" /></div>
        <div className="hp hp3"><PatchGlyph size={68} sku="night" /></div>
      </div>
    </header>);

}

// ─── Sidebar (categories) ───────────────────────────────────────────────
function Sidebar({ lang, t, categories, counts, active, setActive }) {
  return (
    <aside className="sidebar">
      <div className="sidebar-inner">
        <div className="sidebar-title">{t.sidebar_title}</div>
        <ul className="cat-list">
          <li>
            <button
              className={`cat-btn ${active === "all" ? "is-active" : ""}`}
              onClick={() => setActive("all")}>
              <span className="cat-bullet"><span className="bullet-all" /></span>
              <span className="cat-label">{t.sidebar_all}</span>
              <span className="cat-count">{counts.all}</span>
            </button>
          </li>
          {categories.map((cat) =>
          <li key={cat.id}>
              <button
              className={`cat-btn ${active === cat.id ? "is-active" : ""}`}
              onClick={() => setActive(cat.id)}>
                <span className="cat-bullet"><Icon name={cat.icon} size={16} /></span>
                <span className="cat-label">{lang === "th" ? cat.th : cat.en}</span>
                <span className="cat-count">{counts[cat.id] || 0}</span>
              </button>
            </li>
          )}
        </ul>
      </div>
    </aside>);

}

// ─── Mobile category strip ──────────────────────────────────────────────
function CategoryStrip({ lang, t, categories, counts, active, setActive }) {
  return (
    <div className="cat-strip">
      <button
        className={`strip-btn ${active === "all" ? "is-active" : ""}`}
        onClick={() => setActive("all")}>
        {t.sidebar_all} <span>{counts.all}</span>
      </button>
      {categories.map((cat) =>
      <button key={cat.id}
      className={`strip-btn ${active === cat.id ? "is-active" : ""}`}
      onClick={() => setActive(cat.id)}>
          {lang === "th" ? cat.th : cat.en} <span>{counts[cat.id] || 0}</span>
        </button>
      )}
    </div>);

}

// ─── Glass-pill FAQ row (accordion) ─────────────────────────────────────
function FAQRow({ item, lang, t, open, onToggle, highlight }) {
  const ref = useRef(null);
  const skuClass = `sku-${item.sku === "all" ? "revive" : item.sku}`;
  const question = lang === "th" ? item.q_th : item.q_en;
  const answer = lang === "th" ? item.a_th : item.a_en;
  return (
    <div
      ref={ref}
      id={`faq-${item.id}`}
      className={`faq-row ${skuClass} ${open ? "is-open" : ""}`}
      data-comment-anchor={`faq-${item.id}`}>
      
      <button className="faq-q" onClick={onToggle} aria-expanded={open}>
        <span className="faq-q-text">
          <span className="faq-mark">+</span>
          <span dangerouslySetInnerHTML={{ __html: highlight(question) }} />
        </span>
        <span className="faq-chev"><Icon name="chev" size={18} /></span>
      </button>
      <div className="faq-a-wrap">
        <div className="faq-a">
          <div className="faq-a-body" dangerouslySetInnerHTML={{ __html: answer }} />
        </div>
      </div>
    </div>);}

// ─── FAQ section ────────────────────────────────────────────────────────
function FAQList({ lang, t, items, active, setActive, openId, setOpenId, query, highlight, categories, counts }) {
  // group by category
  const grouped = useMemo(() => {
    const map = {};
    items.forEach((it) => {
      if (!map[it.category]) map[it.category] = [];
      map[it.category].push(it);
    });
    return map;
  }, [items]);

  if (items.length === 0) {
    return (
      <section className="faq-list empty">
        <div className="empty-card">
          <div className="empty-icon"><Icon name="search" size={36} /></div>
          <h3>{t.no_results_h}</h3>
          <p>{t.no_results_p}</p>
          <a className="btn-primary" href="https://lin.ee/HFaPgO8" target="_blank" rel="noreferrer">
            {t.no_results_cta} <Icon name="arrow" size={14} />
          </a>
        </div>
      </section>);

  }

  return (
    <section className="faq-list">
      {categories.map((cat) => {
        const list = grouped[cat.id];
        if (!list || list.length === 0) return null;
        return (
          <div key={cat.id} className="faq-group" id={`cat-${cat.id}`}>
            <div className="group-head">
              <span className="group-icon"><Icon name={cat.icon} size={16} /></span>
              <h2>{lang === "th" ? cat.th : cat.en}</h2>
              <span className="group-count">{list.length}</span>
            </div>
            <div className="faq-rows">
              {list.map((item) =>
              <FAQRow
                key={item.id}
                item={item}
                lang={lang}
                t={t}
                open={openId === item.id}
                onToggle={() => setOpenId(openId === item.id ? null : item.id)}
                highlight={highlight} />

              )}
            </div>
          </div>);

      })}
    </section>);

}

// ─── Footer CTA ─────────────────────────────────────────────────────────
function FooterCTA({ t, lang }) {
  return (
    <section className="cta-section">
      <div className="cta-card">
        <div className="cta-patches" aria-hidden="true">
          <PatchGlyph size={80} sku="revive" />
          <PatchGlyph size={80} sku="focus" />
          <PatchGlyph size={80} sku="night" />
        </div>
        <h2>{t.cta_h}</h2>
        <p>{t.cta_p}</p>
        <div className="cta-row">
          <a className="btn-primary" href="https://lin.ee/HFaPgO8" target="_blank" rel="noreferrer">
            {t.cta_btn} <Icon name="arrow" size={14} />
          </a>
          <a className="btn-ghost btn-shopee" href="https://rebrand.ly/819ca3" target="_blank" rel="noreferrer">
            <span className="brand-dot" style={{ background: "#EE4D2D" }} />
            {t.cta_shopee}
          </a>
          <a className="btn-ghost btn-lazada" href="https://rebrand.ly/aeeb24" target="_blank" rel="noreferrer">
            <span className="brand-dot" style={{ background: "#0F146D" }} />
            {t.cta_lazada}
          </a>
        </div>
      </div>
    </section>);

}

function Footer({ t }) {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <PatchGlyph size={28} sku="revive" />
          <div>
            <div className="footer-name">The Buddy Patch by Better Day</div>
            <div className="footer-tag">{t.footer_tag}</div>
          </div>
        </div>
        <div className="footer-meta">
          <span>© 2026 The Buddy Patch by Better Day</span>
          <span className="dot">·</span>
          <span>{t.footer_legal}</span>
        </div>
      </div>
    </footer>);

}

// ─── Highlighter ────────────────────────────────────────────────────────
function makeHighlighter(query) {
  if (!query || query.length < 1) return (s) => s;
  const q = query.trim().toLowerCase();
  if (!q) return (s) => s;
  return (s) => {
    const lower = s.toLowerCase();
    const idx = lower.indexOf(q);
    if (idx < 0) return s;
    return s.slice(0, idx) + `<mark>${s.slice(idx, idx + q.length)}</mark>` + s.slice(idx + q.length);
  };
}

// ─── Main App ───────────────────────────────────────────────────────────
const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "palette": "revive",
  "density": "comfortable",
  "motion": true,
  "glass": "subtle",
  "showHeroPatches": true
} /*EDITMODE-END*/;

function App() {
  const [lang, setLang] = useState("th");
  const [query, setQuery] = useState("");
  const [active, setActive] = useState("all");
  const [openId, setOpenId] = useState(null);

  // Tweaks (useTweaks returns [values, setTweak])
  const [t, setTweak] = window.useTweaks ?
  window.useTweaks(TWEAK_DEFAULTS) :
  [TWEAK_DEFAULTS, () => {}];

  const strings = STRINGS[lang];

  // Filter logic
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return FAQ_ITEMS.filter((it) => {
      if (active !== "all" && it.category !== active) return false;
      if (!q) return true;
      const hay = `${it.q_th} ${it.q_en} ${it.a_th} ${it.a_en}`.toLowerCase();
      return hay.includes(q);
    });
  }, [query, active]);

  const counts = useMemo(() => {
    const c = { all: FAQ_ITEMS.length };
    FAQ_CATEGORIES.forEach((cat) => {
      c[cat.id] = FAQ_ITEMS.filter((it) => it.category === cat.id).length;
    });
    return c;
  }, []);

  const highlight = useMemo(() => makeHighlighter(query), [query]);

  // Apply tweak data attrs to body
  useEffect(() => {
    document.body.dataset.palette = t.palette;
    document.body.dataset.density = t.density;
    document.body.dataset.motion = t.motion ? "on" : "off";
    document.body.dataset.glass = t.glass;
    document.body.dataset.heroPatches = t.showHeroPatches ? "on" : "off";
  }, [t.palette, t.density, t.motion, t.glass, t.showHeroPatches]);

  // Open popular question handler
  const handlePopular = (id) => {
    const it = FAQ_ITEMS.find((x) => x.id === id);
    if (!it) return;
    setActive("all");
    setQuery("");
    setOpenId(id);
    setTimeout(() => {
      const el = document.getElementById(`faq-${id}`);
      if (el) {
        const top = el.getBoundingClientRect().top + window.scrollY - 90;
        window.scrollTo({ top, behavior: "smooth" });
      }
    }, 60);
  };

  // Scroll to category on change
  const handleSetActive = (id) => {
    setActive(id);
    setOpenId(null);
    if (id !== "all") {
      setTimeout(() => {
        const el = document.getElementById(`cat-${id}`);
        if (el) {
          const top = el.getBoundingClientRect().top + window.scrollY - 90;
          window.scrollTo({ top, behavior: "smooth" });
        }
      }, 60);
    }
  };

  const aurOpacity = t.glass === "heavy" ? 1 : t.glass === "subtle" ? 0.75 : 0.45;

  return (
    <>
      <Aurora palette={t.palette} motion={t.motion} intensity={aurOpacity} />
      <Nav lang={lang} setLang={setLang} t={strings} />
      <Hero
        lang={lang} t={strings}
        query={query} setQuery={setQuery}
        onPopular={handlePopular} />
      
      <main className="body" id="faq">
        <Sidebar
          lang={lang} t={strings}
          categories={FAQ_CATEGORIES}
          counts={counts}
          active={active}
          setActive={handleSetActive} />
        
        <div className="body-main">
          <CategoryStrip
            lang={lang} t={strings}
            categories={FAQ_CATEGORIES}
            counts={counts}
            active={active}
            setActive={handleSetActive} />
          
          <FAQList
            lang={lang} t={strings}
            items={filtered}
            active={active} setActive={handleSetActive}
            openId={openId} setOpenId={setOpenId}
            query={query}
            highlight={highlight}
            categories={FAQ_CATEGORIES}
            counts={counts} />
          
        </div>
      </main>
      <FooterCTA t={strings} lang={lang} />
      <Footer t={strings} />

      {/* Tweaks panel */}
      {window.TweaksPanel &&
      <window.TweaksPanel title="Tweaks">
          <window.TweakSection label="Atmosphere">
            <window.TweakRadio
            label="Palette"
            value={t.palette}
            options={["revive", "focus", "night", "neutral"]}
            onChange={(v) => setTweak("palette", v)} />
          
            <window.TweakRadio
            label="Glass"
            value={t.glass}
            options={["off", "subtle", "heavy"]}
            onChange={(v) => setTweak("glass", v)} />
          
            <window.TweakToggle
            label="Aurora motion"
            value={t.motion}
            onChange={(v) => setTweak("motion", v)} />
          
            <window.TweakToggle
            label="Hero patches"
            value={t.showHeroPatches}
            onChange={(v) => setTweak("showHeroPatches", v)} />
          
          </window.TweakSection>
          <window.TweakSection label="Density">
            <window.TweakRadio
            label="Spacing"
            value={t.density}
            options={["compact", "comfortable", "airy"]}
            onChange={(v) => setTweak("density", v)} />
          
          </window.TweakSection>
        </window.TweaksPanel>
      }
    </>);

}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);