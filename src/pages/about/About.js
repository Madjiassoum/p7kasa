import React from 'react';
import Collapse from '../../components/collapse/Collapse';
import Banner from '../../components/banner/Banner';
import tada from '../../datas/aboutpage.json';
import './about.css';

const About = () => {
  return (
    <>
      <Banner source="About" />
      <div className="about-page">
        {tada.map((element, index) => (
          <Collapse
            key={index}
            title={element.title}
            description={element.description}
          />
        ))}
      </div>
    </>
  );
};

export default About;
