import React, { useContext, useState } from 'react';
import { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { DataContext } from '../Context';
import { Input } from './Input';
import { InputDate } from './InputDate';
import { InputDisplayOnly } from './InputDisplayOnly';

export const Modal = () => {
  const {
    showModal,
    setShowModal,
    setNewStudentData,
    modalTitle,
    dateRegEx,
    updateStudent,
    addNewStudent,
    defaultDatabase,
    currentSelectedUser,
    setInvalidInputData,
  } = useContext(DataContext);

  //. adding new student from input data
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
      setInvalidInputData(false);
      setNewStudentData((prev) => {
        return {
          ...prev,
          dateOfBirth: new Date(dateOfBirth).toISOString(),
        };
      });
    } else {
      setInvalidInputData(true);
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
                  You must re-enter all data, empty fields are not allowed and
                  date must be correctly formatted.
                </p>
                <div>
                  <div className='mt-4  flex flex-col gap-2  rounded-full '>
                    {modalTitle === 'Add Student' && (
                      <InputDisplayOnly
                        defaultValue={
                          defaultDatabase[defaultDatabase.length - 1].id + 1
                        }
                      />
                    )}
                    {modalTitle === 'Update Student' &&
                      currentSelectedUser.id && (
                        <InputDisplayOnly
                          defaultValue={currentSelectedUser.id}
                        />
                      )}
                    <Input
                      placeholder={
                        currentSelectedUser?.firstName || 'First Name'
                      }
                      onChange={(e) => setFirstName(e.target.value)}
                    />
                    <Input
                      placeholder={currentSelectedUser?.lastName || 'Last Name'}
                      onChange={(e) => setLastName(e.target.value)}
                    />
                    <InputDate
                      placeholder={
                        currentSelectedUser
                          ? currentSelectedUser.dateOfBirth + ' (dd/mm/yyyy)'
                          : 'dd/mm/yyyy'
                      }
                      onBlur={(e) => {
                        setDateOfBirth(e.target.value);
                      }}
                    />
                    <Input
                      placeholder={currentSelectedUser?.school || 'School'}
                      onChange={(e) => setSchool(e.target.value)}
                    />
                    <Input
                      placeholder={currentSelectedUser?.phone || 'Phone'}
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
