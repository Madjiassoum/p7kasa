import React from 'react';
import './host.css';

export default function Host(props) {
  return (
    <div className="hostContainer">
      <p className="hostName">{props.hostName}</p>
      <p className="hostPicture">
        <img src={props.hostPicture} alt={props.id} />
      </p>
    </div>
  );
}
