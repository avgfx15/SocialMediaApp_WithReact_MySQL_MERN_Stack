import React from 'react';

const CarouselComponent = () => {
  return (
    <div className='w-full flex flex-row justify-center gap-1 p-3'>
      <div className='w-1/3 h-72'>
        <img
          src='https://www.freeiconspng.com/uploads/strawberry-fruit-png-3.jpg'
          alt=''
          className='h-full w-full object-cover object-center rounded-lg'
        />
      </div>
      <div className='w-1/3 h-72'>
        <img
          src='https://www.freeiconspng.com/uploads/strawberry-fruit-png-3.jpg'
          alt=''
          className='h-full w-full object-cover object-center rounded-lg'
        />
      </div>
      <div className='w-1/3 h-72'>
        <img
          src='https://www.freeiconspng.com/uploads/strawberry-fruit-png-3.jpg'
          alt=''
          className='h-full w-full object-cover object-center rounded-lg'
        />
      </div>
    </div>
  );
};

export default CarouselComponent;
