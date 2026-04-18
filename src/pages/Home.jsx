import { Link } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'
import './Home.css'

/* animated counter hook */
function useCounter(target, duration = 1800) {
  const [val, setVal] = useState(0)
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return
      obs.disconnect()
      let start = null
      const step = ts => {
        if (!start) start = ts
        const p = Math.min((ts - start) / duration, 1)
        setVal(Math.floor(p * target))
        if (p < 1) requestAnimationFrame(step)
      }
      requestAnimationFrame(step)
    }, { threshold: 0.5 })
    obs.observe(el)
    return () => obs.disconnect()
  }, [target, duration])
  return [val, ref]
}

function StatCard({ value, suffix = '', label, delay }) {
  const numeric = parseInt(value)
  const [count, ref] = useCounter(numeric)
  return (
    <div ref={ref} className={`stat-card glass au ${delay}`}>
      <span className="stat-val">{isNaN(numeric) ? value : `${count}${suffix}`}</span>
      <span className="stat-lbl">{label}</span>
    </div>
  )
}

const services = [
  { icon: '⚙️', title: 'Mechanical Services', color: '#ff6600',
    items: ['Piping Fabrication', 'Structural Steel', 'Tank Erection', 'Equipment Install', 'Welding & NDT', 'Commissioning'] },
  { icon: '🔧', title: 'Industrial Maintenance', color: '#ff8c00',
    items: ['Tank Cleaning & Repair', 'Valve Overhaul', 'Pipeline Leak Repair', 'Blasting & Coating', 'Equipment Overhaul', 'Plant Turnarounds'] },
  { icon: '🏗️', title: 'Resources & Supply', color: '#ffb347',
    items: ['Skilled Manpower', 'Equipment Rental', 'Materials Supply', 'Specialized Tools', 'PPE Supply', 'Heavy Machinery'] },
]

const certBadges = ['ASME','API','NACE','ISO','API 650','API 653','ASME B31.3','6G Welding']

