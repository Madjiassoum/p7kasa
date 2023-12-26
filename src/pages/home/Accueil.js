import React from 'react';
import './accueil.css';
import Card from '../../components/card/Card';
import Banner from '../../components/banner/Banner';

const Accueil = () => {
  return (
    <>
      <Banner source="home" />
      <div className="cards">
        <Card />
      </div>
    </>
  );
};

export default Accueil;
