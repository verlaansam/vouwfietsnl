import React, { useEffect } from 'react';
import { bikes } from './data';
import KeuzenHulp from './KeuzenHulp';
import JouwBrompton from './JouwBrompton';
import mapImages from './MapImages';

function ComponentPicker(props) {
  const { selectedOptions, setSelectedOptions } = props;
  const BikeType = bikes.find(bike => bike.id === props.model);
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

    // Als dit item al geselecteerd is → deselecteren
    const alreadySelected = selectedOptions[category] === item;
    const newOptions = { ...selectedOptions };

    if (alreadySelected) {
      delete newOptions[category]; // deselect
    } else {
      newOptions[category] = item; // select
    }

    setSelectedOptions(newOptions);
    localStorage.setItem(`${bikeTypeKey}_SelectedOptions`, JSON.stringify(newOptions));
  }

    const renderList = (bike, category, prices, showImages) => (
      <div className='w-full' key={bike.id}>
        {/* raster met 3 kolommen op mobiel, 4+ op brede schermen */}
        <div className='grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4 place-items-center'>
          {bike[category].map((item, index) => {
            const isSelected = selectedOptions?.[category] === item;
            const imgKey = item?.toLowerCase?.();

            return (
              <button
                key={item}
                id={category}
                onClick={handleClick}
                className="relative flex flex-col items-center"
              >
                {showImages && (
                  <div className="relative">
                    <img
                      className={`w-16 h-16 sm:w-20 sm:h-20 object-contain border rounded-full transition-all duration-200 ${
                        isSelected ? 'border-green-500 ring-2 ring-green-400' : 'border-black'
                      }`}
                      src={mapImages[imgKey] || mapImages[item] || ''}
                      alt={item}
                      data-index={index}
                    />
                    {isSelected && (
                      <div className="pointer-events-none absolute inset-0 bg-green-500 bg-opacity-40 flex justify-center items-center rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                    )}
                  </div>
                )}
                <p className='text-xs mt-1'>€{bike[prices][index]}</p>
              </button>
            );
          })}
        </div>
      </div>
    );

  useEffect(() => {
    const storedOptions = JSON.parse(localStorage.getItem(`${bikeTypeKey}_SelectedOptions`)) || {};
    setSelectedOptions(storedOptions);
  }, [bikeTypeKey, setSelectedOptions]);

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

