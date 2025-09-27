import React from 'react';

// | React-Icon Import

import LeftSection1Component from './LeftSideComponents/LeftSection_1_Component';
import LeftSection2Component from './LeftSideComponents/LeftSection_2_Component';
import LeftSection3Component from './LeftSideComponents/LeftSection_3_Component';

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

          <LeftSection1Component />

          {/*  Section 1  */}

          {/*  Section 2  */}

          <LeftSection2Component />

          {/*  Section 2  */}

          {/*  Section 3  */}

          <LeftSection3Component />

          {/*  Section 3  */}
        </div>
      </div>
    </div>
  );
};

export default LeftSideComponent;
