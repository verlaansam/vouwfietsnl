import React, { useState, useMemo } from 'react';
import BuilderBlock from './BuilderBlock';

import Aline from '../media/AlineSelecter.png';
import Gline from '../media/GlineSelecter.png';
import Cline from '../media/ClineSelecter.png';
import Pline from '../media/PlineSelecter.png';
import Tline from '../media/TlineSelecter.png';

const builderBlocks = [
  { photo: Aline, model: 'ALine', price: '1100', sentence1: '3 versnellingen', sentence2: 'zonder poes pas' },
  { hasElectric: true, photo: Tline, model: 'TLine', price: '5199', sentence1: 'Voledig Titanium', sentence2: 'zonder poes pas' },
  { hasElectric: true, photo: Cline, model: 'CLine', price: '1699', sentence1: 'Meest modulair met', sentence2: 'optie tot electrisch' },
  { hasElectric: true, photo: Pline, model: 'PLine', price: '2824', sentence1: 'Licht gewicht met', sentence2: 'titanium accenten' },
  { hasElectric: true, photo: Gline, model: 'GLine', price: '2999', sentence1: 'All terain met', sentence2: 'grote 20" banden' },
];

function Article(props) {
  const [activeModel, setActiveModel] = useState(null); // can be base model or Electric variant

  const activeCard = useMemo(() => {
    if (!activeModel) return null;
    return activeModel.replace('Electric', '');
  }, [activeModel]);

  const visibleBuilders = activeCard
    ? builderBlocks.filter(({ model }) => model === activeCard)
    : builderBlocks;

  const handleSelect = (model) => {
    setActiveModel((prev) => (prev === model ? null : model));
  };

  return (
    <article id='brompton-builder' className='w-full m-2 md:flex md:flex-col md:items-center'>
        <h1 className='font-robotoMono text-2xl flex justify-center p-4 md:text-5xl'>Brompton Builder</h1>
        <section className='w-full h-full flex flex-wrap items-start justify-center gap-2 2xl:w-full 2xl:justify-start 2xl:overflow-y-scroll'>
          {visibleBuilders.map((builder) => (
            <div key={builder.model} className=''>
              <BuilderBlock
                {...builder}
                activeModel={activeModel}
                onSelectModel={handleSelect}
              />
            </div>
          ))}
        </section>
    </article>
  );
}

export default Article;
