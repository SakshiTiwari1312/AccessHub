import { useState } from "react";

const integrations = [
  {
    id: "datadog",
    name: "Datadog",
    desc: "Stream access audit logs directly to your observability stack",
    emoji: "🐶",
    color: "#632CA6",
    bg: "#f5f0ff",
  },
  {
    id: "slack",
    name: "Slack",
    desc: "Get real-time alerts for access requests and approvals",
    emoji: "💬",
    color: "#4A154B",
    bg: "#fdf4ff",
  },
  {
    id: "github",
    name: "GitHub",
    desc: "Sync repo access with role assignments automatically",
    emoji: "🐙",
    color: "#24292f",
    bg: "#f6f8fa",
  },
  {
    id: "google",
    name: "Google Workspace",
    desc: "Provision and deprovision users across all Google services",
    emoji: "🔵",
    color: "#4285F4",
    bg: "#f0f6ff",
  },
  {
    id: "saml",
    name: "SAML / SSO",
    desc: "Enterprise single sign-on with SAML 2.0 and OIDC support",
    emoji: "🔐",
    color: "#ea580c",
    bg: "#fff7ed",
  },
  {
    id: "jira",
    name: "Jira",
    desc: "Bi-directional sync with Jira projects and issue tracking",
    emoji: "🔷",
    color: "#0052CC",
    bg: "#eff4ff",
  },
  {
    id: "azure",
    name: "Microsoft Azure",
    desc: "Manage Azure AD groups, roles, and conditional access policies",
    emoji: "☁️",
    color: "#0078D4",
    bg: "#f0f8ff",
  },
  {
    id: "pagerduty",
    name: "PagerDuty",
    desc: "Trigger incidents for anomalous access patterns automatically",
    emoji: "🚨",
    color: "#06AC38",
    bg: "#f0fff4",
  },
  {
    id: "okta",
    name: "Okta",
    desc: "Push groups and lifecycle events from your Okta org",
    emoji: "🔑",
    color: "#007DC1",
    bg: "#f0f9ff",
  },
  {
    id: "splunk",
    name: "Splunk",
    desc: "Forward structured access events to Splunk SIEM in real time",
    emoji: "📊",
    color: "#FF5733",
    bg: "#fff5f3",
  },
];

