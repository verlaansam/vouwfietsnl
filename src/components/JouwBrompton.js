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
    prijs: 0,
  });

  const [showPopup, setShowPopup] = useState(false);
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const calculatePrice = () => {
    const startPrijs = parseFloat(localStorage.getItem('startPrijs')) || 0;
    const versnellingPrijs = parseFloat(localStorage.getItem('versnellingPrijs')) || 0;
    const rackPrijs = parseFloat(localStorage.getItem('rackPrijs')) || 0;
    const verlichtingPrijs = parseFloat(localStorage.getItem('verlichtingPrijs')) || 0;
    const zadelPrijs = parseFloat(localStorage.getItem('zadelPrijs')) || 0;
    const zadelHoogtePrijs = parseFloat(localStorage.getItem('zadelHoogtePrijs')) || 0;
    const stuurPrijs = parseFloat(localStorage.getItem('stuurPrijs')) || 0;
    const kleurPrijs = parseFloat(localStorage.getItem('kleurPrijs')) || 0;

    const totalPrice = startPrijs + versnellingPrijs + rackPrijs + verlichtingPrijs + zadelPrijs + zadelHoogtePrijs + stuurPrijs + kleurPrijs;

    return totalPrice;
  };

  const handleStorage = () => {
    setData({
      model: localStorage.getItem('BikeType') || '',
      versnelling: localStorage.getItem('versnelling') || '',
      rack: localStorage.getItem('rack') || '',
      verlichting: localStorage.getItem('verlichting') || '',
      zadel: localStorage.getItem('zadel') || '',
      zadelHoogte: localStorage.getItem('zadelHoogte') || '',
      stuur: localStorage.getItem('stuur') || '',
      kleur: localStorage.getItem('kleur') || '',
      prijs: calculatePrice(),
    });
  };

  useEffect(() => {
    handleStorage();
    
    window.addEventListener('storage', handleStorage);
    document.addEventListener('click', handleStorage);

    return () => {
      window.removeEventListener('storage', handleStorage);
      document.removeEventListener('click', handleStorage);
    };
  }, []);

  const handleEmailSubmit = () => {
    const subject = 'Offerte aanvraag Brompton Fiets';
    const body = `
      Fiets opties:
      Model: ${data.model}
      Versnelling: ${data.versnelling}
      Rack: ${data.rack}
      Verlichting: ${data.verlichting}
      Zadel: ${data.zadel}
      Zadelhoogte: ${data.zadelHoogte}
      Stuur: ${data.stuur}
      Kleur: ${data.kleur}
      Prijs: €${data.prijs}
      
      E-mailadres: ${email}
      Telefoonnummer: ${phone}
    `;
    
    const mailtoLink = `mailto:verlaansam@gmail.com,${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink; // Dit opent de standaard e-mailclient met de opgestelde e-mail
    setShowPopup(false); // Sluit de popup na het versturen
  };

  // Functie om te controleren of alle componenten in localStorage aanwezig zijn
  const isAllComponentsAvailable = () => {
    return data.model && data.versnelling && data.rack && data.verlichting && data.zadel && data.zadelHoogte && data.stuur && data.kleur && data.prijs;
  };

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
        <p>Prijs: €{data.prijs}</p>
      </section>
      <button 
        onClick={() => setShowPopup(true)} 
        disabled={!isAllComponentsAvailable()}  // Button grijs totdat alle componenten in localStorage zijn
        className={`bg-black text-white shadow-lg w-3/5 max-w-80 h-12 m-2 flex justify-center items-center text-xl font-roboto ${isAllComponentsAvailable() ? 'hover:bg-white hover:text-black hover:border-2 hover:border-black' : 'bg-gray-400 text-gray-700 cursor-not-allowed'}`}
      >
        Meer Informatie
      </button>
      
      {showPopup && (
        <div className='fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center '>
          <div className='bg-white p-6 rounded shadow-lg w-5/6'>
            <h2 className='text-xl mb-4'>Vraag een vrijblijvende offerte aan</h2>
            <input 
              type="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              className="border p-2 w-full mb-4" 
              placeholder="E-mailadres" 
              required 
            />
            <input 
              type="tel" 
              value={phone}
              onChange={(e) => setPhone(e.target.value)} 
              className="border p-2 w-full mb-4" 
              placeholder="Telefoonnummer" 
            />
            <div className='flex justify-around'>
              <button 
                onClick={handleEmailSubmit} 
                disabled={!email}  // Button grijs totdat er een geldig e-mailadres is
                className={`w-3/5 max-w-24 h-10 flex justify-center items-center text-l font-roboto ${email ? 'bg-black text-white hover:bg-white hover:text-black hover:border-2 hover:border-black' : 'bg-gray-400 text-gray-700 cursor-not-allowed'}`}
              >
                Verzenden
              </button>
              <button 
                onClick={() => setShowPopup(false)} 
                className="bg-white text-black border border-black shadow-lg w-3/5 max-w-24 h-10  flex justify-center items-center text-l font-roboto hover:bg-white hover:text-black hover:border-2 hover:border-black md:text-lg lg:text-2xl"
              >
                Annuleren
              </button>
            </div>
          </div>
        </div>
      )}
    </article>
  );
}

export default JouwBrompton;