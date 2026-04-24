import React from "react";
import { useInView } from "react-intersection-observer";
import AboutMe from "../img/about me.jpg"



export default function About() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="about" className="section">
      <div className="container" ref={ref}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}>

          {/* Left: Photo + decorative */}
          <div style={{ position: "relative" }} className={inView ? "animate-fade-up delay-1" : ""} style={{ opacity: inView ? undefined : 0 }}>
            <div style={{
              position: "relative", width: "fit-content",
              animation: inView ? "fadeUp 0.8s ease forwards" : "none",
            }}>
              {/* Main Photo Frame */}
              <div style={{
                width: 380, height: 480,
                borderRadius: "24px 24px 80px 24px",
                overflow: "hidden",
                border: "1px solid var(--border)",
                boxShadow: "0 0 60px rgba(99,102,241,0.15), var(--shadow-card)",
              }}>
                <img
                  src={AboutMe}
                  alt="About Me"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>

              {/* Decorative element */}
              <div style={{
                position: "absolute", bottom: -24, right: -24,
                width: 200, height: 200,
                border: "2px solid rgba(99,102,241,0.3)",
                borderRadius: 24, zIndex: -1,
              }} />
              <div style={{
                position: "absolute", top: -16, left: -16,
                width: 100, height: 100,
                background: "linear-gradient(135deg, var(--accent), var(--accent-2))",
                borderRadius: 20, zIndex: -1, opacity: 0.15,
                filter: "blur(20px)",
              }} />

              {/* Floating card */}
              <div style={{
                position: "absolute", bottom: 40, right: -40,
                background: "rgba(8,8,16,0.9)", border: "1px solid var(--border)",
                borderRadius: 16, padding: "16px 20px", backdropFilter: "blur(20px)",
                boxShadow: "var(--shadow-card)",
              }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <span style={{ fontSize: 28 }}>💼</span>
                  <div>
                    <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 15 }}>Open to Work</div>
                    <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--neon)" }}>Full-time </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div style={{ opacity: inView ? 1 : 0, animation: inView ? "fadeUp 0.8s 0.2s ease forwards" : "none" }}>
            <div className="section-tag">About Me</div>
            <h2 className="section-title">
              Passionate about<br />
              <span className="gradient-text">building things</span>
            </h2>

            <p style={{ color: "var(--text-secondary)", fontSize: 16, lineHeight: 1.9, marginBottom: 20 }}>
              I'm a <strong style={{ color: "var(--text-primary)" }}>Full Stack Developer</strong> specializing in the MERN
              stack with a love for creating elegant solutions to complex problems. I bring ideas
              to life through clean, efficient, and scalable code.
            </p>
            <p style={{ color: "var(--text-secondary)", fontSize: 16, lineHeight: 1.9, marginBottom: 32 }}>
              When I'm not coding, you'll find me exploring new technologies, contributing to
              open-source projects, or leveling up my skills through certifications and
              personal projects.
            </p>

            {/* Highlights */}
            <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 40 }}>
              {[
                { icon: "🎓", text: "MCA from Mumbai University" },
                { icon: "📍", text: "Based in Vile Parle, Mumbai" },
                {/* icon: "🌱", text: "Currently exploring TypeScript, AWS & Microservices" */},
              ].map((item, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <span style={{ fontSize: 18 }}>{item.icon}</span>
                  <span style={{ color: "var(--text-secondary)", fontSize: 15 }}>{item.text}</span>
                </div>
              ))}
            </div>

      
           
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          #about .container > div { grid-template-columns: 1fr !important; }
          #about .container > div > div:first-child { display: none; }
        }
      `}</style>
    </section>
  );
}