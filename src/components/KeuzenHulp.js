//TODO
//data bestand maken met 7 opties en uitlezen naar keuzenhulp op baisi van gekozen button
import React from 'react';
import {keuzenData} from './KeuzenData';

function KeuzenHulp(props) {

  const BikeType = keuzenData.filter(KeuzenData =>
          KeuzenData.id === props.model
      );

  const listItemsVersnelling = BikeType.map(KeuzenData =>
                <p>{KeuzenData.versnelling}</p>
  );

  return (
    <article className='w-full bg-white flex justify-center items-center p-4'>
        <section className='w-11/12 border border-black p-1'>
            <p className='font-robotoMono text-sm'><b>KeuzenHulp: </b>
              {props.component === 'versnelling' ? listItemsVersnelling : 'false'}
            </p>
        </section>
    </article>
  );
}

export default KeuzenHulp;