import React, { useState } from "react";
import { useInView } from "react-intersection-observer";
import Cloud from "../img/Cloud Computing.pdf"
import Cyber from "../img/Cyber Security and Privacy.pdf"

const certificates = [
  {
  id: 1,
  title: "Cloud Computing",
  issuer: "NPTEL",
  date: "Sept 2025",
  credential: "NPTEL25CS107S363701581",
  icon: "☁️",
  color: "#6366f1",
  description: "Learned core concepts of cloud computing including virtualization, cloud architecture, service models (IaaS, PaaS, SaaS), and deployment strategies.",
  verifyUrl: {Cloud},
  image: "https://via.placeholder.com/400x250/0f0f20/6366f1?text=Cloud+Computing+Certificate",
},
  {
  id: 2,
  title: "Cyber Security",
  issuer: "NPTEL",
  date: "Oct 2025",
  icon: "🔐",
  color: "#22c55e",
  description: "Gained knowledge of cybersecurity fundamentals including network security, cryptography, ethical hacking basics, and risk management techniques.",
  verifyUrl: {Cyber},
  image: "https://via.placeholder.com/400x250/0f0f20/22c55e?text=Cyber+Security+Certificate",
},
 
];

const certCategories = ["All", "Development", "Database", "Cloud", "Frontend", "Backend", "Design"];

export default function Certificates() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedCert, setSelectedCert] = useState(null);
  const { ref, inView } = useInView({ threshold: 0.05, triggerOnce: true });

  const filtered = certificates.filter(c =>
    activeFilter === "All" ? true : c.category === activeFilter
  );

  return (
    <section id="certificates" className="section" style={{ background: "linear-gradient(180deg, transparent, rgba(167,139,250,0.03), transparent)" }}>
      <div className="container" ref={ref}>
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <div className="section-tag" style={{ justifyContent: "center" }}>Credentials</div>
          <h2 className="section-title">Certifications & <span className="gradient-text">Achievements</span></h2>
          <p style={{ color: "var(--text-secondary)", maxWidth: 500, margin: "0 auto" }}>
            Validated skills and knowledge through industry-recognized certifications.
          </p>
        </div>

        {/* Category filter */}
        <div style={{ display: "flex", gap: 8, justifyContent: "center", flexWrap: "wrap", marginBottom: 48 }}>
          {certCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              style={{
                padding: "7px 16px", borderRadius: 100,
                border: `1px solid ${cat === activeFilter ? "var(--accent-2)" : "var(--border)"}`,
                background: cat === activeFilter ? "rgba(167,139,250,0.12)" : "transparent",
                color: cat === activeFilter ? "var(--accent-2)" : "var(--text-secondary)",
                cursor: "pointer", fontFamily: "var(--font-mono)", fontSize: 11,
                transition: "all 0.25s ease",
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Cert grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 20 }}>
          {filtered.map((cert, i) => (
            <div
              key={cert.id}
              className="glass-card"
              onClick={() => setSelectedCert(cert)}
              style={{
                padding: "28px", cursor: "pointer",
                opacity: inView ? 1 : 0,
                animation: inView ? `fadeUp 0.5s ${i * 0.09}s ease forwards` : "none",
                borderTop: `2px solid ${cert.color}40`,
              }}
            >
              {/* Header */}
              <div style={{ display: "flex", alignItems: "flex-start", gap: 14, marginBottom: 16 }}>
                <div style={{
                  width: 48, height: 48, borderRadius: 12, flexShrink: 0,
                  background: `${cert.color}15`, border: `1px solid ${cert.color}30`,
                  display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22,
                }}>
                  {cert.icon}
                </div>
                <div>
                  <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 15, lineHeight: 1.3 }}>
                    {cert.title}
                  </h3>
                  <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--text-muted)", marginTop: 4 }}>
                    {cert.issuer}
                  </div>
                </div>
              </div>

              <p style={{ color: "var(--text-secondary)", fontSize: 13, lineHeight: 1.6, marginBottom: 20 }}>
                {cert.description}
              </p>

              {/* Footer */}
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--text-muted)" }}>Issued</span>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: cert.color }}>{cert.date}</span>
                </div>
                <div style={{
                  padding: "4px 12px", borderRadius: 100,
                  background: `${cert.color}15`, border: `1px solid ${cert.color}30`,
                  fontFamily: "var(--font-mono)", fontSize: 10, color: cert.color,
                }}>
                  {cert.category}
                </div>
              </div>

              {/* View hint */}
              <div style={{ marginTop: 16, borderTop: "1px solid var(--border)", paddingTop: 14, textAlign: "center" }}>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--text-muted)" }}>
                  Click to view details →
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedCert && (
        <div
          onClick={() => setSelectedCert(null)}
          style={{
            position: "fixed", inset: 0, zIndex: 200,
            background: "rgba(0,0,0,0.8)", backdropFilter: "blur(8px)",
            display: "flex", alignItems: "center", justifyContent: "center", padding: 24,
          }}
        >
          <div
            onClick={e => e.stopPropagation()}
            style={{
              background: "#0c0c18", border: `1px solid ${selectedCert.color}40`,
              borderRadius: 24, maxWidth: 500, width: "100%",
              overflow: "hidden", boxShadow: `0 0 60px ${selectedCert.color}30`,
            }}
          >
            <img src={selectedCert.image} alt={selectedCert.title} style={{ width: "100%", height: 200, objectFit: "cover" }} />
            <div style={{ padding: 32 }}>
              <div style={{ fontSize: 32, marginBottom: 12 }}>{selectedCert.icon}</div>
              <h3 style={{ fontFamily: "var(--font-display)", fontSize: 22, fontWeight: 800, marginBottom: 6 }}>
                {selectedCert.title}
              </h3>
              <div style={{ fontFamily: "var(--font-mono)", fontSize: 13, color: "var(--text-muted)", marginBottom: 16 }}>
                {selectedCert.issuer} · {selectedCert.date}
              </div>
              <p style={{ color: "var(--text-secondary)", fontSize: 14, lineHeight: 1.7, marginBottom: 20 }}>
                {selectedCert.description}
              </p>
              
              <div style={{ display: "flex", gap: 12 }}>
                <a href={selectedCert.verifyUrl} target="_blank" rel="noreferrer" className="btn btn-primary" style={{ flex: 1, justifyContent: "center" }}>
                  ✓ Verify Certificate
                </a>
                <button onClick={() => setSelectedCert(null)} className="btn btn-ghost" style={{ flex: 1, justifyContent: "center" }}>
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}