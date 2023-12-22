import React from 'react'

import { getImageUrl } from '../../utils';
import styles from "./Hero.module.css";

export const Hero = () => {
  return( 
<section className={}>
    <div>
        <h1>Bonjour, Je suis Luis Miguel </h1>
        <p>Développeur web FullStack Javascript, j'utilise React et NodeJS. 
        Motivaté et déterminer à développer mes compétences, 
        contactez moi si vous souhaitez en savoir d'avantage
        </p>
        <a href="mailto:luismiguel.robles.lr@gmail.com">Contact</a>
    </div>
    <img src={getImageUrl("hero/heroImage.png")} alt="Hero image of me"/>
    <div className={Styles.topBlur} />
    <div className={Styles.bottomBlur} />
  </section>

  );

};

