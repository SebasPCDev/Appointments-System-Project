import React from "react";
import styles from "./Contact.module.css";

export default function Contact() {
  return (
    <div>
      <h2>Información de contacto</h2>
      <div className={styles.wrapper}>
        <div className={styles.loaderbox}>
          <div className={styles.loader}></div>
          <div className={styles.loadertext}>Loading...</div>
        </div>

        <div className={styles.descriptionbox}>Próximamente</div>
      </div>
    </div>
  );
}
