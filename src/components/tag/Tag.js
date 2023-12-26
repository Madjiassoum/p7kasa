import React from 'react';
import './tag.css';

export default function Tag(props) {
  return (
    <div className="tagContainer">
      <div className="tagButton">{props.title}</div>
    </div>
  );
}
