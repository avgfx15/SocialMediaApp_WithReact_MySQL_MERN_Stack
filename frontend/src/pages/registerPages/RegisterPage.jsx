// | Import Styling
import { NavLink } from 'react-router';
import './register.scss';

// & Register Page Component

const RegisterPage = () => {
  // ^ Register Page Render
  return (
    <div className='h-screen w-[75%] mx-auto flex justify-center items-center'>
      <div className='card lg:card-side bg-base-100 shadow-sm h-[65%]'>
        <div className='p-5 w-1/2 flex items-center justify-center border border-blue-950 rounded-4xl'>
          <div className='flex flex-col items-center justify-center w-full'>
            <div className='mb-3'>
              <h2 className='text-3xl text-blue-500'>Login</h2>
            </div>
            <form className='w-full'>
              <div className='mb-3 flex flex-col justify-center w-full'>
                <label
                  className='text-xl text-blue-500 mb-3'
                  htmlFor='username'
                >
                  Username
                </label>
                <input
                  type='username'
                  id='username'
                  placeholder='Enter Your Username'
                  name='username'
                  className='p-1 px-2 rounded-lg'
                />
              </div>
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
                Already have an account? Please
              </p>
              <NavLink to='/login' className='hover:underline text-white ml-2'>
                Login
              </NavLink>
            </div>
          </div>
        </div>
        <figure className='w-1/2 border border-blue-950 overflow-hidden'>
          <img
            src='./Images/loginPage.png'
            alt='Album'
            className='w-full object-cover h-full rounded-4xl'
          />
        </figure>
      </div>
    </div>
  );
};

// ~ Register page Export
export default RegisterPage;
