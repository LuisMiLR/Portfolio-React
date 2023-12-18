import React from 'react'


const Navbar = () => {
  return (
    <nav className= {Styles.navbar}>
        <a href='/'>Portfolio</a>
        <div>
          <ul>
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