import React from 'react';
import './card.css';
import data from '../../datas/data.json';
import { Link } from 'react-router-dom';

export default function Card() {  
    return data.map((element) => {
      // console.log('voici un element =>', element);
      return (        
        <div className="container-card" key={element.id}>
          <Link to={'/housing/' + element.id}>
            <img className="imgCard" src={element.cover} alt={element.title} />
            <h3>{element.title}</h3>
          </Link>
        </div>
      );
    });  
}
