import React from 'react';


function Footer() {
  return (
    <article className='w-full h-22'>
      <section className='h-22 grid grid-cols-2 bg-black'>
        <p className=' font-robotoMono text-lg text-white bg-black flex flex-col justify-center ml-4'>
            <a className='hover:border-b hover:border-white' href='https://www.vouwfiets.nl'>vouwfiets.nl</a>
            <a className='hover:border-b hover:border-white' href='https://www.tromm.nl'>Tromm.nl</a>
            <a className='hover:border-b hover:border-white' href='https://trompton.nl'>Trompton.nl</a>
        </p>
        <p className='font-robotoMono text-lg text-white bg-black col-end-4 flex items-center mr-4'>
          <a className='hover:border-b hover:border-white' href='https://www.tromm.nl/contact-opnemen'>contact</a>
        </p>
      </section>
      <section className='flex justify-center'>
        <a className='font-robotoMono text-xl' href='http://www.detechboot.nl'>Made By Techboot</a>
      </section>
    </article>
  );
}

export default Footer;