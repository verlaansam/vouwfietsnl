import React from 'react';
import { keuzenData } from './KeuzenData';

function KeuzenHulp(props) {
  // Vind de juiste BikeType op basis van het model
  const BikeType = keuzenData.find(data => data.id === props.model);

  // Functie om de juiste lijstitems dynamisch te genereren
  const renderListItems = (category) => {
    if (!BikeType || !BikeType[category]) {
      return <p>Geen data beschikbaar voor {category}</p>;
    }

    // Controleer of de data een array is en render de items dienovereenkomstig
    const data = BikeType[category];
    if (Array.isArray(data)) {
      return data.map((item, index) => <p key={index}>{item}</p>);
    }
    return <p>{data}</p>;  // Als het geen array is, toon het als enkele waarde
  };

  return (
    <article className='w-full bg-white flex justify-center items-center p-4'>
      <section className='w-11/12 border border-black p-1'>
        <article className='font-robotoMono text-sm'><b>KeuzenHulp: </b>
          {props.component === 'versnelling' && renderListItems('versnelling')}
          {props.component === 'rack' && renderListItems('rack')}
          {props.component === 'verlichting' && renderListItems('verlichting')}
          {props.component === 'zadel' && renderListItems('zadel')}
          {props.component === 'zadelHoogte' && renderListItems('zadelHoogte')}
          {props.component === 'stuur' && renderListItems('stuur')}
          {props.component === 'kleur' && renderListItems('kleur')}
        </article>
      </section>
    </article>
  );
}

export default KeuzenHulp;
