import React from 'react';

export const InputDisplayOnly = ({ placeholder, defaultValue, onBlur }) => {
  return (
    <div>
      <input
        type='text'
        disabled
        autoComplete='new-password'
        className='shadow-sm p-1 outline-none px-2 block w-full sm:text-sm  rounded-md truncate'
        placeholder={placeholder}
        defaultValue={defaultValue}
        onBlur={onBlur}
      />
    </div>
  );
};
