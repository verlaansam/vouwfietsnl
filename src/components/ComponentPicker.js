import React, { useState, useEffect } from 'react';
import { bikes } from './data';
import KeuzenHulp from './KeuzenHulp';
import JouwBrompton from './JouwBrompton';

import battery from '../media/comp/battery.png';
import dynamo from '../media/comp/dynamo.png';
import reflector from '../media/comp/reflector.png';
import lezyne from '../media/comp/lezyne.png';
import buildin from '../media/comp/buildin.png';
import een from '../media/comp/1.png';
import twee from '../media/comp/2.png';
import drie from '../media/comp/3.png';
import vier from '../media/comp/4.png';
import zes from '../media/comp/6.png';
import acht from '../media/comp/8.png';
import twaalf from '../media/comp/12.png';
import mudgardcline from '../media/comp/mudgardcline.png';
import rackcline from '../media/comp/rackcline.png';
import norackaline from '../media/comp/norackaline.png'; 
import mudgardtline from '../media/comp/mudgardtline.png';
import noracktline from '../media/comp/noracktline.png';
import norackgline from '../media/comp/norackgline.png';
import rackgline from '../media/comp/rackgline.png';
import rackpline from '../media/comp/rackpline.png';
import mudgardpline from '../media/comp/mudgardpline.png';
import standaardsaddle from '../media/comp/standaardsaddle.png';
import standaardwide from '../media/comp/standaardsaddle.png';
import c17 from '../media/comp/c17.png';
import b17 from '../media/comp/b17.png';
import carbonsaddle from '../media/comp/carbonsaddle.png';
import hoogtestandaard from '../media/comp/hoogtestandaard.png';
import hoogteextended from '../media/comp/hoogteextended.png';
import hoogtetelescopic from '../media/comp/hoogtetelescopic.png';
import m from '../media/comp/m.png';
import h from '../media/comp/h.png';
import s from '../media/comp/s.png';
import bronzesky from '../media/comp/bronzesky.png';
import adventureorange from '../media/comp/adventureorange.png';
import blastedti from '../media/comp/blastedti.png';
import traildustwhite from '../media/comp/traildustwhite.png';
import midnightblackmetalic from '../media/comp/midnightblackmetalic.png';
import blackmatt from '../media/comp/blackmatt.png';
import glossblacklacquer from '../media/comp/glossblacklacquer.png';
import boltbluelacquer from '../media/comp/boltbluelacquer.png';
import forestgreen from '../media/comp/forestgreen.png';
import lunarice from '../media/comp/lunarice.png';
import dunesand from '../media/comp/dunesand.png';
import bumblebeeyellow from '../media/comp/bumblebeeyellow.png';
import racinggreen from '../media/comp/racinggreen.png';
import oceanblue from '../media/comp/oceanblue.png';
import papyruswhite from '../media/comp/papyruswhite.png';

const mapImages = {
  battery, dynamo, reflector, lezyne, buildin, 
  1: een, 2: twee, 3: drie, 4: vier, 6: zes, 8: acht, 12: twaalf,
  mudgardcline, rackcline, norackaline, mudgardtline, 
  noracktline, norackgline, rackgline, rackpline, mudgardpline,
  standaardsaddle, standaardwide, c17, b17, carbonsaddle, 
  hoogtestandaard, hoogteextended, hoogtetelescopic, m, h, s, bronzesky, 
  adventureorange, blastedti, traildustwhite, midnightblackmetalic, 
  blackmatt, glossblacklacquer, boltbluelacquer, forestgreen, 
  lunarice, dunesand, bumblebeeyellow, racinggreen, oceanblue, papyruswhite
};

function ComponentPicker(props) {
  const [selectedOptions, setSelectedOptions] = useState({
    zadel: null,
    zadelHoogte: null,
    rack: null,
    stuur: null,
    verlichting: null,
    kleur: null,
    versnelling: null
  });

  const [componentPrices, setComponentPrices] = useState({
    zadelPrijs: null,
    zadelHoogtePrijs: null,
    rackPrijs: null,
    stuurPrijs: null,
    verlichtingPrijs: null,
    kleurPrijs: null,
    versnellingPrijs: null
  });

  // Filter de BikeType op basis van het geselecteerde model
  const BikeType = bikes.find(bike => bike.id === props.model);

  // Key for localStorage based on the selected model
  const bikeTypeKey = props.model;

  function handleClick(e) {
    const category = e.currentTarget.id;
    let item, price;
  
    if (e.target.tagName === 'IMG') {
      item = e.target.alt;
      price = BikeType[`${category}Prijs`][e.target.dataset.index];
    } else {
      item = e.target.textContent;
      price = e.target.dataset.price;
    }
  
    const newOptions = { ...selectedOptions, [category]: item };
    setSelectedOptions(newOptions);

    const newPrices = { ...componentPrices, [`${category}Prijs`]: price };
    setComponentPrices(newPrices);
  
    // Sla de geselecteerde opties en prijzen op in localStorage
    localStorage.setItem(`${bikeTypeKey}_SelectedOptions`, JSON.stringify(newOptions));
    localStorage.setItem(`${bikeTypeKey}_ComponentPrices`, JSON.stringify(newPrices));
  }

  const renderList = (bike, category, prices, map) => (
    <div className='flex justify-around flex-col' key={bike.id}>
      <div className='w-full flex justify-around'>
        {bike[category].map((item, index) => (
          <button key={item} id={category} onClick={handleClick} className="flex flex-col items-center">
            {map ? (
              <img 
                className='border border-black rounded-full'
                src={mapImages[item.toLowerCase()]} 
                alt={item} 
                data-index={index} 
              />
            ) : item}
            <p>€{bike[prices][index]}</p>
          </button>
        ))}
      </div>
    </div>
  );

  useEffect(() => {
    // Haal de geselecteerde opties en prijzen op uit localStorage
    const storedOptions = JSON.parse(localStorage.getItem(`${bikeTypeKey}_SelectedOptions`)) || {};
    const storedPrices = JSON.parse(localStorage.getItem(`${bikeTypeKey}_ComponentPrices`)) || {};

    setSelectedOptions(storedOptions);
    setComponentPrices(storedPrices);
  }, [bikeTypeKey]);

  return (
    <article className='w-full bg-white flex justify-center items-center p-4 flex-col'>
      <section className='w-4/5 border border-black p-1'>
        {props.component === 'zadel' && renderList(BikeType, 'zadel', 'zadelPrijs', true)}
        {props.component === 'zadelHoogte' && renderList(BikeType, 'zadelHoogte', 'zadelHoogtePrijs', true)}
        {props.component === 'rack' && renderList(BikeType, 'rack', 'rackPrijs', true)}
        {props.component === 'stuur' && renderList(BikeType, 'stuur', 'stuurPrijs', true)}
        {props.component === 'verlichting' && renderList(BikeType, 'verlichting', 'verlichtingPrijs', true)}
        {props.component === 'kleur' && renderList(BikeType, 'kleur', 'kleurPrijs', true)}
        {props.component === 'versnelling' && renderList(BikeType, 'versnelling', 'versnellingPrijs', true)}
      </section>
      <KeuzenHulp model={props.model} component={props.component} />
      <JouwBrompton model={props.model}/>
    </article>
  );
}

export default ComponentPicker;
