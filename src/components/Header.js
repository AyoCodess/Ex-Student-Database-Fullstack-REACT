import React from 'react';
import { Banner } from './Banner';
import { Logo } from './Logo';

export const Header = () => {
  return (
    <header className='sm:mx-10 mx-1'>
      <>
        <div className='flex justify-between items-center mt-2'>
          <h1 className='text-2xl'>
            <span className='font-extrabold'>South Region</span> Ex-Student
            Database
          </h1>
          <Logo />
        </div>
        <div className='mt-2'>
          <Banner />
        </div>
        <hr className='mt-2 mx-auto' />
      </>
    </header>
  );
};
