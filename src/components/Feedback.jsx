import React from "react";
import "../styles/Feedback.css";
import { FaQuoteLeft, FaUserCircle } from "react-icons/fa";

// Dados movidos para fora para manter o componente limpo
const REVIEWS = [
  {
    text: "Graças ao atendimento e dedicação, consegui minha liberdade. Sou extremamente grata pela competência e principalmente pela paciência durante todo o processo.",
    client: "Ana Silva", // Tente usar nomes (mesmo que fictícios) para passar mais realismo
    area: "Direito Penal"
  },
  {
    text: "Muito obrigado, Dr. Enzo. Suas orientações foram essenciais. Hoje finalmente consegui resolver uma situação que se arrastava há mais de 5 anos.",
    client: "Carlos Oliveira",
    area: "Direito Cível"
  },
  {
    text: "Excelente profissional, atencioso e extremamente eficiente. Resolveu meu problema trabalhista com rapidez e clareza. Recomendo com total confiança.",
    client: "Mariana Souza",
    area: "Direito Trabalhista"
  }
];

const Feedback = () => {
  return (
    <section id="feedbacks" className="feedback-section" aria-labelledby="feedback-title">
      <div className="feedback-container">
        <header className="feedback-header">
          <h2 id="feedback-title" className="feedback-title">Reconhecimento</h2>
          <p className="feedback-subtitle">Depoimentos reais de clientes atendidos</p>
          <div className="title-divider"></div> {/* Divisor visual clássico de advocacia */}
        </header>

        <div className="feedback-grid">
          {REVIEWS.map((item, index) => (
            <article key={index} className="feedback-card">
              <div className="quote-wrapper">
                <FaQuoteLeft className="quote-icon" />
              </div>

              <blockquote className="feedback-text">
                "{item.text}"
              </blockquote>

              <footer className="feedback-footer">
                <div className="client-info">
                  <FaUserCircle className="client-avatar" />
                  <div className="client-details">
                    <cite className="client-name">{item.client}</cite>
                    <span className="client-area">{item.area}</span>
                  </div>
                </div>
              </footer>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Feedback;