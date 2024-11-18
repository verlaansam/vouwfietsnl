import React from 'react';

function Block(props) {
  return (
    <article className='w-1/3 h-[550px] flex flex-col justify-around items-center border border-natural-400'>
        <p className=' w-4/5 max-w-72 font-robotoMono text-2xl text-center'>{props.tekst}</p>
        <a href={props.link} className='bg-black text-white shadow-lg w-4/5 max-w-80 h-20 flex justify-center items-center text-4xl font-roboto hover:bg-white hover:text-black hover:border-2 hover:border-black'>{props.button}</a>
    </article>
  );
}

export default Block;