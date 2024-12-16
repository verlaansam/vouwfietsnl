//TODO:
//toeveogen fotos per fiets

import React from 'react';
import { useState } from 'react';
import BikeBuilder from './BikeBuilder';

import ClineSelecter from '../media/ClineSelecter.png'
import GlineSelecter from '../media/GlineSelecter.png'
import PlineSelecter from '../media/PlineSelecter.png'
import ClineElectricSelecter from '../media/ClineElectricSelecter.png'
//import GlineElectricSelecter from '../media/GlineElectricSelecter.png'
import PlineElectricSelecter from '../media/PlineElectricSelecter.png'

function BuilderBlockElectric(props) {
  const [showMore, setShowMore] = useState(false); 

  function showBikeBuilder(){
    setShowMore(!showMore);
  }
  
  function TypeBrompton({model}) {
    switch(model) {
      case "CLine":
        return <BikeBuilder model={model} photo={ClineSelecter}/>;
      case "GLine":
        return <BikeBuilder model={model} photo={GlineSelecter}/>;
      case "PLine":
        return <BikeBuilder model={model} photo={PlineSelecter}/>;
      case "CLine Electric":
        return <BikeBuilder model={model} photo={ClineElectricSelecter}/>;
      //case "GLine Electric":
      //  return <BikeBuilder model={model} photo={GlineElectricSelecter}/>;
      case "PLine Electric":
        return <BikeBuilder model={model} photo={PlineElectricSelecter}/>;
      default:
        return null;
    }
  }
  return (
    <article className='border border-neutral-300 w-full'>
        <img  className='w-full' src={props.photo} alt={props.model}></img>
        <section className='w-full flex flex-col items-center '>
            <h2 className='font-roboto text-4xl pt-8'><b>{props.model}</b></h2>
            <p className='font-robotoMono text-sm'>{props.sentence1}</p>
            <p className='font-robotoMono text-sm'>{props.sentence2}</p>
            <h4 className='font-robotoMono text-base mt-2'><b>Vanaf €{props.price}</b></h4>
            <button onClick={showBikeBuilder} className='font-robotoMono text-sm border border-black p-1 m-4 hover:text-white hover:bg-black'>{showMore ? 'verberg' : 'Ontdek'} {props.model}</button>
            <button className='font-robotoMono text-sm border-b border-black m-4'>ontdek {props.model} Electric</button>
            {showMore && <TypeBrompton key={crypto.randomUUID} model={props.model}/>}
        </section>
        
    </article>
  );
}

export default BuilderBlockElectric;