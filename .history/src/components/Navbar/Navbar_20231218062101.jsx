import React from 'react'
import styles from "./Navbar.module.css"
import {getImageUrl} from "../../utils"

export const Navbar = () => {
  return (
    <nav className= {styles.navbar}>
        <a className={styles.title} href='/'>
          Portfolio</a>
        <div className={styles.menu}>
          <img className={stuyles.menuBtn} src={getImage}
          <ul className={styles.menuItems}>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#experience">Experiences</a>
            </li>
            <li>
              <a href="#project">Projets</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
            
          </ul>
        </div>
      </nav>

  ); 
};
export default Navbar