import React, { useContext } from 'react';
import { DataContext } from '../Context';

export const Search = () => {
  const { defaultDatabase, setDefaultDatabase, searchInput, setSearchInput } =
    useContext(DataContext);

  const handleSearch = (searchTerm) => {
    setSearchInput(searchTerm);
    const filtered = defaultDatabase.filter((student) => {
      return Object.values(student).some((value) => {
        return String(value).toUpperCase().includes(searchTerm.toUpperCase());
      });
    });

    setDefaultDatabase(filtered);
  };

  return (
    <div className='flex justify-center gap-5'>
      {defaultDatabase && (
        <div className=' hidden sm:inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'>
          {defaultDatabase.length} Contacts
        </div>
      )}

      <input
        data-cy='search'
        type='text'
        className='shadow-sm sm:w-2/3  focus:ring-blue-500 focus:border-blue-500 p-2 block w-full sm:text-sm border border-gray-300 rounded-md truncate'
        placeholder='Search by Name, School, Phone and DOB'
        value={searchInput}
        onChange={(e) => {
          handleSearch(e.target.value);
        }}
      />
    </div>
  );
};
