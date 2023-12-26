import React from 'react';
import './rate.css';
import starVide from '../../assets/starVide.png';
import starPleine from '../../assets/starPleine.png';


export default function Rate({ taux }) {
  let starsArrays = [1, 2, 3, 4, 5];
  return (
    <div className="myRates-container">
      {starsArrays.map((starsArray) =>
        taux >= starsArray ? (
          <img
            key={starsArray.toString()}
            className="etoileP"
            src={starPleine}
            alt="rating etoile"
          />
        ) : (
          <img
            key={starsArray.toString()}
            className="etoileG"
            src={starVide}
            alt="rating etoile"
          />
        )
      )}
    </div>
  );
}
