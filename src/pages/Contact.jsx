import { useState } from 'react'
import './Contact.css'

export default function Contact() {
  const [form, setForm] = useState({ name:'', company:'', email:'', phone:'', subject:'', message:'' })
  const [sent, setSent] = useState(false)
  const change = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))
  const submit = e => {
    e.preventDefault()
    const body = `Name: ${form.name}
Company: ${form.company || 'N/A'}
Phone: ${form.phone || 'N/A'}
Email: ${form.email}
Service Area: ${form.subject}

Message:
${form.message}`
    window.location.href = `mailto:Info@ansararabia.com?subject=${encodeURIComponent(`[Website Enquiry] ${form.subject}`)}&body=${encodeURIComponent(body)}`
    setSent(true)
  }

  return (
    <div className="contact-page">
      <section className="pg-header">
        <div className="pg-header-glow" />
        <div className="container pg-header-inner">
          <span className="label au">Reach Out</span>
          <h1 className="pg-title au d1">Contact Us</h1>
          <p className="pg-sub au d2">
            Ready to discuss your project? We deliver industrial solutions with precision and reliability.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container ct-grid">
          {/* Left info */}
          <div className="ct-left">
            <div className="ct-info glass-or">
              <div className="ci-glow" />
              <h3>Get In Touch</h3>
              <div className="ci-items">
                {[
                  { icon: '📍', label: 'Address',  content: '4347 - Unit No.1 - 6931 SA,\nAl Jubail 35523, KSA' },
                  { icon: '📞', label: 'Phone',    content: '+966 54 513 7157',  href: 'tel:+966545137157' },
                  { icon: '✉️', label: 'Email',    content: 'info@ansararabia.com', href: 'mailto:info@ansararabia.com' },
                  { icon: '🌐', label: 'Website',  content: 'www.ansararabia.com', href: 'https://www.ansararabia.com', external: true },
                ].map(item => (
                  <div key={item.label} className="ci-item">
                    <div className="ci-icon-box">{item.icon}</div>
                    <div>
                      <div className="ci-label">{item.label}</div>
                      {item.href
                        ? <a href={item.href} className="ci-val link" target={item.external ? '_blank' : undefined} rel={item.external ? 'noreferrer' : undefined}>{item.content}</a>
                        : <div className="ci-val" style={{ whiteSpace: 'pre-line' }}>{item.content}</div>
                      }
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="ct-hours glass">
              <h4>Working Hours</h4>
              <div className="ch-rows">
                <div className="ch-row"><span>Sunday – Thursday</span><span className="ch-time">08:00 – 17:00</span></div>
                <div className="ch-row"><span>Friday – Saturday</span><span className="ch-time">Emergency Only</span></div>
              </div>
              <div className="ch-badge">
                <span className="ch-dot" />
                <span>24/7 Emergency Response Available</span>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="ct-right">
            {sent ? (
              <div className="glass-strong success-card">
                <div className="success-glow" />
                <div className="sc-icon">✓</div>
                <h3>Message Sent!</h3>
                <p>Thank you for reaching out. Our team will get back to you shortly.</p>
                <button className="btn btn-or" onClick={() => setSent(false)}>Send Another</button>
              </div>
            ) : (
              <form className="glass-strong ct-form" onSubmit={submit}>
                <div className="cf-header">
                  <h3>Send Us a Message</h3>
                  <p>Fill in the details below and we'll respond promptly.</p>
                </div>

                <div className="cf-row">
                  <div className="cf-group">
                    <label>Full Name *</label>
                    <input name="name" type="text" value={form.name} onChange={change} placeholder="Your full name" required />
                  </div>
                  <div className="cf-group">
                    <label>Company</label>
                    <input name="company" type="text" value={form.company} onChange={change} placeholder="Your company" />
                  </div>
                </div>
                <div className="cf-row">
                  <div className="cf-group">
                    <label>Email *</label>
                    <input name="email" type="email" value={form.email} onChange={change} placeholder="your@email.com" required />
                  </div>
                  <div className="cf-group">
                    <label>Phone</label>
                    <input name="phone" type="tel" value={form.phone} onChange={change} placeholder="+966 xx xxx xxxx" />
                  </div>
                </div>
                <div className="cf-group">
                  <label>Service Area *</label>
                  <select name="subject" value={form.subject} onChange={change} required>
                    <option value="">Select a service area</option>
                    {['Mechanical Services','Industrial Maintenance','Tank Repair & Cleaning','Pipeline Services','Manpower Supply','Equipment Rental','Materials Supply','Plant Turnaround','General Inquiry'].map(o => <option key={o}>{o}</option>)}
                  </select>
                </div>
                <div className="cf-group">
                  <label>Message *</label>
                  <textarea name="message" value={form.message} onChange={change} placeholder="Describe your project requirements..." rows={5} required />
                </div>
                <button type="submit" className="btn btn-or cf-submit">Send Message →</button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}
