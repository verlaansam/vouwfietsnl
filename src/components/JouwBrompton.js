//TODO
//rekenprijs uit

import React, { useState, useEffect } from 'react';

function JouwBrompton(props) {
  const [data, setData] = useState({
    model: localStorage.getItem('BikeType') || '',
    versnelling: localStorage.getItem('versnelling') || '',
    rack: localStorage.getItem('rack') || '',
    verlichting: localStorage.getItem('verlichting') || '',
    zadel: localStorage.getItem('zadel') || '',
    zadelHoogte: localStorage.getItem('zadelHoogte') || '',
    stuur: localStorage.getItem('stuur') || '',
    kleur: localStorage.getItem('kleur') || '',
    prijs: localStorage.getItem('prijs') || '',
  });

  const handleStorage = () => {
    setData({
      model: localStorage.getItem('model') || '',
      versnelling: localStorage.getItem('versnelling') || '',
      rack: localStorage.getItem('rack') || '',
      verlichting: localStorage.getItem('verlichting') || '',
      zadel: localStorage.getItem('zadel') || '',
      zadelHoogte: localStorage.getItem('zadelHoogte') || '',
      stuur: localStorage.getItem('stuur') || '',
      kleur: localStorage.getItem('kleur') || '',
      prijs: localStorage.getItem('prijs') || '',
    });
  };

  useEffect(() => {
    // Update de data als localStorage verandert
    window.addEventListener('storage', handleStorage);
    
    // Update de data bij elke klik op het scherm
    document.addEventListener('click', handleStorage);

    // Cleanup functie om de listeners te verwijderen bij ontmanteling
    return () => {
      window.removeEventListener('storage', handleStorage);
      document.removeEventListener('click', handleStorage);
    };
  }, []);

  return (
    <article className='w-10/12 border flex justify-center items-center flex-col p-1'>
      <h1 className='font-roboto text-2xl m-2'>Jouw Brompton</h1>
      <section className='w-4/5 border border-black p-1'>
        <p>Type: {data.model}</p>
        <p>Versnelling: {data.versnelling}</p>
        <p>Rack: {data.rack}</p>
        <p>Verlichting: {data.verlichting}</p>
        <p>Zadel: {data.zadel}</p>
        <p>Zadelhoogte: {data.zadelHoogte}</p>
        <p>Stuur: {data.stuur}</p>
        <p>Kleur: {data.kleur}</p>
        <p>Prijs: {data.prijs}</p>
      </section>
    </article>
  );
}

export default JouwBrompton;

