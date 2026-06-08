import { useState } from "react";
const plans = [
  {
    id: "free",
    name: "Free",
    tagline: "For small teams getting started",
    monthly: 0,
    annual: 0,
    cta: "Get started",
    ctaStyle: "outline",
    featured: false,
    features: [
      "Up to 5 users",
      "Basic IAM workflows",
      "Access request tracking",
      "Community support",
      "1 project workspace",
      "7-day audit log retention",
    ],
  },
  {
    id: "pro",
    name: "Pro",
    tagline: "For growing teams who need control",
    monthly: 999,
    annual: 799,
    cta: "Start free trial",
    ctaStyle: "filled",
    featured: true,
    badge: "Most Popular",
    features: [
      "Up to 50 users",
      "Full IAM + Role Governance",
      "Advanced access workflows",
      "Jira-style issue tracking",
      "SAML / SSO integration",
      "Priority email support",
    ],
  },
  {
    id: "enterprise",
    name: "Enterprise",
    tagline: "For large orgs with complex needs",
    monthly: null,
    annual: null,
    cta: "Contact sales",
    ctaStyle: "outline",
    featured: false,
    features: [
      "Unlimited users",
      "Custom role policies & RBAC",
      "Dedicated onboarding & CSM",
      "SLA-backed 99.9% uptime",
      "Audit & compliance exports",
      "On-prem or private cloud",
    ],
  },
];

