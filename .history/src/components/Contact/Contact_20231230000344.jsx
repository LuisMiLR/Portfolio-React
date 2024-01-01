import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="Contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>À votre entière disposition pour échanger ensemble</p>
        <p>À votre entière disposition pour échanger ensemble</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="Icone d'Email" />
          <a href="mailto:luismiguel.robles.lr@gmail.com" target="_blank">
            luismiguel.robles.lr@gmail.com
          </a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/linkedinIcon.png")}
            alt="Icone de Linkedin"
          />
          <a
            href="https://www.linkedin.com/in/luis-miguel-robles/"
            target="_blank"
          >
            linkedin.com/luis-miguel-robles
          </a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/githubIcon.png")}
            alt="Icone de Github"
          />
          <a href="https://github.com/LuisMiLR" target="_blank">
            https://github.com/LuisMiLR
          </a>
        </li>
      </ul>
    </footer>
  );
};
