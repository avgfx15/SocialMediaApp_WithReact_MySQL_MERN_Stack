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
    <div className='border-b border-base-500 mb-3'>
      <div className='flex items-center gap-2 mb-3'>
        <img
          alt='Tailwind CSS Navbar component'
          src='https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp'
          className='w-8 h-8 rounded-full'
        />
        <p className='text-base'>User Name</p>
      </div>
      <div className='flex items-center gap-2 mb-3'>
        <img
          alt='Tailwind CSS Navbar component'
          src={friends}
          className='w-8 h-8 rounded-full bg-white'
        />
        <p className='text-base'>Friends</p>
      </div>
      <div className='flex items-center gap-2 mb-3'>
        <img
          alt='Tailwind CSS Navbar component'
          src={groups}
          className='w-8 h-8 rounded-full'
        />
        <p className='text-base'>Groups</p>
      </div>
      <div className='flex items-center gap-2 mb-3'>
        <div className='w-8 h-8 object-cover object-center rounded-full bg-white p-2'>
          <FaStore className='text-blue-500 text-xl' />
        </div>
        <p className='text-base'>Marketplace</p>
      </div>
      <div className='flex items-center gap-2 mb-3'>
        <div className='w-8 h-8 object-cover object-center rounded-full bg-white p-1'>
          <MdOndemandVideo className='text-blue-500 text-2xl' />
        </div>

        <p className='text-base'>Watch</p>
      </div>
      <div className='flex items-center gap-2 mb-3'>
        <div className='w-8 h-8 object-cover object-center rounded-full bg-white p-1'>
          <BsStopwatch className='text-blue-500 text-2xl' />
        </div>
        <p className='text-base'>Memories</p>
      </div>
    </div>
  );
};

export default LeftSection_1_Component;
