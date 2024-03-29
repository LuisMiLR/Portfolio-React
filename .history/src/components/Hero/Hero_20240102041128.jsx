import React from "react";

import { getImageUrl } from "../../utils";
import styles from "./Hero.module.css";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Luis Miguel Robles</h1>
        <p className={styles.description}>
          Développeur web Full-Stack JavaScript, passionné par
          <br />
          les nouvelles technologies et leurs facultés à améliorer <br />
          le quotidien de chacun.
        </p>
        <p className={styles.description}>
          Je suis à votre disposition pour plus d'information <br /> contactez
          moi !
        </p>
        <a
          href="mailto:luismiguel.robles.lr@gmail.com"
          className={styles.contactBtn}
        >
          Contact
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroPic1.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
    /*Développeur web FullStack Javascript avec une forte appétence pour le frontend, j'utilise React et NodeJS. 
motivé à travailler sur des projets d'envergure avec une équipe d'éxpert et déterminer à développer mes compétences. 
Je vous invite à en savoir plus sur mon profil, contactez moi ! */
  );
};
