import React from "react";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer>
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
          <a href="mailto:luismiguel.robles.lr@gmail.com">
            luismiguel.robles.lr@gmail.com
          </a>
        </li>
        <li>
          <img src={getImageUrl("contact/emailIcon.png")} alt="Icon Email" />
          <a href="mailto:luismiguel.robles.lr@gmail.com">
            luismiguel.robles.lr@gmail.com
          </a>
        </li>
      </ul>
    </footer>
  );
};
