import React from 'react';
import { NavLink } from 'react-router';

// | Import React-Icon
import { TiHomeOutline } from 'react-icons/ti';
import { TbBrandBlogger } from 'react-icons/tb';
import { IoGridOutline } from 'react-icons/io5';
import {
  MdOutlineDarkMode,
  MdOutlineNotificationsNone,
  MdOutlineLightMode,
} from 'react-icons/md';
import { AiOutlineSearch, AiOutlineMail } from 'react-icons/ai';
import { FaRegCircleUser } from 'react-icons/fa6';

// & Navbar Component
const NavbarComponent = () => {
  // ^ Navbar Render
  return (
    <div className='navbar bg-sky-950 shadow-lg border-b border-b-sky-700 mb-3'>
      <div className='navbar-start'>
        <div className='dropdown'>
          <button
            tabIndex={0}
            type='button'
            className='btn btn-ghost lg:hidden'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-5 w-5'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              {' '}
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M4 6h16M4 12h8m-8 6h16'
              />{' '}
            </svg>
          </button>
          <ul className='menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 items-center p-2 shadow'>
            <li>
              <NavLink to='/'>
                <TiHomeOutline />
              </NavLink>
            </li>
            <li>
              <NavLink to='/blog'>
                <TbBrandBlogger />
              </NavLink>
            </li>
            <li>
              <NavLink to='/blog'>
                <IoGridOutline />
              </NavLink>
            </li>
            <li>
              <NavLink to='/blog'>
                <MdOutlineDarkMode />
              </NavLink>
            </li>
            <li>
              <NavLink to='/blog'>
                <MdOutlineLightMode />
              </NavLink>
            </li>
          </ul>
        </div>
        <NavLink className='btn btn-ghost text-xl'>Friendship</NavLink>
      </div>
      <div className='navbar-center hidden lg:flex'>
        <ul className='menu menu-horizontal px-1'>
          <li>
            <NavLink to='/'>
              <TiHomeOutline />
            </NavLink>
          </li>
          <li>
            <NavLink to='/blog'>
              <TbBrandBlogger />
            </NavLink>
          </li>
          <li>
            <NavLink to='/blog'>
              <IoGridOutline />
            </NavLink>
          </li>
          <li>
            <NavLink to='/blog'>
              <MdOutlineDarkMode />
            </NavLink>
          </li>
          <li>
            <NavLink to='/blog'>
              <MdOutlineLightMode />
            </NavLink>
          </li>
          <div className='flex items-center'>
            <input
              type='text'
              placeholder='Search...'
              className='input input-bordered w-96 max-w-xs'
            />
            <AiOutlineSearch className='text-4xl ml-3' />
          </div>
        </ul>
      </div>
      <div className='navbar-end'>
        <div className='flex justify-center items-center gap-2'>
          <FaRegCircleUser className='text-2xl mx-3' />
          <AiOutlineMail className='text-2xl mr-3' />
          <MdOutlineNotificationsNone className='text-2xl mr-3' />
          <div className='dropdown dropdown-end'>
            <button
              type='button'
              tabIndex={0}
              className='btn btn-ghost btn-circle avatar'
            >
              <div className='w-10 rounded-full'>
                <img
                  alt='Tailwind CSS Navbar component'
                  src='https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp'
                />
              </div>
            </button>

            <ul className='menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow'>
              <li>
                <NavLink to='/profile' className='justify-between'>
                  <span>
                    Profile <span className='badge'>New</span>
                  </span>
                </NavLink>
              </li>
              <li>
                <NavLink to='/settings'>Settings</NavLink>
              </li>
              <li>
                <NavLink>Logout</NavLink>
              </li>
            </ul>
          </div>
          <p className='text-lg'>User Name</p>
        </div>
      </div>
    </div>
  );
};

export default NavbarComponent;
