const features = [
  { num: "01", title: "Real-Time Issue Sync", body: "Issues raised by QA appear instantly for developers and managers. Sub-second sync, no polling, no refresh.", stat: "<1s", statL: "Sync latency" },
  { num: "02", title: "Role-Based Access", body: "Managers see everything. QA raises and tracks. Developers fix and close. Every stakeholder gets exactly the right view.", stat: "3", statL: "Distinct roles" },
  { num: "03", title: "Enterprise Security", body: "256-bit encryption, full audit logs, and fine-grained permissions. SOC 2 Type II compliant out of the box.", stat: "SOC 2", statL: "Compliant" },
  { num: "04", title: "Blazing Performance", body: "Built on edge infrastructure. Pages load in under 50ms anywhere in the world, even with thousands of open issues.", stat: "<50ms", statL: "Response time" },
  { num: "05", title: "Full Issue Lifecycle", body: "From first report to verified fix — every step is tracked, timestamped, and visible to the right people automatically.", stat: "100%", statL: "Traceability" },
  { num: "06", title: "Any Device, Anywhere", body: "Responsive down to 320px. Log issues on mobile during a UAT session, review on desktop at your desk.", stat: "All", statL: "Platforms" },
];

function Features() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;1,700&family=Manrope:wght@300;400;500;600&display=swap');
        .f-root{font-family:'Manrope',sans-serif;background:#0c0c0c;padding:112px 0;}
        .f-inner{max-width:1200px;margin:0 auto;padding:0 48px;}
        .f-label{font-size:11px;font-weight:600;letter-spacing:.18em;text-transform:uppercase;color:#ea580c;display:flex;align-items:center;gap:10px;margin-bottom:20px;}
        .f-label::before{content:'';width:28px;height:1.5px;background:#ea580c;display:block;}
        .f-heading{font-family:'Playfair Display',serif;font-size:clamp(36px,4vw,58px);font-weight:700;line-height:1.08;color:#fff;margin:0 0 72px;letter-spacing:-.02em;}
        .f-heading em{font-style:italic;color:#ea580c;}
        .f-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:1px;background:#1c1c1c;}
        .f-cell{background:#0c0c0c;padding:40px 36px;transition:background .2s;}
        .f-cell:hover{background:#111;}
        .f-num{font-family:'Playfair Display',serif;font-size:13px;font-weight:700;color:#2a2a2a;margin-bottom:28px;letter-spacing:.06em;}
        .f-title{font-size:17px;font-weight:600;color:#fff;margin:0 0 14px;line-height:1.3;}
        .f-body{font-size:14px;font-weight:300;color:#6b7280;line-height:1.75;margin:0 0 32px;}
        .f-stat{border-top:1px solid #1c1c1c;padding-top:24px;display:flex;justify-content:space-between;align-items:flex-end;}
        .f-stat-n{font-family:'Playfair Display',serif;font-size:26px;font-weight:700;color:#ea580c;}
        .f-stat-l{font-size:11px;font-weight:500;letter-spacing:.08em;text-transform:uppercase;color:#374151;}
        .f-bottom{margin-top:72px;display:flex;align-items:center;justify-content:space-between;padding:40px 48px;background:#111;gap:32px;flex-wrap:wrap;}
        .f-bottom-t{font-size:18px;font-weight:600;color:#fff;}
        .f-bottom-s{font-size:14px;font-weight:300;color:#6b7280;margin-top:4px;}
        .f-cta{background:#ea580c;color:#fff;border:none;padding:14px 30px;font-family:'Manrope',sans-serif;font-weight:600;font-size:13px;letter-spacing:.06em;text-transform:uppercase;cursor:pointer;transition:background .2s;white-space:nowrap;}
        .f-cta:hover{background:#c2410c;}
        @media(max-width:860px){.f-grid{grid-template-columns:repeat(2,1fr);}.f-inner{padding:0 24px;}.f-bottom{padding:32px 24px;}}
        @media(max-width:540px){.f-grid{grid-template-columns:1fr;}}
      `}</style>
      <section className="f-root">
        <div className="f-inner">
          <p className="f-label">Platform Capabilities</p>
          <h2 className="f-heading">Everything your team needs<br/>to move <em>faster.</em></h2>
          <div className="f-grid">
            {features.map(f => (
              <div className="f-cell" key={f.num}>
                <p className="f-num">{f.num}</p>
                <h3 className="f-title">{f.title}</h3>
                <p className="f-body">{f.body}</p>
                <div className="f-stat">
                  <span className="f-stat-n">{f.stat}</span>
                  <span className="f-stat-l">{f.statL}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="f-bottom">
            <div>
              <p className="f-bottom-t">Ready to see AccessHub in action?</p>
              <p className="f-bottom-s">No credit card required. Up and running in 5 minutes.</p>
            </div>
            <button className="f-cta">Start Free Trial</button>
          </div>
        </div>
      </section>
    </>
  );
}
export default Features;