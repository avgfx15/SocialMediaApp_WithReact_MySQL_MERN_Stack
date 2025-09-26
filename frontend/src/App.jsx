import { createBrowserRouter, Navigate, RouterProvider } from 'react-router';
// | Import Styling
import './App.css';
// | Import Components
import HomePage from './pages/homePages/HomePage';
import LoginPage from './pages/loginPages/LoginPage';
import RegisterPage from './pages/registerPages/RegisterPage';
import LayoutComponent from './Components/LayoutComponent';
import ProfilePage from './pages/profilePages/ProfilePage';
import ErrorPage from './pages/ErrorPage';

// ` Configure Protected Routes
const ProtectedRoute = ({ children, userLoggedIn }) => {
  if (!userLoggedIn) {
    return <Navigate to='/login' />;
  }
  return children;
  // if (localStorage.getItem('token')) {
  //   return children;
  // } else {
  //   return <Navigate to='/login' />;
  // }
};

// & App Main Component
const App = () => {
  // @ loggedIn User Variable
  const userLoggedIn = true;

  // ` Router Configure
  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <ProtectedRoute userLoggedIn={userLoggedIn}>
          <LayoutComponent />
        </ProtectedRoute>
      ),
      errorElement: <ErrorPage />,
      children: [
        {
          path: '/',
          element: <HomePage />,
        },

        // {
        //   path: '/blog',
        //   element: <Blog />,
        // },
        // {
        //   path: '/blog/:id',
        //   element: <SingleBlog />,
        // },

        {
          path: '/profile/:id',
          element: <ProfilePage />,
        },
      ],
    },
    // {
    //   path: '/about',
    //   element: <About />,
    // },
    // {
    //   path: '/contact',
    //   element: <Contact />,
    // },
    {
      path: '/login',
      element: <LoginPage />,
    },
    {
      path: '/register',
      element: <RegisterPage />,
    },
  ]);

  // ^ App Component Render
  return <RouterProvider router={router}></RouterProvider>;
};

// ~ App Component Export
export default App;
