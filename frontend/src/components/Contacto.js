import React from "react";
import "../styles/Contacto.css";
import { motion } from "framer-motion";

const Contacto = () => {
  return (
    <div className="contact-page">
      <motion.div
        id="contacto"
        className="contact-container"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2>Contacto</h2>
        <p>
          Para contrataciones y eventos, puedes comunicarte con el productor oficial:
        </p>

        <div className="contact-info">
          <p>
            <strong>Productor:</strong> Nico
          </p>
          <p>
            <strong>Teléfono:</strong>{" "}
            <a href="tel:+56912345678">+56 9 7777 7777</a>
          </p>
          <p>
            <strong>Email:</strong>{" "}
            <a href="mailto:contacto@sebastianpresley.cl">
              contacto@sebastianpresley.cl
            </a>
          </p>
          <p>
            <strong>Instagram:</strong>{" "}
            <a
              href="https://instagram.com/sebastianpresley"
              target="_blank"
              rel="noopener noreferrer"
            >
              @sebastianpresley
            </a>
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Contacto;