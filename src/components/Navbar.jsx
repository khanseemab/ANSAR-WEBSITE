import { useState, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'
import './Navbar.css'

const links = [
  { to: '/',         label: 'Home' },
  { to: '/about',    label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/qhse',     label: 'QHSE' },
  { to: '/clients',  label: 'Clients' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <>
      <nav className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
        <div className="nav-inner">

          {/* Logo */}
          <Link to="/" className="nav-logo" onClick={() => setOpen(false)}>
            <div className="logo-ring">
              <img src="/companyLogo.jpeg" alt="Ansar" className="logo-img" />
              <div className="logo-pulse" />
            </div>
            <div className="logo-text">
              <span className="logo-name">ANSAR</span>
              <span className="logo-sub">International Co. Ltd.</span>
            </div>
          </Link>

          {/* Desktop links */}
          <ul className="nav-links">
            {links.map(l => (
              <li key={l.to}>
                <NavLink
                  to={l.to}
                  end={l.to === '/'}
                  className={({ isActive }) => `nav-lnk ${isActive ? 'active' : ''}`}
                >
                  {l.label}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Right controls */}
          <div className="nav-controls">
            <Link to="/contact" className="btn btn-or nav-btn">Get In Touch</Link>
          </div>

          {/* Hamburger */}
          <button
            className={`hamburger ${open ? 'open' : ''}`}
            onClick={() => setOpen(v => !v)}
            aria-label="menu"
          >
            <span /><span /><span />
          </button>
        </div>
      </nav>

      {/* Mobile drawer — outside nav so it doesn't inherit border-radius clip */}
      <div className={`nav-drawer ${open ? 'open' : ''}`}>
        <ul>
          {links.map(l => (
            <li key={l.to}>
              <NavLink
                to={l.to}
                end={l.to === '/'}
                className={({ isActive }) => `drawer-lnk ${isActive ? 'active' : ''}`}
                onClick={() => setOpen(false)}
              >
                {l.label}
              </NavLink>
            </li>
          ))}
          <li className="drawer-actions">
            <Link to="/contact" className="btn btn-or drawer-cta" onClick={() => setOpen(false)}>
              Get In Touch
            </Link>
          </li>
        </ul>
      </div>
      {open && <div className="nav-overlay" onClick={() => setOpen(false)} />}
    </>
  )
}
