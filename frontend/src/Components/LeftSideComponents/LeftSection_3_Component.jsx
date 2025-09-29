import React from 'react';

// | React-Icon Import

import { FaBuysellads, FaBirthdayCake } from 'react-icons/fa';

import { BiMessageRoundedDetail } from 'react-icons/bi';
import { RiSecurePaymentLine } from 'react-icons/ri';

// & LeftSection 3 Component
const LeftSection_3_Component = () => {
  // ^ LeftSection 3 Component Render
  return (
    <div className='flex flex-row md:flex-col hidden md:block'>
      <p className='text-base font-semibold mb-3 hidden md:block'>Others</p>
      <div className='flex items-center gap-2 mb-0 md:mb-3'>
        <div className='w-8'>
          <FaBuysellads className='text-sky-500 text-2xl' />
        </div>
        <p className='text-base hidden md:block'>Ads Manager</p>
      </div>
      <div className='flex items-center gap-2 mb-0 md:mb-3'>
        <div className='w-8'>
          <FaBirthdayCake className='text-sky-500 text-2xl' />
        </div>
        <p className='text-base hidden md:block'>Birthday</p>
      </div>
      <div className='flex items-center gap-2 mb-0 md:mb-3'>
        <div className='w-8'>
          <BiMessageRoundedDetail className='text-sky-500 text-2xl' />
        </div>
        <p className='text-base hidden md:block'>Messanger</p>
      </div>
      <div className='flex items-center gap-2 mb-0 md:mb-3'>
        <div className='w-8'>
          <RiSecurePaymentLine className='text-blue-500 text-2xl' />
        </div>
        <p className='text-base hidden md:block'>Order and Payment</p>
      </div>
    </div>
  );
};

export default LeftSection_3_Component;
