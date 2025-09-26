import React from 'react';
import { NavLink } from 'react-router';

const RightSideComponent = () => {
  return (
    <div className='drawer sm:drawer-open drawer-end w-44 lg:w-80 hidden sm:block'>
      <input id='my-drawer-4' type='checkbox' className='drawer-toggle' />
      <div className='drawer-content flex flex-col items-center justify-center'>
        {/* Page content here */}
        <label
          htmlFor='my-drawer-2'
          className='btn btn-primary drawer-button sm:hidden'
        >
          Open drawer
        </label>
      </div>
      <div className='drawer-side'>
        <label
          htmlFor='my-drawer-2'
          aria-label='close sidebar'
          className='drawer-overlay'
        ></label>
        <ul className='menu bg-sky-950 text-base-content min-h-full w-44 lg:w-80 p-4'>
          {/* Sidebar content here */}
          <li>
            <NavLink to='/'>Sidebar Item 1</NavLink>
          </li>
          <li>
            <NavLink to='/'>Sidebar Item 2</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default RightSideComponent;
