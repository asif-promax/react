import React from 'react';

const Cardchiled = (props) => {
  return (
    <div className="card">
      <img src={props.img} alt={props.n} className="card-image" />
      <p className="card-name">{props.n}</p>
      <p className="card-role">{props.f}</p>
    </div>
  );
}

export default Cardchiled;
