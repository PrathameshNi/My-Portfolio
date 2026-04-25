import React from "react";
import { useInView } from "react-intersection-observer";

const contactInfo = [
  { icon: "📧", label: "Email", value: "nivdekarprathamesh3@gmail.com", link: "mailto:nivdekarprathamesh3@gmail.com" },
  { icon: "📱", label: "Phone", value: "+91 9529672958", link: "tel:+919529672958" },
  { icon: "📍", label: "Location", value: "Vile Parle, Mumbai, Maharashtra, India", link: "https://www.google.com/maps" },
  { icon: "💼", label: "LinkedIn", value: "View Profile", link: "https://www.linkedin.com/in/prathamesh-nivdekar/" },
];

export default function Contact() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="contact" className="section">
      <div className="container" ref={ref}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <div className="section-tag" style={{ justifyContent: "center" }}>Get In Touch</div>
          <h2 className="section-title">
            Let's <span className="gradient-text">Work Together</span>
          </h2>
          <p style={{ color: "var(--text-secondary)", maxWidth: 520, margin: "0 auto" }}>
            Have a project in mind? Looking for a developer? Or just want to connect?
            I'd love to hear from you — drop me a message!
          </p>
        </div>

        {/* CENTERED CONTAINER */}
        <div style={{
          maxWidth: "900px",
          margin: "0 auto",
          display: "flex",
          justifyContent: "center"
        }}>

          {/* GRID */}
          <div style={{
            width: "100%",
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: 32
          }}>

            {/* Left: Info */}
            <div style={{
              opacity: inView ? 1 : 0,
              animation: inView ? "fadeUp 0.7s ease forwards" : "none",
              textAlign: "center"
            }}>
              <h3 style={{ fontSize: 22, fontWeight: 700, marginBottom: 12 }}>
                Don't be a stranger
              </h3>

              <p style={{
                color: "var(--text-secondary)",
                fontSize: 15,
                lineHeight: 1.8,
                marginBottom: 36
              }}>
                I'm currently open to new opportunities — whether that's a full-time role,
                a freelance project, or a collaboration. My inbox is always open!
              </p>

              {/* Contact info */}
              <div style={{
                display: "flex",
                flexDirection: "column",
                gap: 16,
                alignItems: "center"
              }}>
                {contactInfo.map((c, i) => (
                  <a
                    key={i}
                    href={c.link}
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      width: "100%",
                      maxWidth: 400,
                      display: "flex",
                      alignItems: "center",
                      gap: 16,
                      padding: "16px 20px",
                      borderRadius: 14,
                      background: "var(--bg-card)",
                      border: "1px solid var(--border)",
                      textDecoration: "none",
                      transition: "0.3s"
                    }}
                  >
                    <span style={{ fontSize: 22 }}>{c.icon}</span>

                    <div style={{ textAlign: "left" }}>
                      <div style={{ fontSize: 11, color: "var(--text-muted)" }}>{c.label}</div>
                      <div style={{ fontSize: 14, color: "var(--text-primary)", fontWeight: 500 }}>
                        {c.value}
                      </div>
                    </div>

                    <span style={{ marginLeft: "auto" }}>→</span>
                  </a>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}