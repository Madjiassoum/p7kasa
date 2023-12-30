import React from 'react';
import datas from '../../datas/data.json';
import './ficheappt.css';
import NotFound from '../../pages/notFound/NotFound';
import Carrousel from '../carrousel/Carrousel';
import Collapse from '../collapse/Collapse';
import Rate from '../rate/Rate';
import Host from '../host/Host';
import Tag from '../tag/Tag';

export default function Ficheappt(props) {
  const dataJson = datas;
  /** Recherche id par PATHNANE et coupure-partie */
  const pathNom = document.location.pathname;
  const idSel = pathNom.substring(9);

  //Filtrage
  const prdtSelected = dataJson.find((item) => item.id === idSel);
  // console.log(prdtSelected);
  if (!prdtSelected) return <NotFound />;

  /**   MAPAGE POUR LES EQUIPEMENTS */
  const equipements = prdtSelected && prdtSelected.equipments;
  const EquiCham = equipements.map((item, index) => (
    <span key={index} className="equipList">
      {item}
    </span>
  ));

  /** MAPAGE PICTURES */
  const myImages = prdtSelected && prdtSelected.pictures;

  /** MAPAGE POUR TAG */
  const MesTag = prdtSelected && prdtSelected.tags;

  return (
    <>
      {prdtSelected.pictures && <Carrousel myPictures={myImages} />}
      <section className="container">
        {/* Je suis sous L'image Cover */}
        <div className="left-right-container">
          {/* La partie de gauche de l'image cover*/}
          <div className="left">
            <h1 className="titreH1">{prdtSelected.title}</h1>
            <h2 className="location">{prdtSelected.location}</h2>
            {/* Les tags  */}
            <div className="tags">  
              {MesTag.map((tag, index) => (
                <Tag key={tag} title={tag} />
              ))}
            </div>
          </div>
          {/* Dessous et à droite de l'image cover */}
          <div className="right">
            <div className="namePicture">
              <Host
                hostName={prdtSelected.host.name}
                hostPicture={prdtSelected.host.picture}
              />
            </div>
            <div className="rating">
              {/* Les étoiles sur la page logement */}
              <Rate taux={prdtSelected.rating} />
            </div>
          </div>
        </div>
        {/* Equipements et Description, troisieme partie 
            // Contient 1 div avec 2 collapse */}
        <div className="titre-loge">
          <Collapse
            title="Description"
            description={prdtSelected.description}
          />

          <Collapse title="Equipements" description={EquiCham} />
        </div>
      </section>
    </>
  );
}
