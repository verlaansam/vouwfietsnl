import React from 'react';
import BuilderBlock from './BuilderBlock';

import Aline from '../media/AlineSelecter.png';
import Gline from '../media/GlineSelecter.png';
import Cline from '../media/ClineSelecter.png';
import Pline from '../media/PlineSelecter.png';
import Tline from '../media/TlineSelecter.png';


function Article(props) {
  return (
    <article className='w-full md:flex md:flex-col md:items-center'>
        <h1 className='font-robotoMono text-2xl flex justify-center p-4 md:text-5xl'>Brompton Builder</h1>
        <section className='w-full h-full flex flex-col items-center justify-start lg:flex-row lg:w-full lg:overflow-y-scroll'>
          <div className='md:flex md:flex-row '>
            <BuilderBlock photo={Aline} model="ALine" price="1100" sentence1="3 versnellingen" sentence2="zonder poes pas"/>
            <BuilderBlock hasElectric photo={Tline} model="TLine" price="5199" sentence1="Voledig Titanium" sentence2="zonder poes pas"/>
            
          </div>
          <div className='md:flex md:flex-row'>
            <BuilderBlock hasElectric photo={Cline} model="CLine" price="1699" sentence1="Meest modulair met" sentence2="optie tot electrisch"/>
            <BuilderBlock hasElectric photo={Pline} model="PLine" price="2824" sentence1="Licht gewicht met" sentence2="titanium accenten"/>
          </div>
          <div className='md:flex md:flex-row'>
            <BuilderBlock hasElectric photo={Gline} model="GLine" price="2999" sentence1="All terain met" sentence2='grote 20" banden'/>
          </div> 
        </section>
    </article>
  );
}

export default Article;