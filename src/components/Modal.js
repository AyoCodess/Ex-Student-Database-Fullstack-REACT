import React, { useContext } from 'react';
import { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { DataContext } from '../Context';
import { Input } from './Input';
import { InputDisplayOnly } from './InputDisplayOnly';
import axios from 'axios';

export const Modal = () => {
  const {
    showModal,
    setShowModal,
    newStudentData,
    setNewStudentData,
    setDefaultDatabase,
    modalTitle,
    dateRegEx,
    currentSelectedStudentID,
    setID,
    fetchDatabase,
    showToast,
    setShowToast,
  } = useContext(DataContext);

  //. adding new student form input data
  const setFirstName = (firstName) => {
    setNewStudentData((prev) => {
      return {
        ...prev,
        firstName,
      };
    });
  };

  const setLastName = (lastName) => {
    setNewStudentData((prev) => {
      return {
        ...prev,
        lastName,
      };
    });
  };

  const setDateOfBirth = (dateOfBirth) => {
    if (dateRegEx.test(dateOfBirth)) {
      setNewStudentData((prev) => {
        return {
          ...prev,
          dateOfBirth: new Date(dateOfBirth).toISOString(),
        };
      });
    } else {
      console.error('ERROR ISSUE WITH DATE');
    }
  };

  const setSchool = (school) => {
    setNewStudentData((prev) => {
      return {
        ...prev,
        school,
      };
    });
  };

  const setPhoneNumber = (phoneNumber) => {
    setNewStudentData((prev) => {
      return {
        ...prev,
        phoneNumber,
      };
    });
  };

  //. adding new student to database
  const addNewStudent = () => {
    setID(0);
    setShowModal(false);
    const checkingForEmptyFields = () => {
      let arr = Object.values(newStudentData);

      if (arr.length < 6) {
        setShowToast(true);
        console.error('ONE OF THE ENTRIES IS EMPTY, CANNOT ADD NEW USER');
      } else {
        addStudentToDatabase();
      }
    };

    checkingForEmptyFields();
  };

  const addStudentToDatabase = async () => {
    // console.log('new student data', newStudentData);
    // const postApi =
    //   'https://interview-practical.azurewebsites.net/api/contacts';
    const postApi = 'https://localhost:3004/api/contacts';

    try {
      //   const response = await axios.put(postApi, newStudentData);
      const response = await axios.post(postApi, newStudentData);
      const { data } = response;

      if (response.statusText === 'OK') {
        setDefaultDatabase((prev) => {
          return [...prev, data];
        });
      }
    } catch (err) {
      console.error('FAILED TO POST NEW STUDENT TO DATABASE');
    }

    setNewStudentData({});
  };

  //. updating current student details on database
  const updateStudent = () => {
    setShowModal(false);

    const checkingForEmptyFields = () => {
      let arr = Object.values({ ...newStudentData, currentSelectedStudentID });
      if (arr.length < 6) {
        //- add alert modal here
        setShowToast(true);
        console.error('ONE OF THE ENTRIES IS EMPTY, CANNOT ADD NEW USER');
      } else {
        updateStudentInDatabase();
      }
    };

    checkingForEmptyFields();
    setNewStudentData({});
  };

  const updateStudentInDatabase = async () => {
    // console.log('new student data', newStudentData);
    try {
      const postApi =
        'https://interview-practical.azurewebsites.net/api/Contacts';

      const stringObj = JSON.stringify(newStudentData);

      //. having issues with axios put, so used fetch.
      const response = await fetch(postApi, {
        method: 'PUT',
        headers: {
          'Content-type': 'application/json',
        },
        body: stringObj,
      });

      if (response.statusText === 'OK') {
        fetchDatabase();
      }
    } catch (err) {
      console.error('FAILED TO UPDATE STUDENT DETAILS', err);
    }
  };

  return (
    <Transition.Root show={showModal} as={Fragment}>
      <Dialog as='div' className='relative z-10' onClose={setShowModal}>
        <Transition.Child
          as={Fragment}
          enter='ease-out duration-300'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='ease-in duration-200'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'>
          <div className='fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity' />
        </Transition.Child>

        <div className='fixed z-10 inset-0 overflow-y-auto'>
          <div className='flex items-center sm:items-center justify-center min-h-full p-4 text-center sm:p-0'>
            <Transition.Child
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
              enterTo='opacity-100 translate-y-0 sm:scale-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100 translate-y-0 sm:scale-100'
              leaveTo='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'>
              <Dialog.Panel className='relative bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:max-w-sm sm:w-2/3 sm:p-6'>
                <Dialog.Title
                  as='h2'
                  className='text-2xl leading-6 font-medium text-gray-900'>
                  {modalTitle}
                </Dialog.Title>
                <p className='my-2 text-sm'>
                  Empty fields are not allowed and date must be correctly
                  formatted.
                </p>
                <div>
                  <div className='mt-4  flex flex-col gap-2  rounded-full '>
                    {modalTitle === 'Add Student' && (
                      <InputDisplayOnly
                        defaultValue={0}
                        onBlur={() => setID()}
                      />
                    )}
                    {modalTitle === 'Update Student' &&
                      currentSelectedStudentID && (
                        <InputDisplayOnly
                          defaultValue={currentSelectedStudentID}
                          onBlur={() => setID()}
                        />
                      )}
                    <Input
                      placeholder={'First Name'}
                      onChange={(e) => setFirstName(e.target.value)}
                    />
                    <Input
                      placeholder={'Last Name'}
                      onChange={(e) => setLastName(e.target.value)}
                    />
                    <Input
                      placeholder={'dd/mm/yyyy'}
                      onBlur={(e) => {
                        setDateOfBirth(e.target.value);
                      }}
                    />
                    <Input
                      placeholder={'School'}
                      onChange={(e) => setSchool(e.target.value)}
                    />
                    <Input
                      placeholder={'Phone Number'}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                    />
                  </div>
                  <div className='mt-3 text-center sm:mt-5'></div>
                </div>
                <div className=' flex flex-col sm:flex-row gap-2 mt-5 sm:mt-6'>
                  {modalTitle === 'Add Student' && (
                    <button
                      type='button'
                      className='inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:text-sm'
                      onClick={() => {
                        addNewStudent();
                      }}>
                      Add Student
                    </button>
                  )}
                  {modalTitle === 'Update Student' && (
                    <button
                      type='button'
                      className='inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:text-sm'
                      onClick={() => {
                        updateStudent();
                      }}>
                      Update Student
                    </button>
                  )}
                  <button
                    type='button'
                    className='inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:text-sm'
                    onClick={() => {
                      setShowModal(false);
                      setNewStudentData({});
                    }}>
                    Cancel
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};
