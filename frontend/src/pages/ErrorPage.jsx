import React from 'react';
import { NavLink } from 'react-router';

const ErrorPage = () => {
  return (
    <div className='w-full h-screen flex flex-col justify-center items-center'>
      <figure className='w-[60%] h-70%] overflow-hidden'>
        <img
          src='./Images/loginPage.png'
          alt='Album'
          className='w-full object-cover h-full rounded-4xl'
        />
      </figure>
      <div className='my-3'>
        <NavLink to='/'>
          <button className='btn btn-primary mr-3'>Go To Home</button>
        </NavLink>
        <NavLink to='/'>
          <button className='btn btn-accent'>Go Back</button>
        </NavLink>
      </div>
    </div>
  );
};

export default ErrorPage;
