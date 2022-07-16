import React from 'react';

export const Input = () => {
  return (
    <div>
      <input
        className='shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md'
        placeholder='you@example.com'
      />
    </div>
  );
};
