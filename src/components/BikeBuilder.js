//TODO:
//show more fixen. niet twee keer klikken op nieuwe button voor componentpicker, maar 1x klikken voor switch naar juiste comp
import React from 'react';
import { useState } from 'react';
import { useRef } from 'react';

import KeuzenHulp from './KeuzenHulp';
import ComponentPicker from './ComponentPicker';

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
    <article className='w-[360px] h-[1000px] bg-neutral-500 relative'>
       <img  className='w-full' src={props.photo} alt='Aline lifestyle'></img>
       <button  ref={ref} id='versnelling' onClick={HandleClick} className='absolute w-9 h-9 top-[205px] left-9 rounded-full border border-neutral-400'></button>
       <button  ref={ref} id='rack' onClick={HandleClick} className='absolute w-9 h-9 top-[165px] left-[17px] rounded-full border border-neutral-400'></button>
       <button  ref={ref} id='zadel' onClick={HandleClick} className='absolute w-[72px] h-[72px] top-[0px] left-[70px] rounded-full border border-neutral-400'></button>
       <button  ref={ref} id='kleur' onClick={HandleClick} className='absolute w-[53px] h-[53px] top-[140px] left-[127px] rounded-full border border-neutral-400'></button>
       <button  ref={ref} id='stuur' onClick={HandleClick} className='absolute w-[72px] h-[72px] top-[0px] left-[218px] rounded-full border border-neutral-400'></button>
       <button  ref={ref} id='verlichting' onClick={HandleClick} className='absolute w-9 h-9 top-[145px] left-[283px] rounded-full border border-neutral-400'></button>
       {showMore && <ComponentPicker model={props.model} component={component}/>}
       <KeuzenHulp/>
    </article>
  );
}

export default BikeBuilder;