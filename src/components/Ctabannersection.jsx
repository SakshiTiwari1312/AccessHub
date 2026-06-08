import { useState } from "react";

export default function CTABannerSection() {
  const [primaryHovered, setPrimaryHovered] = useState(false);
  const [secondaryHovered, setSecondaryHovered] = useState(false);

  return (
    <section style={styles.section}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@400;600;700;800&family=DM+Sans:wght@400;500;600&display=swap');

        @keyframes cta-float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33%       { transform: translateY(-14px) rotate(1deg); }
          66%       { transform: translateY(-6px) rotate(-0.5deg); }
        }

        @keyframes cta-floatB {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50%       { transform: translateY(-18px) rotate(-1.5deg); }
        }

        @keyframes cta-fadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        @keyframes cta-shimmer {
          0%   { transform: translateX(-100%) skewX(-15deg); }
          100% { transform: translateX(300%) skewX(-15deg); }
        }

        @keyframes cta-orbit {
          from { transform: rotate(0deg) translateX(120px) rotate(0deg); }
          to   { transform: rotate(360deg) translateX(120px) rotate(-360deg); }
        }

        @keyframes cta-orbitB {
          from { transform: rotate(180deg) translateX(80px) rotate(-180deg); }
          to   { transform: rotate(540deg) translateX(80px) rotate(-540deg); }
        }

        .cta-headline {
          animation: cta-fadeUp 0.6s ease 0.1s both;
        }
        .cta-sub {
          animation: cta-fadeUp 0.6s ease 0.25s both;
        }
        .cta-btns {
          animation: cta-fadeUp 0.6s ease 0.4s both;
        }
        .cta-stat {
          animation: cta-fadeUp 0.6s ease 0.55s both;
        }

        @media (max-width: 900px) {
          .cta-headline { font-size: 2rem !important; }
          .cta-inner { padding: 80px 24px !important; }
          .cta-btns-row { flex-direction: column !important; align-items: center !important; }
          .cta-stats-row { flex-direction: column !important; gap: 20px !important; }
          .cta-stat-divider { display: none !important; }
        }
      `}</style>

      {/* Geometric background shapes */}
      <div style={styles.bgShapes} aria-hidden="true">
        {/* Large hex-like ring top-left */}
        <div style={styles.ringLarge} />
        {/* Medium ring bottom-right */}
        <div style={styles.ringMedium} />
        {/* Dot grid overlay */}
        <div style={styles.dotGrid} />
        {/* Glow orb center */}
        <div style={styles.glowOrb} />
        {/* Floating blobs */}
        <div style={{ ...styles.floatBlob, ...styles.floatBlobA }} />
        <div style={{ ...styles.floatBlob, ...styles.floatBlobB }} />
        {/* Orbiting dots */}
        <div style={styles.orbitCenter}>
          <div style={styles.orbitDotA} />
          <div style={styles.orbitDotB} />
        </div>
      </div>

      <div className="cta-inner" style={styles.inner}>
        {/* Eyebrow */}
        <div style={styles.eyebrow}>
          <span style={styles.eyebrowDot} />
          Trusted by 10,000+ teams worldwide
        </div>

        {/* Headline */}
        <h2 className="cta-headline" style={styles.headline}>
          Ready to take control of{" "}
          <span style={styles.headlineAccent}>access governance?</span>
        </h2>

        {/* Subtext */}
        <p className="cta-sub" style={styles.subtext}>
          Join 10,000+ teams already using AccessHub.ai to secure identities,
          <br />
          automate workflows, and stay audit-ready — all in one platform.
        </p>

        {/* Buttons */}
        <div className="cta-btns cta-btns-row" style={styles.btnRow}>
          <button
            style={{
              ...styles.btnPrimary,
              transform: primaryHovered ? "translateY(-3px) scale(1.03)" : "translateY(0) scale(1)",
              boxShadow: primaryHovered
                ? "0 16px 48px rgba(255,255,255,0.35), 0 4px 16px rgba(0,0,0,0.15)"
                : "0 4px 20px rgba(255,255,255,0.15)",
            }}
            onMouseEnter={() => setPrimaryHovered(true)}
            onMouseLeave={() => setPrimaryHovered(false)}
          >
            {/* Shimmer overlay */}
            {primaryHovered && <div style={styles.shimmer} />}
            <span style={{ position: "relative", zIndex: 1 }}>Start for free</span>
            <span style={{ position: "relative", zIndex: 1, marginLeft: 8 }}>→</span>
          </button>

          <button
            style={{
              ...styles.btnSecondary,
              background: secondaryHovered ? "rgba(255,255,255,0.12)" : "transparent",
              transform: secondaryHovered ? "translateY(-3px)" : "translateY(0)",
              boxShadow: secondaryHovered ? "0 8px 28px rgba(255,255,255,0.1)" : "none",
            }}
            onMouseEnter={() => setSecondaryHovered(true)}
            onMouseLeave={() => setSecondaryHovered(false)}
          >
            Request a demo
            <span style={{ marginLeft: 8 }}>↗</span>
          </button>
        </div>

        {/* Stats row */}
        <div className="cta-stat cta-stats-row" style={styles.statsRow}>
          {[
            { val: "10,000+", label: "Teams onboarded" },
            { val: "99.9%", label: "Uptime SLA" },
            { val: "3×", label: "Faster access reviews" },
            { val: "500+", label: "Enterprise clients" },
          ].map((s, i) => (
            <div key={i} style={styles.statItem}>
              {i > 0 && <div className="cta-stat-divider" style={styles.statDivider} />}
              <div style={styles.statVal}>{s.val}</div>
              <div style={styles.statLabel}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const styles = {
  section: {
    position: "relative",
    background: "#0f172a",
    overflow: "hidden",
    fontFamily: "'DM Sans', sans-serif",
  },
  bgShapes: {
    position: "absolute",
    inset: 0,
    pointerEvents: "none",
    zIndex: 0,
  },
  ringLarge: {
    position: "absolute",
    top: -160,
    left: -160,
    width: 520,
    height: 520,
    borderRadius: "50%",
    border: "1.5px solid rgba(234,88,12,0.18)",
    boxShadow: "inset 0 0 80px rgba(234,88,12,0.04)",
  },
  ringMedium: {
    position: "absolute",
    bottom: -120,
    right: -120,
    width: 380,
    height: 380,
    borderRadius: "50%",
    border: "1.5px solid rgba(255,255,255,0.06)",
  },
  dotGrid: {
    position: "absolute",
    inset: 0,
    backgroundImage: `radial-gradient(rgba(255,255,255,0.07) 1px, transparent 1px)`,
    backgroundSize: "36px 36px",
    opacity: 0.8,
  },
  glowOrb: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    width: 600,
    height: 600,
    borderRadius: "50%",
    background: "radial-gradient(circle, rgba(234,88,12,0.12) 0%, transparent 65%)",
  },
  floatBlob: {
    position: "absolute",
    borderRadius: "50%",
    filter: "blur(1px)",
  },
  floatBlobA: {
    top: "15%",
    right: "12%",
    width: 14,
    height: 14,
    background: "rgba(234,88,12,0.6)",
    animation: "cta-float 6s ease-in-out infinite",
    boxShadow: "0 0 20px rgba(234,88,12,0.4)",
  },
  floatBlobB: {
    bottom: "20%",
    left: "8%",
    width: 10,
    height: 10,
    background: "rgba(249,115,22,0.5)",
    animation: "cta-floatB 8s ease-in-out infinite",
    boxShadow: "0 0 16px rgba(249,115,22,0.3)",
  },
  orbitCenter: {
    position: "absolute",
    top: "50%",
    left: "50%",
    width: 0,
    height: 0,
    transform: "translate(-50%,-50%)",
  },
  orbitDotA: {
    position: "absolute",
    width: 8,
    height: 8,
    borderRadius: "50%",
    background: "rgba(234,88,12,0.5)",
    animation: "cta-orbit 12s linear infinite",
    boxShadow: "0 0 12px rgba(234,88,12,0.4)",
  },
  orbitDotB: {
    position: "absolute",
    width: 5,
    height: 5,
    borderRadius: "50%",
    background: "rgba(255,255,255,0.3)",
    animation: "cta-orbitB 8s linear infinite",
  },
  inner: {
    position: "relative",
    zIndex: 2,
    padding: "108px 48px",
    maxWidth: 860,
    margin: "0 auto",
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 0,
  },
  eyebrow: {
    display: "inline-flex",
    alignItems: "center",
    gap: 8,
    background: "rgba(234,88,12,0.15)",
    border: "1px solid rgba(234,88,12,0.3)",
    borderRadius: 100,
    padding: "6px 18px",
    fontSize: "0.78rem",
    fontWeight: 600,
    color: "#fb923c",
    letterSpacing: "0.06em",
    textTransform: "uppercase",
    marginBottom: 28,
    fontFamily: "'DM Sans', sans-serif",
  },
  eyebrowDot: {
    display: "inline-block",
    width: 7,
    height: 7,
    borderRadius: "50%",
    background: "#ea580c",
    boxShadow: "0 0 8px rgba(234,88,12,0.8)",
  },
  headline: {
    fontFamily: "'Sora', sans-serif",
    fontWeight: 800,
    fontSize: "3rem",
    color: "#ffffff",
    margin: "0 0 20px 0",
    letterSpacing: "-0.03em",
    lineHeight: 1.15,
  },
  headlineAccent: {
    color: "#ea580c",
    position: "relative",
  },
  subtext: {
    fontFamily: "'DM Sans', sans-serif",
    fontSize: "1.08rem",
    color: "rgba(255,255,255,0.6)",
    margin: "0 0 44px 0",
    lineHeight: 1.7,
    fontWeight: 400,
  },
  btnRow: {
    display: "flex",
    gap: 16,
    flexWrap: "wrap",
    justifyContent: "center",
    marginBottom: 60,
  },
  btnPrimary: {
    display: "inline-flex",
    alignItems: "center",
    fontFamily: "'Sora', sans-serif",
    fontWeight: 700,
    fontSize: "0.97rem",
    padding: "15px 36px",
    borderRadius: 12,
    border: "none",
    background: "#ffffff",
    color: "#0f172a",
    cursor: "pointer",
    transition: "all 0.22s ease",
    letterSpacing: "0.01em",
    position: "relative",
    overflow: "hidden",
  },
  shimmer: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "40%",
    height: "100%",
    background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)",
    animation: "cta-shimmer 0.7s ease forwards",
    zIndex: 0,
  },
  btnSecondary: {
    display: "inline-flex",
    alignItems: "center",
    fontFamily: "'Sora', sans-serif",
    fontWeight: 700,
    fontSize: "0.97rem",
    padding: "15px 36px",
    borderRadius: 12,
    border: "2px solid rgba(255,255,255,0.25)",
    color: "#ffffff",
    cursor: "pointer",
    transition: "all 0.22s ease",
    letterSpacing: "0.01em",
  },
  statsRow: {
    display: "flex",
    alignItems: "center",
    gap: 0,
    background: "rgba(255,255,255,0.04)",
    border: "1px solid rgba(255,255,255,0.08)",
    borderRadius: 16,
    padding: "24px 40px",
    backdropFilter: "blur(10px)",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  statItem: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 4,
    padding: "0 36px",
    position: "relative",
  },
  statDivider: {
    position: "absolute",
    left: 0,
    top: "10%",
    height: "80%",
    width: 1,
    background: "rgba(255,255,255,0.1)",
  },
  statVal: {
    fontFamily: "'Sora', sans-serif",
    fontWeight: 800,
    fontSize: "1.7rem",
    color: "#ea580c",
    letterSpacing: "-0.02em",
    lineHeight: 1,
  },
  statLabel: {
    fontFamily: "'DM Sans', sans-serif",
    fontSize: "0.8rem",
    color: "rgba(255,255,255,0.45)",
    fontWeight: 500,
    whiteSpace: "nowrap",
  },
};