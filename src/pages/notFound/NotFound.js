import React from 'react';
import './notFound.css';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <>
      <div className="nf-container">
        <div className="containerError404">
          <h1 className="numberErrorPage">404</h1>
          <h2 className="textErrorPage">
            Oups! La page que vous demandez n'existe pas.
          </h2>
          <Link to="/" className="retourHome">
            Retourner sur la page d’accueil
          </Link>
        </div>
      </div>
    </>
  );
}
