import { Outlet } from 'react-router';
import LeftSideComponent from './LeftSideComponent';
import NavbarComponent from './NavbarComponent';
import RightSideComponent from './RightSideComponent';

// & Layout Component

const LayoutComponent = () => {
  // ^ Layout Component Render
  return (
    <div className='min-h-screen flex flex-col items-center bg-sky-500 text-white'>
      <NavbarComponent />

      <div className='w-full flex flex-row rounded-box'>
        <div className='bg-sky-950 min-w-3/12 fixed left-0 h-16 md:h-full hidden md:block'>
          <LeftSideComponent />
        </div>
        <div className='w-full md:w-6/12 min-w-6/12 bg-violet-500 mx-auto min-h-screen'>
          <Outlet />
        </div>
        <div className='bg-sky-950 hidden md:block min-w-3/12 fixed right-0 min-h-screen'>
          <RightSideComponent />
        </div>
      </div>
    </div>
  );
};

export default LayoutComponent;
