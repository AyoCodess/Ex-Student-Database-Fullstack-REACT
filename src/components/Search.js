import { data } from 'autoprefixer';
import React, { useContext } from 'react';
import { DataContext } from '../Context';

export const Search = () => {
  const {
    database,
    setDatabase,
    defaultDatabase,
    setDefaultDatabase,
    searchInput,
    setSearchInput,
  } = useContext(DataContext);

  const handleSearch = (searchTerm) => {
    const filtered = defaultDatabase.filter((student) => {
      return Object.values(student).some((value) => {
        return String(value).toUpperCase().includes(searchTerm.toUpperCase());
      });
    });

    console.log('res', filtered);
    setDefaultDatabase(filtered);
  };

  return (
    <div>
      <input
        type='text'
        className='shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2 block w-full sm:text-sm border border-gray-300 rounded-md truncate'
        placeholder='Search by Name, Phone and DOB'
        value={searchInput}
        onChange={(e) => {
          setSearchInput(e.target.value);
          handleSearch(e.target.value);
        }}
      />
    </div>
  );
};
