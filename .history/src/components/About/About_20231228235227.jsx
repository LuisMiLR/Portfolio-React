import React from "react";

import styles from "./about.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>À propos</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/PhotoDeMoi.png")}
          alt="foto of me"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img
              src={getImageUrl("about/cursorIcon.png")}
              className="aboutIcons"
              alt="Cursor icon"
            />
            <div className={styles.aboutItemText}>
              <h3>Développeur FullStack JS</h3>
              <p>
                J'ai acquis une expérience en création de site optimisé et en
                systeme backend et d'API REST sécurisés
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img
              src={getImageUrl("about/serverIcon.png")}
              className="aboutIcons"
              alt="Server icon"
            />
            <div className={styles.aboutItemText}>
              <h3>Capacitées collaboratives</h3>
              <p>
                Travail en projet agile (méthode SCRUM, kanban) Jira,
                Communication et suivi maintenance du code
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img
              src={getImageUrl("about/uiIcon.png")}
              className="aboutIcons"
              alt="Ui icon"
            />
            <div className={styles.aboutItemText}>
              <h3>UI design</h3>
              <p>
                Création de landing pages, de wireframes et Maquettes de sites
                web
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
