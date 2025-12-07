import React from 'react';
import './Header.css'; // Import component-specific CSS
import log from '../../assets/images/log.jpg';

const Header = () => (
  <header className="header">
    <nav className="nav-container">
    
      <div >   <img src={log} alt="" className="log"/><span className="logo">Nejsh  Anwar</span> </div>
      <ul className=" nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li> <a href="#contact">Contact</a></li>
     
      </ul>
      <div className=" connect"><a href="#contact">Connect with Me</a></div>
    </nav>
  </header>
);
export default Header;