export default function IntegrationsSection() {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [ctaHovered, setCtaHovered] = useState(false);

  return (
    <section style={styles.section}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@400;600;700;800&family=DM+Sans:wght@400;500;600&display=swap');

        @keyframes is-fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        @keyframes is-pulse {
          0%, 100% { opacity: 0.4; transform: scale(1); }
          50%       { opacity: 0.7; transform: scale(1.08); }
        }

        .is-grid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 20px;
          max-width: 1160px;
          margin: 0 auto;
        }

        .is-card-anim {
          animation: is-fadeUp 0.55s ease both;
        }

        @media (max-width: 1100px) {
          .is-grid { grid-template-columns: repeat(3, 1fr) !important; }
        }

        @media (max-width: 700px) {
          .is-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }

        @media (max-width: 440px) {
          .is-grid { grid-template-columns: 1fr !important; }
        }

        @media (max-width: 900px) {
          .is-heading { font-size: 2rem !important; }
          .is-subheading { font-size: 1rem !important; }
          .is-section-inner { padding: 72px 20px !important; }
        }
      `}</style>

      {/* Decorative blobs */}
      <div style={styles.blobLeft} aria-hidden="true" />
      <div style={styles.blobRight} aria-hidden="true" />

      <div className="is-section-inner" style={styles.inner}>
        {/* Header */}
        <div style={styles.header}>
          <div style={styles.badge}>
            <span style={styles.badgeDot} />
            Integrations
          </div>
          <h2 className="is-heading" style={styles.heading}>
            Connects with your entire stack
          </h2>
          <p className="is-subheading" style={styles.subheading}>
            AccessHub plugs into the tools your team already uses — no rip-and-replace required.
          </p>
        </div>

        {/* Grid */}
        <div className="is-grid">
          {integrations.map((item, i) => {
            const isHovered = hoveredCard === item.id;
            return (
              <div
                key={item.id}
                className="is-card-anim"
                style={{
                  ...styles.card,
                  animationDelay: `${i * 55}ms`,
                  boxShadow: isHovered
                    ? `0 12px 40px rgba(234,88,12,0.13), 0 2px 8px rgba(0,0,0,0.07)`
                    : `0 2px 12px rgba(0,0,0,0.06)`,
                  transform: isHovered ? "translateY(-5px) scale(1.025)" : "translateY(0) scale(1)",
                  borderColor: isHovered ? "#ea580c" : "#e8edf3",
                }}
                onMouseEnter={() => setHoveredCard(item.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Icon bubble */}
                <div style={{ ...styles.iconBubble, background: item.bg }}>
                  <span style={styles.iconEmoji}>{item.emoji}</span>
                  <div
                    style={{
                      ...styles.iconGlow,
                      background: item.color,
                      opacity: isHovered ? 0.18 : 0,
                    }}
                  />
                </div>

                <div style={styles.cardBody}>
                  <p style={{ ...styles.cardName, color: isHovered ? "#ea580c" : "#0f172a" }}>
                    {item.name}
                  </p>
                  <p style={styles.cardDesc}>{item.desc}</p>
                </div>

                {/* Hover arrow */}
                <div
                  style={{
                    ...styles.cardArrow,
                    opacity: isHovered ? 1 : 0,
                    transform: isHovered ? "translateX(0)" : "translateX(-6px)",
                  }}
                >
                  →
                </div>
              </div>
            );
          })}
        </div>

        {/* Connector line visual */}
        <div style={styles.connectorRow} aria-hidden="true">
          {[...Array(7)].map((_, i) => (
            <div key={i} style={{ ...styles.connectorDot, animationDelay: `${i * 180}ms` }} />
          ))}
        </div>

        {/* CTA */}
        <div style={styles.ctaRow}>
          <button
            style={{
              ...styles.ctaBtn,
              background: ctaHovered ? "#ea580c" : "transparent",
              color: ctaHovered ? "#fff" : "#ea580c",
              borderColor: "#ea580c",
              transform: ctaHovered ? "translateY(-2px)" : "translateY(0)",
              boxShadow: ctaHovered ? "0 8px 28px rgba(234,88,12,0.22)" : "none",
            }}
            onMouseEnter={() => setCtaHovered(true)}
            onMouseLeave={() => setCtaHovered(false)}
          >
            See all integrations
            <span style={{ marginLeft: 8, fontSize: "1.1em" }}>→</span>
          </button>

          <p style={styles.ctaNote}>
            Don't see yours?{" "}
            <a href="#" style={styles.ctaLink}>
              Request an integration
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}

const styles = {
  section: {
    position: "relative",
    background: "#ffffff",
    overflow: "hidden",
    fontFamily: "'DM Sans', sans-serif",
  },
  inner: {
    position: "relative",
    zIndex: 2,
    padding: "96px 48px",
    maxWidth: 1260,
    margin: "0 auto",
  },
  blobLeft: {
    position: "absolute",
    top: -80,
    left: -120,
    width: 480,
    height: 480,
    borderRadius: "50%",
    background: "radial-gradient(circle, rgba(234,88,12,0.07) 0%, transparent 70%)",
    pointerEvents: "none",
    zIndex: 0,
  },
  blobRight: {
    position: "absolute",
    bottom: -100,
    right: -100,
    width: 520,
    height: 520,
    borderRadius: "50%",
    background: "radial-gradient(circle, rgba(15,23,42,0.05) 0%, transparent 70%)",
    pointerEvents: "none",
    zIndex: 0,
  },
  header: {
    textAlign: "center",
    marginBottom: 56,
  },
  badge: {
    display: "inline-flex",
    alignItems: "center",
    gap: 8,
    background: "#fff7ed",
    border: "1px solid #fed7aa",
    borderRadius: 100,
    padding: "6px 16px",
    fontSize: "0.78rem",
    fontWeight: 600,
    color: "#c2410c",
    letterSpacing: "0.06em",
    textTransform: "uppercase",
    marginBottom: 20,
    fontFamily: "'DM Sans', sans-serif",
  },
  badgeDot: {
    display: "inline-block",
    width: 7,
    height: 7,
    borderRadius: "50%",
    background: "#ea580c",
  },
  heading: {
    fontFamily: "'Sora', sans-serif",
    fontWeight: 800,
    fontSize: "2.6rem",
    color: "#0f172a",
    margin: "0 0 16px 0",
    letterSpacing: "-0.02em",
    lineHeight: 1.18,
  },
  subheading: {
    fontFamily: "'DM Sans', sans-serif",
    fontSize: "1.1rem",
    color: "#64748b",
    maxWidth: 540,
    margin: "0 auto",
    lineHeight: 1.65,
    fontWeight: 400,
  },
  card: {
    background: "#fff",
    border: "1.5px solid #e8edf3",
    borderRadius: 16,
    padding: "24px 20px 20px",
    cursor: "pointer",
    transition: "all 0.22s cubic-bezier(0.34,1.56,0.64,1)",
    display: "flex",
    flexDirection: "column",
    gap: 14,
    position: "relative",
    overflow: "hidden",
  },
  iconBubble: {
    width: 52,
    height: 52,
    borderRadius: 14,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    flexShrink: 0,
  },
  iconEmoji: {
    fontSize: "1.6rem",
    lineHeight: 1,
    position: "relative",
    zIndex: 1,
  },
  iconGlow: {
    position: "absolute",
    inset: 0,
    borderRadius: 14,
    transition: "opacity 0.2s ease",
  },
  cardBody: {
    flex: 1,
  },
  cardName: {
    fontFamily: "'Sora', sans-serif",
    fontWeight: 700,
    fontSize: "0.92rem",
    margin: "0 0 6px 0",
    transition: "color 0.18s ease",
    letterSpacing: "-0.01em",
  },
  cardDesc: {
    fontFamily: "'DM Sans', sans-serif",
    fontSize: "0.8rem",
    color: "#94a3b8",
    margin: 0,
    lineHeight: 1.6,
    fontWeight: 400,
  },
  cardArrow: {
    position: "absolute",
    bottom: 16,
    right: 18,
    fontSize: "0.95rem",
    color: "#ea580c",
    fontWeight: 700,
    transition: "all 0.2s ease",
  },
  connectorRow: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 12,
    margin: "48px auto 40px",
  },
  connectorDot: {
    width: 6,
    height: 6,
    borderRadius: "50%",
    background: "#ea580c",
    animation: "is-pulse 2.2s ease-in-out infinite",
  },
  ctaRow: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 16,
  },
  ctaBtn: {
    display: "inline-flex",
    alignItems: "center",
    fontFamily: "'Sora', sans-serif",
    fontWeight: 700,
    fontSize: "0.96rem",
    padding: "13px 32px",
    borderRadius: 10,
    border: "2px solid #ea580c",
    cursor: "pointer",
    transition: "all 0.2s ease",
    letterSpacing: "0.01em",
  },
  ctaNote: {
    fontFamily: "'DM Sans', sans-serif",
    fontSize: "0.88rem",
    color: "#94a3b8",
    margin: 0,
  },
  ctaLink: {
    color: "#ea580c",
    fontWeight: 600,
    textDecoration: "none",
  },
};