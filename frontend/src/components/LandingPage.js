import React from "react";
import { motion } from "framer-motion";
import "../styles/LandingPage.css";

const LandingPage = () => {
  return (
    <div className="landing-container">
      <div className="hero-section">
        <img
          src="https://www.tvn.cl/tvn/site/artic/20241002/imag/foto_0000001820241002214315/Captura_de_pantalla_2024-10-02_214206.jpg" // Actualiza con la ruta correcta
          alt="Artista"
          className="hero-image"
        />
        <div className="hero-overlay">
          <motion.h1
            className="artist-name"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            Nombre del Artista
          </motion.h1>
        </div>
      </div>

      <motion.div
        className="intro-section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1.5 }}
      >
        <p>
          Introducción a su carrera. Ej: Sus inicios en el arte, su estilo
          inconfundible y su impacto en la escena artística contemporánea.
        </p>
      </motion.div>
    </div>
  );
};

export default LandingPage;