export default function PricingSection() {
  const [annual, setAnnual] = useState(false);
  const [hoveredPlan, setHoveredPlan] = useState(null);
  const [toggleHovered, setToggleHovered] = useState(false);

  return (
    <section style={styles.section}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@400;600;700;800&family=DM+Sans:wght@400;500;600&display=swap');

        @keyframes pr-fadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        @keyframes pr-badgePulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(234,88,12,0.35); }
          50%       { box-shadow: 0 0 0 7px rgba(234,88,12,0); }
        }

        @keyframes pr-shimmer {
          0%   { background-position: -400px 0; }
          100% { background-position: 400px 0; }
        }

        .pr-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
          max-width: 1060px;
          margin: 0 auto;
          align-items: start;
        }

        .pr-card-anim {
          animation: pr-fadeUp 0.55s ease both;
        }

        @media (max-width: 900px) {
          .pr-grid {
            grid-template-columns: 1fr !important;
            max-width: 480px !important;
          }
          .pr-heading { font-size: 2rem !important; }
          .pr-inner { padding: 72px 20px !important; }
        }
      `}</style>

      {/* Background grid pattern */}
      <div style={styles.gridPattern} aria-hidden="true" />
      <div style={styles.blobCenter} aria-hidden="true" />

      <div className="pr-inner" style={styles.inner}>

        {/* Header */}
        <div style={styles.header}>
          <div style={styles.badge}>
            <span style={styles.badgeDot} />
            Pricing
          </div>
          <h2 className="pr-heading" style={styles.heading}>
            Simple, transparent pricing
          </h2>
          <p style={styles.subheading}>
            Start free. Scale as you grow. No hidden fees, ever.
          </p>

          {/* Toggle */}
          <div style={styles.toggleWrapper}>
            <span style={{
              ...styles.toggleLabel,
              color: !annual ? "#0f172a" : "#94a3b8",
              fontWeight: !annual ? 600 : 400,
            }}>
              Monthly
            </span>

            <button
              onClick={() => setAnnual(a => !a)}
              onMouseEnter={() => setToggleHovered(true)}
              onMouseLeave={() => setToggleHovered(false)}
              style={{
                ...styles.toggleTrack,
                background: annual ? "#ea580c" : "#e2e8f0",
                boxShadow: toggleHovered ? "0 0 0 3px rgba(234,88,12,0.2)" : "none",
              }}
              aria-label="Toggle annual billing"
            >
              <div style={{
                ...styles.toggleThumb,
                transform: annual ? "translateX(20px)" : "translateX(0px)",
              }} />
            </button>

            <span style={{
              ...styles.toggleLabel,
              color: annual ? "#0f172a" : "#94a3b8",
              fontWeight: annual ? 600 : 400,
            }}>
              Annual
            </span>

            {annual && (
              <span style={styles.saveBadge}>Save 20%</span>
            )}
          </div>
        </div>

        {/* Cards */}
        <div className="pr-grid">
          {plans.map((plan, i) => {
            const isHovered = hoveredPlan === plan.id;
            const price = annual ? plan.annual : plan.monthly;

            return (
              <div
                key={plan.id}
                className="pr-card-anim"
                style={{
                  ...styles.card,
                  ...(plan.featured ? styles.cardFeatured : {}),
                  animationDelay: `${i * 100}ms`,
                  transform: plan.featured
                    ? isHovered ? "translateY(-8px) scale(1.01)" : "translateY(-6px) scale(1.005)"
                    : isHovered ? "translateY(-5px)" : "translateY(0)",
                  boxShadow: plan.featured
                    ? isHovered
                      ? "0 24px 60px rgba(234,88,12,0.25), 0 4px 16px rgba(234,88,12,0.12)"
                      : "0 16px 48px rgba(234,88,12,0.18), 0 4px 16px rgba(234,88,12,0.08)"
                    : isHovered
                      ? "0 12px 40px rgba(15,23,42,0.1)"
                      : "0 2px 12px rgba(15,23,42,0.06)",
                }}
                onMouseEnter={() => setHoveredPlan(plan.id)}
                onMouseLeave={() => setHoveredPlan(null)}
              >
                {/* Featured top bar */}
                {plan.featured && <div style={styles.featuredBar} />}

                {/* Badge */}
                {plan.badge && (
                  <div style={styles.popularBadge}>
                    <span style={styles.popularBadgeDot} />
                    {plan.badge}
                  </div>
                )}

                {/* Plan header */}
                <div style={styles.planHeader}>
                  <h3 style={{
                    ...styles.planName,
                    color: plan.featured ? "#ea580c" : "#0f172a",
                  }}>
                    {plan.name}
                  </h3>
                  <p style={styles.planTagline}>{plan.tagline}</p>
                </div>

                {/* Price */}
                <div style={styles.priceBlock}>
                  {price === null ? (
                    <div style={styles.customPrice}>Custom</div>
                  ) : (
                    <div style={styles.priceRow}>
                      <span style={styles.currency}>₹</span>
                      <span style={styles.amount}>{price.toLocaleString("en-IN")}</span>
                      <span style={styles.period}>/mo</span>
                    </div>
                  )}
                  {annual && price !== null && price > 0 && (
                    <p style={styles.originalPrice}>
                      <s>₹{(plan.monthly).toLocaleString("en-IN")}/mo</s>
                    </p>
                  )}
                  {price === 0 && (
                    <p style={styles.freeNote}>Forever free</p>
                  )}
                  {price === null && (
                    <p style={styles.freeNote}>Tailored to your org</p>
                  )}
                </div>

                {/* Divider */}
                <div style={{
                  ...styles.divider,
                  background: plan.featured ? "rgba(234,88,12,0.2)" : "#f1f5f9",
                }} />

                {/* Features */}
                <ul style={styles.featureList}>
                  {plan.features.map((feat, fi) => (
                    <li key={fi} style={styles.featureItem}>
                      <span style={{
                        ...styles.checkIcon,
                        background: plan.featured ? "#fff7ed" : "#f0fdf4",
                        color: plan.featured ? "#ea580c" : "#16a34a",
                      }}>
                        ✓
                      </span>
                      <span style={styles.featureText}>{feat}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <PlanButton plan={plan} isHovered={isHovered} />
              </div>
            );
          })}
        </div>

        {/* Bottom note */}
        <p style={styles.bottomNote}>
          <span style={styles.shieldIcon}>🛡️</span>
          All plans include a <strong>14-day free trial</strong>. No credit card required.
        </p>
      </div>
    </section>
  );
}

function PlanButton({ plan, isHovered }) {
  const [btnHovered, setBtnHovered] = useState(false);
  const active = isHovered || btnHovered;

  const filled = plan.ctaStyle === "filled";

  return (
    <button
      style={{
        ...styles.ctaBtn,
        background: filled
          ? active ? "#c2410c" : "#ea580c"
          : active ? "#0f172a" : "transparent",
        color: filled ? "#fff" : active ? "#fff" : "#0f172a",
        border: filled ? "2px solid transparent" : "2px solid #cbd5e1",
        transform: active ? "translateY(-1px)" : "translateY(0)",
        boxShadow: active
          ? filled
            ? "0 8px 24px rgba(234,88,12,0.3)"
            : "0 6px 20px rgba(15,23,42,0.15)"
          : "none",
      }}
      onMouseEnter={() => setBtnHovered(true)}
      onMouseLeave={() => setBtnHovered(false)}
    >
      {plan.cta}
      <span style={{ marginLeft: 8 }}>→</span>
    </button>
  );
}

const styles = {
  section: {
    position: "relative",
    background: "#f8fafc",
    overflow: "hidden",
    fontFamily: "'DM Sans', sans-serif",
  },
  gridPattern: {
    position: "absolute",
    inset: 0,
    backgroundImage: `
      linear-gradient(rgba(15,23,42,0.04) 1px, transparent 1px),
      linear-gradient(90deg, rgba(15,23,42,0.04) 1px, transparent 1px)
    `,
    backgroundSize: "48px 48px",
    zIndex: 0,
    pointerEvents: "none",
  },
  blobCenter: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 700,
    height: 700,
    borderRadius: "50%",
    background: "radial-gradient(circle, rgba(234,88,12,0.05) 0%, transparent 65%)",
    pointerEvents: "none",
    zIndex: 0,
  },
  inner: {
    position: "relative",
    zIndex: 2,
    padding: "96px 48px",
    maxWidth: 1200,
    margin: "0 auto",
  },
  header: {
    textAlign: "center",
    marginBottom: 64,
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
    margin: "0 0 14px 0",
    letterSpacing: "-0.02em",
    lineHeight: 1.18,
  },
  subheading: {
    fontFamily: "'DM Sans', sans-serif",
    fontSize: "1.08rem",
    color: "#64748b",
    margin: "0 0 32px 0",
    lineHeight: 1.6,
  },
  toggleWrapper: {
    display: "inline-flex",
    alignItems: "center",
    gap: 12,
    background: "#fff",
    border: "1.5px solid #e2e8f0",
    borderRadius: 100,
    padding: "8px 20px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
  },
  toggleLabel: {
    fontFamily: "'DM Sans', sans-serif",
    fontSize: "0.9rem",
    transition: "all 0.2s",
    userSelect: "none",
  },
  toggleTrack: {
    width: 44,
    height: 24,
    borderRadius: 100,
    border: "none",
    cursor: "pointer",
    position: "relative",
    transition: "all 0.25s ease",
    padding: 0,
    display: "flex",
    alignItems: "center",
    paddingLeft: 2,
  },
  toggleThumb: {
    width: 20,
    height: 20,
    borderRadius: "50%",
    background: "#fff",
    boxShadow: "0 1px 4px rgba(0,0,0,0.2)",
    transition: "transform 0.25s cubic-bezier(0.34,1.56,0.64,1)",
  },
  saveBadge: {
    background: "#dcfce7",
    color: "#16a34a",
    borderRadius: 100,
    padding: "3px 10px",
    fontSize: "0.75rem",
    fontWeight: 700,
    fontFamily: "'DM Sans', sans-serif",
    letterSpacing: "0.03em",
  },
  card: {
    background: "#ffffff",
    borderRadius: 20,
    padding: "32px 28px",
    border: "1.5px solid #e8edf3",
    transition: "all 0.25s cubic-bezier(0.34,1.56,0.64,1)",
    position: "relative",
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
    gap: 20,
  },
  cardFeatured: {
    border: "2px solid #ea580c",
    background: "#fff",
    zIndex: 1,
  },
  featuredBar: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: 4,
    background: "linear-gradient(90deg, #ea580c, #f97316)",
    borderRadius: "20px 20px 0 0",
  },
  popularBadge: {
    display: "inline-flex",
    alignItems: "center",
    gap: 6,
    background: "#fff7ed",
    border: "1px solid #fed7aa",
    borderRadius: 100,
    padding: "5px 12px",
    fontSize: "0.73rem",
    fontWeight: 700,
    color: "#c2410c",
    letterSpacing: "0.05em",
    textTransform: "uppercase",
    width: "fit-content",
    animation: "pr-badgePulse 2.5s ease infinite",
  },
  popularBadgeDot: {
    display: "inline-block",
    width: 6,
    height: 6,
    borderRadius: "50%",
    background: "#ea580c",
  },
  planHeader: {
    display: "flex",
    flexDirection: "column",
    gap: 6,
  },
  planName: {
    fontFamily: "'Sora', sans-serif",
    fontWeight: 800,
    fontSize: "1.3rem",
    margin: 0,
    letterSpacing: "-0.01em",
  },
  planTagline: {
    fontFamily: "'DM Sans', sans-serif",
    fontSize: "0.85rem",
    color: "#94a3b8",
    margin: 0,
    lineHeight: 1.5,
  },
  priceBlock: {
    display: "flex",
    flexDirection: "column",
    gap: 4,
  },
  priceRow: {
    display: "flex",
    alignItems: "flex-end",
    gap: 2,
  },
  currency: {
    fontFamily: "'Sora', sans-serif",
    fontWeight: 700,
    fontSize: "1.2rem",
    color: "#0f172a",
    lineHeight: 1,
    paddingBottom: 6,
  },
  amount: {
    fontFamily: "'Sora', sans-serif",
    fontWeight: 800,
    fontSize: "2.8rem",
    color: "#0f172a",
    lineHeight: 1,
    letterSpacing: "-0.03em",
  },
  period: {
    fontFamily: "'DM Sans', sans-serif",
    fontSize: "0.9rem",
    color: "#94a3b8",
    paddingBottom: 8,
  },
  customPrice: {
    fontFamily: "'Sora', sans-serif",
    fontWeight: 800,
    fontSize: "2.4rem",
    color: "#0f172a",
    letterSpacing: "-0.03em",
    lineHeight: 1,
  },
  originalPrice: {
    fontFamily: "'DM Sans', sans-serif",
    fontSize: "0.83rem",
    color: "#94a3b8",
    margin: 0,
  },
  freeNote: {
    fontFamily: "'DM Sans', sans-serif",
    fontSize: "0.83rem",
    color: "#94a3b8",
    margin: 0,
  },
  divider: {
    height: 1,
    borderRadius: 1,
  },
  featureList: {
    listStyle: "none",
    margin: 0,
    padding: 0,
    display: "flex",
    flexDirection: "column",
    gap: 11,
    flex: 1,
  },
  featureItem: {
    display: "flex",
    alignItems: "flex-start",
    gap: 11,
  },
  checkIcon: {
    width: 20,
    height: 20,
    borderRadius: 6,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "0.72rem",
    fontWeight: 700,
    flexShrink: 0,
    marginTop: 1,
  },
  featureText: {
    fontFamily: "'DM Sans', sans-serif",
    fontSize: "0.88rem",
    color: "#475569",
    lineHeight: 1.5,
  },
  ctaBtn: {
    width: "100%",
    padding: "13px 20px",
    borderRadius: 10,
    fontFamily: "'Sora', sans-serif",
    fontWeight: 700,
    fontSize: "0.93rem",
    cursor: "pointer",
    transition: "all 0.2s ease",
    letterSpacing: "0.01em",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "auto",
  },
  bottomNote: {
    textAlign: "center",
    fontFamily: "'DM Sans', sans-serif",
    fontSize: "0.9rem",
    color: "#64748b",
    marginTop: 48,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
  },
  shieldIcon: {
    fontSize: "1rem",
  },
};