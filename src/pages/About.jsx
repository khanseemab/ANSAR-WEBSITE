import './About.css'

const values = [
  { icon: '🎯', title: 'Technical Excellence', desc: 'Every project executed by certified engineers, 6G welders, and skilled technicians to the highest international standards.' },
  { icon: '🛡️', title: 'Safety First',         desc: 'Zero-Incident culture. Stop Work Authority empowered to every team member. Rigorous risk assessments on every site.' },
  { icon: '🤝', title: 'Integrity',             desc: 'Transparent, reliable partnerships built on trust, honesty, and a proven delivery track record across the Kingdom.' },
  { icon: '⚡', title: 'Responsiveness',        desc: 'Rapid mobilization for shutdowns, emergency live-line repairs, and critical plant operations without delay.' },
  { icon: '🌱', title: 'Sustainability',        desc: 'Environmental stewardship integrated into every operation — waste minimization and pollution control as standard.' },
  { icon: '📐', title: 'Precision',             desc: '"Right First Time" on every fabrication, repair, and installation project — minimizing rework and maximizing efficiency.' },
]

const departments = [
  { name: 'QHSE Manager',               color: '#ff6600', roles: ['Quality Supervisor','Quality Inspector','HSE Supervisor','HSE Officer','Supply Chain Manager','Logistics Supervisor','Procurement Supervisor','Facility/Store Supervisor'] },
  { name: 'Business Dev. Manager',       color: '#ff8c00', roles: ['BD Executive','Estimation Supervisor'] },
  { name: 'Operations Manager',          color: '#ffb347', roles: ['Workshop Manager','Workshop Supervisor','Project Manager','Construction Manager','Sourcing Manager','Coordinator'] },
  { name: 'Finance Manager',             color: '#ff6600', roles: ['Accounts Supervisor','Internal Auditor'] },
  { name: 'HR & Admin',                  color: '#ff8c00', roles: ['HR Supervisor','GRO','Time Keeper','Project Controls Manager','Resource Planner','Planning Supervisor'] },
]

export default function About() {
  return (
    <div className="about-page">
      {/* Page header */}
      <section className="pg-header">
        <div className="pg-header-glow" />
        <div className="container pg-header-inner">
          <span className="label au">Who We Are</span>
          <h1 className="pg-title au d1">About Ansar International</h1>
          <p className="pg-sub au d2">
            A dependable industrial partner delivering real-world solutions with confidence
            and competence from Jubail, Kingdom of Saudi Arabia.
          </p>
        </div>
      </section>

      {/* About Content */}
      <section className="section">
        <div className="container about-body">
          <div className="ab-text">
            <span className="label">Our Story</span>
            <h2 className="heading">Trusted Across<br /><span className="gr">The Kingdom</span></h2>
            <div className="ab-paras">
              <p>Based in Jubail, Kingdom of Saudi Arabia, we are a technically-driven contracting company serving the Oil & Gas, Petrochemical, and Power sectors with a focus on mechanical construction, industrial maintenance, and specialized resource supply.</p>
              <p>We deliver high-performance solutions across fabrication, piping, tank repairs, valve maintenance, RTR systems, leak sealing, excavation, blasting, and equipment installation — all executed in compliance with ASME, API, NACE, and ISO standards.</p>
              <p>Our strength lies in our team of qualified engineers, certified welders, skilled technicians, and experienced managers, supported by a solid HSE framework and proven execution track record. Whether executing critical shutdowns, performing live system repairs, or mobilizing specialized manpower and heavy equipment, we operate with precision, speed, and integrity.</p>
              <p>Trusted by leading operators, EPC contractors, and industrial clients across the Kingdom, we are more than just a contractor — we are a dependable partner delivering real-world solutions with confidence and competence.</p>
            </div>
          </div>
          <div className="ab-card glass-or">
            <div className="abc-header">
              <img src="/companyLogo.jpeg" alt="Ansar" className="abc-logo" />
              <div>
                <div className="abc-name">ANSAR INTERNATIONAL</div>
                <div className="abc-sub">CO. LTD.</div>
              </div>
            </div>
            <div className="abc-rows">
              {[
                ['Location',   'Jubail, Saudi Arabia'],
                ['Est.',       'Jubail Industrial City'],
                ['Sectors',    'Oil & Gas, Petrochemical, Power'],
                ['Standards',  'ASME, API, NACE, ISO'],
                ['Focus',      'Mechanical & Industrial'],
                ['Alignment',  'Vision 2030'],
                ['Website',    'ansararabia.com'],
              ].map(([k,v]) => (
                <div key={k} className="abc-row">
                  <span className="abc-key">{k}</span>
                  <span className="abc-val">{v}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section values-section">
        <div className="container">
          <div className="sec-hdr">
            <span className="label">Our Foundation</span>
            <h2 className="heading"><span className="gr">Core Values</span></h2>
          </div>
          <div className="values-grid">
            {values.map((v, i) => (
              <div key={v.title} className={`val-card glass au d${(i % 6) + 1}`}>
                <div className="val-icon-wrap">
                  <span>{v.icon}</span>
                  <div className="val-icon-ring" />
                </div>
                <h3>{v.title}</h3>
                <p>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Org Chart */}
      <section className="section org-section">
        <div className="container">
          <div className="sec-hdr">
            <span className="label">Leadership</span>
            <h2 className="heading">Organization <span className="gr">Structure</span></h2>
          </div>

          <div className="org-wrap">
            {/* CEO */}
            <div className="org-ceo glass-or">
              <div className="ceo-pulse" />
              <span className="ceo-icon">👔</span>
              <span className="ceo-label">CEO</span>
            </div>
            <div className="org-connector" />

            {/* Departments */}
            <div className="org-depts">
              {departments.map(d => (
                <div key={d.name} className="org-dept">
                  <div className="dept-card glass" style={{ '--dc': d.color }}>
                    <div className="dept-dot" />
                    <span>{d.name}</span>
                  </div>
                  <div className="dept-roles">
                    {d.roles.map(r => (
                      <div key={r} className="dept-role glass">{r}</div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
