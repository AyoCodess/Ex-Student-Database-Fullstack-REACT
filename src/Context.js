import { createContext, React, useState, useEffect } from 'react';
import axios from 'axios';
export const DataContext = createContext({});

export const DataProvider = ({ children }) => {
  const [database, setDatabase] = useState(null);
  const [defaultDatabase, setDefaultDatabase] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [searchInput, setSearchInput] = useState('');
  const [showModal, setShowModal] = useState(false);

  console.log(showModal);

  useEffect(() => {
    setIsLoading(true);
    const fetchDatabase = async () => {
      const api = 'https://interview-practical.azurewebsites.net/api/contacts';

      try {
        const response = await axios(api);
        const data = response;

        const transformData = data.data.map((person) => {
          return {
            id: person.id,
            firstName: person.firstName,
            lastName: person.lastName,
            dateOfBirth: new Date(person.dateOfBirth).toDateString().slice(3),
            school: person.school,
            phoneNumber: person.phoneNumber,
          };
        });

        setDatabase(transformData);
        setDefaultDatabase(transformData);

        setIsLoading(false);
      } catch (err) {
        console.error('FAILED TO FETCH DATABASE', err);
      }
    };

    fetchDatabase();
  }, []);
  return (
    <DataContext.Provider
      value={{
        isLoading,
        setIsLoading,
        database,
        setDatabase,
        defaultDatabase,
        setDefaultDatabase,
        searchInput,
        setSearchInput,
        showModal,
        setShowModal,
      }}>
      {children}
    </DataContext.Provider>
  );
};
