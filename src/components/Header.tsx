import React from 'react';
import { Banner } from './Banner';
import { Logo } from './Logo';

export const Header = () => {
  return (
    <header className="sm:mx-10 mx-1">
      <>
        <div className="flex justify-between items-center mt-2">
          <h1 className="text-2xl">
            <span className="font-extrabold">South Region</span> Ex-Student
            Database
          </h1>
          <div className="flex gap-6 items-center ml-2">
            <a
              href="https://api-for-personal-projects.vercel.app/"
              target="_blank"
              rel="noopener"
              className=" w-13 text-center inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:text-sm"
            >
              View API
            </a>
            <Logo />
          </div>
        </div>
        <div className="mt-2">{/* <Banner /> */}</div>
        <hr className="mt-2 mx-auto" />
      </>
    </header>
  );
};
