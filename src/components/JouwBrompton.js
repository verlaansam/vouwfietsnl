import React, { useState, useEffect } from 'react';
import { bikes } from './data';

function JouwBrompton(props) {
  const [data, setData] = useState({
    model: props.model,
    selectedOptions: {},
    componentPrices: {},
    prijs: 0,
  });

  const [showPopup, setShowPopup] = useState(false);
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const calculatePrice = (componentPrices) => {
    // Zoek het juiste BikeType op basis van de geselecteerde fiets (props.model)
    const BikeType = bikes.find(bike => bike.id === props.model);
    // Zorg ervoor dat BikeType gevonden is voordat we verder gaan
    const startPrijs = BikeType ? BikeType.startPrijs : 0;  // Beginprijs ophalen
  
    // Bereken de totalPrice van de componenten zonder de startprijs
    const componentTotalPrice = Object.values(componentPrices).reduce(
      (sum, price) => sum + (parseFloat(price) || 0), // Voeg elke prijs toe
      0 // Begin de optelling met 0
    );
  
    // Voeg de startPrijs toe aan de componentTotalPrice
    const totalPrice = parseInt(componentTotalPrice) + parseInt(startPrijs);
  
    return totalPrice;
  };

  const handleStorage = () => {
    const selectedOptions = JSON.parse(localStorage.getItem(`${props.model}_SelectedOptions`)) || {};
    const componentPrices = JSON.parse(localStorage.getItem(`${props.model}_ComponentPrices`)) || {};

    setData({
      model,
      selectedOptions,
      componentPrices,
      prijs: calculatePrice(componentPrices),
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

  const isAllComponentsAvailable = () => {
    const { selectedOptions, componentPrices } = data;
    return (
      selectedOptions.versnelling &&
      selectedOptions.rack &&
      selectedOptions.verlichting &&
      selectedOptions.zadel &&
      selectedOptions.zadelHoogte &&
      selectedOptions.stuur &&
      selectedOptions.kleur &&
      Object.keys(componentPrices).length > 0
    );
  };

  const handleEmailSubmit = () => {
    const subject = 'Offerte aanvraag Brompton Fiets';
    const body = `
      Fiets opties:
      Model: ${data.model}
      Versnelling: ${data.selectedOptions.versnelling}
      Rack: ${data.selectedOptions.rack}
      Verlichting: ${data.selectedOptions.verlichting}
      Zadel: ${data.selectedOptions.zadel}
      Zadelhoogte: ${data.selectedOptions.zadelHoogte}
      Stuur: ${data.selectedOptions.stuur}
      Kleur: ${data.selectedOptions.kleur}
      Prijs: €${data.prijs}
      
      E-mailadres: ${email}
      Telefoonnummer: ${phone}
    `;
    
    const mailtoLink = `mailto:verlaansam@gmail.com,${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
    setShowPopup(false);
  };

  return (
    <article className='w-10/12 border flex justify-center items-center flex-col p-1'>
      <h1 className='font-roboto text-2xl m-2'>Jouw Brompton</h1>
      <section className='w-4/5 border border-black p-1'>
        <p>Type: {data.model}</p>
        <p>Versnelling: {data.selectedOptions.versnelling}</p>
        <p>Rack: {data.selectedOptions.rack}</p>
        <p>Verlichting: {data.selectedOptions.verlichting}</p>
        <p>Zadel: {data.selectedOptions.zadel}</p>
        <p>Zadelhoogte: {data.selectedOptions.zadelHoogte}</p>
        <p>Stuur: {data.selectedOptions.stuur}</p>
        <p>Kleur: {data.selectedOptions.kleur}</p>
        <p>Prijs: €{data.prijs}</p>
      </section>
      <button 
        onClick={() => setShowPopup(true)} 
        disabled={!isAllComponentsAvailable()}
        className={`bg-black text-white shadow-lg w-3/5 max-w-80 h-12 m-2 flex justify-center items-center text-xl font-roboto ${isAllComponentsAvailable() ? 'hover:bg-white hover:text-black hover:border-2 hover:border-black' : ''}`}
      >
        Offerte aanvragen
      </button>
      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <h2>Voer je gegevens in:</h2>
            <input 
              type="email" 
              placeholder="E-mailadres" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
            />
            <input 
              type="tel" 
              placeholder="Telefoonnummer" 
              value={phone} 
              onChange={(e) => setPhone(e.target.value)} 
            />
            <button onClick={handleEmailSubmit}>Verstuur Offerte</button>
            <button onClick={() => setShowPopup(false)}>Annuleren</button>
          </div>
        </div>
      )}
    </article>
  );
}

export default JouwBrompton;
