import React, { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import "../styles/LandingPage.css";

const LandingPage = () => {
  // Valor de scroll en pixeles y en porcentaje
  const { scrollY, scrollYProgress } = useScroll();

  // Estado para saber si el nombre debe verse como "header" fijo
  const [isFixedHeader, setIsFixedHeader] = useState(false);

  // Detectamos cuando se ha hecho scroll más allá de cierto umbral (ej: 200px)
  useEffect(() => {
    return scrollY.on("change", (latest) => {
      setIsFixedHeader(latest > 100);
    });
  }, [scrollY]);

  // Animación de “encogimiento” y traslación del nombre mientras estamos en la zona superior (hero)
  // Solo hasta 0.3 (30%) del scroll para la primera pantalla
  const titleScale = useTransform(scrollYProgress, [0, 0.3], [1.2, 1]);
  const titleY = useTransform(scrollYProgress, [0, 0.3], [0, -50]);

  // Algunas secciones de contenido para que aparezcan en tandas.
  // Podrías obtener estos textos de un array y mapearlos, aquí lo hago manualmente a modo de ejemplo.
  const sections = [
    `Sebastián Cifuentes Aravena, conocido artísticamente como Sebastián Presley, 
    es un talentoso cantante chileno de 22 años originario de Chillán. 
    Desde temprana edad, mostró una profunda admiración por Elvis Presley, 
    lo que lo llevó a perfeccionar su interpretación vocal y escénica del "Rey del Rock". 
    Su dedicación y pasión por la música lo han posicionado como el doble oficial de Elvis en Chile.`,
    `Sebastián ganó notoriedad nacional al convertirse en finalista del programa de talentos "Mi Nombre Es" de TVN en 2025, 
    donde deslumbró al jurado y al público con su carisma 
    y habilidad vocal al interpretar a Elvis Presley. 
    A pesar de enfrentar desafíos personales y críticas que pusieron en duda su autenticidad como imitador, 
    encontró fortaleza en el apoyo de su madre 
    y perseveró en su sueño de rendir homenaje a uno de los más grandes íconos de la música mundial.`,
    `Actualmente, Sebastián continúa desarrollando su carrera artística, realizando presentaciones en diversos eventos 
    y compartiendo contenido relacionado con su tributo a Elvis Presley en sus redes sociales. 
    Puedes seguir su trabajo en su cuenta de Instagram: @elvissebastianpresley.`,
    `¿Quién fue Elvis Presley?
    Elvis Aaron Presley (1935-1977) fue un cantante y actor estadounidense, 
    ampliamente conocido como el "Rey del Rock and Roll". 
    Nacido en Tupelo, Mississippi, y criado en Memphis, Tennessee, 
    Elvis comenzó su carrera musical en 1954 con Sun Records. 
    Su estilo único fusionó géneros como el country, el blues y el gospel, 
    revolucionando la música popular y convirtiéndose en una figura icónica del siglo XX.`,
  ];

  return (
    <div className="landing-container">
      {/* Nombre del artista que se transforma en un header fijo al hacer scroll */}
      <motion.h1
        className={`artist-title ${isFixedHeader ? "fixed-header" : ""}`}
        style={{
          scale: titleScale,
          y: titleY,
        }}
      >
        Sebastian Presley
      </motion.h1>

      <div className="spacer-top" /> {/* espacio inicial */}

      <div className="overlay-bg" />

      {/* Sección de contenido en tandas (cada párrafo se anima cuando entra a la vista) */}
      <div className="content-wrapper">
        {sections.map((text, index) => (
          <motion.section
          key={index}
          className={`content-section ${index % 2 === 0 ? "left" : "right"}`}
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false, amount: 0.3 }}
        >
            <p>{text}</p>
          </motion.section>
        ))}
      </div>
    </div>
  );
};

export default LandingPage;