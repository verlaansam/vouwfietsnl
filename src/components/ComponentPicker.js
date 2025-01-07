//TODO
//voeg fotos toe

import React, { useState, useEffect } from 'react';

import { bikes } from './data';
import KeuzenHulp from './KeuzenHulp';
import JouwBrompton from './JouwBrompton';

import Battery from '../media/Battery.png';
import Dynamo from '../media/Dynamo.png';
import Reflector from '../media/Reflector.png';

const mapImages = {
  battery: Battery,
  dynamo: Dynamo,
  reflector: Reflector
};

function ComponentPicker(props) {
  const [items, setItems] = useState({});

  // Filter de BikeType op basis van het geselecteerde model
  const BikeType = bikes.find(bike => bike.id === props.model);

  useEffect(() => {
    // Sla het geselecteerde BikeType op in localStorage bij de eerste render
    if (BikeType) {
      localStorage.setItem('BikeType', props.model);
    }
  }, [BikeType]);

  function handleClick(e) {
    const category = e.currentTarget.id;
    let item;

    // Controleer of het element een afbeelding bevat
    if (e.target.tagName === 'IMG') {
      item = e.target.alt;  // Gebruik de alt-tekst van de afbeelding
    } else {
      item = e.target.textContent;  // Gebruik de tekst van de knop
    }

    // Update de localStorage en de state
    localStorage.setItem(category, item);
    setItems(prevItems => ({ ...prevItems, [category]: item }));

    // Sla het huidige BikeType op in localStorage (indien nodig)
    if (BikeType) {
      localStorage.setItem('BikeType', props.model);
    }
  }

  // Genereer de lijstitems voor elke categorie
  const renderList = (bike, category, prices, map) => (
    <div className='flex justify-around flex-col' key={bike.id}>
      <div className='w-full flex justify-around'>
        {bike[category].map((item, index) => (
          <button key={item} id={category} onClick={handleClick}>
            {map ? <img src={mapImages[item.toLowerCase()]} alt={item} /> : item}
          </button>
        ))}
      </div>
      <div className='w-full flex justify-around'>
        {bike[prices].map((price, index) => (
          <p key={price} id={`${category}Prijs`} onClick={handleClick}>€{price}</p>
        ))}
      </div>
    </div>
  );

  return (
    <article className='w-full bg-white flex justify-center items-center p-4 flex-col'>
      <section className='w-4/5 border border-black p-1'>
        {props.component === 'zadel' && renderList(BikeType, 'zadel', 'zadelPrijs')}
        {props.component === 'zadelHoogte' && renderList(BikeType, 'zadelHoogte', 'zadelHoogtePrijs')}
        {props.component === 'rack' && renderList(BikeType, 'rack', 'rackPrijs')}
        {props.component === 'stuur' && renderList(BikeType, 'stuur', 'stuurPrijs')}
        {props.component === 'verlichting' && renderList(BikeType, 'verlichting', 'verlichtingPrijs', true)}
        {props.component === 'kleur' && renderList(BikeType, 'kleur', 'kleurPrijs')}
        {props.component === 'versnelling' && renderList(BikeType, 'versnelling', 'versnellingPrijs')}
      </section>
      <KeuzenHulp model={props.model} component={props.component} />
      <JouwBrompton />
    </article>
  );
}

export default ComponentPicker;



