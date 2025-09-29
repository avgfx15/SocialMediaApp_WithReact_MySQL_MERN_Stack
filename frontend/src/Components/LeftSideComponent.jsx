import React from 'react';
// | Import Components

import LeftSection1Component from './LeftSideComponents/LeftSection_1_Component';
import LeftSection2Component from './LeftSideComponents/LeftSection_2_Component';
import LeftSection3Component from './LeftSideComponents/LeftSection_3_Component';

// & LeftSide Component
const LeftSideComponent = () => {
  // ^ LeftSide Component Render
  return (
    <div className='flex flex-row md:flex-col p-1 lg:p-10'>
      <LeftSection1Component />
      <LeftSection2Component />
      <LeftSection3Component />
    </div>
  );
};

export default LeftSideComponent;
