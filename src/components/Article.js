import React from 'react';
import BuilderBlock from './BuilderBlock';
import BuilderBlockElectric from './BuilderBlockElectric';
import Aline from '../media/AlineBuilder.png';
import Gline from '../media/GlineBuilder.png';
import Cline from '../media/ClineBuilder.png';
import Pline from '../media/PlineBuilder.png';
import Tline from '../media/TlineBuilder.png';


function Article(props) {
  return (
    <article className='w-full md:flex md:flex-col md:items-center'>
        <h1 className='font-robotoMono text-2xl flex justify-center p-4 md:text-5xl'>Brompton Builder</h1>
        <section className='w-full h-full flex flex-col md:w-3/5 lg:flex-row lg:w-full'>
            <BuilderBlock photo={Aline} model="A Line" price="1100" sentence1="3 versnellingen" sentence2="zonder poes pas"/>
            <BuilderBlockElectric photo={Gline} model="G Line" price="1550" sentence1="All terain met" sentence2='grote 20" banden'/>
            <BuilderBlockElectric photo={Cline} model="C Line" price="1550" sentence1="Meest modulair met" sentence2="optie tot electrisch"/>
            <BuilderBlockElectric photo={Pline} model="P Line" price="2890" sentence1="Licht gewicht met" sentence2="titanium accenten"/>
            <BuilderBlock photo={Tline} model="T Line" price="4950" sentence1="Voledig Titanium" sentence2="zonder poes pas"/>
        </section>
    </article>
  );
}

export default Article;