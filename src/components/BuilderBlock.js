import React, { useState } from 'react';
import BikeBuilder from './BikeBuilder';

// Import all images
import AlineSelecter from '../media/AlineSelecter.png';
import TlineSelecter from '../media/TlineSelecter.png';
import ClineSelecter from '../media/ClineSelecter.png';
import GlineSelecter from '../media/GlineSelecter.png';
import PlineSelecter from '../media/PlineSelecter.png';
import ClineElectricSelecter from '../media/ClineElectricSelecter.png';
import GlineElectricSelecter from '../media/GlineSelecter.png';
import PlineElectricSelecter from '../media/PlineElectricSelecter.png';

function BuilderBlock(props) {
  const [visibleModel, setVisibleModel] = useState(null);

  // Image mapping
  const images = {
    ALine: AlineSelecter,
    TLine: TlineSelecter,
    CLine: ClineSelecter,
    GLine: GlineSelecter,
    PLine: PlineSelecter,
    CLineElectric: ClineElectricSelecter,
    GLineElectric: GlineElectricSelecter,
    PLineElectric: PlineElectricSelecter,
  };

  // Toggle visibility for the selected model
  const toggleModel = (model) => {
    setVisibleModel(visibleModel === model ? null : model);

  };

  return (
    <article className='border border-neutral-300 w-[360px] h-[541px]'>
      <img className='w-full' src={images[visibleModel] || images[props.model]} alt={props.model} />
      <section className='w-full flex flex-col items-center'>
        <h2 className='font-roboto text-4xl pt-8'>
          <b>{props.model}</b>
        </h2>
        <p className='font-robotoMono text-sm'>{props.sentence1}</p>
        <p className='font-robotoMono text-sm'>{props.sentence2}</p>
        <h4 className='font-robotoMono text-base mt-2'>
          <b>Vanaf €{props.price}</b>
        </h4>

        {/* Toggle for standard model */}
        <button
          onClick={() => toggleModel(props.model)}
          className='font-robotoMono text-sm border border-black p-1 m-4 hover:text-white hover:bg-black'>
          {visibleModel === props.model ? 'verberg' : 'Ontdek'} {props.model}
        </button>

        {/* Toggle for electric model (if applicable) */}
        {props.hasElectric && (
          <button
            onClick={() => toggleModel(`${props.model}Electric`)}
            className='font-robotoMono text-sm border-b border-black m-4'>
            {visibleModel === `${props.model}Electric` ? 'verberg' : 'Ontdek'} {props.model} Electric
          </button>
        )}

        {/* Show the corresponding BikeBuilder based on the selected model */}
        {(visibleModel === props.model || visibleModel === `${props.model}Electric`) && (
          <BikeBuilder model={visibleModel} photo={images[visibleModel]} />
        )}
      </section>
    </article>
  );
}

export default BuilderBlock;
