import React from 'react';

export const Wrapper = ({ children }) => {
  return (
    <div className='flex flex-col h-screen p-2 max-w-7xl mx-auto'>
      {children}
    </div>
  );
};
