// Records, Coaching, Timeline, Gallery, Testimonials, Certs, Contact, Footer
const { useState: useState2 } = React;

// Placeholder content (empty gallery tiles, their "drop photos" note and the
// sample testimonials) stays in the code but is hidden. Set to true to show it.
const SHOW_PLACEHOLDERS = false;

// Section numbers after the testimonials move up by one while they are hidden.
// Replaces the leading number of an eyebrow such as "07 / Toolkit".
const sectionNo = (eyebrow, n) => eyebrow.replace(/^\d+/, String(n).padStart(2, '0'));

function Records({ t }) {
  const recs = [
    { y: t.record.r1Year, big: t.record.r1Title, sub: t.record.r1Sub, w: t.record.r1Where, tag: t.record.r1Tag },
    { y: t.record.r2Year, big: t.record.r2Title, sub: t.record.r2Sub, w: t.record.r2Where, tag: t.record.r2Tag },
    { y: t.record.r3Year, big: t.record.r3Title, sub: t.record.r3Sub, w: t.record.r3Where, tag: t.record.r3Tag, hot: true },
    { y: t.record.r4Year, big: t.record.r4Title, sub: t.record.r4Sub, w: t.record.r4Where, tag: t.record.r4Tag },
    { y: t.record.r5Year, big: t.record.r5Title, sub: t.record.r5Sub, w: t.record.r5Where, tag: t.record.r5Tag, hot: true },
    { y: t.record.r6Year, big: t.record.r6Title, sub: t.record.r6Sub, w: t.record.r6Where, tag: t.record.r6Tag },
  ];
  return (
    <section className="section achievements" id="record">
      <div className="container">
        <SectionHead idx={t.record.eyebrow} h={t.record.h} h2={t.record.h2} desc={t.record.desc} />
        <div className="records">
          {recs.map((r,i)=>(
            <div className="record" key={i}>
              {r.hot && <span className="badge-tiny">{r.tag}</span>}
              <div className="year">— {r.y}</div>
              <div className="big">{r.big}<br/><span className="sub">{r.sub}</span></div>
              <div className="where">{r.w}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Coaching({ t }) {
  const services = [
    { n: t.coach.s1n, ti: t.coach.s1t, d: t.coach.s1d, k1: t.coach.s1k1, v1: t.coach.s1v1, k2: t.coach.s1k2, v2: t.coach.s1v2 },
    { n: t.coach.s2n, ti: t.coach.s2t, d: t.coach.s2d, k1: t.coach.s2k1, v1: t.coach.s2v1, k2: t.coach.s2k2, v2: t.coach.s2v2 },
    { n: t.coach.s3n, ti: t.coach.s3t, d: t.coach.s3d, k1: t.coach.s3k1, v1: t.coach.s3v1, k2: t.coach.s3k2, v2: t.coach.s3v2 },
    { n: t.coach.s4n, ti: t.coach.s4t, d: t.coach.s4d, k1: t.coach.s4k1, v1: t.coach.s4v1, k2: t.coach.s4k2, v2: t.coach.s4v2 },
  ];
  return (
    <section className="section coaching" id="coaching">
      <div className="container">
        <SectionHead idx={t.coach.eyebrow} h={t.coach.h} h2={t.coach.h2} desc={t.coach.desc} />
        <div className="services">
          {services.map((s,i)=>(
            <a href="#contact" key={i} className="service" style={{textDecoration:'none', color:'inherit'}}>
              <div className="num">/ {s.n}</div>
              <h3>{s.ti}</h3>
              <p>{s.d}</p>
              <div className="meta">
                <div className="item"><span className="k">{s.k1}</span><span className="v">{s.v1}</span></div>
                <div className="item"><span className="k">{s.k2}</span><span className="v">{s.v2}</span></div>
              </div>
              <div className="service-cta">{t.coach.cta}</div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function Timeline({ t }) {
  const lang = window.__lang || 'en';
  const items = lang === 'de' ? [
    { when: "2024+", h: "SwimGym Coach", where: "Amsterdam · Niederlande", p: "Coaching aller Level — von Anfänger:innen bis fortgeschrittenen Schwimmer:innen.", tag: "Coach" },
    { when: "2020-2024", h: "BA Sportökonomie", where: "Deutsche Hochschule für Prävention und Gesundheit, München", p: "Wissenschaftliche Grundlage für Training, Bewegung und Performance.", tag: "Studium" },
    { when: "2020-2024", h: "Studio-Leitung & EMS-Trainerin", where: "Bodystreet, Neumarkt i.d. Opf.", p: "Personal Training, Fitness-Konsultationen, Event-Organisation.", tag: "Coach" },
    { when: "2014", h: "EM Gehörlose", where: "Russland", p: "Europameisterschaft im Schwimmen.", tag: "Athletin" },
    { when: "2013", h: "Deaflympics", where: "Sofia, Bulgarien", p: "Vertretung Deutschlands — Wettkampf mit visuellen Signalen.", tag: "Athletin" },
    { when: "2015-2017", h: "Fachabitur Soziales", where: "Bayreuth", p: "Sozialwesen-Schwerpunkt.", tag: "Bildung" },
    { when: "2017-2018", h: "Work & Travel Australien", where: "Sydney · Bundaberg", p: "Marley Spoon Logistik · Mango-Farm. Resilienz und Anpassung.", tag: "Leben" },
  ] : lang === 'nl' ? [
    { when: "2024+", h: "SwimGym Coach", where: "Amsterdam · Nederland", p: "Coaching van alle niveaus — van absolute beginners tot gevorderde zwemmers.", tag: "Coach" },
    { when: "2020-2024", h: "BA Sporteconomie", where: "Deutsche Hochschule für Prävention und Gesundheit, München", p: "Wetenschappelijke basis voor training, beweging en prestatie.", tag: "Studie" },
    { when: "2020-2024", h: "Studio Manager & EMS Trainer", where: "Bodystreet, Neumarkt i.d. Opf.", p: "Personal training, fitnessconsulten, event-organisatie.", tag: "Coach" },
    { when: "2014", h: "EK Doven", where: "Rusland", p: "Europees zwemkampioenschap.", tag: "Atleet" },
    { when: "2013", h: "Deaflympics", where: "Sofia, Bulgarije", p: "Vertegenwoordigde Duitsland — wedstrijd op visuele signalen.", tag: "Atleet" },
    { when: "2015-2017", h: "Fachabitur Sociaal", where: "Bayreuth", p: "Specialisatie sociale diensten.", tag: "Educatie" },
    { when: "2017-2018", h: "Work & Travel Australië", where: "Sydney · Bundaberg", p: "Marley Spoon logistiek · mangoplukken. Veerkracht.", tag: "Leven" },
  ] : [
    { when: "2024+", h: "SwimGym Coach", where: "Amsterdam · NL", p: "Coaching all levels — from absolute beginners to advanced swimmers.", tag: "Coach" },
    { when: "2020-2024", h: "BA Sports Economics", where: "Deutsche Hochschule für Prävention und Gesundheit, Munich", p: "Scientific foundation for training, movement, and performance.", tag: "Study" },
    { when: "2020-2024", h: "Studio Mgmt & EMS Trainer", where: "Bodystreet, Neumarkt i.d. Opf.", p: "Personal training, fitness consultations, event programming.", tag: "Coach" },
    { when: "2014", h: "Euro Deaf Champs", where: "Russia", p: "European Deaf Swimming Championships.", tag: "Athlete" },
    { when: "2013", h: "Deaflympics", where: "Sofia, Bulgaria", p: "Representing Germany — competition on visual start signals.", tag: "Athlete" },
    { when: "2015-2017", h: "Fachabitur Social", where: "Bayreuth", p: "Specialised higher education in social services.", tag: "Education" },
    { when: "2017-2018", h: "Work & Travel Australia", where: "Sydney · Bundaberg", p: "Marley Spoon logistics · mango farm work. Resilience and adaptability.", tag: "Life" },
  ];
  const isAthlete = (tag) => /Athlete|Athletin|Atleet/.test(tag);
  return (
    <section className="section timeline" id="journey">
      <div className="container">
        <SectionHead idx={t.journey.eyebrow} h={t.journey.h} h2={t.journey.h2} desc={t.journey.desc} />
        <div className="timeline-track">
          {items.map((it,i)=>(
            <div className="t-item" key={i}>
              <div className="when">{it.when}</div>
              <div>
                <h3>{it.h}</h3>
                <div className="where">{it.where}</div>
                <p>{it.p}</p>
              </div>
              <div className={"tag " + (isAthlete(it.tag) ? "athlete" : "")}>{it.tag}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Gallery({ t }) {
  const tiles = [
    { cls: "g1", lbl: "POOLSIDE PORTRAIT", real: true, src: "assets/sinah-portrait.png" },
    { cls: "g2", lbl: "TECHNIQUE CLINIC · LANE 03" },
    { cls: "g3", lbl: "PODIUM · DEAFLYMPICS" },
    { cls: "g4", lbl: "1:1 SESSION" },
    { cls: "g5", lbl: "OPEN WATER" },
    { cls: "g6", lbl: "GROUP DRILL" },
  ].filter(tile => SHOW_PLACEHOLDERS || tile.real);
  return (
    <section className="section gallery">
      <div className="container">
        <SectionHead idx={t.gallery.eyebrow} h={t.gallery.h} h2={t.gallery.h2} desc={SHOW_PLACEHOLDERS ? t.gallery.desc : null} />
        <div className={"gallery-grid" + (tiles.length === 1 ? " single" : "")}>
          {tiles.map((tile,i)=>(
            <div key={i} className={"g-tile " + tile.cls + (tile.real ? " real" : "")}>
              <span className="corner-tag">{String(i+1).padStart(2,'0')} / {String(tiles.length).padStart(2,'0')}</span>
              {tile.real ? <img src={tile.src} alt="" /> : <span className="label">[ {tile.lbl} ]<br/><span style={{opacity:0.6}}>drop image</span></span>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials({ t }) {
  if (!SHOW_PLACEHOLDERS) return null;
  const lang = window.__lang || 'en';
  const items = lang === 'de' ? [
    { stars:"★★★★★", q:"„SINAH HAT MEINE TECHNIK IN ZWEI MONATEN VERÄNDERT — JEDER METER FÜHLT SICH JETZT LEICHTER AN.“", n:"Lara K.", r:"Master-Schwimmerin · Amsterdam" },
    { stars:"★★★★★", q:"„KLAR, GEDULDIG, WAHNSINNIG ANALYTISCH. ICH SCHWIMME ZUM ERSTEN MAL OHNE ANGST.“", n:"Tomás R.", r:"Erwachsenen-Anfänger" },
    { stars:"★★★★★", q:"„ALS GEHÖRLOSER SCHWIMMER FÜHLE ICH MICH ZUM ERSTEN MAL VOLLSTÄNDIG GECOACHT.“", n:"Jonas M.", r:"Wettkampf-Schwimmer" },
  ] : lang === 'nl' ? [
    { stars:"★★★★★", q:"„SINAH HEEFT MIJN TECHNIEK IN TWEE MAANDEN GETRANSFORMEERD — ELKE METER VOELT NU LICHTER.”", n:"Lara K.", r:"Masters Zwemmer · Amsterdam" },
    { stars:"★★★★★", q:"„DUIDELIJK, GEDULDIG, ONGELOFELIJK ANALYTISCH. IK ZWEM VOOR HET EERST ZONDER ANGST.”", n:"Tomás R.", r:"Volwassen Beginner" },
    { stars:"★★★★★", q:"„ALS DOVE ZWEMMER VOEL IK ME VOOR HET EERST VOLLEDIG GECOACHT.”", n:"Jonas M.", r:"Wedstrijdzwemmer" },
  ] : [
    { stars:"★★★★★", q:"\"SINAH TRANSFORMED MY TECHNIQUE IN TWO MONTHS — EVERY METRE FEELS CHEAPER NOW.\"", n:"Lara K.", r:"Masters Swimmer · Amsterdam" },
    { stars:"★★★★★", q:"\"CLEAR, PATIENT, INCREDIBLY ANALYTICAL. I'M SWIMMING WITHOUT FEAR FOR THE FIRST TIME.\"", n:"Tomás R.", r:"Adult Beginner" },
    { stars:"★★★★★", q:"\"AS A DEAF SWIMMER, I'VE NEVER FELT THIS COMPLETELY COACHED BEFORE.\"", n:"Jonas M.", r:"Competitive Swimmer" },
  ];
  return (
    <section className="section testimonials">
      <div className="container">
        <SectionHead idx={t.voices.eyebrow} h={t.voices.h} h2={t.voices.h2} desc={t.voices.desc} />
        <div className="testi-grid">
          {items.map((it,i)=>(
            <div className="testi" key={i}>
              <div className="stars">{it.stars}</div>
              <blockquote>{it.q}</blockquote>
              <div className="by">
                <div className="av">{it.n[0]}</div>
                <div>
                  <div className="name">{it.n}</div>
                  <div className="role">{it.r}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Certs({ t }) {
  const lang = window.__lang || 'en';
  const certs = [
    { n: lang==='en'?"BA Sports Economics":lang==='de'?"BA Sportökonomie":"BA Sporteconomie", p: "Deutsche Hochschule für Prävention und Gesundheit, Munich", y: "2020-24" },
    { n: lang==='en'?"Fitness Coach":lang==='de'?"Fitnesscoach":"Fitness Coach", p: "BSA-Akademie, Munich", y: "Oct 2021" },
    { n: lang==='en'?"Sales & Service Specialist":lang==='de'?"Sales & Service":"Sales & Service", p: "BSA-Akademie, Munich", y: "Aug 2021" },
    { n: "Entrepreneurship", p: "BSA-Akademie, Munich", y: "Sep 2021" },
    { n: lang==='en'?"Personal Training Cert.":lang==='de'?"Personal-Training-Zert.":"Personal Trainer Cert.", p: "Bodystreet · 4 yrs in studio", y: "2020-24" },
    { n: "Fachabitur (Social)", p: "Bayreuth", y: "2015-17" },
  ];
  const langs = [
    { l: lang==='nl'?"Duits":(lang==='de'?"Deutsch":"German"), level: lang==='en'?"Native":lang==='de'?"Muttersprache":"Moedertaal", v: 100 },
    { l: lang==='nl'?"Engels":(lang==='de'?"Englisch":"English"), level: lang==='en'?"Fluent":lang==='de'?"Fließend":"Vloeiend", v: 95 },
    { l: lang==='nl'?"Nederlands":(lang==='de'?"Niederländisch":"Dutch"), level: lang==='en'?"Conversational":lang==='de'?"Konversation":"Gesproken", v: 70 },
    { l: lang==='nl'?"Duitse Gebarentaal":(lang==='de'?"DGS":"German Sign"), level: lang==='en'?"Fluent":lang==='de'?"Fließend":"Vloeiend", v: 95 },
  ];
  return (
    <section className="section certs">
      <div className="container">
        <SectionHead idx={sectionNo(t.certs.eyebrow, SHOW_PLACEHOLDERS ? 7 : 6)} h={t.certs.h} h2={t.certs.h2} />
        <div className="certs-grid">
          <div className="certs-col">
            <h3>{t.certs.certs}</h3>
            <ul className="cert-list">
              {certs.map((c,i)=>(
                <li key={i}>
                  <div>
                    <div className="name">{c.n}</div>
                    <div className="place">{c.p}</div>
                  </div>
                  <div className="yr">{c.y}</div>
                </li>
              ))}
            </ul>
          </div>
          <div className="certs-col">
            <h3>{t.certs.langs}</h3>
            <div className="lang-row">
              {langs.map((l,i)=>(
                <div className="lang-card" key={i}>
                  <div className="l">{l.l}</div>
                  <div className="level">{l.level}</div>
                  <div className="bar"><i style={{width:l.v+'%'}}></i></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact({ t }) {
  const [sent, setSent] = useState2(false);
  return (
    <section className="section contact" id="contact">
      <div className="container contact-grid">
        <div>
          <div className="eyebrow" style={{marginBottom:24}}>{sectionNo(t.contact.eyebrow, SHOW_PLACEHOLDERS ? 8 : 7)}</div>
          <h2 className="display">
            {t.contact.h}<br/>
            <span className="y">{t.contact.h2}</span><br/>
            {t.contact.h3}
          </h2>
          <p className="lead">{t.contact.lead}</p>
          <div className="contact-direct">
            <div className="item">
              <div className="k">{t.contact.eAddr}</div>
              <div className="v" style={{fontSize:16}}>{t.contact.emailVal}</div>
            </div>
            <div className="item">
              <div className="k">{t.contact.phoneAddr}</div>
              <div className="v">{t.contact.phoneVal}</div>
            </div>
          </div>
        </div>
        <form className="contact-form" onSubmit={(e)=>{
          // No form service: build a prefilled email and hand it to the visitor's own mail app.
          e.preventDefault();
          const f = new FormData(e.currentTarget);
          const v = (k) => String(f.get(k) || '').trim();
          const body = [
            t.contact.name + ': ' + v('name'),
            t.contact.email + ': ' + v('email'),
            t.contact.level + ': ' + v('level'),
            '',
            t.contact.goal,
            v('goal'),
          ].join('\r\n');
          const subject = t.contact.subject + (v('name') ? ' (' + v('name') + ')' : '');
          window.location.href = 'mailto:' + t.contact.emailVal +
            '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
          setSent(true);
        }}>
          <div className="field">
            <label>{t.contact.name}</label>
            <input type="text" name="name" autoComplete="name" required />
          </div>
          <div className="field">
            <label>{t.contact.email}</label>
            <input type="email" name="email" autoComplete="email" required />
          </div>
          <div className="field">
            <label>{t.contact.level}</label>
            <select name="level">
              <option>{t.contact.lvl1}</option>
              <option>{t.contact.lvl2}</option>
              <option>{t.contact.lvl3}</option>
              <option>{t.contact.lvl4}</option>
            </select>
          </div>
          <div className="field">
            <label>{t.contact.goal}</label>
            <textarea name="goal" rows="3"></textarea>
          </div>
          <button type="submit" className="btn-primary">
            {sent ? t.contact.opened : t.contact.send}
          </button>
          {sent && <p style={{marginTop:16, fontSize:14, lineHeight:1.5}} role="status" aria-live="polite">{t.contact.openedNote}</p>}
        </form>
      </div>
    </section>
  );
}

function Footer({ t }) {
  return (
    <footer className="foot">
      <div>{t.foot.left}</div>
      <div>{t.foot.right}</div>
    </footer>
  );
}

Object.assign(window, { SHOW_PLACEHOLDERS, Records, Coaching, Timeline, Gallery, Testimonials, Certs, Contact, Footer });
