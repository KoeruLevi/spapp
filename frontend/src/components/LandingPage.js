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
    `Introducción a su carrera. Ej: Sus inicios en el arte, su estilo
    inconfundible y su impacto en la escena artística contemporánea.`,
    `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sit amet lectus
    id nisl luctus accumsan. Donec feugiat lectus vel magna faucibus, ac aliquam
    velit imperdiet.`,
    `Sed dictum, sapien eget pretium hendrerit, nisl eros cursus elit, sed interdum
    urna sem sed tortor. Curabitur bibendum leo vitae dui blandit, non placerat
    libero bibendum.`,
    `Aliquam erat volutpat. Nullam non mi nec ex fringilla eleifend. Praesent auctor
    ligula at ex maximus, vitae pretium risus ultricies.`,
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