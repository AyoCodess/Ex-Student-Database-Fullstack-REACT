import React from 'react';
import { Banner } from './Banner';
import { Logo } from './Logo';

export const Header = () => {
  return (
    <header className='flex justify-between'>
      <>
        <Banner />
        <Logo />
      </>
    </header>
  );
};
