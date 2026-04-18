import './Clients.css'

const clients = [
  { name: 'SABIC',                          sector: 'Petrochemical',  tier: 1, img: '/images/sabic.jpeg' },
  { name: 'Saudi Aramco',                   sector: 'Oil & Gas',      tier: 1, img: '/images/aramco.png' },
  { name: 'SATORP',                         sector: 'Refinery',       tier: 1, img: '/images/satorp.jpeg' },
  { name: 'Saudi Electricity Company',      sector: 'Power',          tier: 1, img: '/images/electricity company.jpeg' },
  { name: 'MARAFIQ',                        sector: 'Utilities',      tier: 1, img: '/images/Marafiq.jpeg' },
  { name: 'Hyundai E&C',                    sector: 'EPC Contractor', tier: 2, img: '/images/Hyundai.png' },
  { name: 'TASNEE',                         sector: 'Petrochemical',  tier: 2, img: '/images/tasnee.png' },
  { name: 'Royal Commission Jubail & Yanbu',sector: 'Government',     tier: 2, img: '/images/Royal comission.png' },
  { name: 'Sadara',                         sector: 'Petrochemical',  tier: 2, img: '/images/sadara.jpeg' },
  { name: 'Al-Tamimi Industrial',           sector: 'Industrial',     tier: 2, img: '/images/tamimi.jpeg' },
  { name: 'Advanced',                       sector: 'Industrial',     tier: 2, img: '/images/advanced.png' },
  { name: 'Siemens',                        sector: 'Technology',     tier: 2, img: '/images/Siemens.png' },
  { name: 'KENTZ',                          sector: 'EPC Contractor', tier: 3, img: '/images/kentz.jpeg' },
  { name: 'JESCO',                          sector: 'Construction',   tier: 3, img: '/images/jesco.png' },
  { name: 'Chemanol',                       sector: 'Petrochemical',  tier: 3, img: '/images/chemanol.png' },
  { name: 'Sahara Petrochemicals',          sector: 'Petrochemical',  tier: 3, img: '/images/sahara.png' },
  { name: 'SAFCO',                          sector: 'Petrochemical',  tier: 3, img: '/images/safco.jpeg' },
  { name: 'SASREF',                         sector: 'Refinery',       tier: 3, img: '/images/sasref.png' },
  { name: 'WISON',                          sector: 'EPC Contractor', tier: 3, img: '/images/wison.png' },
  { name: 'KBR',                            sector: 'EPC Contractor', tier: 3, img: '/images/kbr.png' },
]

const sectors = [...new Set(clients.map(c => c.sector))]

const colorMap = {
  'Oil & Gas': '#ff6600', 'Petrochemical': '#ff8c00', 'Refinery': '#ffb347',
  'Power': '#ff6600', 'Utilities': '#ff8c00', 'EPC Contractor': '#ffb347',
  'Industrial': '#ff6600', 'Government': '#ff8c00', 'Technology': '#ffb347',
  'Construction': '#ff6600',
}

export default function Clients() {
  return (
    <div className="clients-page">
      <section className="pg-header">
        <div className="pg-header-glow" />
        <div className="container pg-header-inner">
          <span className="label au">Our Partners</span>
          <h1 className="pg-title au d1">Our Valued Clients</h1>
          <p className="pg-sub au d2">
            Trusted by leading operators, EPC contractors, and industrial clients
            across the Kingdom of Saudi Arabia.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="section-sm">
        <div className="container cl-stats">
          {[
            { val: '20+', lbl: 'Major Clients' },
            { val: '15+', lbl: 'Years of Trust' },
            { val: '100%', lbl: 'Satisfaction Goal' },
            { val: 'KSA',  lbl: 'Kingdom-Wide Coverage' },
          ].map(s => (
            <div key={s.lbl} className="cls-card glass">
              <span className="cls-val">{s.val}</span>
              <span className="cls-lbl">{s.lbl}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Client grid */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="sec-hdr">
            <span className="label">Client Portfolio</span>
            <h2 className="heading">Industry Leaders <span className="gr">Who Trust Us</span></h2>
          </div>
          <div className="cl-grid">
            {clients.map((c, i) => (
              <div key={c.name} className={`cl-card glass au d${Math.min((i % 6) + 1, 6)}`}>
                <div className="cl-avatar cl-logo-wrap" style={{ '--cc': colorMap[c.sector] || 'var(--or)' }}>
                  <img src={c.img} alt={c.name} className="cl-logo-img" />
                  <div className="cl-avatar-ring" />
                </div>
                <span className="cl-name">{c.name}</span>
                <span className="cl-sector tag">{c.sector}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sectors breakdown */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="sec-hdr">
            <span className="label">Industries Served</span>
            <h2 className="heading">Sectors We <span className="gr">Operate In</span></h2>
          </div>
          <div className="sectors-grid">
            {sectors.map(s => (
              <div key={s} className="sector-card glass" style={{ '--sc': colorMap[s] || 'var(--or)' }}>
                <div className="sc-dot" />
                <span>{s}</span>
                <span className="sc-count">{clients.filter(c => c.sector === s).length} clients</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="sec-hdr" style={{ alignItems: 'center', textAlign: 'center' }}>
            <span className="label">What They Say</span>
            <h2 className="heading">Client <span className="gr">Testimonials</span></h2>
          </div>
          <div className="testi-grid">
            {[
              { text: 'Ansar International consistently delivers on time and to the highest standards. Their technical expertise in piping and valve maintenance is unmatched across the region.', company: 'Major Saudi Petrochemical Operator', role: 'Operations Director' },
              { text: 'Their shutdown execution is precise and their HSE compliance is exemplary. They mobilized a multi-disciplinary team within 48 hours and delivered zero incidents.', company: 'EPC Contractor, Jubail Industrial City', role: 'Project Manager' },
            ].map((t, i) => (
              <div key={i} className="testi-card glass-strong">
                <div className="tc-quote">"</div>
                <div className="tc-stars">{'★'.repeat(5)}</div>
                <p className="tc-text">{t.text}</p>
                <div className="tc-footer">
                  <div className="tc-avatar">{t.company.charAt(0)}</div>
                  <div>
                    <div className="tc-company">{t.company}</div>
                    <div className="tc-role">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
