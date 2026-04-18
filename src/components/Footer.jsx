import { Link } from 'react-router-dom'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top-glow" />
      <div className="footer-bg-orb" />

      <div className="container footer-grid">
        <div className="footer-brand">
          <Link to="/" className="footer-logo">
            <div className="fl-ring">
              <img src="/companyLogo.jpeg" alt="Ansar" />
            </div>
            <div>
              <span className="fn">ANSAR</span>
              <span className="fs">International Co. Ltd.</span>
            </div>
          </Link>
          <p className="footer-tagline">
            Reliability you can <span>Lean on.</span><br />
            Strength you can <span>See.</span>
          </p>
          <p className="footer-desc">
            A technically-driven industrial contracting partner serving
            Oil & Gas, Petrochemical, and Power sectors from Jubail, KSA.
          </p>
          <div className="footer-standards">
            {['ASME','API','NACE','ISO'].map(s => (
              <span key={s} className="tag">{s}</span>
            ))}
          </div>
        </div>

        <div className="footer-col">
          <h4>Navigation</h4>
          <ul>
            {[['/', 'Home'],['/about','About Us'],['/services','Services'],['/qhse','QHSE'],[ '/clients','Clients'],['/contact','Contact']].map(([to, label]) => (
              <li key={to}><Link to={to}>{label}</Link></li>
            ))}
          </ul>
        </div>

        <div className="footer-col">
          <h4>Divisions</h4>
          <ul>
            {['Mechanical Services','Industrial Maintenance','Resources & Supply','Equipment Rental','Manpower Supply','Plant Turnarounds'].map(s => (
              <li key={s}><span>{s}</span></li>
            ))}
          </ul>
        </div>

        <div className="footer-col">
          <h4>Contact</h4>
          <ul className="footer-contact">
            <li>
              <div className="fci">📍</div>
              <span>4347 - Unit No.1 - 6931 SA,<br />Al Jubail 35523, KSA</span>
            </li>
            <li>
              <div className="fci">📞</div>
              <a href="tel:+966545137157">+966 54 513 7157</a>
            </li>
            <li>
              <div className="fci">✉️</div>
              <a href="mailto:info@ansararabia.com">info@ansararabia.com</a>
            </li>
            <li>
              <div className="fci">🌐</div>
              <a href="https://www.ansararabia.com" target="_blank" rel="noreferrer">www.ansararabia.com</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="glow-line" style={{ margin: '0 28px' }} />

      <div className="container footer-bottom">
        <p>© {new Date().getFullYear()} Ansar International Co. Ltd. — All rights reserved.</p>
        <a href="https://www.rawstitch.in" target="_blank" rel="noreferrer" className="powered-by">
          Crafted by <span>RAW STITCH</span>
        </a>
      </div>
    </footer>
  )
}
