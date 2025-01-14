//TODO:
//foto log koppelen van overlay, zodat foto via props mee kan komen
import React from 'react';
import { useState } from 'react';
import { useRef } from 'react';

import ComponentPicker from './ComponentPicker';
import Exclude from '../media/Exclude.png';

function BikeBuilder(props) {
  const ref = useRef(null);
  const [showMore, setShowMore] = useState(false);
  const [component, setComponent] = useState('');

  const HandleClick = (event) =>{
    setComponent(event.target.id)
    if(showMore){
      setShowMore(showMore)
    }else{
      setShowMore(!showMore)
    }
  }

  return (
    <article className='w-[360px] relative'>
      <img  className='w-full absolute' src={Exclude} alt='overlay'></img>
      <img  className='w-full' src={props.photo} alt={props.model}></img>
      <button  ref={ref} id='versnelling' onClick={HandleClick} className='absolute w-9 h-9 top-[206px] left-[38px] rounded-full border border-neutral-400'></button>
      <button  ref={ref} id='rack' onClick={HandleClick} className='absolute w-9 h-9 top-[165px] left-[18px] rounded-full border border-neutral-400'></button>
      <button  ref={ref} id='zadel' onClick={HandleClick} className='absolute w-[72px] h-[72px] top-[8px] left-[72px] rounded-full border border-neutral-400'></button>
      <button  ref={ref} id='kleur' onClick={HandleClick} className='absolute w-[53px] h-[53px] top-[140px] left-[128px] rounded-full border border-neutral-400'></button>
      <button  ref={ref} id='stuur' onClick={HandleClick} className='absolute w-[72px] h-[72px] top-[4px] left-[218px] rounded-full border border-neutral-400'></button>
      <button  ref={ref} id='verlichting' onClick={HandleClick} className='absolute w-9 h-9 top-[143px] left-[278px] rounded-full border border-neutral-400'></button>
      <button  ref={ref} id='zadelHoogte' onClick={HandleClick} className='absolute w-9 h-9 top-[94px] left-[100px] rounded-full border border-neutral-400'></button>
      {showMore && <ComponentPicker model={props.model} component={component}/>}
      
    </article>
  );
}

export default BikeBuilder;