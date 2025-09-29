// | Import HomePage.scss Styling
import CarouselComponent from '../../Components/CarouselComponent';
import './home.scss';

// & Main Component
const HomePage = () => {
  // ^ Main Component Render
  return (
    <div className='w-full'>
      <CarouselComponent />
    </div>
  );
};

// ~ Export Home Page
export default HomePage;
