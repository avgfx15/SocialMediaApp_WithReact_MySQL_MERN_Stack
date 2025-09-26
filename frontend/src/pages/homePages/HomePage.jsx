// | Import HomePage.scss Styling
import './home.scss';

// & Main Component
const HomePage = () => {
  // ^ Main Component Render
  return (
    <div className='w-full h-screen flex justify-center items-center bg-sky-500'>
      <figure className='hover-gallery max-w-60'>
        <img
          src='https://img.daisyui.com/images/stock/daisyui-hat-1.webp'
          alt='carousel'
        />
        <img
          src='https://img.daisyui.com/images/stock/daisyui-hat-2.webp'
          alt='carousel'
        />
        <img
          src='https://img.daisyui.com/images/stock/daisyui-hat-3.webp'
          alt='carousel'
        />
        <img
          src='https://img.daisyui.com/images/stock/daisyui-hat-4.webp'
          alt='carousel'
        />
      </figure>
    </div>
  );
};

// ~ Export Home Page
export default HomePage;
