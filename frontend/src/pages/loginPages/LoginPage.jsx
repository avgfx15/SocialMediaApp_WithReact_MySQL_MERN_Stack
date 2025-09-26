// | Import Styling
import { NavLink } from 'react-router';
import './login.scss';

// & Login Page Component
const LoginPage = () => {
  // ^ Login Page Render
  return (
    <div className='h-screen w-[75%] mx-auto flex justify-center items-center'>
      <div className='card lg:card-side bg-base-100 shadow-sm h-[65%] border border-sky-500'>
        <figure className='w-1/2 overflow-hidden'>
          <img
            src='./Images/loginPage.png'
            alt='Album'
            className='w-full object-cover h-full rounded-4xl'
          />
        </figure>
        <div className='p-5 w-1/2 flex items-center justify-center rounded-4xl'>
          <div className='flex flex-col items-center justify-center w-[80%] mx-auto'>
            <div className='mb-3'>
              <h2 className='text-3xl text-blue-500'>Login</h2>
            </div>
            <form className='w-full'>
              <div className='mb-3 flex flex-col justify-center w-full'>
                <label className='text-xl text-blue-500 mb-3' htmlFor='email'>
                  Email
                </label>
                <input
                  type='email'
                  id='email'
                  placeholder='Enter Your Email'
                  name='email'
                  className='p-1 px-2 rounded-lg'
                />
              </div>
              <div className='mb-3 flex flex-col justify-center w-full'>
                <label
                  className='text-xl text-blue-500 mb-3'
                  htmlFor='password'
                >
                  Password
                </label>
                <input
                  type='password'
                  id='password'
                  placeholder='Enter Your Password'
                  name='password'
                  className='p-1 px-2 rounded-lg'
                />
              </div>
              <div className='mb-3 flex flex-col justify-center w-full'>
                <button className='btn bg-blue-500'>Login</button>
              </div>
            </form>
            <div className='mb-3'>
              <p className='text-lg text-blue-500 mb-3 inline-block'>
                Don't have an account? Please
              </p>
              <NavLink
                to='/register'
                className='hover:underline text-white ml-2'
              >
                Register
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// ~ Login Page Export

export default LoginPage;
