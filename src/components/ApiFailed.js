import React from 'react';
import Logo from '../assets/images/logo.jpeg';

export const ApiFailed = () => {
  return (
    <div className='flex flex-col gap-2 h-screen max-w-7xl my-auto items-center justify-center'>
      <img src={Logo} alt='app logo' className='w-24 h-24' />
      <p className='text-xl p-2 text-center '>
        Sorry for the inconvenience, There is a problem with our API please
        contact support at ayo@ayoadesanya.com. Thank you.
      </p>
    </div>
  );
};
