import React from 'react';
import { Circles } from 'react-loader-spinner';

export const LoadingSpinner = () => {
  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      <Circles ariaLabel='loading-indicator' color='blue' />
    </div>
  );
};
