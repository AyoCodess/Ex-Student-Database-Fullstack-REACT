import React from 'react';
import { Banner } from './Banner';
import { Logo } from './Logo';

export const Header = () => {
  return (
    <header>
      <>
        <div className='flex justify-between items-center mt-2'>
          <h1 className='text-center text-2xl'>School Manager App</h1>
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
