import React from 'react'

import { getImageUrl } from '../../utils';
import styles from "./Hero.module.css";

export const Hero = () => {
  return( 
<section className={styles.container}>
    <div className={styles.content}>
        <h1 className={styles.title}>Bonjour, Je suis Luis Miguel </h1>
        <p className={styles.description}> 
        Développeur web FullStack Javascript, j'utilise React et NodeJS. 
        Motivaté et déterminer à développer mes compétences, 
        vous souhaitez en savoir d'avantage, contactez moi 
        </p>
        <a href="mailto:luismiguel.robles.lr@gmail.com" className={styles.contactBtn}>
            Contact
        </a>
    </div>
    <img src={getImageUrl("hero/heroMoi ().png")} alt="Hero image of me" className={styles.heroImg}/>
    <div className={styles.topBlur} />
    <div className={styles.bottomBlur} />
  </section>

  );

};

