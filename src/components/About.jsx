const roles = [
  { abbr: "M", name: "Manager", bg: "#0c0c0c", fg: "#fff", desc: "Full visibility across all issues, teams, and timelines. Assign priorities, review progress, and hold the team accountable.", perks: ["All-issues dashboard", "Priority assignment", "Audit trail", "KPI metrics"] },
  { abbr: "QA", name: "QA Engineer", bg: "#ea580c", fg: "#fff", desc: "Raise detailed bug reports with severity, steps to reproduce, and screenshots. Track every issue from open to verified.", perks: ["Raise & tag issues", "Set severity", "Attach screenshots", "Track history"] },
  { abbr: "D", name: "Developer", bg: "#f9fafb", fg: "#0c0c0c", desc: "See only what's assigned to you. Update status in real-time, add notes, and mark issues resolved after fixing.", perks: ["Assigned issues view", "Update status", "Add comments", "Mark resolved"] },
];

const steps = [
  { n: "01", t: "QA raises issue", d: "Bug logged with severity, steps & attachments" },
  { n: "02", t: "Instant notification", d: "Developer & Manager see it in real-time" },
  { n: "03", t: "Dev resolves", d: "Status updated with fix details and notes" },
  { n: "04", t: "QA verifies & closes", d: "Fix confirmed, issue closed, loop complete" },
];

