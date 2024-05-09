import React from "react";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p>© 2024 Mi App Web. Todos los derechos reservados.</p>
        <p>Desarrollado por 🐈‍⬛ SebasPCDev</p>
      </div>
    </footer>
  );
};

export default Footer;
