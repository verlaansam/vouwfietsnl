//TODO
//data gline fixen
import React from 'react';
import {keuzenData} from './KeuzenData';

function KeuzenHulp(props) {

  const BikeType = keuzenData.filter(KeuzenData =>
          KeuzenData.id === props.model
  );

  const listItemsVersnelling = BikeType.map(KeuzenData =>
                <p>{KeuzenData.versnelling}</p>
  );
  const listItemsRack = BikeType.map(KeuzenData =>
    <p>{KeuzenData.rack}</p>
  );
  const listItemsVerlichting = BikeType.map(KeuzenData =>
    <p>{KeuzenData.verlichting}</p>
  );
  const listItemsZadel = BikeType.map(KeuzenData =>
    <p>{KeuzenData.zadel}</p>
  );
  const listItemsZadelHoogte = BikeType.map(KeuzenData =>
    <p>{KeuzenData.zadelHoogte}</p>
  );
  const listItemsStuur = BikeType.map(KeuzenData =>
    <p>{KeuzenData.stuur}</p>
  );
  const listItemsKleur = BikeType.map(KeuzenData =>
    <p>{KeuzenData.kleur}</p>
  );
  const listItemsDefault = BikeType.map(KeuzenData =>
    <p>{KeuzenData.default}</p>
);

  return (
    <article className='w-full bg-white flex justify-center items-center p-4'>
        <section className='w-11/12 border border-black p-1'>
            <p className='font-robotoMono text-sm'><b>KeuzenHulp: </b>
              {props.component === 'versnelling' ? listItemsVersnelling : ''}
              {props.component === 'rack' ? listItemsRack : ''}
              {props.component === 'verlichting' ? listItemsVerlichting : ''}
              {props.component === 'zadel' ? listItemsZadel : ''}
              {props.component === 'zadelhoogte' ? listItemsZadelHoogte : ''}
              {props.component === 'stuur' ? listItemsStuur : ''}
              {props.component === 'kleur' ? listItemsKleur : ''}
            </p>
        </section>
    </article>
  );
}

export default KeuzenHulp;