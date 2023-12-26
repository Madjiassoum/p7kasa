import React, { useState } from 'react';
import './collapse.css';

export default function Collapse({ title, description }) {
  const [toggle, setToggle] = useState(false);
  const handleClick = () => {
    setToggle(!toggle);
  };

  return (
    <>
      <div className="container-about">
        <div onClick={handleClick}>
          {toggle ? (
            <div className="titre">
              <div className="title">
                {title}
                <i className="fa-solid fa-chevron-up"></i>
              </div>
              <div className="para">{description}</div>
            </div>
          ) : (
            <div className="titre">
              <div className="title">
                {title}
                <i className="fa-solid fa-chevron-down"></i>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
