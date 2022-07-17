import React from 'react';
// eslint-disable-next-line no-unused-vars
import { Pagination } from './Pagination';
import { SocialIcon } from 'react-social-icons';

export const Footer = () => {
  return (
    <footer className='mt-auto'>
      {/* //. on the todo list */}
      {/* <Pagination /> */}
      <div className='p-4  text-center text-gray-500'>
        Created by Ayo Adesanya
      </div>
      <div className='flex gap-2 justify-center'>
        <SocialIcon url='https://www.linkedin.com/in/ayoadesanya/' />
        <SocialIcon url='https://github.com/AyoCodess' />
        <SocialIcon url='https://www.ayoadesanya.com/' />
      </div>
    </footer>
  );
};
