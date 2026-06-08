import { useState } from "react";

const footerLinks = {
  Product: [
    "IAM Overview",
    "Role Governance",
    "Access Workflows",
    "Issue Tracking",
    "Integrations",
    "Changelog",
  ],
  Solutions: [
    "For Engineering",
    "For QA Teams",
    "For Compliance",
    "For Enterprises",
    "For Startups",
    "Case Studies",
  ],
  Resources: [
    "Documentation",
    "API Reference",
    "Blog",
    "Security",
    "Community",
    "System Status",
  ],
  Company: [
    "About Us",
    "Careers",
    "Press Kit",
    "Partners",
    "Contact Us",
    "Legal",
  ],
};

const socialLinks = [
  {
    name: "Twitter / X",
    href: "#",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.747l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    href: "#",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    name: "GitHub",
    href: "#",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
      </svg>
    ),
  },
];

export default function FooterSection() {
  const [hoveredLink, setHoveredLink] = useState(null);
  const [hoveredSocial, setHoveredSocial] = useState(null);
  const [hoveredBottom, setHoveredBottom] = useState(null);

  return (
    <footer style={styles.footer}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@400;600;700;800&family=DM+Sans:wght@400;500;600&display=swap');

        @keyframes ft-fadeUp {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .ft-grid {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1fr 1fr;
          gap: 48px;
          padding-bottom: 56px;
          border-bottom: 1px solid rgba(255,255,255,0.08);
          animation: ft-fadeUp 0.6s ease both;
        }

        @media (max-width: 1000px) {
          .ft-grid {
            grid-template-columns: 1fr 1fr !important;
            gap: 36px !important;
          }
          .ft-brand { grid-column: 1 / -1 !important; }
        }

        @media (max-width: 560px) {
          .ft-grid {
            grid-template-columns: 1fr !important;
          }
          .ft-brand { grid-column: unset !important; }
          .ft-bottom-bar { flex-direction: column !important; gap: 16px !important; text-align: center !important; }
          .ft-bottom-links { flex-wrap: wrap !important; justify-content: center !important; }
          .ft-inner { padding: 56px 20px 32px !important; }
        }
      `}</style>

      {/* Top gradient line */}
      <div style={styles.topLine} />

      <div className="ft-inner" style={styles.inner}>

        {/* Main grid */}
        <div className="ft-grid">

          {/* Brand column */}
          <div className="ft-brand" style={styles.brandCol}>
            <div style={styles.logoRow}>
              <div style={styles.logoIcon}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2L4 6v6c0 5.5 3.8 10.7 8 12 4.2-1.3 8-6.5 8-12V6L12 2z" fill="#ea580c" />
                  <path d="M9 12l2 2 4-4" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <span style={styles.logoText}>AccessHub<span style={styles.logoDot}>.ai</span></span>
            </div>

            <p style={styles.tagline}>
              Enterprise-grade Identity & Access Management, Role Governance, and
              Issue Tracking — unified in one intelligent platform.
            </p>

            {/* Social links */}
            <div style={styles.socialRow}>
              {socialLinks.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  aria-label={s.name}
                  title={s.name}
                  style={{
                    ...styles.socialBtn,
                    background: hoveredSocial === s.name
                      ? "rgba(234,88,12,0.2)"
                      : "rgba(255,255,255,0.06)",
                    color: hoveredSocial === s.name ? "#ea580c" : "rgba(255,255,255,0.55)",
                    borderColor: hoveredSocial === s.name
                      ? "rgba(234,88,12,0.4)"
                      : "rgba(255,255,255,0.1)",
                    transform: hoveredSocial === s.name ? "translateY(-3px)" : "translateY(0)",
                  }}
                  onMouseEnter={() => setHoveredSocial(s.name)}
                  onMouseLeave={() => setHoveredSocial(null)}
                >
                  {s.icon}
                </a>
              ))}
            </div>

            {/* Status pill */}
            <div style={styles.statusPill}>
              <span style={styles.statusDot} />
              All systems operational
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([col, links]) => (
            <div key={col}>
              <h4 style={styles.colHeading}>{col}</h4>
              <ul style={styles.linkList}>
                {links.map((link) => {
                  const key = `${col}-${link}`;
                  return (
                    <li key={link}>
                      <a
                        href="#"
                        style={{
                          ...styles.footerLink,
                          color: hoveredLink === key
                            ? "#ea580c"
                            : "rgba(255,255,255,0.5)",
                          paddingLeft: hoveredLink === key ? "8px" : "0px",
                        }}
                        onMouseEnter={() => setHoveredLink(key)}
                        onMouseLeave={() => setHoveredLink(null)}
                      >
                        {link}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="ft-bottom-bar" style={styles.bottomBar}>
          <p style={styles.copyright}>
            © {new Date().getFullYear()} AccessHub.ai, Inc. All rights reserved.
          </p>

          <div className="ft-bottom-links" style={styles.bottomLinks}>
            {["Privacy Policy", "Terms of Service", "System Status", "Cookie Settings"].map(
              (item) => (
                <a
                  key={item}
                  href="#"
                  style={{
                    ...styles.bottomLink,
                    color: hoveredBottom === item
                      ? "#ea580c"
                      : "rgba(255,255,255,0.35)",
                  }}
                  onMouseEnter={() => setHoveredBottom(item)}
                  onMouseLeave={() => setHoveredBottom(null)}
                >
                  {item}
                </a>
              )
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}

const styles = {
  footer: {
    position: "relative",
    background: "#0f172a",
    fontFamily: "'DM Sans', sans-serif",
    overflow: "hidden",
  },
  topLine: {
    height: 2,
    background: "linear-gradient(90deg, transparent, #ea580c 30%, #f97316 50%, #ea580c 70%, transparent)",
    opacity: 0.7,
  },
  inner: {
    padding: "72px 64px 40px",
    maxWidth: 1260,
    margin: "0 auto",
  },
  brandCol: {
    display: "flex",
    flexDirection: "column",
    gap: 20,
  },
  logoRow: {
    display: "flex",
    alignItems: "center",
    gap: 10,
  },
  logoIcon: {
    width: 38,
    height: 38,
    background: "rgba(234,88,12,0.15)",
    border: "1px solid rgba(234,88,12,0.3)",
    borderRadius: 10,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  logoText: {
    fontFamily: "'Sora', sans-serif",
    fontWeight: 800,
    fontSize: "1.2rem",
    color: "#ffffff",
    letterSpacing: "-0.02em",
  },
  logoDot: {
    color: "#ea580c",
  },
  tagline: {
    fontFamily: "'DM Sans', sans-serif",
    fontSize: "0.86rem",
    color: "rgba(255,255,255,0.45)",
    lineHeight: 1.7,
    margin: 0,
    maxWidth: 300,
  },
  socialRow: {
    display: "flex",
    gap: 10,
  },
  socialBtn: {
    width: 38,
    height: 38,
    borderRadius: 10,
    border: "1px solid",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textDecoration: "none",
    transition: "all 0.2s ease",
    cursor: "pointer",
  },
  statusPill: {
    display: "inline-flex",
    alignItems: "center",
    gap: 8,
    background: "rgba(22,163,74,0.1)",
    border: "1px solid rgba(22,163,74,0.25)",
    borderRadius: 100,
    padding: "5px 12px",
    fontSize: "0.75rem",
    color: "#4ade80",
    fontWeight: 500,
    width: "fit-content",
  },
  statusDot: {
    width: 7,
    height: 7,
    borderRadius: "50%",
    background: "#22c55e",
    boxShadow: "0 0 8px rgba(34,197,94,0.6)",
    animation: "ft-fadeUp 0s ease both", // keep it stable
    display: "inline-block",
  },
  colHeading: {
    fontFamily: "'Sora', sans-serif",
    fontWeight: 700,
    fontSize: "0.82rem",
    color: "#ffffff",
    letterSpacing: "0.08em",
    textTransform: "uppercase",
    margin: "0 0 20px 0",
  },
  linkList: {
    listStyle: "none",
    padding: 0,
    margin: 0,
    display: "flex",
    flexDirection: "column",
    gap: 10,
  },
  footerLink: {
    fontFamily: "'DM Sans', sans-serif",
    fontSize: "0.875rem",
    textDecoration: "none",
    transition: "all 0.18s ease",
    display: "inline-block",
    lineHeight: 1.4,
  },
  bottomBar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: 32,
    gap: 16,
  },
  copyright: {
    fontFamily: "'DM Sans', sans-serif",
    fontSize: "0.82rem",
    color: "rgba(255,255,255,0.3)",
    margin: 0,
  },
  bottomLinks: {
    display: "flex",
    gap: 24,
    alignItems: "center",
  },
  bottomLink: {
    fontFamily: "'DM Sans', sans-serif",
    fontSize: "0.82rem",
    textDecoration: "none",
    transition: "color 0.18s ease",
  },
};