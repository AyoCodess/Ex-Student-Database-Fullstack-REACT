import React from 'react';

export const Input = ({ placeholder, onChange, onBlur, value }) => {
  return (
    <div>
      <input
        type='text'
        autoComplete='new-password'
        className='shadow-sm focus:ring-blue-500 focus:border-blue-500 p-1 px-2 block w-full sm:text-sm border border-gray-300 rounded-md truncate'
        placeholder={placeholder}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
      />
    </div>
  );
};
