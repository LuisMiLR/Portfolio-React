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
        vous souhaitez en savoir d'avantage 
        </p>
        <a href="mailto:luismiguel.robles.lr@gmail.com">Contact</a>
    </div>
    <img src={getImageUrl("hero/heroImage.png")} alt="Hero image of me"/>
    <div className={Styles.topBlur} />
    <div className={Styles.bottomBlur} />
  </section>

  );

};

