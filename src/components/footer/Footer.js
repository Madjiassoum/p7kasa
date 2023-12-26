import React from 'react';
import "./footer.css";
import logo from '../../assets/logo_footer.png';

function Footer() {
  return (
    <div className="footer-container">
      <p className="logo">
        <img className="logoImg" src={logo} alt="logo de l'agence kasa" />
      </p>
      <p className="textFooter">© 2020 Kasa. All rights reserved</p>
    </div>
  );
}

export default Footer;
