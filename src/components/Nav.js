import React from 'react';
import TrommLogo from '../media/trommLogo.png'
import TromptonLogo from '../media/TromptonLogo.png';

function Nav() {
  return (
    <article className='w-full h-28 flex justify-between items-center shadow-md'>
        <img src={TrommLogo} alt='Tromm Tweewielers' className='w-60 h-16 ml-4'></img>
        <img src={TromptonLogo} alt='Trompton' className='w-20 h-24 mr-2'></img>
    </article>
  );
}

export default Nav;