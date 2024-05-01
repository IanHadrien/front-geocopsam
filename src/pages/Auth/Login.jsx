import React, { useState } from 'react'; // eslint-disable-line
import { Link } from 'react-router-dom';
import { FaHome } from "react-icons/fa";
import InputAuth from '../../components/Form/Inputs/InputAuth';
import Logo from '../../components/Logo/Index';

export default function Login() {
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login successful', login);
  };

  return (
    <div className="flex flex-col lg:flex-row h-nulo">
      <div className="flex h-screen items-center p-10 px-28 bg-white border w-full lg:w-1/2">
        <div className="w-full lg:max-w-2xl">
          <div className='text-center py-4'>
            <div className='flex justify-center'>
              <FaHome size={45} />
            </div>
            <p className='text-4xl font-bold'>Welcome Home</p>
            <p className='text-sm'>Plase enter your details.</p>
          </div>

          <form className='mt-10' onClick={handleSubmit}>
            <div>
              <InputAuth 
                name='email' 
                type='email' 
                value={login.email}
                placeholder='Enter your email' 
                onChange={input => setLogin({ ...login, email: input.target.value })}
                showPassword 
                // error, 
                // disabled
              />

              <InputAuth 
                name='password' 
                type='password' 
                value={login.password}
                placeholder='Enter your password' 
                onChange={input => setLogin({ ...login, password: input.target.value })} 
                // error, 
                // disabled
              />
            </div>

            <div className='flex justify-end'>
              <Link to='#' className='text-end text-xs py-2 text-gray-400 transition hover:text-gray-600'>
                Forgot password?
              </Link>
            </div>

            <Link to='/maps'>
              <button 
                className='border mt-10 p-2 w-full rounded-3xl bg-verde-texture3 transition hover:opacity-80 text-white font-bold'
              >
                Login
              </button>
            </Link>
          </form>
        </div>
      </div>

      <Logo />
    </div>
  )
}
