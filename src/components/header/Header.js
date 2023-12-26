import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
import './header.css';

function Header() {
  return (
    <>
      <div className="header">
        <div className="logo-header">
          <img src={logo} className="logo-red" alt="logo" />
        </div>

        <div className="div-header">
          <Link to="/" className="divHeaderLink-home">
            Accueil
          </Link>
          <Link to="/about" className="divHeaderLink-about">
            A Propos
          </Link>
        </div>
      </div>
    </>
  );
}

export default Header;
