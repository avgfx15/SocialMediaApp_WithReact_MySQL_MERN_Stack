// | Import Styling
import './App.css';
// | Import Components
import LoginPage from './pages/loginPages/LoginPage';

// & App Main Component
const App = () => {
  // ^ App Component Render
  return (
    <div className='w-full h-screen bg-sky-300'>
      <LoginPage />
    </div>
  );
};

// ~ App Component Export
export default App;
