import React from 'react';

// | React-Icon Import

import { SlCalender } from 'react-icons/sl';
import { IoGameController } from 'react-icons/io5';
import { GrGallery } from 'react-icons/gr';
import { BiSolidVideos } from 'react-icons/bi';
import { TbMessage } from 'react-icons/tb';

// & LeftSection 2 Component
const LeftSection_2_Component = () => {
  // ^ LeftSection 2 Component Render
  return (
    <div className='flex flex-row md:flex-col hidden md:block'>
      <p className='text-base font-semibold mb-3 hidden md:block'>
        Your Shortcuts
      </p>
      <div className='flex items-center gap-2 mb-0 md:mb-3'>
        <div className='w-8'>
          <SlCalender className='text-sky-500 text-2xl' />
        </div>
        <p className='text-base hidden md:block'>Events</p>
      </div>
      <div className='flex items-center gap-2 mb-0 md:mb-3'>
        <div className='w-8'>
          <IoGameController className='text-sky-500 text-2xl' />
        </div>
        <p className='text-base hidden md:block'>Gaming</p>
      </div>
      <div className='flex items-center gap-2 mb-0 md:mb-3'>
        <div className='w-8'>
          <GrGallery className='text-sky-500 text-2xl' />
        </div>
        <p className='text-base hidden md:block'>Gallery</p>
      </div>
      <div className='flex items-center gap-2 mb-0 md:mb-3'>
        <div className='w-8'>
          <BiSolidVideos className='text-blue-500 text-2xl' />
        </div>
        <p className='text-base hidden md:block'>Videos</p>
      </div>
      <div className='flex items-center gap-2 mb-0 md:mb-3'>
        <div className='w-8'>
          <TbMessage className='text-blue-500 text-2xl' />
        </div>

        <p className='text-base hidden md:block'>Messages</p>
      </div>
    </div>
  );
};

export default LeftSection_2_Component;
