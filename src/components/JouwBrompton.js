//todo
//fix auto update bij kiezen van component in component picker
import React from 'react';
import { useEffect } from 'react'; 

function JouwBrompton(props) {
  let model = localStorage.getItem('model');
  let versnelling = localStorage.getItem('versnelling');

  useEffect(() => {
    const handleStorage = () => {
      model = localStorage.getItem('model');
      versnelling = localStorage.getItem('versnelling');
      // Place for a function responsible for
      // pulling and displaying local storage data
    }
  
    window.addEventListener('storage', handleStorage())
    return () => window.removeEventListener('storage', handleStorage())
  }, [])

  return (
    <article className='w-10/12 border flex justify-center items-center flex-col p-1'>
        <h1 className='font-roboto text-2xl m-2'>Jouw Brompton</h1>
        <section className='w-4/5 border border-black p-1'>
            <p>Type: {model}</p>
            <p>Versnelling: {versnelling}</p>
            <p>Rack: {props.rack}</p>
            <p>Verlichting: {props.verlichting}</p>
            <p>Zadel: {props.zadel}</p>
            <p>Zadelhoogte: {props.zadelHoogte}</p>
            <p>Stuur: {props.stuur}</p>
            <p>Kleur: {props.kleur}</p> 
            <p>Prijs: {props.Prijs}</p>
        </section>
    </article>
  );
}

export default JouwBrompton;