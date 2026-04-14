import React, { useEffect, useRef, useState } from "react";
import "../styles/Specialties.css";
import { FaBalanceScale, FaFileContract, FaBriefcase } from "react-icons/fa";

const Specialties = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const areas = [
    {
      title: "Defesa em Crimes e Processos Penais",
      desc: "Atuação estratégica em delegacias, audiências de custódia e processos criminais, com suporte emergencial 24 horas.",
      tag: "Urgência",
      icon: <FaBalanceScale />
    },
    {
      title: "Contratos, Indenizações e Família",
      desc: "Soluções em direito civil com foco em proteção patrimonial, responsabilidade civil e resolução de conflitos familiares.",
      tag: "Patrimônio",
      icon: <FaFileContract />
    },
    {
      title: "Direitos Trabalhistas",
      desc: "Atuação completa em reclamações trabalhistas e consultoria preventiva para garantir seus direitos.",
      tag: "Direitos",
      icon: <FaBriefcase />
    }
  ];

  const whatsappNumber = "5538999715138";

  const handleClick = (area) => {
    const message = `Olá, gostaria de falar sobre ${area.title}.`;
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, "_blank");
  };

  // Lógica para detectar o scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 } // Dispara quando 10% da seção estiver visível
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="especialidades" className="section" ref={sectionRef}>
      <div className="container">
        
        {/* Adicionamos a classe reveal e active conforme o estado */}
        <header className={`header reveal ${isVisible ? "active" : ""}`}>
          <span className="subtitle">O que fazemos</span>
          <h2 className="title">Áreas de Atuação</h2>
          <div className="divider"></div>
        </header>

        <div className="grid">
          {areas.map((area, index) => (
            <article 
              key={index} 
              className={`card reveal ${isVisible ? "active" : ""}`}
            >
              {/* ÍCONE */}
              <div className="iconBox">
                {area.icon}
              </div>

              <div className="cardContent">
                <h3 className="cardTitle">{area.title}</h3>
                <p className="cardDesc">{area.desc}</p>
                <button
                  className="cardButton"
                  onClick={() => handleClick(area)}
                >
                  Falar no WhatsApp
                </button>
              </div>

              <div className="cardGlow"></div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Specialties;