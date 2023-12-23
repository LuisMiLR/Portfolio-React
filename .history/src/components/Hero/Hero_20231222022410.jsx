import React from 'react'

import { getImageUrl } from '../../utils';
import styles from "./Hero.module.css";

export const Hero = () => {
  return( 
<section className={styles.container}>
    <div className={styles.content}>
        <h1 className={styles.title}>Hello, I'm Luis Miguel</h1>
        <p className={styles.description}> 
        Développeur web FullStack Javascript 
        à votre disposition pour plus d'information ! 
        </p>
        <a href="mailto:luismiguel.robles.lr@gmail.com" className={styles.contactBtn}>
            Contact
        </a>
    </div>
    <img src={getImageUrl("hero/heroPic4.png")} alt="Hero image of me" className={styles.heroImg}/>
    <div className={styles.topBlur} />
    <div className={styles.bottomBlur} />
  </section>
/*Développeur web FullStack Javascript avec une forte appétence pour le frontend, j'utilise React et NodeJS. 
motivé à travailler sur des projets d'envergure avec une équipe d'éxpert et déterminer à développer mes compétences. 
Je vous invite à en savoir davantage sur mon profil, contactez moi ! */
  );

};

