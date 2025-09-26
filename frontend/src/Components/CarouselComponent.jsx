const CarouselComponent = () => {
  return (
    <div className='carousel rounded-box w-full h-[35%] mx-3 mt-3 sm:mt-0'>
      <div className='carousel-item w-full lg:w-1/3'>
        <img
          src='https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp'
          className='w-full hover:scale-110 transition-all 0.3s easy-in-out object-cover object-center'
          alt='Fruit'
        />
      </div>

      <div className='carousel-item w-full lg:w-1/3'>
        <img
          src='https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.webp'
          className='w-full hover:scale-110 transition-all 0.3s easy-in-out object-cover object-center'
          alt='Fruit'
        />
      </div>

      <div className='carousel-item w-full lg:w-1/3'>
        <img
          src='https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.webp'
          className='w-full hover:scale-110 transition-all 0.3s easy-in-out object-cover object-center'
          alt='Fruit'
        />
      </div>
    </div>

    //     <div className='carousel carousel-center rounded-box h-[33%] w-full mx-3'>
    //       {/* <div className='carousel-item'>
    //         <img
    //           src='https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp'
    //           alt='Pizza' className='hover:scale-110 transition-all duration-500'
    //         />
    //       </div> */}
    //       <div className='carousel-item '>
    //         <img
    //           src='https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp'
    //           alt='Pizza'
    //           className='hover:scale-110 transition-all duration-500'
    //         />
    //       </div>
    //       <div className='carousel-item'>
    //         <img
    //           src='https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp'
    //           alt='Pizza'
    //           className='hover:scale-110 transition-all duration-500'
    //         />
    //       </div>
    //       <div className='carousel-item'>
    //         <img
    //           src='https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.webp'
    //           alt='Pizza'
    //           className='hover:scale-110 transition-all duration-500'
    //         />
    //       </div>
    //       <div className='carousel-item'>
    //         <img
    //           src='https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.webp'
    //           alt='Pizza'
    //           className='hover:scale-110 transition-all duration-500'
    //         />
    //       </div>
    //       <div className='carousel-item'>
    //         <img
    //           src='https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.webp'
    //           alt='Pizza'
    //           className='hover:scale-110 transition-all duration-500'
    //         />
    //       </div>
    //       {/* <div className='carousel-item'>
    //         <img
    //           src='https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.webp'
    //           alt='Pizza' className='hover:scale-110 transition-all duration-500'
    //         />
    //       </div> */}
    //     </div>
  );
};

export default CarouselComponent;
