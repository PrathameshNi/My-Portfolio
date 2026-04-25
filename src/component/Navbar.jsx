import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import Resume from "../img/PRATHAMESH NIVDEKAR Resume.pdf";

const navLinks = [
  { label: "About", to: "about" },
  { label: "Skills", to: "skills" },
  { label: "Projects", to: "projects" },
  { label: "Certs", to: "certificates" },
  { label: "Contact", to: "contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
      padding: "0 24px",
      transition: "all 0.4s ease",
      background: scrolled ? "rgba(4,4,10,0.85)" : "transparent",
      backdropFilter: scrolled ? "blur(20px)" : "none",
      borderBottom: scrolled ? "1px solid rgba(255,255,255,0.05)" : "none",
    }}>
      <div style={{
        maxWidth: 1200, margin: "0 auto",
        display: "flex", alignItems: "center", justifyContent: "space-between",
        height: 72,
      }}>
        {/* Logo */}
        <div style={{
          fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 22,
          background: "linear-gradient(135deg, var(--accent), var(--accent-2))",
          WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
          cursor: "pointer",
        }}>
          Prathamesh Nivdekar
        </div>

        {/* Desktop Links */}
        <div style={{ display: "flex", gap: 8, alignItems: "center" }} className="desktop-nav">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              smooth spy offset={-80} duration={600}
              style={{
                padding: "8px 18px", borderRadius: 100,
                fontFamily: "var(--font-mono)", fontSize: 13,
                color: "var(--text-secondary)", cursor: "pointer",
                transition: "all 0.25s ease",
                letterSpacing: "0.5px",
              }}
              activeStyle={{ color: "var(--accent)", background: "rgba(99,102,241,0.1)" }}
              onMouseEnter={e => { e.target.style.color = "var(--text-primary)"; e.target.style.background = "rgba(255,255,255,0.05)"; }}
              onMouseLeave={e => { e.target.style.color = "var(--text-secondary)"; e.target.style.background = "transparent"; }}
            >
              {link.label}
            </Link>
          ))}
          <a
            href={Resume} download
            className="btn btn-primary"
            style={{ padding: "10px 22px", fontSize: 13, marginLeft: 8 }}
          >
            Resume ↓
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            background: "none", border: "none", cursor: "pointer",
            color: "var(--text-primary)", fontSize: 24,
            display: "none", padding: 8,
          }}
          className="mobile-menu-btn"
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div style={{
          background: "rgba(4,4,10,0.98)", backdropFilter: "blur(20px)",
          padding: "24px", borderTop: "1px solid var(--border)",
          display: "flex", flexDirection: "column", gap: 4,
        }}>
          {navLinks.map((link) => (
            <Link
              key={link.to} to={link.to}
              smooth offset={-80} duration={600}
              onClick={() => setMenuOpen(false)}
              style={{
                padding: "14px 16px", borderRadius: 8,
                fontFamily: "var(--font-mono)", fontSize: 14,
                color: "var(--text-secondary)", cursor: "pointer",
                borderBottom: "1px solid var(--border)",
              }}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
      `}</style>
    </nav>
  );
}