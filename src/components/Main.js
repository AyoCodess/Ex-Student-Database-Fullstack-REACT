import React from 'react';
import { Search } from './Search';
import { List } from './List';

export const Main = () => {
  return (
    <main className='mt-3'>
      <Search />
      <div className='mt-4'>
        <div className='px-2 sm:px-6 lg:px-8'>
          <List />
        </div>
      </div>
    </main>
  );
};
