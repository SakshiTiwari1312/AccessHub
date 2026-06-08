import { useState } from "react";

// ─── Trusted logos ────────────────────────────────────────────────────────────
const LOGOS = [
  {
    name: "NASA",
    svg: (
      <svg viewBox="0 0 80 34" width="72" height="30" fill="none">
        <text x="0" y="26" fontFamily="'Arial Black',sans-serif" fontWeight="900" fontSize="28" fill="#0B3D91" letterSpacing="2">NASA</text>
      </svg>
    ),
  },
  {
    name: "AIR CANADA",
    svg: (
      <svg viewBox="0 0 130 28" width="110" height="26" fill="none">
        <text x="0" y="20" fontFamily="Georgia,serif" fontWeight="700" fontSize="16" fill="#D2001F" letterSpacing="1">AIR CANADA</text>
      </svg>
    ),
  },
  {
    name: "VISA",
    svg: (
      <svg viewBox="0 0 72 28" width="62" height="26" fill="none">
        <text x="0" y="22" fontFamily="'Arial Black',sans-serif" fontWeight="900" fontSize="26" fill="#1A1F71">VISA</text>
      </svg>
    ),
  },
  {
    name: "Canva",
    svg: (
      <svg viewBox="0 0 80 28" width="68" height="26" fill="none">
        <text x="0" y="22" fontFamily="Georgia,serif" fontWeight="700" fontSize="22" fill="#00C4CC">Canva</text>
      </svg>
    ),
  },
  {
    name: "Domino's",
    svg: (
      <svg viewBox="0 0 100 28" width="90" height="26" fill="none">
        <text x="0" y="22" fontFamily="'Arial Black',sans-serif" fontWeight="900" fontSize="16" fill="#006491">Domino's</text>
      </svg>
    ),
  },
  {
    name: "Ford",
    svg: (
      <svg viewBox="0 0 72 28" width="62" height="26" fill="none">
        <text x="0" y="24" fontFamily="Georgia,serif" fontStyle="italic" fontWeight="700" fontSize="24" fill="#003078">Ford</text>
      </svg>
    ),
  },
];

// ─── Board data ───────────────────────────────────────────────────────────────
const TABS = ["Timeline", "Backlog", "Board", "List", "Goals"];

const COLUMNS = [
  {
    id: "todo",
    label: "TODO",
    count: 4,
    dotColor: "#94a3b8",
    cards: [
      { id: "AH-21", tag: "ACCESS", title: "Setup SSO integration for enterprise tenants", avatar: "M", avatarColor: "#f97316" },
      { id: "AH-22", tag: "GOVERNANCE", title: "Define role matrix for QA vs Developer", avatar: "P", avatarColor: "#3b82f6" },
    ],
  },
  {
    id: "inprogress",
    label: "IN PROGRESS",
    count: 3,
    dotColor: "#f97316",
    cards: [
      { id: "AH-09", tag: "IAM", title: 'Standardize "Approver" badge logic across tenants', avatar: "R", avatarColor: "#10b981" },
      { id: "AH-10", tag: "WORKFLOW", title: "Finalize access request approval workflow", avatar: "S", avatarColor: "#8b5cf6" },
    ],
  },
  {
    id: "review",
    label: "READY FOR REVIEW",
    count: 2,
    dotColor: "#8b5cf6",
    cards: [
      { id: "AH-07", tag: "COMPLIANCE", title: "Implement audit log export to CSV/PDF", avatar: "K", avatarColor: "#ef4444" },
    ],
  },
  {
    id: "done",
    label: "DONE",
    count: 6,
    dotColor: "#22c55e",
    cards: [
      { id: "AH-03", tag: "ACCESS", title: "User lifecycle onboarding flow", avatar: "M", avatarColor: "#f97316" },
    ],
  },
];

const AVATARS = [
  { l: "M", c: "#f97316" },
  { l: "P", c: "#3b82f6" },
  { l: "R", c: "#10b981" },
  { l: "S", c: "#8b5cf6" },
];

