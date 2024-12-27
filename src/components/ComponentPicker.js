//TODO:
//plaatjes toeveogen van comp
//opslaan item in localstorage https://www.freecodecamp.org/news/how-to-use-localstorage-with-react-hooks-to-set-and-get-items/
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

import { bikes} from './data';
import KeuzenHulp from './KeuzenHulp';
import JouwBrompton from './JouwBrompton';

function ComponentPicker(props) {
    const [items, setItems] = useState([]);

    const BikeType = bikes.filter(bikes =>
        bikes.id === props.model,

        useEffect(() => {
        localStorage.setItem('BikeT', JSON.stringify(items));
        }, [items])
    );

    function handleClick(e) {
        const component = e.target.id;
        const type = e.target.textContent;
        localStorage.setItem(component, type);
    }

    const listItemsVersnelling = BikeType.map(bikes =>
        <div className='flex justify-around flex-col' key={bikes.id}>
            <div className='w-full flex justify-around'>
            {bikes.versnelling.map(versnelling =>
                <button key={versnelling} id='versnelling' onClick={handleClick}>{versnelling}</button>
            )}
            </div>
            <div className='w-full flex justify-around'>
            {bikes.versnellingPrijs.map(versnellingPrijs =>
                <button key={versnellingPrijs} id='versnellingPrijs' onClick={handleClick}>€{versnellingPrijs}</button>
            )}
            </div>
        </div>
    );

    const listItemsZadel = BikeType.map(bikes =>
        <div className='flex justify-around flex-col' key={bikes.id}>
            <div className='w-full flex justify-around'>
            {bikes.zadel.map(zadel =>
                <button key={zadel} id='zadel' onClick={handleClick}>{zadel}</button>
            )}
            </div>
            <div className='w-full flex justify-around'>
            {bikes.zadelPrijs.map(zadelPrijs =>
                <button key={zadelPrijs} id='zadelPrijs' onClick={handleClick}>€{zadelPrijs}</button>
            )}
            </div>
        </div>
    );

    const listItemsZadelHoogte = BikeType.map(bikes =>
        <div className='flex justify-around flex-col' key={bikes.id}>
            <div className='w-full flex justify-around'>
            {bikes.zadelHoogte.map(zadelHoogte =>
                <button key={zadelHoogte} id='zadelHoogtePrijs' onClick={handleClick}>{zadelHoogte}</button>
            )}
            </div>
            <div className='w-full flex justify-around'>
            {bikes.zadelHoogtePrijs.map(zadelHoogtePrijs =>
                <button key={zadelHoogtePrijs} id='zadelHoogtePrijs' onClick={handleClick}>€{zadelHoogtePrijs}</button>
            )}
            </div>
        </div>
    );

    const listItemsRack = BikeType.map(bikes =>
        <div className='flex justify-around flex-col' key={bikes.id}>
            <div className='w-full flex justify-around'>
            {bikes.rack.map(rack =>
                <button key={rack} id='rack' onClick={handleClick}>{rack}</button>
            )}
            </div>
            <div className='w-full flex justify-around'>
            {bikes.rackPrijs.map(rackPrijs =>
                <button key={rackPrijs} id='versnelling' onClick={handleClick}>€{rackPrijs}</button>
            )}
            </div>
        </div>
    );

    const listItemsStuur = BikeType.map(bikes =>
        <div className='flex justify-around flex-col' key={bikes.id}>
            <div className='w-full flex justify-around'>
            {bikes.stuur.map(stuur =>
                <button key={stuur} id='stuur' onClick={handleClick}>{stuur}</button>
            )}
            </div>
            <div className='w-full flex justify-around'>
            {bikes.stuurPrijs.map(stuurPrijs =>
                <button key={stuurPrijs} id='versnelling' onClick={handleClick}>€{stuurPrijs}</button>
            )}
            </div>
        </div>
    );
    const listItemsverlichting = BikeType.map(bikes =>
        <div className='flex justify-around flex-col' key={bikes.id}>
            <div className='w-full flex justify-around'>
            {bikes.verlichting.map(verlichting =>
                <button key={verlichting} id='verlichting' onClick={handleClick}>{verlichting}</button>
            )}
            </div>
            <div className='w-full flex justify-around'>
            {bikes.verlichtingPrijs.map(verlichtingPrijs =>
                <button key={verlichtingPrijs} id='verlichtingPrijs' onClick={handleClick}>€{verlichtingPrijs}</button>
            )}
            </div>
        </div>
    );

    const listItemskleur = BikeType.map(bikes =>
        <div className='flex justify-around flex-col' key={bikes.id}>
            <div className='w-full flex justify-around'>
            {bikes.kleur.map(kleur =>
                <button key={kleur} id='kleur' onClick={handleClick}>{kleur}</button>
            )}
            </div>
            <div className='w-full flex justify-around'>
            {bikes.kleurPrijs.map(kleurPrijs =>
                <button key={kleurPrijs} id='kleurPrijs' onClick={handleClick}>€{kleurPrijs}</button>
            )}
            </div>
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