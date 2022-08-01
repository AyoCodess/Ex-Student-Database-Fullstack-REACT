import React from 'react';
import { useContext } from 'react';
import { DataContext } from '../Context';

export const List = () => {
  const {
    defaultDatabase,
    setSearchInput,
    setShowModal,
    setModalTitle,
    apiRequest,
    setCurrentSelectedUser,
    setInvalidInputData,
    setModalDescription,
    setResetDatabase,
  } = useContext(DataContext) as DataContextType;

  return (
    <>
      {defaultDatabase && (
        <div>
          <div className='sm:flex sm:items-center'>
            <div className='sm:flex-auto'>
              <p className='mt-2 text-sm text-gray-700'>
                A list of all the students in your region.
              </p>
            </div>
            <div className=' flex gap-2 mt-4 sm:mt-0 sm:ml-16 sm:flex-none'>
              <button
                type='button'
                onClick={() => {
                  setShowModal(true);
                  setCurrentSelectedUser(null);
                  setInvalidInputData(false);
                  setModalTitle('Add Student');
                  setModalDescription(
                    'You must re-enter all data, empty fields are not allowed and date must be correctly formatted.'
                  );
                }}
                className='inline-flex items-center justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 sm:w-auto'>
                Add student
              </button>
              <button
                type='button'
                onClick={() => {
                  apiRequest('GET');
                  setSearchInput('');
                }}
                className='inline-flex items-center justify-center rounded-md border border-transparent bg-blue-700 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 sm:w-auto'>
                Refresh
              </button>
              <button
                type='button'
                onClick={() => {
                  setShowModal(true);
                  setModalTitle('Reset Database');
                  setModalDescription(
                    'Are you sure you want to reset the data, you will loose all your custom data'
                  );
                  setResetDatabase(true);
                }}
                className='inline-flex items-center justify-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 sm:w-auto'>
                Reset Database
              </button>
            </div>
          </div>
          <div className='-mx-4 mt-4 overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:-mx-6 md:mx-0 md:rounded-lg'>
            <table className='min-w-full divide-y divide-gray-300'>
              <thead className='bg-gray-50'>
                <tr>
                  <th
                    scope='col'
                    className='py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6'>
                    Name
                  </th>
                  <th
                    scope='col'
                    className='px-3 py-3.5 text-left text-sm font-semibold text-gray-900 sm:pl-6'>
                    School
                  </th>
                  <th
                    scope='col'
                    className='hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 md:table-cell'>
                    Phone Number
                  </th>
                  <th
                    scope='col'
                    className='hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 md:table-cell'>
                    Date of Birth
                  </th>
                  <th
                    scope='col'
                    className='hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 md:table-cell'>
                    ID
                  </th>
                  <th scope='col' className='relative py-3.5 pl-3 pr-4 sm:pr-6'>
                    <span className='sr-only'>Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody className='divide-y divide-gray-200 bg-white'>
                {defaultDatabase
                  .sort((a, b) => a.id - b.id)
                  .map((person) => (
                    <tr key={person.id}>
                      <td className='w-full max-w-0 py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:w-auto sm:max-w-none sm:pl-6'>
                        {person.firstName} {person.lastName}
                        <dl className='font-normal lg:hidden'>
                          <dt className='sr-only'>Date of Birth</dt>
                          <dd className='mt-1 truncate text-gray-700'>
                            {person.dateOfBirth}
                          </dd>
                          <dt className='sr-only sm:hidden'>Phone Number</dt>
                          <dd className='mt-1 truncate text-gray-500 md:hidden'>
                            {person.phoneNumber}
                          </dd>
                          <dt className='sr-only :hidden'>ID</dt>
                          <dd className='mt-1 truncate text-gray-500 md:hidden'>
                            ID: {person.id}
                          </dd>
                        </dl>
                      </td>
                      <td className='px-3 py-4 text-sm text-gray-500'>
                        {person.school}
                      </td>
                      <td className='hidden px-3 py-4 text-sm text-gray-500 md:table-cell'>
                        {person.phoneNumber}
                      </td>
                      <td className='hidden px-3 py-4 text-sm text-gray-500 md:table-cell'>
                        {person.dateOfBirth}
                      </td>
                      <td className='hidden px-3 py-4 text-sm text-gray-500 md:table-cell'>
                        {person.id}
                      </td>

                      <td className=' py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6'>
                        <div
                          onClick={() => {
                            setShowModal(true);
                            setInvalidInputData(false);
                            setModalTitle('Update Student');
                            setModalDescription(
                              'You must re-enter all data, empty fields are not allowed and date must be correctly formatted.'
                            );
                            setCurrentSelectedUser(person);
                          }}
                          className='text-blue-600 hover:text-blue-900'>
                          Edit<span className='sr-only'>, {person.name}</span>
                        </div>
                        <div
                          onClick={() =>
                            apiRequest(
                              'DELETE',
                              undefined,
                              undefined,
                              undefined,
                              person.id
                            )
                          }
                          className='text-red-600 hover:text-red-900 mt-2 '>
                          Delete<span className='sr-only'>, {person.name}</span>
                        </div>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </>
  );
};