export default function TrustedAndBoardSection() {
  const [activeTab, setActiveTab] = useState("Board");

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@600;700;800&family=DM+Sans:wght@400;500;600&display=swap');

        .tbs-root {
          font-family: 'DM Sans', sans-serif;
          background: #f0f4f8;
        }

        /* ── Trusted strip ── */
        .tbs-trusted {
          background: #ffffff;
          border-top: 1px solid #e2e8f0;
          border-bottom: 1px solid #e2e8f0;
          padding: 28px 40px;
        }
        .tbs-trusted-inner {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          gap: 40px;
          flex-wrap: wrap;
          justify-content: center;
        }
        .tbs-trusted-label {
          font-size: 11.5px;
          font-weight: 600;
          letter-spacing: 1.4px;
          color: #94a3b8;
          text-transform: uppercase;
          white-space: nowrap;
          flex-shrink: 0;
        }
        .tbs-logo-divider {
          width: 1px;
          height: 28px;
          background: #e2e8f0;
          flex-shrink: 0;
        }
        .tbs-logos {
          display: flex;
          align-items: center;
          gap: 44px;
          flex-wrap: wrap;
          justify-content: center;
        }
        .tbs-logo {
          opacity: 0.45;
          filter: grayscale(1);
          transition: opacity 0.22s, filter 0.22s;
          cursor: default;
          display: flex;
          align-items: center;
        }
        .tbs-logo:hover { opacity: 1; filter: grayscale(0); }

        /* ── Board section ── */
        .tbs-board-section {
          padding: 72px 40px 88px;
          max-width: 1200px;
          margin: 0 auto;
        }

        /* header */
        .tbs-section-header {
          text-align: center;
          margin-bottom: 48px;
        }
        .tbs-section-title {
          font-family: 'Sora', sans-serif;
          font-size: clamp(28px, 3.2vw, 42px);
          font-weight: 800;
          color: #0f172a;
          letter-spacing: -1.2px;
          margin: 0 0 16px;
          line-height: 1.1;
        }
        .tbs-section-sub {
          font-size: 16.5px;
          color: #475569;
          max-width: 580px;
          margin: 0 auto;
          line-height: 1.65;
        }

        /* White board card */
        .tbs-board-card {
          background: #ffffff;
          border-radius: 16px;
          border: 1px solid #e2e8f0;
          box-shadow: 0 4px 32px rgba(0,0,0,0.06), 0 1px 4px rgba(0,0,0,0.04);
          overflow: hidden;
        }

        /* top bar */
        .tbs-board-topbar {
          padding: 18px 24px 0;
          border-bottom: 1px solid #f1f5f9;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          flex-wrap: wrap;
        }
        .tbs-tab-row {
          display: flex;
          align-items: center;
          gap: 2px;
        }
        .tbs-tab {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 10px 16px;
          font-size: 13.5px;
          font-weight: 500;
          color: #64748b;
          background: none;
          border: none;
          border-bottom: 2.5px solid transparent;
          cursor: pointer;
          white-space: nowrap;
          transition: color 0.15s, border-color 0.15s;
          margin-bottom: -1px;
          font-family: 'DM Sans', sans-serif;
        }
        .tbs-tab:hover { color: #0f172a; }
        .tbs-tab.active {
          color: #2563eb;
          border-bottom-color: #2563eb;
          font-weight: 600;
        }
        .tbs-tab-icon { font-size: 14px; opacity: 0.7; }
        .tbs-tab-plus {
          padding: 10px 12px;
          font-size: 16px;
          color: #94a3b8;
          background: none;
          border: none;
          cursor: pointer;
          margin-bottom: -1px;
          border-bottom: 2.5px solid transparent;
        }

        /* filter row */
        .tbs-filter-row {
          padding: 14px 24px;
          display: flex;
          align-items: center;
          gap: 10px;
          border-bottom: 1px solid #f1f5f9;
          flex-wrap: wrap;
        }
        .tbs-search {
          padding: 7px 12px;
          font-size: 13px;
          font-family: 'DM Sans', sans-serif;
          border: 1.5px solid #e2e8f0;
          border-radius: 6px;
          outline: none;
          color: #374151;
          background: #f8fafc;
          width: 170px;
          transition: border-color 0.15s;
        }
        .tbs-search:focus { border-color: #ea580c; background: #fff; }
        .tbs-search::placeholder { color: #94a3b8; }

        .tbs-av-stack { display: flex; align-items: center; }
        .tbs-av {
          width: 28px; height: 28px; border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          font-size: 11px; font-weight: 700; color: #fff;
          border: 2.5px solid #fff;
          margin-left: -7px;
        }
        .tbs-av:first-child { margin-left: 0; }
        .tbs-av-more {
          background: #e2e8f0 !important;
          color: #64748b !important;
          font-size: 10px;
        }
        .tbs-filter-btn {
          display: flex; align-items: center; gap: 6px;
          padding: 7px 13px;
          font-size: 13px; font-weight: 500;
          border: 1.5px solid #e2e8f0;
          border-radius: 6px;
          background: #fff;
          color: #475569;
          cursor: pointer;
          font-family: 'DM Sans', sans-serif;
          transition: border-color 0.15s;
        }
        .tbs-filter-btn:hover { border-color: #94a3b8; }

        /* board columns grid */
        .tbs-board-body {
          padding: 20px 20px 24px;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 14px;
          overflow-x: auto;
        }
        .tbs-col {
          background: #f8fafc;
          border-radius: 10px;
          padding: 14px 12px;
          min-width: 200px;
        }
        .tbs-col-head {
          display: flex; align-items: center; gap: 7px;
          margin-bottom: 12px;
        }
        .tbs-col-dot { width: 8px; height: 8px; border-radius: 50%; flex-shrink: 0; }
        .tbs-col-label {
          font-size: 10.5px;
          font-weight: 700;
          letter-spacing: 0.8px;
          text-transform: uppercase;
          color: #64748b;
          flex: 1;
        }
        .tbs-col-count {
          font-size: 11px; font-weight: 700;
          background: #e2e8f0; color: #94a3b8;
          border-radius: 10px; padding: 1px 7px;
        }

        /* ticket card */
        .tbs-card {
          background: #fff;
          border: 1px solid #e8edf3;
          border-radius: 8px;
          padding: 12px;
          margin-bottom: 9px;
          cursor: pointer;
          box-shadow: 0 1px 2px rgba(0,0,0,0.04);
          transition: box-shadow 0.15s, transform 0.15s;
        }
        .tbs-card:hover {
          box-shadow: 0 6px 16px rgba(0,0,0,0.09);
          transform: translateY(-1px);
        }
        .tbs-card-tag {
          display: inline-block;
          font-size: 10px; font-weight: 700;
          letter-spacing: 0.6px;
          text-transform: uppercase;
          background: #fff3e9; color: #ea580c;
          border-radius: 4px; padding: 2px 7px;
          margin-bottom: 7px;
        }
        .tbs-card-title {
          font-size: 13px; font-weight: 500;
          color: #1e293b; line-height: 1.45;
          margin-bottom: 10px;
        }
        .tbs-card-footer {
          display: flex; align-items: center; justify-content: space-between;
        }
        .tbs-card-id {
          display: flex; align-items: center; gap: 5px;
          font-size: 11px; font-weight: 600; color: #94a3b8;
        }
        .tbs-card-check {
          width: 13px; height: 13px; border-radius: 3px;
          background: #2563eb;
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
        }
        .tbs-card-av {
          width: 22px; height: 22px; border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          font-size: 9px; font-weight: 700; color: #fff;
        }

        /* add item */
        .tbs-add-btn {
          width: 100%;
          padding: 9px;
          background: none;
          border: 1.5px dashed #cbd5e1;
          border-radius: 7px;
          color: #94a3b8;
          font-size: 12.5px;
          cursor: pointer;
          font-family: 'DM Sans', sans-serif;
          transition: border-color 0.15s, color 0.15s;
        }
        .tbs-add-btn:hover { border-color: #ea580c; color: #ea580c; }

        /* responsive */
        @media (max-width: 900px) {
          .tbs-board-section { padding: 48px 20px 64px; }
          .tbs-board-body { grid-template-columns: repeat(2, 1fr); }
          .tbs-trusted { padding: 20px 24px; }
        }
        @media (max-width: 600px) {
          .tbs-board-body { grid-template-columns: 1fr; }
          .tbs-logos { gap: 24px; }
        }
      `}</style>

      <div className="tbs-root">

        {/* ── Trusted-by logos strip ───────────────────────────────────────── */}
        <div className="tbs-trusted">
          <div className="tbs-trusted-inner">
            <span className="tbs-trusted-label">Trusted by</span>
            <div className="tbs-logo-divider" />
            <div className="tbs-logos">
              {LOGOS.map((l) => (
                <div key={l.name} className="tbs-logo">{l.svg}</div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Board preview section ────────────────────────────────────────── */}
        <div className="tbs-board-section">

          {/* heading */}
          <div className="tbs-section-header">
            <h2 className="tbs-section-title">Build your human-AI super team</h2>
            <p className="tbs-section-sub">
              Whether you're tracking access requests or resolving critical bugs,
              AccessHub is how the modern enterprise team stays in sync.
            </p>
          </div>

          {/* board card */}
          <div className="tbs-board-card">

            {/* tab bar */}
            <div className="tbs-board-topbar">
              <div className="tbs-tab-row">
                {TABS.map((t) => (
                  <button
                    key={t}
                    className={`tbs-tab${activeTab === t ? " active" : ""}`}
                    onClick={() => setActiveTab(t)}
                  >
                    <span className="tbs-tab-icon">
                      {t === "Timeline" ? "◫" : t === "Backlog" ? "☰" : t === "Board" ? "⊞" : t === "List" ? "≡" : "◎"}
                    </span>
                    {t}
                  </button>
                ))}
                <button className="tbs-tab-plus">＋</button>
              </div>
            </div>

            {/* filter row */}
            <div className="tbs-filter-row">
              <input className="tbs-search" placeholder="Search board…" />

              <div className="tbs-av-stack">
                {AVATARS.map((a, i) => (
                  <div key={i} className="tbs-av" style={{ background: a.c }}>{a.l}</div>
                ))}
                <div className="tbs-av tbs-av-more">+3</div>
              </div>

              <button className="tbs-filter-btn">
                <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                  <line x1="1" y1="3.5" x2="12" y2="3.5" stroke="#64748b" strokeWidth="1.4" strokeLinecap="round"/>
                  <line x1="3" y1="6.5" x2="10" y2="6.5" stroke="#64748b" strokeWidth="1.4" strokeLinecap="round"/>
                  <line x1="5" y1="9.5" x2="8" y2="9.5" stroke="#64748b" strokeWidth="1.4" strokeLinecap="round"/>
                </svg>
                Filter
              </button>
            </div>

            {/* columns */}
            <div className="tbs-board-body">
              {COLUMNS.map((col) => (
                <div key={col.id} className="tbs-col">
                  <div className="tbs-col-head">
                    <div className="tbs-col-dot" style={{ background: col.dotColor }} />
                    <span className="tbs-col-label">{col.label}</span>
                    <span className="tbs-col-count">{col.count}</span>
                  </div>

                  {col.cards.map((card) => (
                    <div key={card.id} className="tbs-card">
                      <span className="tbs-card-tag">{card.tag}</span>
                      <p className="tbs-card-title">{card.title}</p>
                      <div className="tbs-card-footer">
                        <div className="tbs-card-id">
                          <div className="tbs-card-check">
                            <svg width="8" height="6" viewBox="0 0 8 6" fill="none">
                              <polyline points="1,3 3,5 7,1" stroke="#fff" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </div>
                          {card.id}
                        </div>
                        <div className="tbs-card-av" style={{ background: card.avatarColor }}>
                          {card.avatar}
                        </div>
                      </div>
                    </div>
                  ))}

                  <button className="tbs-add-btn">+ Add item</button>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </>
  );
}