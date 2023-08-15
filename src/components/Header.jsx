// src/components/Header.js
import React from 'react';
import logo from '../assets/avatar-big.png';

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img src={logo} alt="Logo" />
        <span className="brand">crowetic</span>
      </div>
      <div className="links">
        <a href="#">HOME</a>
        <a href="#">APPS</a>
        <a href="#">SERVICES</a>
        <a href="#">HARDWARE</a>
        <button className="button">Q-Mail</button>
      </div>
    </div>
  );
};

export default Header;
