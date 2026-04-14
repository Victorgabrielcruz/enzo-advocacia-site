import React from "react";
import "../styles/Hero.css";
import EnzoImage from "../assets/image/Enzo.png";

const Hero = () => {
  const whatsappNumber = "5538999715138";

  const handleWhatsApp = () => {
    const message = "Olá, gostaria de falar com um especialista.";
    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <section id="home" className="hero">
      <div className="container">
        
        {/* TEXTO */}
        <div className="content">
          <div className="badge-container">
             <span className="badge">Atendimento em todo o Brasil</span>
          </div>

          <h1 className="title">
            Defesa Técnica de <br />
            <span className="highlight">Alta Performance</span>
          </h1>

          <p className="description">
            Especialista em Direito <strong>Criminal, Cívil e Trabalhista</strong>.
            Atuação estratégica com foco na proteção dos seus direitos e resultados concretos.
          </p>

          <div className="actions">
            <button onClick={handleWhatsApp} className="primaryBtn">
              Falar com Especialista
            </button>

            <a href="#especialidades" className="secondaryBtn">
              Ver Áreas de Atuação
            </a>
          </div>
        </div>

        {/* IMAGEM COM FRAME MELHORADO */}
        <div className="imageWrapper">
          <div className="imageContainer">
            <div className="goldFrame"></div>
            <img
              src={EnzoImage}
              alt="Advogado Enzo Rodrigues"
              className="profileImg"
              loading="eager"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;