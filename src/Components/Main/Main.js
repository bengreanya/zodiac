import React from 'react';
import './Main.css';
import background from '../../background.jpeg';
import { zodiac } from '../../data.js';
import ZodiacCard from '../ZodiacCard/ZodiacCard.js';
// import ZodiacCard from '../ZodiacCard/Zodiac.js';
// import { zodiac } from '../../data.js';

// import React from 'react';

export default function Main() {
  return (
    <main style={{ backgroundImage: `url(${background})` }}>
      {zodiac.map((sign) => (
        <ZodiacCard key={sign.id} {...sign} />
      ))}
    </main>
  );
}
