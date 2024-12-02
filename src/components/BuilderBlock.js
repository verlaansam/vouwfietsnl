import React from 'react';
import Aline from '../media/AlineBuilder.png';

function BuilderBlock(props) {
  return (
    <article className='border border-neutral-300 w-full'>
        <img  className='w-full' src={props.photo} alt='Aline lifestyle'></img>
        <section className='w-full  flex flex-col items-center'>
            <h2 className='font-roboto text-4xl pt-8'><b>{props.model}</b></h2>
            <p className='font-robotoMono text-sm'>{props.sentence1}</p>
            <p className='font-robotoMono text-sm'>{props.sentence2}</p>
            <h4 className='font-robotoMono text-base mt-2'><b>Vanaf €{props.price}</b></h4>
            <button className='font-robotoMono text-sm border border-black p-1 m-4 hover:text-white hover:bg-black'>Ontdek {props.model}</button>
        </section>
        
    </article>
  );
}

export default BuilderBlock;