import React from 'react';
import { Search } from './Search';
import { List } from './List';

export const Main = () => {
  return (
    <main className='mt-3'>
      <Search />
      <div className='mt-4'>
        <List />
      </div>
    </main>
  );
};
