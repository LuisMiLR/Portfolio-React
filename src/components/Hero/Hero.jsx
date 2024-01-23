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
        src={getImageUrl("hero/luisMiguelRobles.png")}
        alt="ma photo de profil"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
