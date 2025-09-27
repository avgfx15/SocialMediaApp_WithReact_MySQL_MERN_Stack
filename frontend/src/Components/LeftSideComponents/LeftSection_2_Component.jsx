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
    <div className='border-b border-base-500 mb-3'>
      <p className='text-base font-semibold mb-3'>Your Shortcuts</p>
      <div className='flex items-center gap-2 mb-3'>
        <div className='w-8 h-8'>
          <SlCalender className='text-sky-500 text-2xl' />
        </div>
        <p className='text-base'>Events</p>
      </div>
      <div className='flex items-center gap-2 mb-3'>
        <div className='w-8 h-8'>
          <IoGameController className='text-sky-500 text-2xl' />
        </div>
        <p className='text-base'>Gaming</p>
      </div>
      <div className='flex items-center gap-2 mb-3'>
        <div className='w-8 h-8'>
          <GrGallery className='text-sky-500 text-2xl' />
        </div>
        <p className='text-base'>Gallery</p>
      </div>
      <div className='flex items-center gap-2 mb-3'>
        <div className='w-8 h-8'>
          <BiSolidVideos className='text-blue-500 text-2xl' />
        </div>
        <p className='text-base'>Videos</p>
      </div>
      <div className='flex items-center gap-2 mb-3'>
        <div className='w-8 h-8'>
          <TbMessage className='text-blue-500 text-2xl' />
        </div>

        <p className='text-base'>Messages</p>
      </div>
    </div>
  );
};

export default LeftSection_2_Component;
