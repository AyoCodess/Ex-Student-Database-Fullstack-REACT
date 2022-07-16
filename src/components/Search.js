import React from 'react';

export const Search = () => {
  return (
    <div>
      <input
        type='text'
        className='shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2 block w-full sm:text-sm border border-gray-300 rounded-md truncate'
        placeholder='Search by Name, Phone and DOB'
      />
    </div>
  );
};
