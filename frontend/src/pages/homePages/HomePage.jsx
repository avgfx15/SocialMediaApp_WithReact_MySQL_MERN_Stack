// | Import HomePage.scss Styling
import CarouselComponent from '../../Components/CarouselComponent';
import './home.scss';

// & Main Component
const HomePage = () => {
  // ^ Main Component Render
  return (
    <div className='w-full h-screen flex justify-center bg-sky-500'>
      <CarouselComponent />
    </div>
  );
};

// ~ Export Home Page
export default HomePage;
