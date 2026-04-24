import React, { useEffect, useRef } from "react";
import { TypeAnimation } from "react-type-animation";
import { Link } from "react-scroll";
import ProfileImg from "../img/Prathamesh.jpg";

export default function Hero() {
  const canvasRef = useRef(null);

  // Particle animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = Array.from({ length: 60 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 1.5 + 0.3,
      dx: (Math.random() - 0.5) * 0.4,
      dy: (Math.random() - 0.5) * 0.4,
      opacity: Math.random() * 0.5 + 0.1,
    }));

    let animId;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(99, 102, 241, ${p.opacity})`;
        ctx.fill();
        p.x += p.dx; p.y += p.dy;
        if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.dy *= -1;
      });
      animId = requestAnimationFrame(draw);
    };
    draw();

    const resize = () => { canvas.width = window.innerWidth; canvas.height = window.innerHeight; };
    window.addEventListener("resize", resize);
    return () => { cancelAnimationFrame(animId); window.removeEventListener("resize", resize); };
  }, []);

  return (
    <section id="hero" style={{ minHeight: "100vh", display: "flex", alignItems: "center", position: "relative", overflow: "hidden" }}>
      {/* Canvas particles */}
      <canvas ref={canvasRef} style={{ position: "absolute", inset: 0, zIndex: 0, pointerEvents: "none" }} />

      {/* Gradient orbs */}
      <div style={{
        position: "absolute", width: 600, height: 600,
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(99,102,241,0.12) 0%, transparent 70%)",
        top: "10%", left: "-10%", filter: "blur(40px)", zIndex: 0,
        animation: "float 8s ease-in-out infinite",
      }} />
      <div style={{
        position: "absolute", width: 400, height: 400,
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(244,114,182,0.10) 0%, transparent 70%)",
        bottom: "10%", right: "-5%", filter: "blur(40px)", zIndex: 0,
        animation: "float 10s ease-in-out infinite reverse",
      }} />

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: 60, alignItems: "center" }}>
          <div>
            {/* Status badge */}
            <div style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              background: "rgba(74,222,128,0.08)", border: "1px solid rgba(74,222,128,0.2)",
              borderRadius: 100, padding: "6px 16px", marginBottom: 32,
            }} className="animate-fade-up delay-1">
              <span style={{ width: 8, height: 8, borderRadius: "50%", background: "var(--neon)", animation: "glow-pulse 2s ease-in-out infinite", display: "inline-block" }} />
              <span style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--neon)", letterSpacing: 1 }}>
                Available for work
              </span>
            </div>

            {/* Name */}
            <h1 style={{
              fontFamily: "var(--font-display)", fontWeight: 800,
              fontSize: "clamp(48px, 8vw, 96px)", lineHeight: 1.0,
              letterSpacing: "-3px", marginBottom: 16,
            }} className="animate-fade-up delay-2">
              <span style={{ color: "var(--text-primary)" }}>Hi, I'm</span><br />
              <span className="gradient-text">Prathamesh</span>
            </h1>

            {/* Typewriter */}
            <div style={{
              fontFamily: "var(--font-mono)", fontSize: "clamp(16px, 2.5vw, 22px)",
              color: "var(--text-secondary)", marginBottom: 32, height: 36,
            }} className="animate-fade-up delay-3">
              <span style={{ color: "var(--accent)" }}>$ </span>
              <TypeAnimation
                sequence={[
                  "Full Stack Developer", 2000,
                  "MERN Stack Engineer", 2000,
                  "React.js Developer", 2000,
                  "Node.js Backend Dev", 2000,
                  "Problem Solver", 2000,
                ]}
                repeat={Infinity}
                style={{ color: "var(--text-primary)" }}
              />
              <span style={{ animation: "glow-pulse 1s ease-in-out infinite", color: "var(--accent)" }}>_</span>
            </div>

            {/* Bio */}
            <p style={{
              fontSize: 17, color: "var(--text-secondary)", maxWidth: 560,
              lineHeight: 1.8, marginBottom: 40,
            }} className="animate-fade-up delay-4">
              I craft beautiful, performant web applications with modern technologies.
              Passionate about clean code, great UX, and solving real-world problems
              through software.
            </p>

            {/* CTA Buttons */}
            <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }} className="animate-fade-up delay-5">
              <Link to="projects" smooth offset={-80} duration={600}>
                <button className="btn btn-primary">
                  View My Work →
                </button>
              </Link>
              <Link to="contact" smooth offset={-80} duration={600}>
                <button className="btn btn-ghost">
                  Get In Touch
                </button>
              </Link>
            </div>

            {/* Socials */}
            <div style={{ display: "flex", gap: 16, marginTop: 48, alignItems: "center" }} className="animate-fade-up delay-5">
              <span style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--text-muted)" }}>FIND ME ON</span>
              {[
                { label: "GitHub", url: "https://github.com/prathameshni", icon: "git" },
                { label: "LinkedIn", url: "https://www.linkedin.com/in/prathamesh-nivdekar/", icon: "in" },
                
              ].map((s) => (
                <a key={s.label} href={s.url} target="_blank" rel="noreferrer" style={{
                  width: 40, height: 40, borderRadius: 10,
                  background: "var(--bg-card)", border: "1px solid var(--border)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  color: "var(--text-secondary)", textDecoration: "none",
                  fontSize: 14, fontWeight: 700, transition: "var(--transition)",
                }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = "var(--accent)"; e.currentTarget.style.color = "var(--accent)"; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.color = "var(--text-secondary)"; }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Profile Photo */}
          <div style={{ position: "relative" }} className="animate-fade-up delay-3">
            <div style={{
              width: 320, height: 320,
              borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%",
              background: "linear-gradient(135deg, var(--accent), var(--accent-2), var(--accent-3))",
              padding: 3, animation: "float 6s ease-in-out infinite",
              boxShadow: "0 0 60px rgba(99,102,241,0.3)",
            }}>
              <div style={{
                width: "100%", height: "100%",
                borderRadius: "28% 72% 68% 32% / 28% 28% 72% 72%",
                overflow: "hidden",
                background: "var(--bg-secondary)",
                display: "flex", alignItems: "center", justifyContent: "center",
              }}>
                {/* Replace src with your actual photo URL */}
                <img
                  src={ProfileImg}
                  alt="Profile"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  onError={e => {
                    e.target.style.display = "none";
                    e.target.nextSibling.style.display = "flex";
                  }}
                />
                <div style={{
                  display: "none", flexDirection: "column", alignItems: "center",
                  gap: 8, color: "var(--text-muted)",
                }}>
                  <span style={{ fontSize: 64 }}>👤</span>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: 12 }}>Add your photo</span>
                </div>
              </div>
            </div>

            {/* Floating badges */}
            
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div style={{
        position: "absolute", bottom: 40, left: "50%", transform: "translateX(-50%)",
        display: "flex", flexDirection: "column", alignItems: "center", gap: 8,
        color: "var(--text-muted)", fontFamily: "var(--font-mono)", fontSize: 11,
        animation: "float 2s ease-in-out infinite",
      }}>
        <span>scroll</span>
        <div style={{ width: 1, height: 40, background: "linear-gradient(to bottom, var(--accent), transparent)" }} />
      </div>

      <style>{`
        @media (max-width: 900px) {
          #hero .container > div { grid-template-columns: 1fr !important; }
          #hero .container > div > div:last-child { display: none; }
        }
      `}</style>
    </section>
  );
}