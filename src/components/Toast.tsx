import React, { useContext, useEffect } from 'react';
import { Fragment } from 'react';
import { Transition } from '@headlessui/react';
import { XCircleIcon } from '@heroicons/react/outline';
import { XIcon } from '@heroicons/react/solid';
import { DataContext } from '../Context';

export const Toast = () => {
  const { showToast, setShowToast } = useContext(
    DataContext
  ) as DataContextType;

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (showToast === true) setShowToast(false);
    }, 8000);

    return () => clearTimeout(timeout);
  }, [showToast]);
  return (
    <>
      <div
        aria-live='assertive'
        className='fixed inset-0 flex items-end px-4 py-6 pointer-events-none sm:p-6 sm:items-start'>
        <div className='w-full flex flex-col items-center space-y-4 sm:items-end'>
          <Transition
            show={showToast}
            as={Fragment}
            enter='transform ease-out duration-300 transition'
            enterFrom='translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2'
            enterTo='translate-y-0 opacity-100 sm:translate-x-0'
            leave='transition ease-in duration-100'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'>
            <div className='max-w-sm w-full bg-white shadow-lg rounded-lg pointer-events-auto ring-1 ring-black ring-opacity-5 overflow-hidden'>
              <div className='p-4'>
                <div className='flex items-start'>
                  <div className='flex-shrink-0'>
                    <XCircleIcon
                      className='h-6 w-6 text-red-400'
                      aria-hidden='true'
                    />
                  </div>
                  <div className='ml-3 w-0 flex-1 pt-0.5'>
                    Some of the details where incorrect, Empty fields are not
                    allowed, and date must be correctly formatted.
                  </div>
                  <div className='ml-4 flex-shrink-0 flex'>
                    <button
                      type='button'
                      className='bg-white rounded-md inline-flex text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                      onClick={() => {
                        setShowToast(false);
                      }}>
                      <span className='sr-only'>Close</span>
                      <XIcon className='h-5 w-5' aria-hidden='true' />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Transition>
        </div>
      </div>
    </>
  );
};
