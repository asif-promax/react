import React from 'react';
import img from './im.png';
import Cardc from './Cardchiled';
import './card.css';

const Cardparent = () => {
  return (
    <div className="card-container">
      <Cardc img={img} n={"Adam Jonson"} f={"Developer"} />
      <Cardc img={img} n={"Linda Larson"} f={"Manager"} />
      <Cardc img={img} n={"Marry Hudson"} f={"Designer"} />
      <Cardc img={img} n={"Nina Hudson"} f={"Designer"} />
      <Cardc img={img} n={"Margo Larson"} f={"Manager"} />
      <Cardc img={img} n={"Nicole Scavo"} f={"Manager"} />
    </div>
  );
}

export default Cardparent;
