import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import logo from '../../assets/logo.png';
import './header.css';

function Header() {
  const location = useLocation();

  return (
    <>
      <div className="header">
        <div className="logo-header">
          <img src={logo} className="logo-red" alt="logo" />
        </div>

        <div className="div-header">
          <Link
            to="/"
            className={
              location.pathname === '/'
                ? 'divHeaderLink-home  soulignement-Item'
                : 'divHeaderLink-home  '
            }
          >
            Accueil
          </Link>
          <Link
            to="/about"
            className={
              location.pathname === '/about'
                ? 'divHeaderLink-about  soulignement-Item'
                : 'divHeaderLink-about  '
            }
          >
            A Propos
          </Link>
        </div>
      </div>
    </>
  );
}

export default Header;
