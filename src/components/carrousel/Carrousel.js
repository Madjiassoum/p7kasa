import React, { useState } from 'react';
import './carrousel.css';
import ChevronLeft from '../../assets/chevron-left-solid.svg';
import ChevronRight from '../../assets/chevron-right-solid.svg';

function Carrousel({ myPictures }) {
  const [currentPicture, setCurrentPict] = useState(0);
  const length = myPictures.length;

  const nextPict = () => {
    setCurrentPict(currentPicture === length - 1 ? 0 : currentPicture + 1);
  };
  const precPict = () => {
    setCurrentPict(currentPicture === 0 ? length - 1 : currentPicture - 1);
  };

  return (
    <section className="carrousel-container">
      {length > 1 && (
        <img
          src={ChevronLeft}
          alt="left"
          onClick={precPict}
          className="arrow arrow-left"
        />
      )}

      {length > 1 && (
        <img
          src={ChevronRight}
          alt="right"
          onClick={nextPict}
          className="arrow arrow-right"
        />
      )}
      <img
        className="prdtImageCover"
        src={myPictures[currentPicture]}
        alt="La chambre à louer"
      />
      {length > 1 && (
        <span className="number">
          {currentPicture + 1} / {length}
        </span>
      )}
    </section>
  );
}

export default Carrousel;
