import React, { useState } from "react";
import { useInView } from "react-intersection-observer";

const skillCategories = [
  {
    category: "Frontend",
    icon: "🎨",
    color: "#6366f1",
    skills: [
      { name: "React.js", level: 90, icon: "⚛️" },
      { name: "JavaScript (ES6+)", level: 88, icon: "🟨" },
      { name: "HTML5 / CSS3", level: 92, icon: "🌐" },
      { name: "Tailwind CSS", level: 85, icon: "💨" },
     
    ],
  },
  {
    category: "Backend",
    icon: "⚙️",
    color: "#a78bfa",
    skills: [
      { name: "Node.js", level: 85, icon: "🟢" },
      { name: "Express.js", level: 88, icon: "🚂" },
      { name: "REST APIs", level: 90, icon: "🔌" },
     
    ],
  },
  {
    category: "Database",
    icon: "🗄️",
    color: "#f472b6",
    skills: [
      { name: "MongoDB", level: 88, icon: "🍃" },
      { name: "MySQL", level: 75, icon: "🐬" },
      { name: "Firebase", level: 72, icon: "🔥" },
    ],
  },
  {
    category: "Tools & DevOps",
    icon: "🛠️",
    color: "#22d3ee",
    skills: [
      { name: "Git & GitHub", level: 90, icon: "🐙" },
      { name: "Docker", level: 68, icon: "🐳" },
      { name: "Postman", level: 88, icon: "📮" },
      { name: "VS Code", level: 95, icon: "💙" },
     
    ],
  },
];

export default function Skills() {
  const [activeTab, setActiveTab] = useState(0);
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  const active = skillCategories[activeTab];

  return (
    <section id="skills" className="section" style={{ background: "linear-gradient(180deg, transparent, rgba(99,102,241,0.03), transparent)" }}>
      <div className="container" ref={ref}>
        <div style={{ textAlign: "center", marginBottom: 60 }}>
          <div className="section-tag" style={{ justifyContent: "center" }}>Tech Stack</div>
          <h2 className="section-title">Skills & <span className="gradient-text">Technologies</span></h2>
          <p style={{ color: "var(--text-secondary)", maxWidth: 520, margin: "0 auto" }}>
            A curated set of tools I use to build exceptional digital products from idea to deployment.
          </p>
        </div>

        {/* Tab buttons */}
        <div style={{ display: "flex", gap: 8, justifyContent: "center", marginBottom: 48, flexWrap: "wrap" }}>
          {skillCategories.map((cat, i) => (
            <button
              key={i}
              onClick={() => setActiveTab(i)}
              style={{
                padding: "10px 24px", borderRadius: 100,
                border: `1px solid ${i === activeTab ? cat.color : "var(--border)"}`,
                background: i === activeTab ? `${cat.color}20` : "transparent",
                color: i === activeTab ? cat.color : "var(--text-secondary)",
                cursor: "pointer", fontFamily: "var(--font-body)", fontWeight: 600, fontSize: 14,
                transition: "all 0.25s ease",
                display: "flex", alignItems: "center", gap: 6,
              }}
            >
              <span>{cat.icon}</span> {cat.category}
            </button>
          ))}
        </div>

        {/* Skills grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 16 }}>
          {active.skills.map((skill, i) => (
            <div
              key={skill.name}
              className="glass-card"
              style={{
                padding: "24px",
                opacity: inView ? 1 : 0,
                animation: inView ? `fadeUp 0.5s ${i * 0.08}s ease forwards` : "none",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 16 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <span style={{ fontSize: 24 }}>{skill.icon}</span>
                  <span style={{ fontWeight: 700, fontSize: 15 }}>{skill.name}</span>
                </div>
                <span style={{
                  fontFamily: "var(--font-mono)", fontSize: 13,
                  color: active.color, fontWeight: 700,
                }}>
                  {skill.level}%
                </span>
              </div>

              {/* Progress bar */}
              <div style={{
                height: 4, background: "rgba(255,255,255,0.06)",
                borderRadius: 100, overflow: "hidden",
              }}>
                <div style={{
                  height: "100%", width: inView ? `${skill.level}%` : "0%",
                  background: `linear-gradient(90deg, ${active.color}, ${active.color}aa)`,
                  borderRadius: 100,
                  transition: `width 1.2s ${i * 0.1}s cubic-bezier(0.4,0,0.2,1)`,
                  boxShadow: `0 0 8px ${active.color}80`,
                }} />
              </div>
            </div>
          ))}
        </div>

        {/* Marquee tech strip */}
        <div style={{ marginTop: 80, overflow: "hidden", mask: "linear-gradient(90deg, transparent, black 10%, black 90%, transparent)" }}>
          <div style={{ display: "flex", gap: 32, animation: "marquee 20s linear infinite", width: "max-content" }}>
            {["React", "Node.js", "MongoDB", "Express",   "Docker", "Git",  
              "React", "Node.js", "MongoDB", "Express",   "Docker", "Git", ].map((tech, i) => (
              <div key={i} style={{
                padding: "8px 20px", borderRadius: 100,
                border: "1px solid var(--border)", whiteSpace: "nowrap",
                fontFamily: "var(--font-mono)", fontSize: 13, color: "var(--text-muted)",
              }}>
                {tech}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}