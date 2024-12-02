import React from 'react';

function BlockWhite(props) {
  return (
    <article className='w-full h-[350px] flex flex-col justify-around items-center border border-natural-400 lg:h-[480px]'>
        <p className='w-4/5  font-robotoMono text-xl text-center md:text-lg md:w-5/6 lg:text-2xl'>{props.tekst}</p>
        <a href={props.link} className='bg-white text-black border-black border-2 shadow-lg w-3/5 max-w-80 h-12 flex justify-center items-center text-2xl font-roboto hover:text-white hover:bg-black md:text-lg lg:text-2xl'>{props.button}</a>
    </article>
  );
}

export default BlockWhite;