export default function FeatureSpotlightSection() {
  const features = [
    {
      eyebrow: "FOR MANAGERS",
      eyebrowColor: "#ea580c",
      eyebrowBg: "#fff3e9",
      title: "Full visibility.\nZero blind spots.",
      sub: "Get a real-time command center for every access request, issue, and approval in your organization. Assign tickets, monitor SLAs, and review audit logs — all in one dashboard.",
      align: "left",
      stats: [
        { val: "3×", label: "Faster approvals" },
        { val: "80%", label: "Less back-and-forth" },
      ],
      visual: <ManagerVisual />,
      bg: "#ffffff",
    },
    {
      eyebrow: "FOR QA ENGINEERS",
      eyebrowColor: "#8b5cf6",
      eyebrowBg: "#f5f3ff",
      title: "Raise, track, and\nresolve issues fast.",
      sub: "Log bugs with descriptions, screenshots, and severity levels in seconds. Assign directly to the manager, track status from TODO to DONE, and never lose context on a ticket again.",
      align: "right",
      stats: [
        { val: "50%", label: "Fewer duplicate bugs" },
        { val: "2× faster", label: "Triage cycle" },
      ],
      visual: <QAVisual />,
      bg: "#f8fafc",
    },
    {
      eyebrow: "FOR DEVELOPERS",
      eyebrowColor: "#2563eb",
      eyebrowBg: "#eff6ff",
      title: "Focus on fixing,\nnot finding.",
      sub: "See only what's assigned to you. Update ticket status, drop resolution notes, and mark issues closed — without wading through noise. Datadog integration keeps your logs in context.",
      align: "left",
      stats: [
        { val: "90%", label: "Reduced context switching" },
        { val: "1-click", label: "Status updates" },
      ],
      visual: <DevVisual />,
      bg: "#ffffff",
    },
    {
      eyebrow: "COMPLIANCE & SECURITY",
      eyebrowColor: "#059669",
      eyebrowBg: "#ecfdf5",
      title: "Enterprise-grade\ngovernance built in.",
      sub: "Every access change, approval, and role modification is logged immutably. Generate compliance reports for SOC 2, ISO 27001, and internal audits with one click.",
      align: "right",
      stats: [
        { val: "100%", label: "Audit trail coverage" },
        { val: "SOC 2", label: "Ready out of the box" },
      ],
      visual: <ComplianceVisual />,
      bg: "#f8fafc",
    },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@700;800&family=DM+Sans:wght@400;500;600&display=swap');

        .fs-root { font-family: 'DM Sans', sans-serif; }

        .fs-row {
          padding: 88px 40px;
        }
        .fs-inner {
          max-width: 1160px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: center;
        }
        .fs-inner.reverse { direction: rtl; }
        .fs-inner.reverse > * { direction: ltr; }

        /* copy */
        .fs-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          font-size: 11.5px;
          font-weight: 700;
          letter-spacing: 1.2px;
          text-transform: uppercase;
          border-radius: 20px;
          padding: 5px 13px;
          margin-bottom: 22px;
        }
        .fs-eyebrow-dot {
          width: 6px; height: 6px; border-radius: 50%;
        }
        .fs-title {
          font-family: 'Sora', sans-serif;
          font-size: clamp(30px, 3.2vw, 42px);
          font-weight: 800;
          color: #0f172a;
          letter-spacing: -1.2px;
          line-height: 1.1;
          margin: 0 0 18px;
          white-space: pre-line;
        }
        .fs-sub {
          font-size: 16px;
          color: #475569;
          line-height: 1.7;
          margin: 0 0 32px;
        }
        .fs-stats {
          display: flex;
          gap: 32px;
          margin-bottom: 36px;
          padding: 20px 24px;
          background: #f8fafc;
          border-radius: 12px;
          border: 1px solid #e2e8f0;
        }
        .fs-stat-val {
          font-family: 'Sora', sans-serif;
          font-size: 24px;
          font-weight: 800;
          color: #0f172a;
          letter-spacing: -0.5px;
        }
        .fs-stat-label {
          font-size: 12px;
          color: #64748b;
          font-weight: 500;
          margin-top: 2px;
        }
        .fs-stat-divider { width: 1px; background: #e2e8f0; }
        .fs-cta {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 14.5px;
          font-weight: 600;
          color: #ea580c;
          background: none;
          border: none;
          cursor: pointer;
          padding: 0;
          font-family: 'DM Sans', sans-serif;
          transition: gap 0.2s;
        }
        .fs-cta:hover { gap: 12px; }
        .fs-cta-arrow {
          width: 28px; height: 28px; border-radius: 50%;
          background: #fff3e9;
          display: flex; align-items: center; justify-content: center;
          font-size: 14px;
        }

        /* visual panel */
        .fs-visual {
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 8px 40px rgba(0,0,0,0.1), 0 2px 8px rgba(0,0,0,0.05);
          border: 1px solid #e2e8f0;
          background: #fff;
        }

        @media (max-width: 900px) {
          .fs-row { padding: 56px 24px; }
          .fs-inner { grid-template-columns: 1fr; gap: 40px; direction: ltr !important; }
          .fs-inner.reverse > * { direction: ltr; }
        }
      `}</style>

      <div className="fs-root">
        {features.map((f, i) => (
          <div key={i} className="fs-row" style={{ background: f.bg }}>
            <div className={`fs-inner${f.align === "right" ? " reverse" : ""}`}>

              {/* Copy */}
              <div>
                <div
                  className="fs-eyebrow"
                  style={{ color: f.eyebrowColor, background: f.eyebrowBg }}
                >
                  <span className="fs-eyebrow-dot" style={{ background: f.eyebrowColor }} />
                  {f.eyebrow}
                </div>
                <h2 className="fs-title">{f.title}</h2>
                <p className="fs-sub">{f.sub}</p>

                <div className="fs-stats">
                  {f.stats.map((s, j) => (
                    <>
                      <div key={j}>
                        <div className="fs-stat-val">{s.val}</div>
                        <div className="fs-stat-label">{s.label}</div>
                      </div>
                      {j < f.stats.length - 1 && <div className="fs-stat-divider" />}
                    </>
                  ))}
                </div>

                <button className="fs-cta">
                  Learn more
                  <span className="fs-cta-arrow">→</span>
                </button>
              </div>

              {/* Visual */}
              <div className="fs-visual">{f.visual}</div>

            </div>
          </div>
        ))}
      </div>
    </>
  );
}

/* ── Visuals ─────────────────────────────────────────────────────────────────── */

function ManagerVisual() {
  const tickets = [
    { id: "AH-31", title: "SSO config broken for Tenant B", status: "IN PROGRESS", priority: "HIGH", assignee: "R", ac: "#10b981" },
    { id: "AH-28", title: "Role matrix approval pending", status: "REVIEW", priority: "MED", assignee: "S", ac: "#8b5cf6" },
    { id: "AH-25", title: "Audit log export failing", status: "TODO", priority: "HIGH", assignee: "P", ac: "#3b82f6" },
  ];
  const statusColors = { "IN PROGRESS": "#f97316", "REVIEW": "#8b5cf6", "TODO": "#94a3b8" };
  const priorityColors = { HIGH: "#ef4444", MED: "#f59e0b" };

  return (
    <div style={{ padding: "24px", fontFamily: "'DM Sans', sans-serif" }}>
      {/* Header */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "18px" }}>
        <div>
          <div style={{ fontSize: "13px", fontWeight: 700, color: "#0f172a" }}>Manager Dashboard</div>
          <div style={{ fontSize: "11px", color: "#94a3b8", marginTop: "2px" }}>All issues · 12 open</div>
        </div>
        <div style={{ display: "flex", gap: "8px" }}>
          {["KPIs", "Audit", "Reports"].map(l => (
            <div key={l} style={{ padding: "4px 10px", background: "#f1f5f9", borderRadius: "6px", fontSize: "11px", fontWeight: 600, color: "#64748b" }}>{l}</div>
          ))}
        </div>
      </div>

      {/* KPI row */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "10px", marginBottom: "18px" }}>
        {[
          { label: "Open Issues", val: "12", color: "#ef4444" },
          { label: "In Review", val: "5", color: "#f97316" },
          { label: "Resolved", val: "38", color: "#22c55e" },
        ].map(k => (
          <div key={k.label} style={{ background: "#f8fafc", borderRadius: "10px", padding: "12px", border: "1px solid #e2e8f0" }}>
            <div style={{ fontSize: "22px", fontWeight: 800, color: k.color, fontFamily: "'Sora',sans-serif", letterSpacing: "-0.5px" }}>{k.val}</div>
            <div style={{ fontSize: "11px", color: "#64748b", marginTop: "2px" }}>{k.label}</div>
          </div>
        ))}
      </div>

      {/* Ticket list */}
      {tickets.map(t => (
        <div key={t.id} style={{
          display: "flex", alignItems: "center", gap: "10px",
          padding: "10px 12px", marginBottom: "8px",
          background: "#fff", border: "1px solid #e8edf3",
          borderRadius: "8px", boxShadow: "0 1px 2px rgba(0,0,0,0.04)"
        }}>
          <div style={{ width: "3px", height: "32px", borderRadius: "2px", background: statusColors[t.status], flexShrink: 0 }} />
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ fontSize: "12.5px", fontWeight: 500, color: "#1e293b", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{t.title}</div>
            <div style={{ fontSize: "10.5px", color: "#94a3b8", marginTop: "2px" }}>{t.id}</div>
          </div>
          <div style={{ padding: "2px 8px", borderRadius: "10px", fontSize: "10px", fontWeight: 700, background: `${statusColors[t.status]}18`, color: statusColors[t.status], whiteSpace: "nowrap" }}>{t.status}</div>
          <div style={{ padding: "2px 7px", borderRadius: "10px", fontSize: "10px", fontWeight: 700, background: `${priorityColors[t.priority]}18`, color: priorityColors[t.priority] }}>{t.priority}</div>
          <div style={{ width: "22px", height: "22px", borderRadius: "50%", background: t.ac, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "9px", fontWeight: 700, color: "#fff", flexShrink: 0 }}>{t.assignee}</div>
        </div>
      ))}
    </div>
  );
}

function QAVisual() {
  return (
    <div style={{ padding: "24px", fontFamily: "'DM Sans', sans-serif" }}>
      {/* Issue form header */}
      <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "18px" }}>
        <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#8b5cf6" }} />
        <div style={{ fontSize: "13px", fontWeight: 700, color: "#0f172a" }}>New Bug Report</div>
        <div style={{ marginLeft: "auto", padding: "3px 10px", background: "#fef3c7", color: "#d97706", borderRadius: "10px", fontSize: "10px", fontWeight: 700 }}>HIGH SEVERITY</div>
      </div>

      {/* Fields */}
      {[
        { label: "Issue Title", value: "Login fails for SAML-federated users on Tenant C" },
        { label: "Environment", value: "Production · v2.4.1" },
      ].map(f => (
        <div key={f.label} style={{ marginBottom: "12px" }}>
          <div style={{ fontSize: "11px", fontWeight: 600, color: "#64748b", marginBottom: "5px" }}>{f.label}</div>
          <div style={{ padding: "9px 12px", background: "#f8fafc", border: "1.5px solid #e2e8f0", borderRadius: "7px", fontSize: "12.5px", color: "#1e293b" }}>{f.value}</div>
        </div>
      ))}

      {/* Description */}
      <div style={{ marginBottom: "14px" }}>
        <div style={{ fontSize: "11px", fontWeight: 600, color: "#64748b", marginBottom: "5px" }}>Description</div>
        <div style={{ padding: "10px 12px", background: "#f8fafc", border: "1.5px solid #e2e8f0", borderRadius: "7px", fontSize: "12px", color: "#475569", lineHeight: 1.6 }}>
          Users authenticated via SAML receive a 401 after redirect. Reproduced on Chrome/Firefox. Session token not being stored correctly after IDP callback.
        </div>
      </div>

      {/* Attachments */}
      <div style={{ marginBottom: "14px" }}>
        <div style={{ fontSize: "11px", fontWeight: 600, color: "#64748b", marginBottom: "8px" }}>Attachments</div>
        <div style={{ display: "flex", gap: "8px" }}>
          {["screenshot.png", "error.log", "network.har"].map(f => (
            <div key={f} style={{ padding: "5px 10px", background: "#eff6ff", border: "1px solid #bfdbfe", borderRadius: "6px", fontSize: "10.5px", color: "#2563eb", fontWeight: 600 }}>📎 {f}</div>
          ))}
        </div>
      </div>

      {/* Status row */}
      <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
        {[
          { label: "Status", val: "TODO", color: "#64748b", bg: "#f1f5f9" },
          { label: "Assigned to", val: "Manager", color: "#ea580c", bg: "#fff3e9" },
        ].map(s => (
          <div key={s.label} style={{ display: "flex", alignItems: "center", gap: "6px", padding: "6px 12px", background: s.bg, borderRadius: "8px", fontSize: "11.5px", fontWeight: 600, color: s.color }}>
            {s.val}
          </div>
        ))}
        <div style={{ marginLeft: "auto" }}>
          <div style={{ padding: "7px 16px", background: "#8b5cf6", color: "#fff", borderRadius: "7px", fontSize: "12px", fontWeight: 700, cursor: "pointer" }}>Submit Issue</div>
        </div>
      </div>
    </div>
  );
}

function DevVisual() {
  const myTickets = [
    { id: "AH-09", title: "Standardize Approver badge logic", status: "IN PROGRESS", age: "2d" },
    { id: "AH-13", title: "Fix token expiry on SSO refresh", status: "TODO", age: "1d" },
    { id: "AH-17", title: "Patch role permission cache bug", status: "IN PROGRESS", age: "4h" },
  ];
  const statusColors = { "IN PROGRESS": "#f97316", "TODO": "#94a3b8", "DONE": "#22c55e" };

  return (
    <div style={{ padding: "24px", fontFamily: "'DM Sans', sans-serif" }}>
      {/* Header */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "16px" }}>
        <div style={{ fontSize: "13px", fontWeight: 700, color: "#0f172a" }}>My Assigned Issues</div>
        <div style={{ padding: "4px 10px", background: "#eff6ff", color: "#2563eb", borderRadius: "6px", fontSize: "11px", fontWeight: 700 }}>3 active</div>
      </div>

      {myTickets.map((t, i) => (
        <div key={t.id} style={{
          padding: "12px 14px", marginBottom: "9px",
          background: i === 0 ? "#fff7ed" : "#fff",
          border: `1.5px solid ${i === 0 ? "#fed7aa" : "#e2e8f0"}`,
          borderRadius: "9px",
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px" }}>
            <div style={{ fontSize: "10px", fontWeight: 700, color: "#94a3b8" }}>{t.id}</div>
            <div style={{ flex: 1, fontSize: "12.5px", fontWeight: 500, color: "#1e293b" }}>{t.title}</div>
            <div style={{ fontSize: "10px", color: "#94a3b8" }}>{t.age} ago</div>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <div style={{ padding: "2px 9px", borderRadius: "10px", fontSize: "10px", fontWeight: 700, background: `${statusColors[t.status]}18`, color: statusColors[t.status] }}>{t.status}</div>
            {i === 0 && (
              <div style={{ marginLeft: "auto", display: "flex", gap: "6px" }}>
                {["Mark Done", "Add Comment"].map(a => (
                  <div key={a} style={{ padding: "4px 10px", background: a === "Mark Done" ? "#2563eb" : "#f1f5f9", color: a === "Mark Done" ? "#fff" : "#475569", borderRadius: "6px", fontSize: "10.5px", fontWeight: 600, cursor: "pointer" }}>{a}</div>
                ))}
              </div>
            )}
          </div>
        </div>
      ))}

      {/* Datadog integration pill */}
      <div style={{ display: "flex", alignItems: "center", gap: "10px", padding: "10px 14px", background: "#1e293b", borderRadius: "9px", marginTop: "4px" }}>
        <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#22c55e" }} />
        <div style={{ fontSize: "11.5px", color: "#94a3b8", flex: 1 }}>Datadog · AH-09 · 3 errors in last 24h</div>
        <div style={{ fontSize: "10.5px", color: "#f97316", fontWeight: 600, cursor: "pointer" }}>View logs →</div>
      </div>
    </div>
  );
}

function ComplianceVisual() {
  const logs = [
    { time: "09:41 AM", action: "Role 'Admin' granted", user: "manager@acme.com", status: "APPROVED" },
    { time: "09:38 AM", action: "Access request raised", user: "qa@acme.com", status: "PENDING" },
    { time: "09:22 AM", action: "User deprovisioned", user: "dev@acme.com", status: "DONE" },
    { time: "08:55 AM", action: "SSO config updated", user: "admin@acme.com", status: "APPROVED" },
  ];
  const statusColors = { APPROVED: "#22c55e", PENDING: "#f59e0b", DONE: "#2563eb" };

  return (
    <div style={{ padding: "24px", fontFamily: "'DM Sans', sans-serif" }}>
      {/* Header */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "16px" }}>
        <div style={{ fontSize: "13px", fontWeight: 700, color: "#0f172a" }}>Audit Log</div>
        <div style={{ display: "flex", gap: "7px" }}>
          {["Export PDF", "Export CSV"].map(b => (
            <div key={b} style={{ padding: "5px 11px", background: "#f1f5f9", borderRadius: "6px", fontSize: "11px", fontWeight: 600, color: "#475569", cursor: "pointer" }}>{b}</div>
          ))}
        </div>
      </div>

      {/* Compliance badges */}
      <div style={{ display: "flex", gap: "8px", marginBottom: "16px", flexWrap: "wrap" }}>
        {["SOC 2 Type II", "ISO 27001", "GDPR Ready", "HIPAA"].map(b => (
          <div key={b} style={{ display: "flex", alignItems: "center", gap: "5px", padding: "4px 11px", background: "#ecfdf5", border: "1px solid #a7f3d0", borderRadius: "20px", fontSize: "10.5px", fontWeight: 700, color: "#059669" }}>
            <span>✓</span> {b}
          </div>
        ))}
      </div>

      {/* Log table */}
      <div style={{ border: "1px solid #e2e8f0", borderRadius: "9px", overflow: "hidden" }}>
        <div style={{ display: "grid", gridTemplateColumns: "70px 1fr 110px 70px", padding: "8px 12px", background: "#f8fafc", borderBottom: "1px solid #e2e8f0" }}>
          {["Time", "Action", "User", "Status"].map(h => (
            <div key={h} style={{ fontSize: "10px", fontWeight: 700, color: "#94a3b8", letterSpacing: "0.6px", textTransform: "uppercase" }}>{h}</div>
          ))}
        </div>
        {logs.map((l, i) => (
          <div key={i} style={{
            display: "grid", gridTemplateColumns: "70px 1fr 110px 70px",
            padding: "9px 12px",
            borderBottom: i < logs.length - 1 ? "1px solid #f1f5f9" : "none",
            background: i % 2 === 0 ? "#fff" : "#fafafa",
          }}>
            <div style={{ fontSize: "11px", color: "#64748b" }}>{l.time}</div>
            <div style={{ fontSize: "11.5px", color: "#1e293b", fontWeight: 500 }}>{l.action}</div>
            <div style={{ fontSize: "10.5px", color: "#64748b", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{l.user}</div>
            <div style={{ fontSize: "10px", fontWeight: 700, color: statusColors[l.status] }}>{l.status}</div>
          </div>
        ))}
      </div>
    </div>
  );
}