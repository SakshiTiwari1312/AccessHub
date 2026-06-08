import { useState, useEffect } from "react";
import { ChevronDown, Menu, X, Search } from "lucide-react";
import logo from "../assets/Accesshub.AI-Logo.png";
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Features", hasDropdown: true },
    { label: "Solutions", hasDropdown: true },
    { label: "Guide", hasDropdown: false },
    { label: "Templates", hasDropdown: true },
    { label: "Pricing", hasDropdown: false },
  ];

  return (
    <>
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          backgroundColor: "#ffffff",
          borderBottom: "1px solid #e2e8f0",
          boxShadow: scrolled ? "0 1px 6px rgba(0,0,0,0.08)" : "none",
          transition: "box-shadow 0.3s ease",
        }}
      >
        <div
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            padding: "0 32px",
            height: "64px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "24px",
          }}
        >
          {/* Logo */}
          <div style={{ display: "flex", alignItems: "center", gap: "10px", flexShrink: 0 }}>
            <img src={logo} alt="AccessHub Logo" style={{ height: "40px", flexShrink: 0 }} />
          </div>

          {/* Center Nav */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "4px",
              flex: 1,
              justifyContent: "center",
            }}
            className="desktop-nav"
          >
            {navItems.map(({ label, hasDropdown }) => (
              <button
                key={label}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "3px",
                  padding: "8px 14px",
                  fontSize: "14.5px",
                  fontWeight: 500,
                  color: "#334155",
                  background: "none",
                  border: "none",
                  borderRadius: "6px",
                  cursor: "pointer",
                  whiteSpace: "nowrap",
                  transition: "background 0.15s, color 0.15s",
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.backgroundColor = "#f1f5f9";
                  e.currentTarget.style.color = "#0f172a";
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.backgroundColor = "transparent";
                  e.currentTarget.style.color = "#334155";
                }}
              >
                {label}
                {hasDropdown && (
                  <ChevronDown size={14} style={{ color: "#64748b", marginTop: "1px" }} />
                )}
              </button>
            ))}
          </div>

          {/* Right Actions */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              flexShrink: 0,
            }}
            className="desktop-actions"
          >
            {/* Search */}
            <button
              style={{
                padding: "8px",
                background: "none",
                border: "none",
                borderRadius: "6px",
                cursor: "pointer",
                color: "#64748b",
                display: "flex",
                alignItems: "center",
                transition: "background 0.15s",
              }}
              onMouseEnter={e => e.currentTarget.style.backgroundColor = "#f1f5f9"}
              onMouseLeave={e => e.currentTarget.style.backgroundColor = "transparent"}
            >
              <Search size={18} />
            </button>

            {/* Sign in */}
            <button
              style={{
                padding: "8px 14px",
                fontSize: "14.5px",
                fontWeight: 500,
                color: "#334155",
                background: "none",
                border: "none",
                borderRadius: "6px",
                cursor: "pointer",
                whiteSpace: "nowrap",
                transition: "background 0.15s, color 0.15s",
              }}
              onMouseEnter={e => {
                e.currentTarget.style.backgroundColor = "#f1f5f9";
                e.currentTarget.style.color = "#0f172a";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.backgroundColor = "transparent";
                e.currentTarget.style.color = "#334155";
              }}
            >
              Sign in
            </button>

            {/* Get it free CTA */}
            <button
              style={{
                padding: "9px 20px",
                fontSize: "14.5px",
                fontWeight: 600,
                color: "#ffffff",
                backgroundColor: "#ea580c",
                border: "none",
                borderRadius: "6px",
                cursor: "pointer",
                whiteSpace: "nowrap",
                transition: "background 0.15s",
              }}
              onMouseEnter={e => e.currentTarget.style.backgroundColor = "#c2410c"}
              onMouseLeave={e => e.currentTarget.style.backgroundColor = "#ea580c"}
            >
              Get it free
            </button>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            style={{
              display: "none",
              padding: "6px",
              background: "none",
              border: "none",
              cursor: "pointer",
              color: "#334155",
            }}
            className="mobile-toggle"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div
            style={{
              borderTop: "1px solid #e2e8f0",
              backgroundColor: "#ffffff",
              padding: "12px 24px 20px",
              display: "flex",
              flexDirection: "column",
              gap: "4px",
            }}
          >
            {navItems.map(({ label, hasDropdown }) => (
              <button
                key={label}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "10px 12px",
                  fontSize: "15px",
                  fontWeight: 500,
                  color: "#334155",
                  background: "none",
                  border: "none",
                  borderRadius: "6px",
                  cursor: "pointer",
                  textAlign: "left",
                }}
              >
                {label}
                {hasDropdown && <ChevronDown size={14} style={{ color: "#94a3b8" }} />}
              </button>
            ))}

            <hr style={{ margin: "8px 0", borderColor: "#e2e8f0" }} />

            <button
              style={{
                padding: "10px",
                fontSize: "14.5px",
                fontWeight: 500,
                color: "#334155",
                background: "none",
                border: "1px solid #cbd5e1",
                borderRadius: "6px",
                cursor: "pointer",
              }}
            >
              Sign in
            </button>
            <button
              style={{
                padding: "10px",
                fontSize: "14.5px",
                fontWeight: 600,
                color: "#ffffff",
                backgroundColor: "#ea580c",
                border: "none",
                borderRadius: "6px",
                cursor: "pointer",
                marginTop: "4px",
              }}
            >
              Get it free
            </button>
          </div>
        )}
      </nav>

      {/* Responsive styles */}
      <style>{`
        @media (max-width: 1023px) {
          .desktop-nav { display: none !important; }
          .desktop-actions { display: none !important; }
          .mobile-toggle { display: flex !important; }
        }
      `}</style>

      {/* Spacer */}
      <div style={{ height: "64px" }} />
    </>
  );
}