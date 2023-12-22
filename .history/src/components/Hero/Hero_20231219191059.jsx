import React from 'react'

import { getImageUrl } from '../../utils';
import styles from "./Hero.module.css";

export const Hero = () => {
  return( 
<section className={styles.container}>
    <div className={styles.content}>
        <h1 className={styles.title}>Bienvenu, Je suis Luis Miguel </h1>
        <p className={styles.description}> 
        Développeur web FullStack Javascript avec une forte appétence pour le frontend, j'utilise React et NodeJS. 
        motivé à travailler avec une équipe d'éxpert et déterminer à développer mes compétences à leur cotés, 
        vous souhaitez en savoir d'avantagecontactez moi ! 
        </p>
        <a href="mailto:luismiguel.robles.lr@gmail.com" className={styles.contactBtn}>
            Contact
        </a>
    </div>
    <img src={getImageUrl("hero/heroImage.png")} alt="Hero image of me" className={styles.heroImg}/>
    <div className={styles.topBlur} />
    <div className={styles.bottomBlur} />
  </section>

  );

};

