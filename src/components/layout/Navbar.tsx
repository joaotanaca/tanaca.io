import React from 'react';

const Navbar = () => {
  return (
    <div className='relative'>
      <div className="absolute w-full py-7 flex items-center justify-between px-[5.5rem]">
        <span className="text-2xl font-semibold">Tanaca</span>
        <ul className="flex gap-12 text-base font-medium text-gray-500">
          <li className="text-gray-900">
            <a>Pricing</a>
          </li>
          <li>
            <a>About</a>
          </li>
          <li>
            <a>Post</a>
          </li>
          <li>
            <a>Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
