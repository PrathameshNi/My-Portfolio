import React, { useState } from "react";
import { useInView } from "react-intersection-observer";
import Turf from "../img/turf.jpg"

const projects = [
  {
  id: 2,
  title: "Turf's Corner",
  description: "A full-stack MERN web application for booking sports turfs online. Users can browse available turfs, check time slots, make bookings, and manage reservations. Includes admin panel for turf management, booking control, and user handling.",
  tags: ["React", "Node.js", "Express.js", "MongoDB", "JWT"],
  category: "fullstack",
  image: {Turf},
  github: "https://github.com/PrathameshNi/Turf_Booking_System",
  live: "https://turf-booking-portal-hb1k.vercel.app/",
  featured: true,
  status: "Live"  
}
  
];

const filters = ["All", "fullstack", "frontend", "backend"];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");
  const { ref, inView } = useInView({ threshold: 0.05, triggerOnce: true });

  const filtered = projects.filter(p =>
    activeFilter === "All" ? true : p.category === activeFilter
  );

  const statusColor = {
    "Live": "#4ade80",
    "In Progress": "#f59e0b",
    "Open Source": "#22d3ee",
  };

  return (
    <section id="projects" className="section">
      <div className="container" ref={ref}>
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: 48, flexWrap: "wrap", gap: 24 }}>
          <div>
            <div className="section-tag">Portfolio</div>
            <h2 className="section-title">Featured <span className="gradient-text">Projects</span></h2>
          </div>
          {/* Filters */}
          <div style={{ display: "flex", gap: 8 }}>
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                style={{
                  padding: "8px 18px", borderRadius: 100,
                  border: `1px solid ${f === activeFilter ? "var(--accent)" : "var(--border)"}`,
                  background: f === activeFilter ? "rgba(99,102,241,0.15)" : "transparent",
                  color: f === activeFilter ? "var(--accent)" : "var(--text-secondary)",
                  cursor: "pointer", fontFamily: "var(--font-mono)", fontSize: 12,
                  transition: "all 0.25s ease", textTransform: "capitalize",
                }}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))", gap: 24 }}>
          {filtered.map((project, i) => (
            <div
              key={project.id}
              className="glass-card"
              style={{
                overflow: "hidden",
                opacity: inView ? 1 : 0,
                animation: inView ? `fadeUp 0.6s ${i * 0.1}s ease forwards` : "none",
                display: "flex", flexDirection: "column",
              }}
            >
              {/* Image */}
              <div style={{ position: "relative", overflow: "hidden", height: 200 }}>
                <img
                  src={project.image}
                  alt={project.title}
                  style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.4s ease" }}
                  onMouseEnter={e => e.target.style.transform = "scale(1.05)"}
                  onMouseLeave={e => e.target.style.transform = "scale(1)"}
                />
                {/* Status badge */}
                <div style={{
                  position: "absolute", top: 12, right: 12,
                  background: "rgba(0,0,0,0.7)", backdropFilter: "blur(8px)",
                  border: `1px solid ${statusColor[project.status] || "var(--border)"}`,
                  borderRadius: 100, padding: "4px 12px",
                  fontFamily: "var(--font-mono)", fontSize: 11,
                  color: statusColor[project.status] || "var(--text-secondary)",
                  display: "flex", alignItems: "center", gap: 5,
                }}>
                  <span style={{ width: 6, height: 6, borderRadius: "50%", background: statusColor[project.status], display: "inline-block" }} />
                  {project.status}
                </div>
                {project.featured && (
                  <div style={{
                    position: "absolute", top: 12, left: 12,
                    background: "rgba(99,102,241,0.2)", border: "1px solid rgba(99,102,241,0.4)",
                    borderRadius: 100, padding: "4px 12px",
                    fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--accent)",
                  }}>
                    ⭐ Featured
                  </div>
                )}
              </div>

              {/* Content */}
              <div style={{ padding: "24px", flex: 1, display: "flex", flexDirection: "column" }}>
                <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 20, marginBottom: 10 }}>
                  {project.title}
                </h3>
                <p style={{ color: "var(--text-secondary)", fontSize: 14, lineHeight: 1.7, flex: 1, marginBottom: 20 }}>
                  {project.description}
                </p>

                {/* Tags */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 20 }}>
                  {project.tags.map((tag) => (
                    <span key={tag} style={{
                      padding: "4px 10px", borderRadius: 6,
                      background: "rgba(99,102,241,0.08)", border: "1px solid rgba(99,102,241,0.2)",
                      fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--accent-2)",
                    }}>
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div style={{ display: "flex", gap: 10 }}>
                  <a
                    href={project.github} target="_blank" rel="noreferrer"
                    className="btn btn-ghost"
                    style={{ flex: 1, justifyContent: "center", padding: "10px", fontSize: 13 }}
                  >
                    ⌥ GitHub
                  </a>
                  {project.live && (
                    <a
                      href={project.live} target="_blank" rel="noreferrer"
                      className="btn btn-primary"
                      style={{ flex: 1, justifyContent: "center", padding: "10px", fontSize: 13 }}
                    >
                      ↗ Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div style={{ textAlign: "center", marginTop: 60 }}>
          <a
            href="https://github.com/prathameshni"
            target="_blank" rel="noreferrer"
            className="btn btn-ghost"
          >
            View All Projects on GitHub →
          </a>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #projects .container > div:first-child { flex-direction: column; align-items: flex-start !important; }
        }
      `}</style>
    </section>
  );
}