import React from 'react';
import { useState } from 'react';

import KeuzenHulp from './KeuzenHulp';
import ComponentPicker from './ComponentPicker';

function BikeBuilder(props) {
  const [showMore, setShowMore] = useState(false);
  const [component, setComponent] = useState('');

  function HandleClick(){
    setComponent('versnelling')
    setShowMore(!showMore);
  }
  //hier gebleven
  //totdo:
  //id aan button toevoegen en in set component gooien

  return (
    <article className='w-[360px] h-[1000px] bg-neutral-500 relative'>
       <img  className='w-full' src={props.photo} alt='Aline lifestyle'></img>
       <button  onClick={HandleClick} className='absolute bg-transparent w-9 h-9 top-[205px] left-9 rounded-full border border-neutral-400'></button>
       {showMore && <ComponentPicker model={props.model} component={component}/>}
       <KeuzenHulp/>
    </article>
  );
}

export default BikeBuilder;