export default function Home() {
  return (
    <div className="home-page">

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="hero">
        {/* Floating geometric shapes */}
        <div className="hero-shapes">
          <div className="shape shape-1" />
          <div className="shape shape-2" />
          <div className="shape shape-3" />
          <div className="shape shape-4" />
        </div>

        <div className="container hero-inner">
          <div className="hero-left">
            <div className="hero-badge au">
              <div className="badge-dot" />
              <span>Jubail, Kingdom of Saudi Arabia</span>
            </div>

            <h1 className="hero-title au d1">
              Reliability You Can<br />
              <span className="hero-gr">Lean On.</span><br />
              Strength You Can<br />
              <span className="hero-gr">See.</span>
            </h1>

            <p className="hero-sub au d2">
              A technically-driven contracting company serving Oil & Gas,
              Petrochemical, and Power sectors with mechanical construction,
              industrial maintenance, and specialized resource supply.
            </p>

            <div className="hero-btns au d3">
              <Link to="/services" className="btn btn-or">Explore Services</Link>
              <Link to="/about"    className="btn btn-ghost">Our Story →</Link>
            </div>

            <div className="hero-certs au d4">
              {certBadges.map(b => <span key={b} className="tag">{b}</span>)}
            </div>
          </div>

          <div className="hero-right au d2">
            <div className="hero-visual-wrap">
              <div className="hv-ring hv-ring-1" />
              <div className="hv-ring hv-ring-2" />
              <div className="hv-ring hv-ring-3" />
              <div className="hv-card glass-strong">
                <img src={`${import.meta.env.BASE_URL}companyLogo.jpeg`} alt="Ansar International" className="hv-logo" />
                <div className="hv-info">
                  <span className="hv-name">ANSAR INTERNATIONAL</span>
                  <span className="hv-sub">CO. LTD.</span>
                  <span className="hv-loc">📍 Jubail, Saudi Arabia</span>
                </div>
              </div>
              <div className="hv-float-1 glass">
                <span>⚙️</span>
                <span>Mechanical</span>
              </div>
              <div className="hv-float-2 glass">
                <span>🔧</span>
                <span>Industrial</span>
              </div>
              <div className="hv-float-3 glass">
                <span>🏗️</span>
                <span>Supply</span>
              </div>
            </div>
          </div>
        </div>

        {/* Stats strip */}
        <div className="container hero-stats">
          <StatCard value="15"  suffix="+" label="Years of Excellence" delay="d1" />
          <StatCard value="500" suffix="+" label="Projects Completed"  delay="d2" />
          <StatCard value="20"  suffix="+" label="Valued Clients"      delay="d3" />
          <StatCard value="0"   suffix=""  label="Incident Target"     delay="d4" />
        </div>
      </section>

      {/* ── SERVICES OVERVIEW ────────────────────────────────── */}
      <section className="section services-overview">
        <div className="container">
          <div className="sec-header">
            <span className="label">What We Do</span>
            <h2 className="heading">Three Divisions.<br /><span className="gr">One Partner.</span></h2>
            <p className="sub">End-to-end industrial solutions — from fabrication to live-line repairs, executed with precision and integrity.</p>
          </div>

          <div className="sov-grid">
            {services.map(s => (
              <div key={s.title} className="sov-card glass-strong">
                <div className="sov-icon-wrap" style={{ '--c': s.color }}>
                  <span>{s.icon}</span>
                  <div className="sov-icon-glow" />
                </div>
                <h3>{s.title}</h3>
                <ul className="sov-list">
                  {s.items.map(i => (
                    <li key={i}>
                      <span className="sov-dot" />
                      {i}
                    </li>
                  ))}
                </ul>
                <Link to="/services" className="sov-link">
                  View All <span>→</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT STRIP ──────────────────────────────────────── */}
      <section className="section about-strip">
        <div className="container about-strip-inner">
          <div className="as-left">
            <span className="label">Who We Are</span>
            <h2 className="heading">More Than a Contractor —<br /><span className="gr">A Dependable Partner</span></h2>
            <p className="sub">
              Trusted by leading operators, EPC contractors, and industrial clients across the Kingdom.
              Our team of qualified engineers, certified welders, and skilled technicians operate
              with precision, speed, and integrity.
            </p>
            <div className="as-checks">
              {[
                'Zero-Incident Safety Culture',
                'ASME / API / NACE / ISO Compliance',
                'Rapid Shutdown Mobilization',
                '6G-Certified Welders & NDT Inspectors',
                'Stop Work Authority for All Personnel',
                'Vision 2030 Aligned Operations',
              ].map(c => (
                <div key={c} className="as-check">
                  <div className="check-icon">✓</div>
                  <span>{c}</span>
                </div>
              ))}
            </div>
            <Link to="/about" className="btn btn-or" style={{ marginTop: '8px' }}>Learn More</Link>
          </div>

          <div className="as-right">
            <div className="as-card-stack">
              <div className="asc asc-back glass" />
              <div className="asc asc-mid glass" />
              <div className="asc asc-front glass-or">
                <div className="asc-front-inner">
                  {[
                    { num: '100%', txt: 'Client Satisfaction Goal' },
                    { num: 'Zero', txt: 'Incident Target' },
                    { num: '24/7', txt: 'Emergency Response' },
                    { num: 'KSA',  txt: 'Kingdom-Wide Coverage' },
                  ].map(r => (
                    <div key={r.txt} className="asc-row">
                      <span className="asc-num">{r.num}</span>
                      <span className="asc-txt">{r.txt}</span>
                    </div>
                  ))}
                  <div className="asc-badge">
                    <span>Vision 2030 ✦</span>
                    <span className="asc-badge-sub">Aligned & Committed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── QHSE BANNER ──────────────────────────────────────── */}
      <section className="qhse-banner-section">
        <div className="container">
          <div className="qhse-banner glass-strong">
            <div className="qb-glow" />
            <div className="qb-left">
              <span className="label">Safety & Quality</span>
              <h2 className="heading"><span className="gr">QHSE</span> is Our Foundation</h2>
              <p className="sub" style={{ maxWidth: '480px' }}>
                Our "Right First Time" approach ensures every project is executed with
                technical precision — zero incidents, 100% compliance, always.
              </p>
              <Link to="/qhse" className="btn btn-or" style={{ marginTop: '16px' }}>Read QHSE Policy</Link>
            </div>
            <div className="qb-pillars">
              {[
                { icon: '✅', label: 'Quality' },
                { icon: '🦺', label: 'Health' },
                { icon: '🛡️', label: 'Safety' },
                { icon: '🌱', label: 'Environment' },
              ].map(p => (
                <div key={p.label} className="qbp glass">
                  <span className="qbp-icon">{p.icon}</span>
                  <span className="qbp-label">{p.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────── */}
      <section className="section cta-section">
        <div className="container">
          <div className="cta-box glass-strong">
            <div className="cta-glow" />
            <div className="cta-rings">
              <div className="cr cr-1" />
              <div className="cr cr-2" />
            </div>
            <span className="label" style={{ justifyContent: 'center' }}>Start Today</span>
            <h2 className="heading" style={{ textAlign: 'center' }}>
              Ready to Work With Us?
            </h2>
            <p className="sub" style={{ textAlign: 'center', margin: '0 auto' }}>
              Reach out to discuss your project requirements and how Ansar International
              can deliver precision, reliability, and value.
            </p>
            <div className="cta-btns">
              <Link to="/contact" className="btn btn-or">Contact Us Today</Link>
              <Link to="/clients" className="btn btn-ghost">Our Clients</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
