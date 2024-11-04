import React from 'react';

function Header() {
  return (
    <article className='w-full h-96 flex justify-center items-center overflow-hidden bg-VouwfietsHeader bg-center bg-cover'>
        <article className='absolute bg-black w-full h-96 opacity-25'></article>
        <p className='absolute text-white text-9xl font-roboto'>Vouwfiets.nl</p>
    </article>
  );
}

export default Header;