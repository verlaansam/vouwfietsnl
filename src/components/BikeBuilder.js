import React from 'react';

function BikeBuilder(props) {

  return (
    <article className='w-full h-[1000px] bg-neutral-500 relative'>
       <img  className='w-full' src={props.photo} alt='Aline lifestyle'></img>
    </article>
  );
}

export default BikeBuilder;