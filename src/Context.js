import { createContext, React, useState, useEffect } from 'react';
import axios from 'axios';
export const DataContext = createContext({});

export const DataProvider = ({ children }) => {
  const [defaultDatabase, setDefaultDatabase] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isApiAlive, setIsApiAlive] = useState();
  const [searchInput, setSearchInput] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [newStudentData, setNewStudentData] = useState({});
  const [modalTitle, setModalTitle] = useState({});
  const [modalDescription, setModalDescription] = useState();
  const [currentSelectedUser, setCurrentSelectedUser] = useState();
  const [showToast, setShowToast] = useState(false);
  const [invalidInputData, setInvalidInputData] = useState(false);
  const [resetDatabase, setResetDatabase] = useState(false);

  //. checks for dd/MM/yyyy
  const dateRegEx =
    /(^(((0[1-9]|1[0-9]|2[0-8])[\/](0[1-9]|1[012]))|((29|30|31)[\/](0[13578]|1[02]))|((29|30)[\/](0[4,6,9]|11)))[\/](19|[2-9][0-9])\d\d$)|(^29[\/]02[\/](19|[2-9][0-9])(00|04|08|12|16|20|24|28|32|36|40|44|48|52|56|60|64|68|72|76|80|84|88|92|96)$)/;

  const apiUrl = 'https://ayocodes-api.up.railway.app/api/contacts';

  //= testing
  //   const apiUrl = 'http://localhost:3004/api/contacts';

  const transformData = (array) => {
    const data = array.map((person) => {
      return {
        ...person,
        dateOfBirth: new Date(person.dateOfBirth).toDateString().slice(3),
      };
    });

    return data;
  };

  //. ADDING new student to database
  const addNewStudent = () => {
    setShowModal(false);
    const checkingForEmptyFields = () => {
      let arr = Object.values(newStudentData);

      if (arr.length < 5) {
        setShowToast(true);
        console.error('ONE OF THE ENTRIES IS EMPTY, CANNOT ADD NEW USER');
      } else {
        apiRequest('POST', undefined, undefined, undefined, undefined, {
          id: defaultDatabase[defaultDatabase.length - 1].id + 1,
          ...newStudentData,
        });
      }
    };

    checkingForEmptyFields();
  };

  //. UPDATING current student details on database
  const updateStudent = () => {
    setShowModal(false);
    const checkingForEmptyFields = () => {
      let arr = Object.values({ ...newStudentData, currentSelectedUser });
      if (arr.length < 6) {
        //- add alert modal here
        setShowToast(true);
        console.error('ONE OF THE ENTRIES IS EMPTY, CANNOT ADD NEW USER');
      } else {
        apiRequest(
          'PUT',
          undefined,
          undefined,
          undefined,
          currentSelectedUser.id
        );
      }
    };
    checkingForEmptyFields();
    setNewStudentData({});
  };

  //. UNIVERSAL FETCH FUNCTION
  const apiRequest = async (
    method,
    apiRoute = apiUrl,
    setData = setDefaultDatabase,
    setError = setIsApiAlive,
    id = 0,
    obj = newStudentData,
    type
  ) => {
    setError(false);
    let response;

    //. LOAD DATABASE
    if (method === 'GET') {
      try {
        response = await axios.get(apiRoute);

        const { data } = response;

        if (data) {
          setData(transformData(data));
        }
        setIsLoading(false);
      } catch (err) {
        setError(true);
        setIsLoading(false);
        console.error('FAILED TO FETCH DATABASE', err);
      }
    }

    //.CREATE NEW CONTACT
    if (method === 'POST') {
      try {
        response = await axios.post(apiRoute, obj);
        const { data } = response;

        if (response.status === 200) {
          setData(transformData(data));
        }
        setIsLoading(false);
      } catch (err) {
        setIsLoading(false);
        setError(true);
        console.error('FAILED TO POST NEW STUDENT TO DATABASE');
      }
    }

    //. UPDATE CONTACT
    try {
      if (method === 'PUT') {
        console.log(id);

        const response = await fetch(`${apiUrl}/update/${id}`, {
          method: 'PUT',
          headers: {
            'Content-type': 'application/json',
          },
          body: JSON.stringify({ id: currentSelectedUser.id, ...obj }),
        });

        const data = await response.json();

        console.log({ data });

        if (response.status === 200) {
          setData(transformData(data));
        }
      }
    } catch (err) {
      setIsLoading(false);
      setError(true);
      console.error('FAILED TO UPDATE STUDENT DETAILS', err);
    }

    //. DELETE CONTACT
    try {
      if (method === 'DELETE') {
        response = await axios.delete(`${apiRoute}/${id}`);

        const { data } = response;

        console.log(data);

        console.log('res', response);

        if (response.status === 200) {
          setData(transformData(data));
        }
      }
      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
      setError(true);
      console.error('FAILED TO DELETE STUDENT', err);
    }

    //. RESET DATABASE TO ORIGINAL STATE
    if (method === 'GET' && type === 'RESET') {
      try {
        setIsLoading(true);
        response = await axios.get(`${apiRoute}/reset`);
        const { data } = response;

        if (response.status === 200) {
          setData(transformData(data));
        }
        setIsLoading(false);
      } catch (err) {
        setIsLoading(false);
        setError(true);
        console.error('FAILED TO POST NEW STUDENT TO DATABASE');
      }
    }
  };

  useEffect(() => {
    setIsLoading(true);
    apiRequest('GET', apiUrl);
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
        dateRegEx,
        transformData,
        showToast,
        setShowToast,
        isApiAlive,
        setIsApiAlive,
        addNewStudent,
        apiRequest,
        updateStudent,
        currentSelectedUser,
        setCurrentSelectedUser,
        invalidInputData,
        setInvalidInputData,
        modalDescription,
        setModalDescription,
        resetDatabase,
        setResetDatabase,
      }}>
      {children}
    </DataContext.Provider>
  );
};
