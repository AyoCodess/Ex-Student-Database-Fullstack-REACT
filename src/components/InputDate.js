import React, { useContext } from 'react';
import { DataContext } from '../Context';

export const InputDate = ({ placeholder, onChange, onBlur, value }) => {
  const { invalidInputData } = useContext(DataContext);
  return (
    <div>
      <input
        type='text'
        autoComplete='new-password'
        className={
          !invalidInputData
            ? `shadow-sm focus:ring-blue-500 focus:border-blue-500 p-1 px-2 block w-full sm:text-sm border border-gray-300 rounded-md truncate`
            : `shadow-sm focus:ring-red-500 focus:border-red-500 p-1 px-2 block w-full sm:text-sm border border-red-500 rounded-md truncate`
        }
        placeholder={placeholder}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
      />
    </div>
  );
};
