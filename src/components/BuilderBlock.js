//toevoegen fotos per fiets
import React from 'react';
import { useState } from 'react';
import BikeBuilder from './BikeBuilder';

import AlineSelecter from '../media/AlineSelecter.png';
import TlineSelecter from '../media/TlineSelecter.png';

function BuilderBlock(props) {

  const [showMore, setShowMore] = useState(false);

  function showBikeBuilder(){
    setShowMore(!showMore);
  }
  
  function TypeBrompton({model}){
    if(model === "ALine"){
      return <BikeBuilder model={model} photo={AlineSelecter}/>
    }
    if(model === "TLine"){
      return <BikeBuilder model={model} photo={TlineSelecter}/>
    }
  }

  return (
    <article className='border border-neutral-300 w-full'>
        <img  className='w-full' src={props.photo} alt='Aline lifestyle'></img>
        <section className='w-full  flex flex-col items-center'>
            <h2 className='font-roboto text-4xl pt-8'><b>{props.model}</b></h2>
            <p className='font-robotoMono text-sm'>{props.sentence1}</p>
            <p className='font-robotoMono text-sm'>{props.sentence2}</p>
            <h4 className='font-robotoMono text-base mt-2'><b>Vanaf €{props.price}</b></h4>
            <button onClick={showBikeBuilder} className='font-robotoMono text-sm border border-black p-1 m-4 hover:text-white hover:bg-black'>{showMore ? 'verberg' : 'Ontdek'} {props.model}</button>
            {showMore && <TypeBrompton key={crypto.randomUUID} model={props.model}/>}
        </section>
        
    </article>
  );
}

export default BuilderBlock;