function About() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,700&family=Manrope:wght@300;400;500;600&display=swap');
        .a-root{font-family:'Manrope',sans-serif;background:#fff;padding:112px 0;}
        .a-inner{max-width:1200px;margin:0 auto;padding:0 48px;}
        .a-label{font-size:11px;font-weight:600;letter-spacing:.18em;text-transform:uppercase;color:#ea580c;display:flex;align-items:center;gap:10px;margin-bottom:20px;}
        .a-label::before{content:'';width:28px;height:1.5px;background:#ea580c;display:block;}
        .a-heading{font-family:'Playfair Display',serif;font-size:clamp(34px,3.8vw,54px);font-weight:900;line-height:1.08;letter-spacing:-.025em;color:#0c0c0c;margin:0 0 20px;}
        .a-heading em{font-style:italic;color:#ea580c;}
        .a-sub{font-size:16px;font-weight:300;color:#6b7280;line-height:1.8;max-width:480px;margin:0 0 72px;}
        .a-top{display:grid;grid-template-columns:1fr 1fr;gap:80px;align-items:start;margin-bottom:96px;}
        .a-stats{display:grid;grid-template-columns:1fr 1fr;gap:2px;background:#e5e7eb;}
        .a-stat{background:#0c0c0c;padding:32px 28px;}
        .a-stat-n{font-family:'Playfair Display',serif;font-size:34px;font-weight:700;color:#ea580c;line-height:1;}
        .a-stat-l{font-size:11px;font-weight:500;letter-spacing:.1em;text-transform:uppercase;color:#6b7280;margin-top:8px;}
        .a-roles{display:grid;grid-template-columns:repeat(3,1fr);gap:0;border:1px solid #e5e7eb;margin-bottom:96px;}
        .a-role{padding:36px 32px;border-right:1px solid #e5e7eb;}
        .a-role:last-child{border-right:none;}
        .a-role-top{display:flex;align-items:center;gap:14px;margin-bottom:18px;}
        .a-av{width:44px;height:44px;display:flex;align-items:center;justify-content:center;font-size:12px;font-weight:700;letter-spacing:.04em;}
        .a-role-name{font-size:15px;font-weight:600;color:#0c0c0c;}
        .a-role-desc{font-size:13.5px;font-weight:300;color:#6b7280;line-height:1.7;margin:0 0 20px;}
        .a-perk{font-size:12.5px;font-weight:400;color:#374151;padding:7px 0;border-bottom:1px solid #f9fafb;display:flex;align-items:center;gap:8px;}
        .a-perk:last-child{border-bottom:none;}
        .a-perk::before{content:'';width:4px;height:4px;background:#ea580c;border-radius:50%;flex-shrink:0;}
        .a-bottom{display:grid;grid-template-columns:1fr 1fr;gap:80px;align-items:start;}
        .a-timeline{display:flex;flex-direction:column;gap:0;}
        .a-step{display:flex;gap:22px;position:relative;padding-bottom:32px;}
        .a-step:last-child{padding-bottom:0;}
        .a-step::after{content:'';position:absolute;left:17px;top:38px;width:1px;height:calc(100% - 14px);background:#f3f4f6;}
        .a-step:last-child::after{display:none;}
        .a-step-n{width:36px;height:36px;background:#fff7ed;border:1px solid #fed7aa;display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:700;color:#ea580c;flex-shrink:0;z-index:1;letter-spacing:.06em;}
        .a-step-t{font-size:15px;font-weight:600;color:#0c0c0c;margin-bottom:4px;}
        .a-step-d{font-size:13px;font-weight:300;color:#9ca3af;}
        .a-quote{background:#0c0c0c;padding:44px 40px;}
        .a-q-mark{font-family:'Playfair Display',serif;font-size:72px;line-height:.8;color:#ea580c;margin-bottom:16px;}
        .a-q-text{font-family:'Playfair Display',serif;font-size:18px;font-style:italic;font-weight:700;color:#fff;line-height:1.6;margin:0 0 28px;}
        .a-q-name{font-size:14px;font-weight:600;color:#fff;}
        .a-q-role{font-size:12px;font-weight:300;color:#6b7280;margin-top:2px;}
        @media(max-width:900px){.a-top,.a-bottom{grid-template-columns:1fr;gap:48px;}.a-roles{grid-template-columns:1fr;}.a-role{border-right:none;border-bottom:1px solid #e5e7eb;}.a-inner{padding:0 24px;}}
      `}</style>
      <section className="a-root">
        <div className="a-inner">
          <div className="a-top">
            <div>
              <p className="a-label">About AccessHub</p>
              <h2 className="a-heading">Built for the way<br/>teams actually <em>work.</em></h2>
              <p className="a-sub">AccessHub closes the communication gap between QA, developers, and managers. No lost Slack threads, no email chains — just a clear, role-aware issue lifecycle that keeps everyone accountable.</p>
            </div>
            <div className="a-stats">
              {[["500+","Active teams"],["12k+","Issues resolved"],["3×","Faster delivery"],["99.9%","Uptime SLA"]].map(([n,l]) => (
                <div className="a-stat" key={l}><div className="a-stat-n">{n}</div><div className="a-stat-l">{l}</div></div>
              ))}
            </div>
          </div>

          <p className="a-label" style={{marginBottom:'32px'}}>Stakeholder Roles</p>
          <div className="a-roles" style={{marginBottom:'96px'}}>
            {roles.map(r => (
              <div className="a-role" key={r.name}>
                <div className="a-role-top">
                  <div className="a-av" style={{background:r.bg,color:r.fg}}>{r.abbr}</div>
                  <span className="a-role-name">{r.name}</span>
                </div>
                <p className="a-role-desc">{r.desc}</p>
                {r.perks.map(p => <div className="a-perk" key={p}>{p}</div>)}
              </div>
            ))}
          </div>

          <div className="a-bottom">
            <div>
              <p className="a-label" style={{marginBottom:'32px'}}>Issue Lifecycle</p>
              <div className="a-timeline">
                {steps.map(s => (
                  <div className="a-step" key={s.n}>
                    <div className="a-step-n">{s.n}</div>
                    <div style={{paddingTop:'6px'}}><p className="a-step-t">{s.t}</p><p className="a-step-d">{s.d}</p></div>
                  </div>
                ))}
              </div>
            </div>
            <div className="a-quote">
              <div className="a-q-mark">"</div>
              <p className="a-q-text">AccessHub cut our bug resolution time in half. QA raises, Dev fixes, Manager sees it all. No chasing, no guessing.</p>
              <p className="a-q-name">Arjun Kulkarni</p>
              <p className="a-q-role">Engineering Lead, FinStack</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default About;