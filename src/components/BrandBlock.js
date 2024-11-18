import React from 'react';
import BromptonLogo from '../media/brompton-logo.png'
import TernLogo from '../media/tern-logo.png';
import BeixoLogo from '../media/beixo-logo.png';
import UgoLogo from '../media/ugo-logo.png';

function BrandBlock(props) {
  return (
    <article className='w-full h-40 flex justify-around items-center'>
        <img className='w-1/4 max-w-80' src={BromptonLogo} alt='Brompton Logo'></img>
        <img className='w-1/4 max-w-80' src={TernLogo} alt='Tern Logo'></img>
        <img className='w-1/4 max-w-80' src={BeixoLogo} alt='Beixo Logo'></img>
        <img className='w-1/4 max-w-48' src={UgoLogo} alt='Ugo Logo'></img>
    </article>
  );
}

export default BrandBlock;