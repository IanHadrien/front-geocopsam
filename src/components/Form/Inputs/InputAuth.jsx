import { useState } from "react";
import { MdVisibility, MdVisibilityOff, MdOutlineMail } from 'react-icons/md';

/* eslint-disable react/prop-types */
export default function InputAuth({name, type, value, placeholder, error, onChange, disabled}) {
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = (e) => {
    e.preventDefault();
    setShowPassword(!showPassword);
  };

  const handleKeyPress = (event) => {
    // if (onSubmit) {
    //   if (event.key === 'Enter') {
    //     onSubmit(event);
    //   }
    // }
  }

  return (
    <div className='flex flex-col flex-1 relative border-2 rounded-3xl mt-4'>
      <input
        id={name}
        name={name}
        placeholder={placeholder}
        type={showPassword ? "text" : type}
        className={`
        ${error ? "border-red-300 focus:border-red-300 focus:ring-red-300" : "border-gray-300"}
        p-2 pl-4 rounded-3xl focus:border-azul-200 focus:ring focus:ring-azul-200 focus:ring-opacity-25 block w-full`}
        onChange={onChange}
        value={value}
        disabled={disabled}
      />
      {type === 'email' &&
        <button className='absolute right-6 top-3'>
          <MdOutlineMail size={20} color="gray" />
        </button>
      }
      {type === 'password' &&
        <button className='absolute right-6 top-3' onClick={handleTogglePassword}>
          {showPassword ? <MdVisibility size={20} color="gray" /> : <MdVisibilityOff size={20} color="gray" />}
        </button>
      }
      {error &&
        <small className="text-red-600">error</small>
      }
    </div>
  );
}