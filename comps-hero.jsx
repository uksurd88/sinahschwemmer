// Hero, Nav, About sections
const { useState, useEffect, useRef } = React;

function useT() {
  const lang = window.__lang || 'en';
  return window.I18N[lang];
}

function Nav({ lang, setLang, theme, setTheme }) {
  const t = window.I18N[lang];
  return (
    <nav className="nav">
      <div className="nav-mark">
        <span className="dot"></span>
        <span>SINAH·S</span>
      </div>
      <div className="nav-links">
        <a href="#about">{t.nav.about}</a>
        <a href="#record">{t.nav.record}</a>
        <a href="#coaching">{t.nav.coaching}</a>
        <a href="#journey">{t.nav.journey}</a>
        <button
          className="theme-toggle"
          onClick={()=>setTheme(theme==='dark'?'light':'dark')}
          aria-label="Toggle theme"
          title={theme==='dark' ? 'Switch to light' : 'Switch to dark'}
        >
          {theme === 'dark' ? (
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/></svg>
          ) : (
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
          )}
        </button>
        <div className="lang-switch">
          {['en','de','nl'].map(l => (
            <button key={l} className={lang===l?'active':''} onClick={()=>setLang(l)}>{l}</button>
          ))}
        </div>
        <a href="#contact" className="nav-cta">{t.nav.contact} →</a>
      </div>
    </nav>
  );
}

function MeterHud({ meters, label }) {
  return (
    <div className="meter-hud">
      <span className="pulse"></span>
      <div>
        <div className="label">{label}</div>
        <div className="value">{Math.round(meters).toLocaleString()}<span className="unit">m</span></div>
      </div>
    </div>
  );
}

function Hero({ layout, t }) {
  return (
    <section className="hero" data-layout={layout}>
      <div className="hero-bg"></div>
      <div className="hero-lanes"></div>
      <div className="hero-grid">
        <div>
          <div className="eyebrow" style={{marginBottom:24}}>{t.hero.eyebrow}</div>
          <h1 className="display">
            <span className="row">{t.hero.l1}</span>
            <span className="row stroke">{t.hero.l2}<span className="marker">LANE 04 · 25M</span></span>
          </h1>
          <p className="hero-lead">{t.hero.lead}</p>
          <a href="#contact" className="hero-cta">{t.nav.contact} →</a>
          <div className="hero-tags">
            <span className="hero-tag-primary">{t.hero.tag3}</span>
            <span>★ {t.hero.tag2}</span>
            <span>{t.hero.tag4}</span>
            <span>{t.hero.tag1}</span>
          </div>
          <div className="hero-meta">
            <div className="stat">
              <div className="num">{t.hero.stat1Num}</div>
              <div className="lbl">{t.hero.stat1Lbl}</div>
            </div>
            <div className="stat">
              <div className="num">{t.hero.stat2Num}</div>
              <div className="lbl">{t.hero.stat2Lbl}</div>
            </div>
            <div className="stat">
              <div className="num">{t.hero.stat3Num}</div>
              <div className="lbl">{t.hero.stat3Lbl}</div>
            </div>
          </div>
        </div>
        <div className="hero-portrait">
          <img src="assets/sinah-portrait.png" alt="Sinah Schwemmer at the SwimGym pool" />
          <div className="badge">{t.hero.portraitBadge}</div>
          <div className="corner">{t.hero.portraitCorner}</div>
        </div>
      </div>
      <div className="scroll-cue">
        <span>SCROLL</span>
        <div className="arrow"></div>
      </div>
    </section>
  );
}

function About({ t }) {
  // simple markdown-bold replacement
  const md = (s) => {
    const parts = s.split(/(\*\*[^*]+\*\*)/g);
    return parts.map((p, i) => p.startsWith('**') ? <strong key={i}>{p.slice(2,-2)}</strong> : <React.Fragment key={i}>{p}</React.Fragment>);
  };
  return (
    <section className="section about" id="about">
      <div className="container about-grid">
        <div>
          <div className="eyebrow" style={{marginBottom:20}}>{t.about.eyebrow}</div>
          <h2 className="display">
            {t.about.h}<br/>
            <span className="yellow">{t.about.h2}</span>
          </h2>
        </div>
        <div className="about-body">
          <p>{md(t.about.p1)}</p>
          <p>{md(t.about.p3)}</p>
          <div className="pull-quote">{t.about.pull}</div>
          <p style={{marginTop:24}}>{md(t.about.p2)}</p>
          <div className="implant-callout">
            <div className="icon">{t.about.callout}</div>
            <p>{t.about.calloutDesc}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function SectionHead({ idx, h, h2, desc }) {
  return (
    <div className="section-head">
      <div>
        <div className="index">{idx}</div>
        <h2 className="display" style={{marginTop:16}}>
          {h}<br/><span style={{color:'var(--accent)'}}>{h2}</span>
        </h2>
      </div>
      {desc && <div className="desc">{desc}</div>}
    </div>
  );
}

function Ribbon({ t }) {
  const lang = window.__lang || 'en';
  const items = lang === 'de' ? [
    "ALLE LEVEL", "TECHNIK · KRAFT · GELASSENHEIT", "AMSTERDAM", "1:1 & GRUPPE", "RACE-PREP", "DGS · DEUTSCH · ENGLISCH", "BUCH EINE STUNDE"
  ] : lang === 'nl' ? [
    "ALLE NIVEAUS", "TECHNIEK · KRACHT · KALMTE", "AMSTERDAM", "1:1 & GROEP", "WEDSTRIJDPREP", "DGS · DUITS · ENGELS", "BOEK EEN LES"
  ] : [
    "ALL LEVELS", "TECHNIQUE · STRENGTH · CALM", "AMSTERDAM", "1:1 & GROUP", "RACE PREP", "GSL · GERMAN · ENGLISH", "BOOK A SESSION"
  ];
  // duplicate for seamless loop
  const list = [...items, ...items];
  return (
    <div className="ribbon">
      <div className="ribbon-track">
        {list.map((s,i)=>(<span key={i}>{s}</span>))}
      </div>
    </div>
  );
}

Object.assign(window, { Nav, MeterHud, Hero, About, SectionHead, Ribbon });
