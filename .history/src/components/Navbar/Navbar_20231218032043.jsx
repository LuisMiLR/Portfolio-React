import React from 'react'
import styles from "./Navbar.module.css"

const Navbar = () => {
  return (
    <nav className= {styles.navbar}>
        <a className={styles.title} href='/'>Portfolio</a>
        <div className= {styles.menu}>
          <ul className={}>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#experience">Experrience</a>
            </li>
            <li>
              <a href="#project">projects</a>
            </li>
            <li>
              <a href="#contact">contact</a>
            </li>
            
          </ul>
        </div>
      </nav>

  ); 
};
export default Navbar