import React from "react";
// Layout & UI
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Specialties from "./components/Specialties";
import Feedback from "./components/Feedback";
import Footer from "./components/Footer";

import "./App.css";

// Configurações (Poderiam estar em um arquivo .env)
const CONTACT_CONFIG = {
  whatsapp: "5538999715138",
  defaultMessage: "Olá! Gostaria de falar com um advogado sobre um caso.",
};

function App() {
  return (
    <div className="main-wrapper">
      <header>
        <Navbar />
      </header>

      <main>
        <Hero />
        <section id="stats">
          <Stats />
        </section>
        <section id="specialties">
          <Specialties />
        </section>
        <section id="feedback">
          <Feedback />
        </section>
      </main>

      <Footer />

    </div>
  );
}

export default App;