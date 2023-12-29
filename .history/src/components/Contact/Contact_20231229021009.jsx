import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="Contact">
      <div>
        <h2>Contact</h2>
        <p>Disponible contactez moi!</p>
      </div>
      <ul>
        <li>
          <img src={getImageUrl("contact/emailIcon.png")} alt="Icone d'Email" />
          <a href="mailto:luismiguel.robles.lr@gmail.com">
            luismiguel.robles.lr@gmail.com
          </a>
        </li>
        <li>
          <img
            src={getImageUrl("contact/linkedinIcon.png")}
            alt="Icone de Linkedin"
          />
          <a href="https://www.linkedin.com/in/luis-miguel-robles/">
            linkedin.com/luis-miguel-robles
          </a>
        </li>
        <li>
          <img
            src={getImageUrl("contact/githubIcon.png")}
            alt="Icone de Github"
          />
          <a href="https://github.com/LuisMiLR">https://github.com/LuisMiLR</a>
        </li>
      </ul>
    </footer>
  );
};
