import React from 'react';
import TrommLogo from '../media/trommLogo.png'
import TromptonLogo from '../media/TromptonLogo.png';

function Nav() {
  return (
    <article className='w-full h-12 flex justify-between items-center shadow-md md:h-28'>
      <a href='https://www.tromm.nl'><img src={TrommLogo} alt='Tromm Tweewielers' className='w-24 h-7 ml-4 md:w-60 md:h-16'/></a>
      <a href='https://www.trompton.nl'><img src={TromptonLogo} alt='Trompton' className='w-8 h-10 mr-2 md:w-20 md:h-24'/></a>
    </article>
  );
}

export default Nav;