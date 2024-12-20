//TODO:
//prijs toevoegen
//plaatjes toeveogen van comp
import React from 'react';
import { useState } from 'react';

import { bikes} from './data';
import KeuzenHulp from './KeuzenHulp';
import JouwBrompton from './JouwBrompton';

function ComponentPicker(props) {

    const BikeType = bikes.filter(bikes =>
        bikes.id === props.model,
        localStorage.setItem('model', props.model),
        window.dispatchEvent(new Event('storage'))
    );

    function handleClick(e) {
        const component = e.target.id;
        const type = e.target.textContent;
        localStorage.setItem(component, type);
    }

    const listItemsVersnelling = BikeType.map(bikes =>
        <div className='flex justify-around' key={bikes.id}>
            {bikes.versnelling.map(versnelling =>
                <p key={versnelling} id='versnelling' onClick={handleClick}>{versnelling}</p>
            )}
        </div>
    );

    const listItemsZadel = BikeType.map(bikes =>
        <div className='flex justify-around' key={bikes.id}>
            {bikes.zadel.map(zadel =>
                <p key={zadel}id='zadel' onClick={handleClick}>{zadel}</p>
            )}
        </div>
    );

    const listItemsZadelHoogte = BikeType.map(bikes =>
        <div className='flex justify-around' key={bikes.id}>
            {bikes.zadelHoogte.map(zadelHoogte =>
                <p key={zadelHoogte} id='zadelHoogte' onClick={handleClick}>{zadelHoogte}</p>
            )}
        </div>
    );

    const listItemsRack = BikeType.map(bikes =>
        <div className='flex justify-around' key={bikes.id}>
            {bikes.rack.map(rack =>
                <p key={rack} id='rack' onClick={handleClick} >{rack}</p>
            )}
        </div>
    );

    const listItemsStuur = BikeType.map(bikes =>
        <div className='flex justify-around' key={bikes.id}>
            {bikes.stuur.map(stuur =>
                <p key={stuur} id='stuur' onClick={handleClick}>{stuur}</p>
            )}
        </div>
    );
    const listItemsverlichting = BikeType.map(bikes =>
        <div className='flex justify-around' key={bikes.id}>
            {bikes.verlichting.map(verlichting =>
                <p key={verlichting} id='verlichting' onClick={handleClick}>{verlichting}</p>
            )}
        </div>
    );

    const listItemskleur = BikeType.map(bikes =>
        <div className='flex justify-around' key={bikes.id}>
            {bikes.kleur.map(kleur =>
                <p key={kleur} id='kleur' onClick={handleClick}>{kleur}</p>
            )}
        </div>
    );

  return (
    <article className='w-full bg-white flex justify-center items-center p-4 flex-col'>
        <section className='w-4/5 border border-black p-1'>
            {props.component === 'zadel' ? listItemsZadel : ''}
            {props.component === 'zadelHoogte' ? listItemsZadelHoogte : ''}
            {props.component === 'rack' ? listItemsRack : ''}
            {props.component === 'stuur' ? listItemsStuur : ''}
            {props.component === 'verlichting' ? listItemsverlichting : ''}
            {props.component === 'kleur' ? listItemskleur : ''}
            {props.component === 'versnelling' ? listItemsVersnelling : ''}
        </section>
        <KeuzenHulp model={props.model} component={props.component}/>
        <JouwBrompton/>
    </article>
  );
};

export default ComponentPicker;