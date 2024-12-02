import React from 'react';


function Footer() {
  return (
    <article className='w-full h-22'>
      <section className='h-22 grid grid-cols-2 bg-black'>
        <p className=' font-robotoMono text-lg text-white bg-black flex flex-col justify-center ml-4'>
            <a className='hover:border-b hover:border-white' href='vouwfiets.nl'>vouwfiets.nl</a>
            <a className='hover:border-b hover:border-white' href='tromm.nl'>Tromm.nl</a>
            <a className='hover:border-b hover:border-white' href='trompton.nl'>Trompton.nl</a>
        </p>
        <p className='font-robotoMono text-lg text-white bg-black col-end-4 flex items-center mr-4'>
          <a className='hover:border-b hover:border-white' href='tromm.nl'>contact</a>
        </p>
      </section>
      <section className='flex justify-center'>
        <p className='font-robotoMono text-xl'>Made By Techboot</p>
      </section>
    </article>
  );
}

export default Footer;