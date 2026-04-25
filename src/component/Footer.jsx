import React from "react";

export default function Footer() {
  return (
    <footer style={{
      borderTop: "1px solid var(--border)",
      padding: "40px 24px",
      textAlign: "center",
      position: "relative", zIndex: 1,
    }}>
      <div style={{
        fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 20,
        background: "linear-gradient(135deg, var(--accent), var(--accent-2))",
        WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
        marginBottom: 12,
      }}>
        Thank You !
      </div>
      
    </footer>
  );
}