import React, { useState, useEffect } from "react";
import "../styles/Navbar.css";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const whatsappNumber = "5538999715138";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = ["home", "especialidades", "feedbacks"];

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();

          if (rect.top <= 120 && rect.bottom >= 120) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = () => setMenuOpen(false);

  const handleWhatsApp = () => {
    const message = "Olá, gostaria de agendar uma consulta.";
    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener noreferrer"
    );
  };

  const navItem = (id, label) => (
    <li>
      <a
        href={`#${id}`}
        className={activeSection === id ? "active" : ""}
        onClick={handleLinkClick}
      >
        {label}
      </a>
    </li>
  );

  return (
    <>
      <nav className={`navbar ${scrolled ? "scrolled" : ""} ${menuOpen ? "menu-active" : ""}`}>
        <div className="container">
          
          <div className="logo">
            <span className="initials">ER</span>
            <div className="brandName">
              <span className="name">ENZO RODRIGUES</span>
              <span className="tagline">ADVOCACIA</span>
            </div>
          </div>

          <ul className="navLinks">
            {navItem("home", "Início")}
            {navItem("especialidades", "Especialidades")}
            {navItem("feedbacks", "Feedbacks")}
          </ul>

          <button onClick={handleWhatsApp} className="cta desktop-only">
            Consulta Online
          </button>

          <button 
            className={`menuToggle ${menuOpen ? "active" : ""}`} 
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>

      <div className={`mobileMenu ${menuOpen ? "active" : ""}`}>
        <nav className="mobileLinks">
          <a href="#home" onClick={handleLinkClick}>Início</a>
          <a href="#especialidades" onClick={handleLinkClick}>Especialidades</a>
          <a href="#feedbacks" onClick={handleLinkClick}>Feedbacks</a>
          <button onClick={handleWhatsApp} className="cta mobile-cta">
            Falar no WhatsApp
          </button>
        </nav>
      </div>

      <div className={`overlay ${menuOpen ? "active" : ""}`} onClick={() => setMenuOpen(false)}></div>
    </>
  );
};

export default Navbar;