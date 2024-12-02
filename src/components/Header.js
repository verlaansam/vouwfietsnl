import React from 'react';

function Header() {
  return (
    <article className='w-full h-44 flex justify-center items-center overflow-hidden bg-VouwfietsHeader bg-center bg-cover md:h-72 lg:h-96'>
        <article className='absolute bg-black w-full h-44 opacity-25 md:h-72 lg:h-96'></article>
        <p className='absolute text-white text-6xl font-roboto md:text-8xl lg:text-9xl'>Vouwfiets.nl</p>
    </article>
  );
}

export default Header;