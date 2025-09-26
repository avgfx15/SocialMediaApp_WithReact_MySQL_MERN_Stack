import React from 'react';
import { Outlet } from 'react-router';
import NavbarComponent from './NavbarComponent';
import LeftSideComponent from './LeftSideComponent';
import RightSideComponent from './RightSideComponent';

const LayoutComponent = () => {
  return (
    <div className='w-full h-screen bg-sky-500 flex flex-col items-center'>
      <NavbarComponent />
      <div className='h-screen flex flex-col sm:flex-row justify-around items-center w-full mx-auto'>
        <LeftSideComponent />
        <Outlet />
        <RightSideComponent />
      </div>
    </div>
  );
};

export default LayoutComponent;
