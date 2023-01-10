import './ZodiacCard.css';
// import React from 'react';

export default function ZodiacCard(props) {
  return (
    <div className="zodiacCard">
      ZodiacCard
      <img src={`images/${props.name}.png`} />
      <h2>{props.name}</h2>
      <p>{props.dates}</p>
    </div>
  );
}
