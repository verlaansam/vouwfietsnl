import React from 'react';


function Footer() {
  return (
    <article className='w-full h-36'>
        <p className='h-24 font-robotoMono text-lg text-white bg-black'>
            <a className='m-4 hover:border-b hover:border-white' href='vouwfiets.nl'>vouwfiets.nl</a>|
            <a className='m-4 hover:border-b hover:border-white' href='tromm.nl'>Tromm.nl</a>|
            <a className='m-4 hover:border-b hover:border-white' href='trompton.nl'>Trompton.nl</a>
        </p>
    </article>
  );
}

export default Footer;