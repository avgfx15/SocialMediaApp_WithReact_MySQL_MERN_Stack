import React from 'react';

// | React-Icon Import
import { FaStore } from 'react-icons/fa6';
import { BsStopwatch } from 'react-icons/bs';
import { MdOndemandVideo } from 'react-icons/md';

// & LeftSection 1 Component
const LeftSection_1_Component = () => {
  // | Import Images
  const friends = './Images/friends.png';
  const groups = './Images/group.png';

  // ^ LeftSection 1 Component Render
  return (
    <div className='flex flex-row md:flex-col md:justify-center md:items-start'>
      <div className='flex items-center gap-2 mb-0 md:mb-3'>
        <img
          alt='Tailwind CSS Navbar component'
          src='https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp'
          className='w-8 h-8 rounded-full'
        />
        <p className='text-base hidden md:block'>User Name</p>
      </div>
      <div className='flex items-center gap-2 mb-0 md:mb-3'>
        <img
          alt='Tailwind CSS Navbar component'
          src={friends}
          className='w-8 h-8 rounded-full bg-white'
        />
        <p className='text-base hidden md:block'>Friends</p>
      </div>
      <div className='flex items-center gap-2 mb-0 md:mb-3'>
        <img
          alt='Tailwind CSS Navbar component'
          src={groups}
          className='w-8 h-8 rounded-full'
        />
        <p className='text-base hidden md:block'>Groups</p>
      </div>
      <div className='flex items-center gap-2 mb-0 md:mb-3'>
        <div className='w-8 h-8 object-cover object-center rounded-full bg-white p-2'>
          <FaStore className='text-blue-500 text-xl' />
        </div>
        <p className='text-base hidden md:block'>Marketplace</p>
      </div>
      <div className='flex items-center gap-2 mb-0 md:mb-3'>
        <div className='w-8 h-8 object-cover object-center rounded-full bg-white p-1'>
          <MdOndemandVideo className='text-blue-500 text-2xl' />
        </div>

        <p className='text-base hidden md:block'>Watch</p>
      </div>
      <div className='flex items-center gap-2 mb-0 md:mb-3'>
        <div className='w-8 h-8 object-cover object-center rounded-full bg-white p-1'>
          <BsStopwatch className='text-blue-500 text-2xl' />
        </div>
        <p className='text-base hidden md:block'>Memories</p>
      </div>
    </div>
  );
};

export default LeftSection_1_Component;
