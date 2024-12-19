//TODO:
//toevoegen Gline electric foto

import React from 'react';
import { useState } from 'react';

import BikeBuilder from './BikeBuilder';

import ClineSelecter from '../media/ClineSelecter.png'
import GlineSelecter from '../media/GlineSelecter.png'
import PlineSelecter from '../media/PlineSelecter.png'
import ClineElectricSelecter from '../media/ClineElectricSelecter.png'
import GlineElectricSelecter from '../media/GlineSelecter.png'
import PlineElectricSelecter from '../media/PlineElectricSelecter.png'

function BuilderBlockElectric(props) {
  const [showMore, setShowMore] = useState(false); 
  const [showMoreElectric, setShowMoreElectric] = useState(false); 
  const [modelNotProp, setModelNotProp] = useState('');

  function showBikeBuilder(){
    setModelNotProp(props.model);
    setShowMoreElectric(false)
    setShowMore(!showMore);
    localStorage.clear();
  }

  function showBikeBuilderElectric(){
    setModelNotProp(props.model + 'Electric');
    setShowMore(false)
    setShowMoreElectric(!showMoreElectric);
    localStorage.clear();
  }

  function TypeBrompton({model}) {
    switch(model) {
      case "CLine":
        return <BikeBuilder model={modelNotProp} photo={ClineSelecter}/>;
      case "GLine":
        return <BikeBuilder model={modelNotProp} photo={GlineSelecter}/>;
      case "PLine":
        return <BikeBuilder model={modelNotProp} photo={PlineSelecter}/>;
      case "CLineElectric":
        return <BikeBuilder model={modelNotProp} photo={ClineElectricSelecter}/>;
      case "GLineElectric":
        return <BikeBuilder model={modelNotProp} photo={GlineElectricSelecter}/>;
      case "PLineElectric":
        return <BikeBuilder model={modelNotProp} photo={PlineElectricSelecter}/>;
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
            <button onClick={showBikeBuilderElectric} className='font-robotoMono text-sm border-b border-black m-4'>{showMoreElectric ? 'verberg' : 'Ontdek'} {props.model} Electric</button>
            {showMore && <TypeBrompton key={modelNotProp} model={modelNotProp}/>}
            {showMoreElectric && <TypeBrompton key={modelNotProp} model={modelNotProp}/>}
        </section>
    </article>
  );
}

export default BuilderBlockElectric;