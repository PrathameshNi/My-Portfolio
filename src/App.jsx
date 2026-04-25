import React, { useEffect, useRef } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./index.css";

import Navbar from "./component/Navbar";
import Hero from "./component/Hero";
import About from "./component/About";
import Skills from "./component/Skills";
import Projects from "./component/Projects";
import Certificates from "./component/Certificate";
import Contact from "./component/Contact";
import Footer from "./component/Footer";

function App() {
  const cursorDot = useRef(null);
  const cursorRing = useRef(null);

  useEffect(() => {
    const dot = cursorDot.current;
    const ring = cursorRing.current;
    if (!dot || !ring) return;

    const moveCursor = (e) => {
      dot.style.left = e.clientX - 4 + "px";
      dot.style.top = e.clientY - 4 + "px";
      ring.style.left = e.clientX - 18 + "px";
      ring.style.top = e.clientY - 18 + "px";
    };

    const handleHover = () => ring.classList.add("hover");
    const handleUnhover = () => ring.classList.remove("hover");

    window.addEventListener("mousemove", moveCursor);
    document.querySelectorAll("a, button, .glass-card").forEach((el) => {
      el.addEventListener("mouseenter", handleHover);
      el.addEventListener("mouseleave", handleUnhover);
    });

    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  return (
    <div className="App">
      <div className="cursor-dot" ref={cursorDot} />
      <div className="cursor-ring" ref={cursorRing} />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Certificates />
        <Contact />
      </main>
      <Footer />
      <ToastContainer position="bottom-right" theme="dark" />
    </div>
  );
}

export default App;