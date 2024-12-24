import React from 'react';
import { Link } from 'react-router';

const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-gray-800">
      <div className="container mx-auto px-4 flex justify-between items-center h-16">
        <div className="text-xl font-bold">
          <img src="/public/LOGO.png" className='w-[140px] h-full' />
        </div>

        <div className="flex space-x-6">
          <a href="/pricing" className="w-[70px] h-[37px] flex justify-center items-center ">Pricing</a>
          <Link to="/login" className="w-[70px] h-[37px] flex justify-center items-center hover:text-gray-300 hover:bg-gray-500 rounded-full transition ease-in-out duration-300">Login</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;