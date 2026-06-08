import { useState } from "react";

const GoogleIcon = () => (
  <svg width="18" height="18" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
    <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z" />
    <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z" />
    <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z" />
    <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.18 1.48-4.97 2.31-8.16 2.31-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z" />
  </svg>
);

const CheckIcon = () => (
  <svg width="9" height="9" viewBox="0 0 9 9" fill="none">
    <path d="M1.5 4.5L3.5 6.5L7.5 2.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ChevronDown = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
    <path d="M2 4L6 8L10 4" stroke="#94a3b8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

/* ─── Mini card mocks ─── */

function DevCard() {
  return (
    <div style={styles.cardBody}>
      <div style={{ ...styles.mockRow, background: "#1e293b", borderRadius: "8px 8px 0 0" }}>
        <span style={{ fontSize: 10, color: "#94a3b8", fontWeight: 700, letterSpacing: "0.07em", textTransform: "uppercase" }}>
          In progress
        </span>
      </div>
      {[
        { label: "Optimize experience for mobile", badge: "Feedback", badgeColor: "#ffedd5", badgeText: "#c2410c" },
        { label: "Bump version for new API", badge: "Forms", badgeColor: "#dbeafe", badgeText: "#1e40af" },
      ].map((item, i) => (
        <div key={i}>
          <div style={styles.mockRow}>
            <span style={{ flex: 1, fontSize: 12, color: "#374151" }}>{item.label}</span>
            <span style={{ ...styles.badge, background: item.badgeColor, color: item.badgeText }}>{item.badge}</span>
          </div>
          <div style={{ ...styles.mockRow, paddingTop: 4, paddingBottom: 8 }}>
            <div style={styles.checkBox}><CheckIcon /></div>
            <span style={{ flex: 1, fontSize: 11, color: "#94a3b8" }}>NUC-{335 + i}</span>
            <div style={{ display: "flex", gap: 4 }}>
              {["#f59e0b", "#3b82f6"].map((c, j) => (
                <div key={j} style={{ width: 18, height: 18, borderRadius: "50%", background: c }} />
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

function RoleCard() {
  const items = [
    { label: "CRE-18 Workshop brief", bg: "#bfdbfe", color: "#1e40af" },
    { label: "ENG-39 New Landing", bg: "#fed7aa", color: "#c2410c" },
    { label: "MKT-24 Message hub", bg: "#bfdbfe", color: "#1e40af" },
    { label: "MKT-25 Set up social", bg: "#fed7aa", color: "#c2410c" },
  ];
  return (
    <div style={styles.cardBody}>
      <div style={{ ...styles.mockRow, background: "#f1f5f9", display: "flex", justifyContent: "space-between" }}>
        {["Mon", "Tue", "Wed"].map((d) => (
          <span key={d} style={{ fontSize: 10, color: "#94a3b8", fontWeight: 700 }}>{d}</span>
        ))}
      </div>
      <div style={{ padding: "8px 12px", display: "flex", flexDirection: "column", gap: 5 }}>
        {items.map((item, i) => (
          <div key={i} style={{ background: item.bg, borderRadius: 4, padding: "3px 7px", fontSize: 10, color: item.color, fontWeight: 600 }}>
            {item.label}
          </div>
        ))}
      </div>
    </div>
  );
}

function QACard() {
  const rows = [
    { dot: "#f59e0b", label: "Digital Transfo..." },
    { dot: "#10b981", label: "Research and..." },
    { dot: "#3b82f6", label: "Digital Transfo...", bar: true },
    { dot: "#ef4444", label: "blocks" },
    { dot: "#8b5cf6", label: "Data-Driven D..." },
  ];
  return (
    <div style={styles.cardBody}>
      {rows.map((row, i) => (
        <div key={i} style={{ display: "flex", alignItems: "center", gap: 8, padding: "7px 12px", borderBottom: i < rows.length - 1 ? "1px solid #f3f4f6" : "none" }}>
          <div style={{ width: 8, height: 8, borderRadius: "50%", background: row.dot, flexShrink: 0 }} />
          <span style={{ flex: 1, fontSize: 11, color: "#374151" }}>{row.label}</span>
          {row.bar && <div style={{ width: 50, height: 8, borderRadius: 4, background: "#2563eb" }} />}
        </div>
      ))}
    </div>
  );
}

function AuditCard() {
  return (
    <div style={{ ...styles.cardBody, padding: "10px 12px" }}>
      <div style={{ fontSize: 11, fontWeight: 700, color: "#374151", marginBottom: 8 }}>Vendor Request Form</div>
      {["Company name *", "Hello Pipeline"].map((ph, i) => (
        <div key={i} style={styles.formField}>{ph}</div>
      ))}
      <div style={{ ...styles.formField, height: 32 }}>Description</div>
      <div style={{ ...styles.formSelect }}>
        <span>Software category</span>
        <ChevronDown />
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 4, marginTop: 6 }}>
        {[
          { label: "CRM", bg: "#dbeafe", color: "#1e40af" },
          { label: "Analytics", bg: "#d1fae5", color: "#065f46" },
          { label: "Sales", bg: "#ffedd5", color: "#c2410c" },
        ].map((b) => (
          <span key={b.label} style={{ ...styles.badge, background: b.bg, color: b.color, fontSize: 10 }}>{b.label}</span>
        ))}
      </div>
    </div>
  );
}

const bottomCards = [
  { tag: "Access requests & tracking", title: "Software\ndevelopment", MockComp: DevCard },
  { tag: "Plan & launch campaigns", title: "Role\nmanagement", MockComp: RoleCard },
  { tag: "Track issues & delivery", title: "QA issue\ntracking", MockComp: QACard },
  { tag: "Manage & track compliance", title: "Audit &\ncompliance", MockComp: AuditCard },
];

/* ─── Main Hero ─── */

function Hero() {
  const [email, setEmail] = useState("");

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;600;700;800&display=swap');

        * { box-sizing: border-box; margin: 0; padding: 0; }

        body { font-family: 'Manrope', sans-serif; }

        .ah-root {
          font-family: 'Manrope', sans-serif;
          background: #eef4fb;
          min-height: 100vh;
        }

        .ah-top {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
          max-width: 1100px;
          margin: 0 auto;
          padding: 72px 40px 48px;
        }

        .ah-title {
          font-size: clamp(36px, 4.5vw, 58px);
          font-weight: 800;
          line-height: 1.08;
          color: #111827;
          letter-spacing: -0.03em;
          margin-bottom: 18px;
        }

        .ah-sub {
          font-size: 15px;
          line-height: 1.75;
          color: #64748b;
        }

        .ah-right {
          background: #fff;
          border-radius: 20px;
          padding: 28px;
          border: 1px solid #e5e7eb;
        }

        .ah-label {
          display: block;
          font-size: 13px;
          font-weight: 600;
          color: #374151;
          margin-bottom: 8px;
        }

        .ah-hint {
          font-size: 12px;
          color: #94a3b8;
          margin-top: 6px;
          display: block;
        }

        .ah-inp {
          width: 100%;
          height: 48px;
          border: 1px solid #d1d5db;
          border-radius: 10px;
          padding: 0 14px;
          font-size: 14px;
          font-family: inherit;
          outline: none;
          background: #fff;
          color: #111;
          transition: border-color 0.2s;
        }

        .ah-inp:focus { border-color: #2563eb; }

        .ah-btn-primary {
          width: 100%;
          height: 48px;
          border: none;
          border-radius: 10px;
          background: #f5690b;
          color: #fff;
          font-size: 15px;
          font-weight: 700;
          cursor: pointer;
          font-family: inherit;
          margin-top: 14px;
          transition: background 0.2s;
        }

        .ah-btn-primary:hover { background: #1d4ed8; }

        .ah-or {
          display: flex;
          align-items: center;
          gap: 12px;
          margin: 18px 0;
          color: #94a3b8;
          font-size: 12px;
        }

        .ah-or::before, .ah-or::after {
          content: '';
          flex: 1;
          height: 1px;
          background: #e5e7eb;
        }

        .ah-google {
          width: 100%;
          height: 44px;
          border: 1px solid #e5e7eb;
          border-radius: 10px;
          background: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          font-size: 14px;
          font-weight: 600;
          color: #374151;
          cursor: pointer;
          font-family: inherit;
          transition: background 0.2s;
        }

        .ah-google:hover { background: #f9fafb; }

        .ah-cards-wrap {
          background: #eef4fb;
          padding: 0 40px 48px;
        }

        .ah-cards-grid {
          max-width: 1100px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 16px;
        }

        .ah-card {
          background: #fff;
          border-radius: 16px;
          padding: 20px;
          border: 1px solid #e5e7eb;
        }

        .ah-card-tag {
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: #ea580c;
          margin-bottom: 8px;
        }

        .ah-card-title {
          font-size: 17px;
          font-weight: 800;
          color: #111827;
          margin-bottom: 12px;
          line-height: 1.25;
          white-space: pre-line;
        }

        @media (max-width: 900px) {
          .ah-top { grid-template-columns: 1fr; gap: 32px; padding: 48px 24px 32px; }
          .ah-cards-grid { grid-template-columns: repeat(2, 1fr); }
          .ah-cards-wrap { padding: 0 24px 40px; }
        }

        @media (max-width: 560px) {
          .ah-cards-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      <div className="ah-root">

        {/* ── Top hero ── */}
        <div className="ah-top">

          {/* Left */}
          <div>
            <h1 className="ah-title">
              Focus on access governance,<br />not admin.
            </h1>
            <p className="ah-sub">
              AccessHub.ai unifies Managers, QA Engineers and Developers
              on one platform — manage requests, track approvals, monitor
              compliance and resolve problems faster.
            </p>
          </div>

          {/* Right — sign up form */}
          <div className="ah-right">
            <label className="ah-label">Work Email</label>
            <input
              className="ah-inp"
              type="email"
              placeholder="you@company.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <span className="ah-hint">
              Using a work email helps find teammates and boost collaboration.
            </span>
            <button className="ah-btn-primary">Sign up</button>
            <div className="ah-or"><span>Or continue with</span></div>
            <button className="ah-google">
              <GoogleIcon />
              Google
            </button>
          </div>

        </div>

        {/* ── Bottom cards ── */}
        <div className="ah-cards-wrap">
          <div className="ah-cards-grid">
            {bottomCards.map(({ tag, title, MockComp }) => (
              <div key={tag} className="ah-card">
                <div className="ah-card-tag">{tag}</div>
                <div className="ah-card-title">{title}</div>
                <MockComp />
              </div>
            ))}
          </div>
        </div>

      </div>
    </>
  );
}

export default Hero;

/* ─── Shared inline styles for card mocks ─── */
const styles = {
  cardBody: {
    borderRadius: 10,
    overflow: "hidden",
    border: "1px solid #f3f4f6",
    background: "#f9fafb",
  },
  mockRow: {
    display: "flex",
    alignItems: "center",
    gap: 8,
    padding: "8px 12px",
    borderBottom: "1px solid #f3f4f6",
    fontSize: 12,
    color: "#374151",
  },
  badge: {
    fontSize: 10,
    fontWeight: 700,
    padding: "2px 7px",
    borderRadius: 5,
  },
  checkBox: {
    width: 14,
    height: 14,
    borderRadius: 3,
    background: "#2563eb",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
  },
  formField: {
    background: "#f9fafb",
    border: "1px solid #e5e7eb",
    borderRadius: 6,
    padding: "6px 10px",
    fontSize: 11,
    color: "#94a3b8",
    marginBottom: 6,
  },
  formSelect: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    background: "#f9fafb",
    border: "1px solid #e5e7eb",
    borderRadius: 6,
    padding: "6px 10px",
    fontSize: 11,
    color: "#374151",
    marginBottom: 4,
  },
};