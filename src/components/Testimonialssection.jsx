export default function TestimonialsSection() {
  const stats = [
    { val: "10,000+", label: "Teams worldwide", icon: "👥" },
    { val: "99.9%", label: "Uptime SLA guaranteed", icon: "⚡" },
    { val: "3×", label: "Faster issue resolution", icon: "🚀" },
    { val: "500+", label: "Enterprise customers", icon: "🏢" },
  ];

  const testimonials = [
    {
      quote:
        "AccessHub completely transformed how our team handles access requests. What used to take 3 days of back-and-forth emails now gets resolved in under 2 hours. The audit trail alone saved us during our SOC 2 review.",
      name: "Sarah Mitchell",
      role: "Head of Engineering",
      company: "Finova Technologies",
      initials: "SM",
      avatarColor: "#ea580c",
      rating: 5,
      tag: "Enterprise",
      tagColor: "#ea580c",
      tagBg: "#fff3e9",
    },
    {
      quote:
        "As a QA lead, I was drowning in spreadsheets tracking bugs across teams. AccessHub's issue workflow — QA raises, manager assigns, dev fixes — is exactly what we needed. It mirrors how we actually work.",
      name: "Rahul Desai",
      role: "QA Lead",
      company: "Nexus Systems",
      initials: "RD",
      avatarColor: "#8b5cf6",
      rating: 5,
      tag: "Most Popular",
      tagColor: "#8b5cf6",
      tagBg: "#f5f3ff",
      featured: true,
    },
    {
      quote:
        "The Datadog integration is a game changer. My developers can see error logs right next to the ticket. No more context switching between 4 different tools just to debug one issue.",
      name: "Priya Nair",
      role: "CTO",
      company: "Cloudbridge Inc.",
      initials: "PN",
      avatarColor: "#2563eb",
      rating: 5,
      tag: "Pro",
      tagColor: "#2563eb",
      tagBg: "#eff6ff",
    },
  ];

  const customers = [
    { name: "Deloitte", style: { fontFamily: "'Arial Black',sans-serif", fontWeight: 900, fontSize: "18px", color: "#86bc25" } },
    { name: "HDFC Bank", style: { fontFamily: "Georgia,serif", fontWeight: 700, fontSize: "15px", color: "#004c8f" } },
    { name: "Wipro", style: { fontFamily: "'Arial Black',sans-serif", fontWeight: 900, fontSize: "18px", color: "#341c6e" } },
    { name: "Infosys", style: { fontFamily: "Georgia,serif", fontWeight: 700, fontSize: "17px", color: "#007cc3" } },
    { name: "TCS", style: { fontFamily: "'Arial Black',sans-serif", fontWeight: 900, fontSize: "20px", color: "#e4002b" } },
    { name: "Accenture", style: { fontFamily: "Georgia,serif", fontWeight: 700, fontSize: "15px", color: "#a100ff" } },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@700;800&family=DM+Sans:wght@400;500;600&display=swap');

        .ts-root { font-family: 'DM Sans', sans-serif; }

        /* ── Stats band ── */
        .ts-stats-band {
          background: #ea580c;
          padding: 56px 40px;
        }
        .ts-stats-inner {
          max-width: 1160px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 0;
        }
        .ts-stat-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          padding: 20px 32px;
          border-right: 1px solid rgba(255,255,255,0.08);
        }
        .ts-stat-item:last-child { border-right: none; }
        .ts-stat-icon {
          font-size: 28px;
          margin-bottom: 12px;
          line-height: 1;
        }
        .ts-stat-val {
          font-family: 'Sora', sans-serif;
          font-size: clamp(32px, 3.5vw, 44px);
          font-weight: 800;
          color: #ffffff;
          letter-spacing: -1.5px;
          line-height: 1;
          margin-bottom: 8px;
        }
        .ts-stat-val span { color: #ea580c; }
        .ts-stat-label {
          font-size: 13.5px;
          color: #94a3b8;
          font-weight: 500;
          line-height: 1.4;
        }

        /* ── Testimonials section ── */
        .ts-section {
          background: #f8fafc;
          padding: 88px 40px;
        }
        .ts-section-inner { max-width: 1160px; margin: 0 auto; }

        .ts-header { text-align: center; margin-bottom: 56px; }
        .ts-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          font-size: 11.5px;
          font-weight: 700;
          letter-spacing: 1.2px;
          text-transform: uppercase;
          color: #ea580c;
          background: #fff3e9;
          border-radius: 20px;
          padding: 5px 14px;
          margin-bottom: 20px;
        }
        .ts-eyebrow-dot {
          width: 6px; height: 6px;
          border-radius: 50%;
          background: #ea580c;
          animation: tspulse 2s infinite;
        }
        @keyframes tspulse {
          0%,100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.4; transform: scale(0.75); }
        }
        .ts-title {
          font-family: 'Sora', sans-serif;
          font-size: clamp(28px, 3vw, 40px);
          font-weight: 800;
          color: #0f172a;
          letter-spacing: -1.2px;
          margin: 0 0 14px;
          line-height: 1.1;
        }
        .ts-sub {
          font-size: 16px;
          color: #475569;
          max-width: 520px;
          margin: 0 auto;
          line-height: 1.65;
        }

        /* ── Cards grid ── */
        .ts-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
          margin-bottom: 64px;
        }

        .ts-card {
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 16px;
          padding: 28px;
          display: flex;
          flex-direction: column;
          gap: 20px;
          transition: box-shadow 0.2s, transform 0.2s;
          position: relative;
        }
        .ts-card:hover {
          box-shadow: 0 12px 36px rgba(0,0,0,0.08);
          transform: translateY(-3px);
        }
        .ts-card.featured {
          border: 2px solid #ea580c;
          box-shadow: 0 4px 24px rgba(234,88,12,0.12);
        }

        .ts-card-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .ts-stars { display: flex; gap: 3px; }
        .ts-star { color: #f59e0b; font-size: 16px; }
        .ts-tag {
          font-size: 10.5px;
          font-weight: 700;
          letter-spacing: 0.5px;
          border-radius: 20px;
          padding: 3px 10px;
        }

        .ts-quote-mark {
          font-size: 48px;
          line-height: 0.6;
          color: #ea580c;
          font-family: Georgia, serif;
          margin-bottom: -8px;
          opacity: 0.3;
        }
        .ts-quote {
          font-size: 14.5px;
          color: #334155;
          line-height: 1.7;
          flex: 1;
        }

        .ts-person {
          display: flex;
          align-items: center;
          gap: 12px;
          padding-top: 16px;
          border-top: 1px solid #f1f5f9;
        }
        .ts-avatar {
          width: 42px; height: 42px;
          border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          font-size: 13px; font-weight: 700; color: #fff;
          flex-shrink: 0;
        }
        .ts-person-name {
          font-size: 14px;
          font-weight: 700;
          color: #0f172a;
          line-height: 1.2;
        }
        .ts-person-role {
          font-size: 12px;
          color: #64748b;
          margin-top: 2px;
        }
        .ts-person-company {
          font-size: 11.5px;
          font-weight: 600;
          color: #94a3b8;
          margin-top: 1px;
        }

        /* ── Customer logos ── */
        .ts-customers {
          background: #fff;
          border-radius: 16px;
          border: 1px solid #e2e8f0;
          padding: 36px 40px;
        }
        .ts-customers-label {
          text-align: center;
          font-size: 11.5px;
          font-weight: 700;
          letter-spacing: 1.4px;
          color: #94a3b8;
          text-transform: uppercase;
          margin-bottom: 28px;
        }
        .ts-customers-logos {
          display: flex;
          align-items: center;
          justify-content: space-around;
          flex-wrap: wrap;
          gap: 28px;
        }
        .ts-customer-logo {
          opacity: 0.4;
          filter: grayscale(1);
          transition: opacity 0.22s, filter 0.22s;
          cursor: default;
        }
        .ts-customer-logo:hover { opacity: 1; filter: grayscale(0); }

        /* ── Responsive ── */
        @media (max-width: 900px) {
          .ts-stats-inner { grid-template-columns: repeat(2,1fr); }
          .ts-stat-item { border-right: none; border-bottom: 1px solid rgba(255,255,255,0.08); }
          .ts-stat-item:nth-child(2n) { border-bottom: 1px solid rgba(255,255,255,0.08); }
          .ts-stat-item:last-child,.ts-stat-item:nth-last-child(2):nth-child(odd) { border-bottom: none; }
          .ts-grid { grid-template-columns: 1fr; }
          .ts-section { padding: 56px 24px; }
          .ts-stats-band { padding: 40px 24px; }
          .ts-customers { padding: 24px 20px; }
        }
      `}</style>

      <div className="ts-root">

        {/* ── Stats band ── */}
        <div className="ts-stats-band">
          <div className="ts-stats-inner">
            {stats.map((s, i) => (
              <div key={i} className="ts-stat-item">
                <div className="ts-stat-icon">{s.icon}</div>
                <div className="ts-stat-val">{s.val}</div>
                <div className="ts-stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Testimonials ── */}
        <div className="ts-section">
          <div className="ts-section-inner">

            <div className="ts-header">
              <div className="ts-eyebrow">
                <span className="ts-eyebrow-dot" />
                Customer Stories
              </div>
              <h2 className="ts-title">Loved by teams that ship fast</h2>
              <p className="ts-sub">
                From QA engineers to CTOs — here's what enterprise teams say
                after switching to AccessHub.
              </p>
            </div>

            {/* Cards */}
            <div className="ts-grid">
              {testimonials.map((t, i) => (
                <div key={i} className={`ts-card${t.featured ? " featured" : ""}`}>

                  <div className="ts-card-top">
                    <div className="ts-stars">
                      {Array.from({ length: t.rating }).map((_, j) => (
                        <span key={j} className="ts-star">★</span>
                      ))}
                    </div>
                    <span
                      className="ts-tag"
                      style={{ color: t.tagColor, background: t.tagBg }}
                    >
                      {t.tag}
                    </span>
                  </div>

                  <div className="ts-quote-mark">"</div>
                  <p className="ts-quote">{t.quote}</p>

                  <div className="ts-person">
                    <div className="ts-avatar" style={{ background: t.avatarColor }}>
                      {t.initials}
                    </div>
                    <div>
                      <div className="ts-person-name">{t.name}</div>
                      <div className="ts-person-role">{t.role}</div>
                      <div className="ts-person-company">{t.company}</div>
                    </div>
                  </div>

                </div>
              ))}
            </div>

            {/* Customer logos */}
            <div className="ts-customers">
              <div className="ts-customers-label">Powering enterprise teams at</div>
              <div className="ts-customers-logos">
                {customers.map((c) => (
                  <span key={c.name} className="ts-customer-logo" style={c.style}>
                    {c.name}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>
    </>
  );
}