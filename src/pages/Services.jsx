import { useState } from 'react'
import './Services.css'

const divisions = [
  {
    id: 'mech', icon: '⚙️', color: '#ff6600',
    title: 'Mechanical Services Division',
    tagline: 'End-to-end mechanical construction & fabrication',
    services: [
      { icon: '🔩', title: 'Piping Fabrication & Installation', tags: ['CS/SS Piping','HDPE/RTR','Spool Prefab','ASME B31.3','Hydro-testing','GTAW/SMAW'], desc: 'Comprehensive metallic and non-metallic pipe work from spool prefabrication to on-site erection, alignment, welding, and pressure testing.' },
      { icon: '🏗️', title: 'Structural Steel Fabrication & Erection', tags: ['Platforms','Pipe Racks','Skids & Frames','Certified Rigging'], desc: 'Construction of platforms, skids, support frames, and pipe racks by certified welders and riggers in compliance with project codes.' },
      { icon: '🛢️', title: 'Tank Fabrication & Erection', tags: ['API 650','Fixed & Floating Roofs','Plate Rolling','On-Site Erection'], desc: 'Construction of API storage tanks for oil and water service including plate rolling, fitting, welding, and hydro-testing.' },
      { icon: '⚙️', title: 'Equipment Installation & Plant Construction', tags: ['Static Equipment','Rotating Machinery','Grouting','Turnkey Works'], desc: 'End-to-end mechanical installation from foundations and grouting to final equipment alignment and turnkey delivery.' },
      { icon: '🔥', title: 'Welding & Custom Fabrication', tags: ['6G Certified','Pipeline Tie-ins','NDT X-ray / UT','WPS/PQR'], desc: 'Specialized welding by 6G-certified welders under strict QA/QC with non-destructive testing — X-ray and UT — to verify weld quality.' },
      { icon: '🔬', title: 'Commissioning Support', tags: ['Hydro-testing','Pneumatic Testing','Bolt Torquing','Pre-commissioning'], desc: 'Test and pre-commissioning including flushing, leak testing, and hydraulic bolt torquing and tensioning.' },
    ],
  },
  {
    id: 'ind', icon: '🔧', color: '#ff8c00',
    title: 'Industrial Services Division',
    tagline: 'Maintenance, repair & specialty services for live facilities',
    services: [
      { icon: '🛢️', title: 'Storage Tank Cleaning, Repair & Upgrading', tags: ['API 650/653','Bottom Plate Repair','IFR Seal Systems','Epoxy Lining'], desc: 'Full API 650/653 tank maintenance — internal cleaning, bottom plate replacement, roof repair, seal systems, blasting, and protective coatings.' },
      { icon: '🔩', title: 'Valve Overhauling & Repair', tags: ['Gate/Ball/Butterfly','PSV Calibration','Leak Testing','Live Greasing'], desc: 'Complete overhaul of all valve types: disassembly, lapping, seal replacement, pressure testing, and PSV recalibration to set pressure.' },
      { icon: '💧', title: 'Pipeline Maintenance & Leak Repair', tags: ['Live Line Repair','Hot Tapping','Composite Wrapping','Stoppling'], desc: 'Emergency leak repairs, engineered clamps, Clock Spring composite wrapping, hot tapping and line stoppling on pressurized systems.' },
      { icon: '🔨', title: 'Onsite Machining / Bolt Torquing', tags: ['Flange Facing','Pipe Cutting','Hydraulic Torquing','Tensioning'], desc: 'In-situ machining — flange facing, pipe cutting, valve seat resurfacing — plus hydraulic torque and tensioning for proper bolt preload.' },
      { icon: '⚙️', title: 'Static & Rotating Equipment Maintenance', tags: ['Heat Exchangers','Pump Overhauls','Laser Alignment','Dynamic Balancing'], desc: 'Full overhaul of pressure vessels, exchangers, pumps, compressors, turbines, and gearboxes to peak operational efficiency.' },
      { icon: '🎨', title: 'Blasting, Coating & Painting', tags: ['Grit/Sand Blast','Epoxy & Zinc','Fireproofing','Internal Linings'], desc: 'Surface preparation and industrial protective coatings — epoxy, polyurethane, zinc, and fireproofing paint systems applied to spec.' },
      { icon: '🧹', title: 'Industrial Cleaning & Decontamination', tags: ['Hydro Jetting','Chemical Cleaning','Catalyst Handling','Steam Blowing'], desc: 'Chemical cleaning, hydro-jetting, decontamination for hazardous hydrocarbons, vacuum truck services, and dry ice blasting.' },
      { icon: '🔄', title: 'Plant Turnarounds & Shutdowns', tags: ['Multi-disciplinary Teams','Critical Overhaul','Tight Schedules','Zero Downtime'], desc: 'Planning and execution of plant turnarounds with multi-disciplinary teams ensuring minimal downtime and on-schedule restart.' },
      { icon: '🏚️', title: 'Scaffolding & Civil Works', tags: ['Scaffold Design','Excavation','Shoring','Dewatering'], desc: 'Scaffold erection for safe access at heights and in confined spaces, plus civil works including excavation, shoring, and dewatering.' },
    ],
  },
  {
    id: 'supply', icon: '📦', color: '#ffb347',
    title: 'Resources & Material Supply Division',
    tagline: 'Specialized manpower, equipment & materials on demand',
    services: [
      { icon: '👷', title: 'Skilled Manpower Supply', tags: ['6G Welders','Engineers','HSE Officers','NDT Inspectors'], desc: 'Vetted engineers, project managers, 6G welders, pipe fitters, millwrights, riggers (Aramco certified), and scaffolders (CITB certified).' },
      { icon: '🚧', title: 'Equipment Rental & Heavy Machinery', tags: ['Excavators','Cranes','Boom Lifts','Generators','Vacuum Trucks'], desc: 'Full fleet: excavators, cranes, boom lifts, generators, water tankers, vacuum trucks, and transport vehicles.' },
      { icon: '🪛', title: 'Industrial Materials & Consumables', tags: ['CS/SS Piping','Valves & Flanges','Structural Steel','Welding Consumables'], desc: 'Piping, flanges, gaskets, valves, fasteners, structural steel sections, and welding consumables from approved manufacturers.' },
      { icon: '🧰', title: 'Specialized Products & Tools', tags: ['Leak Sealing Kits','Composite Repair','PPE','NDT Equipment'], desc: 'Leak sealing compounds, composite repair kits, insulation materials, cathodic protection anodes, PPE, and NDT instruments.' },
    ],
  },
]

