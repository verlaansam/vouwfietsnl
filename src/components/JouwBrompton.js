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
  const [highlightedField, setHighlightedField] = useState(null);

  const calculatePrice = (componentPrices) => {
    const BikeType = bikes.find(bike => bike.id === props.model);
    const startPrijs = BikeType ? BikeType.startPrijs : 0;

    const componentTotalPrice = Object.values(componentPrices).reduce(
      (sum, price) => sum + (parseFloat(price) || 0), 
      0
    );

    return parseInt(componentTotalPrice) + parseInt(startPrijs);
  };
 
  const handleStorage = () => {
    const model = props.model;
    const nextSelected = JSON.parse(localStorage.getItem(`${props.model}_SelectedOptions`)) || {};
    const nextPrices = JSON.parse(localStorage.getItem(`${props.model}_ComponentPrices`)) || {};

    const prevSelected = data.selectedOptions || {};

    const allKeys = Array.from(new Set([...Object.keys(prevSelected), ...Object.keys(nextSelected)]));
    const changedKeys = allKeys.filter((k) => prevSelected[k] !== nextSelected[k]);

    setData({
      model,
      selectedOptions: nextSelected,
      componentPrices: nextPrices,
      prijs: calculatePrice(nextPrices),
    });

    if (changedKeys.length === 1) {
      setHighlightedField(changedKeys[0]);
      setTimeout(() => setHighlightedField(null), 600);
    } else {
      setHighlightedField(null);
    }
  };

  useEffect(() => {
    handleStorage();
    window.addEventListener('storage', handleStorage);
    window.addEventListener('builder-updated', handleStorage);
    document.addEventListener('click', handleStorage);

    return () => {
      window.removeEventListener('storage', handleStorage);
      window.removeEventListener('builder-updated', handleStorage);
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
      Beste Tromm ik heb intresse in de volgende Brompton, graag ontvang ik een offerte op onderstaande emailadres.
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

      vriendelijke groet,
      de website
    `;

    const mailtoLink = `mailto:info@tromm.nl,${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
    setShowPopup(false);
  };

  const highlightClass = (field) =>
    highlightedField === field
      ? 'bg-green-200 transition-all duration-300'
      : 'transition-all duration-300';

  return (
    <article className="w-10/12 border flex justify-center items-center flex-col p-1 lg:border-none">
      <h1 className="font-roboto text-2xl m-2 lg:hidden">Jouw Brompton</h1>
      <section className="w-4/5 border border-black p-1">
        <p className={highlightClass('model')}>Type: {data.model}</p>
        <p className={highlightClass('versnelling')}>Versnelling: {data.selectedOptions.versnelling}</p>
        <p className={highlightClass('rack')}>Rack: {data.selectedOptions.rack}</p>
        <p className={highlightClass('verlichting')}>Verlichting: {data.selectedOptions.verlichting}</p>
        <p className={highlightClass('zadel')}>Zadel: {data.selectedOptions.zadel}</p>
        <p className={highlightClass('zadelHoogte')}>Zadelhoogte: {data.selectedOptions.zadelHoogte}</p>
        <p className={highlightClass('stuur')}>Stuur: {data.selectedOptions.stuur}</p>
        <p className={highlightClass('kleur')}>Kleur: {data.selectedOptions.kleur}</p>
        <p className={highlightClass('prijs')}>Prijs: €{data.prijs}</p>
      </section>

      <button
        onClick={() => setShowPopup(true)}
        disabled={!isAllComponentsAvailable()}
        className={`bg-black text-white shadow-lg w-3/5 max-w-80 h-12 m-2 flex justify-center items-center text-xl font-roboto ${
          isAllComponentsAvailable()
            ? 'hover:bg-white hover:text-black hover:border-2 hover:border-black'
            : 'bg-gray-400'
        }`}
      >
        Meer informatie
      </button>

      {/* Popup voor gegevens */}
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg w-96 shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Voer je gegevens in:</h2>
            <input
              type="email"
              placeholder="E-mailadres"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border p-2 w-full mb-4 rounded"
            />
            <input
              type="tel"
              placeholder="Telefoonnummer"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="border p-2 w-full mb-4 rounded"
            />
            <div className="flex justify-between">
              <button
                onClick={handleEmailSubmit}
                className="bg-black text-white p-2 rounded hover:bg-white hover:text-black hover:border-2 hover:border-black w-2/5"
              >
                Verstuur Offerte
              </button>
              <button
                onClick={() => setShowPopup(false)}
                className="bg-white border-black border-2 text-black p-2 rounded hover:bg-black hover:text-white hover:border-2 hover:border-black w-2/5"
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
