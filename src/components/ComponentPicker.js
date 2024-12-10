import React from 'react';

import { bikes} from './data';

function ComponentPicker(props) {

    //component prop uitlezen voor render juiste component picker
    
    const BikeType = bikes.filter(bikes =>
        bikes.id === props.model
    );

    const listItems = BikeType.map(bikes =>
        <div className='flex justify-around' key={bikes.id}>
            {bikes.versnelling.map(versnelling =>
                <p key={versnelling}>{versnelling}</p>
            )}
        </div>
    );
  return (
    <article className='w-full bg-white flex justify-center items-center p-4'>
        <section className='w-4/5 border border-black p-1'>
            {props.component === 'versnelling' ? listItems : 'false'}
        </section>
    </article>
  );
}

export default ComponentPicker;