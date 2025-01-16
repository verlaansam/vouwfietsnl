import React from 'react';
import Block from './Block';
import BlockWhite from './BlockWhite'

function Section() {
  return (
    <article className='w-full h-[1000px] flex flex-col justify-center items-center md:flex-row md:h-[350px] lg:h-[480px]'>
        <Block button="Tromm.nl" link='https://www.tromm.nl' tekst="Met verschillende merken zoals dahon beixo en takashi is er bij Tromm altijd wel een vouwfiets voor u van electic tot lage instap"/>
        <BlockWhite button="Trompton.nl" link='https://www.trompton.nl' tekst="Voor de commuter, enthousiasteling en zelfs avonturier is er Brompton. het paradepaardje van de vouwfiets vind u in hartje amsterdam of op trompton.nl"/>
        <Block button="Brompton Builder" link='http://wwww.vouwfiets.nl' tekst="Geen Brompton is hetzelfde en aan u om deze samen te stellen. dankzij onze online Brompton builder stelt u gemakkelijk en eenvoudig uw persoonlijke brompton samen"/>
    </article>
  );
}

export default Section;