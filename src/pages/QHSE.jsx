import './QHSE.css'

const pillars = [
  { icon: '✅', label: 'Quality',     desc: '"Right First Time" — every fabrication, repair, and installation executed with technical precision to ASME, API, NACE, and ISO standards.' },
  { icon: '❤️', label: 'Health',      desc: 'Protection of our people through continuous HSE training, medical preparedness, and proactive occupational health measures.' },
  { icon: '🦺', label: 'Safety',      desc: 'Zero-Incident target. Stop Work Authority for all personnel. Rigorous risk assessments and hazard identification before escalation.' },
  { icon: '🌱', label: 'Environment', desc: 'Minimizing industrial footprint — strict waste management and pollution control in compliance with local environmental regulations.' },
]

const commitments = [
  'Right First Time approach in every project',
  'Zero Incidents — Stop Work Authority for all personnel',
  'Continuous training of our certified workforce',
  'Regular performance audits for 100% client satisfaction',
  'Integration of rigorous risk management practices',
  'Compliance with local environmental regulations',
  'Proactive hazard identification before escalation',
  'Strict ASME, API, NACE, and ISO standard adherence',
]

const standards = ['ASME','API','NACE','ISO','API 650','API 653','ASME B31.3','OEM Standards']

export default function QHSE() {
  return (
    <div className="qhse-page">
      <section className="pg-header">
        <div className="pg-header-glow" />
        <div className="container pg-header-inner">
          <span className="label au">Our Commitment</span>
          <h1 className="pg-title au d1">QHSE Policy</h1>
          <p className="pg-sub au d2">
            Quality, Health, Safety, and Environment are the pillars of our
            operational excellence at Ansar International.
          </p>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="section">
        <div className="container vm-grid">
          <div className="vm-vision glass-or">
            <div className="vm-inner">
              <div className="vm-icon-wrap">🎯</div>
              <span className="vm-lbl">Vision</span>
              <p className="vm-quote">
                "To be Saudi Arabia's most trusted name in industrial contracting known
                for technical excellence, integrity, and reliable delivery."
              </p>
            </div>
            <div className="vm-glow" />
          </div>
          <div className="vm-mission glass-strong">
            <div className="vm-icon-wrap">🚀</div>
            <span className="vm-lbl">Mission</span>
            <p className="vm-text">
              To pursue excellence in mechanical, industrial, and resource supply services
              through continual improvement of safety, quality, and operational performance.
              We are committed to building skilled teams, innovative practices, and strong
              client partnerships that enable us to deliver world-class service and
              long-term value in every sector we serve.
            </p>
          </div>
        </div>
      </section>

      {/* Policy statement */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="policy-stmt glass-strong">
            <div className="ps-accent" />
            <div className="ps-icon">"</div>
            <div className="ps-body">
              <span className="label" style={{ marginBottom: '16px' }}>QHSE Policy Statement</span>
              <p>At <strong style={{ color: 'var(--or)' }}>Ansar International</strong>, based in Jubail, Quality, Health, Safety, and Environment (QHSE) are the pillars of our operational excellence. We are committed to delivering high-performance mechanical and industrial solutions that strictly adhere to ASME, API, NACE, and ISO standards. Our "Right First Time" approach ensures that every fabrication, repair, and installation project is executed with technical precision, minimizing waste and maximizing efficiency for the Kingdom's Oil & Gas and Power sectors.</p>
              <p>Our primary mandate is the protection of our people, our clients' assets, and the environment. We foster a proactive safety culture where every team member is empowered with Stop Work Authority and trained to identify hazards before they escalate. By integrating rigorous risk management with a commitment to local environmental regulations, we ensure that our operations are as sustainable as they are productive.</p>
              <p>We believe that true partnership is built on reliability and integrity. Through continuous training of our certified workforce and regular performance audits, we strive for zero incidents and 100% client satisfaction. We don't just meet industry benchmarks; we aim to set them, ensuring that <strong style={{ color: 'var(--or)' }}>Ansar International</strong> remains a dependable leader in the Kingdom's industrial landscape.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Four Pillars */}
      <section className="section qhse-pillars-section">
        <div className="container">
          <div className="sec-hdr">
            <span className="label">Four Pillars</span>
            <h2 className="heading">Our QHSE <span className="gr">Framework</span></h2>
          </div>
          <div className="qhse-pillars-grid">
            {pillars.map((p, i) => (
              <div key={p.label} className={`qp-card glass au d${i + 1}`}>
                <div className="qp-icon-wrap">
                  <span>{p.icon}</span>
                  <div className="qp-ring" />
                </div>
                <div className="qp-label-big">{p.label}</div>
                <p>{p.desc}</p>
                <div className="qp-number">0{i + 1}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Commitments */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container commitments-wrap">
          <div className="cw-left">
            <span className="label">How We Operate</span>
            <h2 className="heading">Key <span className="gr">Commitments</span></h2>
            <p className="sub">These principles guide every decision, project, and team member across all operations.</p>
          </div>
          <div className="cw-list">
            {commitments.map((c, i) => (
              <div key={i} className="commit-item glass">
                <div className="ci-num">{String(i + 1).padStart(2, '0')}</div>
                <span>{c}</span>
                <div className="ci-bar" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Standards */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <h2 className="heading" style={{ textAlign: 'center', marginBottom: '40px' }}>
            Standards We <span className="gr">Comply With</span>
          </h2>
          <div className="stds-grid">
            {standards.map(s => (
              <div key={s} className="std-card glass-or">
                <div className="std-shine" />
                <span>{s}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
