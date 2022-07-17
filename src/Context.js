import { createContext, React, useState, useEffect } from 'react';
import axios from 'axios';
export const DataContext = createContext({});

export const DataProvider = ({ children }) => {
  const [defaultDatabase, setDefaultDatabase] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [searchInput, setSearchInput] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [newStudentData, setNewStudentData] = useState({});
  const [modalTitle, setModalTitle] = useState({});
  const [updateStudentId, setUpdateStudentId] = useState();
  const [currentSelectedStudentID, setCurrentSelectedStudentID] = useState(0);
  const [showToast, setShowToast] = useState(false);

  //. sets user id of selected student currently being updated
  const setID = (id) => {
    setNewStudentData((prev) => {
      return {
        ...prev,
        id,
      };
    });
  };

  //. checks for dd/MM/yyyy
  const dateRegEx =
    /(^(((0[1-9]|1[0-9]|2[0-8])[\/](0[1-9]|1[012]))|((29|30|31)[\/](0[13578]|1[02]))|((29|30)[\/](0[4,6,9]|11)))[\/](19|[2-9][0-9])\d\d$)|(^29[\/]02[\/](19|[2-9][0-9])(00|04|08|12|16|20|24|28|32|36|40|44|48|52|56|60|64|68|72|76|80|84|88|92|96)$)/;

  const transformData = (array) => {
    const data = array.map((person) => {
      return {
        id: person.id,
        firstName: person.firstName,
        lastName: person.lastName,
        dateOfBirth: new Date(person.dateOfBirth).toDateString().slice(3),
        school: person.school,
        phoneNumber: person.phoneNumber,
      };
    });

    return data;
  };

  const fetchDatabase = async () => {
    const api = 'https://interview-practical.azurewebsites.net/api/contacts';

    try {
      const response = await axios(api);
      const data = response;

      if (data) {
        setDefaultDatabase(transformData(data.data));
      }

      setIsLoading(false);
    } catch (err) {
      console.error('FAILED TO FETCH DATABASE', err);
    }
  };

  useEffect(() => {
    setIsLoading(true);
    fetchDatabase();
  }, []);
  return (
    <DataContext.Provider
      value={{
        isLoading,
        setIsLoading,
        defaultDatabase,
        setDefaultDatabase,
        searchInput,
        setSearchInput,
        showModal,
        setShowModal,
        newStudentData,
        setNewStudentData,
        modalTitle,
        setModalTitle,
        updateStudentId,
        setUpdateStudentId,
        dateRegEx,
        currentSelectedStudentID,
        setCurrentSelectedStudentID,
        setID,
        fetchDatabase,
        transformData,
        showToast,
        setShowToast,
      }}>
      {children}
    </DataContext.Provider>
  );
};