export default function Services() {
  const [active, setActive] = useState('mech')
  const cur = divisions.find(d => d.id === active)

  return (
    <div className="services-page">
      <section className="pg-header">
        <div className="pg-header-glow" />
        <div className="container pg-header-inner">
          <span className="label au">What We Offer</span>
          <h1 className="pg-title au d1">Our Services</h1>
          <p className="pg-sub au d2">
            Three specialized divisions delivering comprehensive industrial solutions —
            from fabrication and maintenance to manpower and material supply.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          {/* Division tabs */}
          <div className="div-tabs">
            {divisions.map(d => (
              <button
                key={d.id}
                className={`div-tab ${active === d.id ? 'active' : ''}`}
                onClick={() => setActive(d.id)}
                style={{ '--tc': d.color }}
              >
                <div className="dt-icon-wrap">
                  <span>{d.icon}</span>
                  {active === d.id && <div className="dt-glow" />}
                </div>
                <div className="dt-text">
                  <span className="dt-title">{d.title}</span>
                  <span className="dt-sub">{d.tagline}</span>
                </div>
              </button>
            ))}
          </div>

          {/* Division header */}
          <div className="div-header glass-or">
            <div className="dh-icon">{cur.icon}</div>
            <div>
              <h2 className="dh-title">{cur.title}</h2>
              <p className="dh-sub">{cur.tagline}</p>
            </div>
            <div className="dh-count">{cur.services.length} Services</div>
          </div>

          {/* Service cards */}
          <div className="srv-grid">
            {cur.services.map((s, i) => (
              <div key={s.title} className={`srv-card glass au d${Math.min(i + 1, 6)}`}>
                <div className="srv-top">
                  <div className="srv-icon">{s.icon}</div>
                  <div className="srv-icon-shine" />
                </div>
                <h3 className="srv-title">{s.title}</h3>
                <p className="srv-desc">{s.desc}</p>
                <div className="srv-tags">
                  {s.tags.map(t => <span key={t} className="tag">{t}</span>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
