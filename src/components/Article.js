import React from 'react';
import BuilderBlock from './BuilderBlock';

import Aline from '../media/AlineBuilder.png';
import Gline from '../media/GlineBuilder.png';
import Cline from '../media/ClineBuilder.png';
import Pline from '../media/PlineBuilder.png';
import Tline from '../media/TlineBuilder.png';


function Article(props) {
  return (
    <article className='w-full md:flex md:flex-col md:items-center'>
        <h1 className='font-robotoMono text-2xl flex justify-center p-4 md:text-5xl'>Brompton Builder</h1>
        <section className='w-full h-full flex flex-col items-center justify-center lg:flex-row lg:w-full lg:overflow-scroll'>
          <div className='md:flex md:flex-row '>
            <BuilderBlock photo={Aline} model="ALine" price="1100" sentence1="3 versnellingen" sentence2="zonder poes pas"/>
            <BuilderBlock photo={Tline} model="TLine" price="4950" sentence1="Voledig Titanium" sentence2="zonder poes pas"/>
            
          </div>
          <div className='md:flex md:flex-row'>
            <BuilderBlock hasElectric photo={Cline} model="CLine" price="1599" sentence1="Meest modulair met" sentence2="optie tot electrisch"/>
            <BuilderBlock hasElectric photo={Pline} model="PLine" price="2890" sentence1="Licht gewicht met" sentence2="titanium accenten"/>
          </div>
          <div className='md:flex md:flex-row'>
            <BuilderBlock hasElectric photo={Gline} model="GLine" price="2849" sentence1="All terain met" sentence2='grote 20" banden'/>
          </div> 
        </section>
    </article>
  );
}

export default Article;