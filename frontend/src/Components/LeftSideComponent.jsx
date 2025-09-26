import React from 'react';

// | React-Icon Import
import { FaStore } from 'react-icons/fa6';
import { BsStopwatch } from 'react-icons/bs';
import { MdOndemandVideo } from 'react-icons/md';
import { SlCalender } from 'react-icons/sl';
import { IoGameController } from 'react-icons/io5';
import { GrGallery } from 'react-icons/gr';
import { BiSolidVideos } from 'react-icons/bi';
import { TbMessage } from 'react-icons/tb';

// | Import Images
const friends = './Images/friends.png';
const groups = './Images/group.png';

// & Leftside Main Component
const LeftSideComponent = () => {
  // ^ Leftside Component Render
  return (
    <div className='drawer sm:drawer-open w-44 lg:w-60 2xl:w-80 transition-all 0.3s easy-in-out '>
      <input id='my-drawer-2' type='checkbox' className='drawer-toggle' />
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
        <div className='menu bg-sky-950 text-base-content min-h-full w-44 lg:w-60 2xl:w-80 p-4 transition-all 0.3s easy-in-out'>
          {/* Sidebar content here */}
          {/*  Section 1  */}

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

          {/*  Section 1  */}

          {/*  Section 2  */}
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
          {/*  Section 2  */}

          {/*  Section 3  */}
          <div className='border-b border-base-500 mb-3'>
            <p className='text-base font-semibold mb-3'>Others</p>
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
          {/*  Section 3  */}
        </div>
      </div>
    </div>
  );
};

export default LeftSideComponent;
