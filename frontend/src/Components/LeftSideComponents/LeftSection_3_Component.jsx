import React from 'react';

// | React-Icon Import

import { FaBuysellads, FaBirthdayCake } from 'react-icons/fa';

import { BiMessageRoundedDetail } from 'react-icons/bi';
import { RiSecurePaymentLine } from 'react-icons/ri';

// & LeftSection 3 Component
const LeftSection_3_Component = () => {
  // ^ LeftSection 3 Component Render
  return (
    <div className='border-b border-base-500 mb-3'>
      <p className='text-base font-semibold mb-3'>Others</p>
      <div className='flex items-center gap-2 mb-3'>
        <div className='w-8 h-8'>
          <FaBuysellads className='text-sky-500 text-2xl' />
        </div>
        <p className='text-base'>Ads Manager</p>
      </div>
      <div className='flex items-center gap-2 mb-3'>
        <div className='w-8 h-8'>
          <FaBirthdayCake className='text-sky-500 text-2xl' />
        </div>
        <p className='text-base'>Birthday</p>
      </div>
      <div className='flex items-center gap-2 mb-3'>
        <div className='w-8 h-8'>
          <BiMessageRoundedDetail className='text-sky-500 text-2xl' />
        </div>
        <p className='text-base'>Messanger</p>
      </div>
      <div className='flex items-center gap-2 mb-3'>
        <div className='w-8 h-8'>
          <RiSecurePaymentLine className='text-blue-500 text-2xl' />
        </div>
        <p className='text-base'>Order and Payment</p>
      </div>
    </div>
  );
};

export default LeftSection_3_Component;
