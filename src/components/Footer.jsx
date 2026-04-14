import React from "react";
import "../styles/Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const whatsappNumber = "5538999715138";

  const handleWhatsApp = () => {
    const message = "Olá, gostaria de falar com um advogado.";
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <footer id="contato" className="footer">
      <div className="container">
        {/* MARCA */}
        <div className="brandCol">
          <div className="logo">ER</div>
          <p className="brandDesc">
            Advocacia estratégica com foco em resultados e atendimento
            personalizado em todo o Brasil.
          </p>
          <button onClick={handleWhatsApp} className="whatsappBtn">
            Falar no WhatsApp
          </button>
        </div>

        {/* ENDEREÇO */}
        <div className="infoCol">
          <h4 className="title">Onde Estamos</h4>
          <address>
            <p>Rua João Alves de Aguilar, nº 56</p>
            <p>Centro - Curral de Dentro - MG</p>
            <p>CEP: 39569-000</p>
          </address>
        </div>

        {/* CONTATO */}
        <div className="infoCol">
          <h4 className="title">Atendimento</h4>
          <p>Segunda à Sexta: 08h às 18h</p>
          <p className="highlight">Urgência Criminal: 24h</p>

          <a href={`tel:+${whatsappNumber}`} className="contactLink">
            (38) 99971-5138
          </a>
          <a href="mailto:enzorodrigues.adv@gmail.com" className="contactLink">
            enzorodrigues.adv@gmail.com
          </a>
        </div>
      </div>

      {/* BARRA INFERIOR */}
      <div className="bottomBar">
        <div className="bottomContainer">
          <p>© {currentYear} Enzo Rodrigues Advocacia.</p>
          <div className="legalLinks">
            <a href="#home">Voltar ao topo</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;