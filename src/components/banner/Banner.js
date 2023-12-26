import React from 'react';
import './banner.css';
import homeBanner from '../../assets/banner.png';
import aboutBanner from '../../assets/aboutbannerDesktop.png';

export default function Banner(props) {
  return (
    <div className="banner">
      <img
        src={props.source === 'home' ? homeBanner : aboutBanner}
        alt={props.source === 'home' ? 'Accueil Bannier ' : 'Apropos Bannier'}
      />
      <h1 className="banner-text">
        {props.source === 'home' ? 'Chez vous, partout et ailleurs' : ' '}
      </h1>
    </div>
  );
}
