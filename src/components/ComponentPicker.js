import React, { useEffect } from "react";
import { bikes } from "./data";
import KeuzenHulp from "./KeuzenHulp";
import JouwBrompton from "./JouwBrompton";
import mapImages from "./MapImages";

function ComponentPicker({ model, component, selectedOptions, setSelectedOptions }) {
  const BikeType = bikes.find((bike) => bike.id === model);
  const storageKey = `${model}_SelectedOptions`;
  const priceStorageKey = `${model}_ComponentPrices`;

  // ---------------------------------------------------------------------------
  // 🧹 CLEANER: localStorage automatisch opschonen & toepassen
  // ---------------------------------------------------------------------------
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem(storageKey) || "{}");
    const savedPrices = JSON.parse(localStorage.getItem(priceStorageKey) || "{}");

    // verwijder keys die niet meer bestaan in data.js → voorkomt bugs
    const cleaned = Object.fromEntries(
      Object.entries(saved).filter(([category, item]) =>
        BikeType?.[category]?.includes(item)
      )
    );

    setSelectedOptions(cleaned);
    localStorage.setItem(storageKey, JSON.stringify(cleaned));
    localStorage.setItem(priceStorageKey, JSON.stringify(savedPrices));
  }, [model]);

  // ---------------------------------------------------------------------------
  // 🖱️ CLICK HANDLER
  // ---------------------------------------------------------------------------
  function handleClick(e) {
    const category = e.currentTarget.id;
    let item = null;
    let price = null;

    // Klik op een afbeelding
    if (e.target.tagName === "IMG") {
      item = e.target.alt;
      price = e.target.dataset.price;
    }

    // Klik op een andere target
    if (!item) {
      item = e.currentTarget.dataset.item;
      price = e.currentTarget.dataset.price;
    }

    const alreadySelected = selectedOptions[category] === item;

    const currentPrices = JSON.parse(localStorage.getItem(priceStorageKey) || "{}");

    const updated = {
      ...selectedOptions,
      [category]: alreadySelected ? undefined : item,
    };

    if (alreadySelected) delete updated[category];

    const updatedPrices = { ...currentPrices };
    if (alreadySelected) {
      delete updatedPrices[category];
    } else {
      updatedPrices[category] = price;
    }

    setSelectedOptions(updated);
    localStorage.setItem(storageKey, JSON.stringify(updated));
    localStorage.setItem(priceStorageKey, JSON.stringify(updatedPrices));
    window.dispatchEvent(new Event("builder-updated"));
  }

  // ---------------------------------------------------------------------------
  // 🧩 ITEM LIJST RENDEREN
  // ---------------------------------------------------------------------------
  function renderList(category, priceKey, showImages = true) {
    const items = BikeType[category];
    const prices = BikeType[priceKey];

    if (!items) return <p className="text-red-500">Ongeldige categorie: {category}</p>;

    return (
      <div className="w-full">
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-3 gap-4 place-items-center">
          {items.map((item, index) => {
            const isSelected = selectedOptions?.[category] === item;
            const imgKey = item?.toLowerCase?.();

            return (
              <button
                key={`${category}_${item}`}
                id={category}
                onClick={handleClick}
                data-item={item}
                data-price={prices[index]}
                className="relative flex flex-col items-center"
              >
                {showImages && (
                  <div className="relative">
                    <img
                      className={`w-16 h-16 object-contain border rounded-full transition-all duration-200 ${
                        isSelected
                          ? "border-green-500 ring-2 ring-green-400"
                          : "border-black"
                      }`}
                      src={mapImages[imgKey] || mapImages[item] || ""}
                      alt={item}
                      data-price={prices[index]}
                    />

                    {isSelected && (
                      <div className="pointer-events-none absolute inset-0 bg-green-500 bg-opacity-40 flex justify-center items-center rounded-full">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6 text-white"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                    )}
                  </div>
                )}

                <p className="text-xs mt-1">€{prices[index]}</p>
              </button>
            );
          })}
        </div>
      </div>
    );
  }

  // ---------------------------------------------------------------------------
  // 🖼️ WAT LATEN WE ZIEN?
  // ---------------------------------------------------------------------------
  const componentsMap = {
    zadel: ["zadelPrijs", true],
    zadelHoogte: ["zadelHoogtePrijs", true],
    rack: ["rackPrijs", true],
    stuur: ["stuurPrijs", true],
    verlichting: ["verlichtingPrijs", true],
    kleur: ["kleurPrijs", true],
    versnelling: ["versnellingPrijs", true],
  };

  const mapping = componentsMap[component];

  return (
    <article className="w-full bg-white flex justify-center items-start p-4 flex-col 2xl:flex-row 2xl:gap-6">
      <section className="w-full 2xl:w-2/5 border border-black p-1">
        {mapping ? (
          renderList(component, mapping[0], mapping[1])
        ) : (
          <p className="text-red-500">Onbekende component: {component}</p>
        )}
      </section>

      <div className="w-full 2xl:w-4/5 flex flex-col 2xl:flex-row items-center 2xl:items-start gap-4">
        <div className="w-full 2xl:w-4/5 flex justify-center">
          <JouwBrompton model={model} />
        </div>
        <div className="w-full 2xl:w-1/2">
          <KeuzenHulp model={model} component={component} />
        </div>
        
      </div>
    </article>
  );
}

export default ComponentPicker;
