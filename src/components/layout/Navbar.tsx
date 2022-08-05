import Icon from '@atoms/Icon';
import React from 'react';

const Navbar = () => {
  return (
    <div className="relative z-20">
      <div className="absolute w-full py-12 md:py-7 flex items-center justify-center md:justify-between md:px-[5.5rem]">
        <Icon icon="logoWithText" size={260} />
        <ul className="flex relative gap-12 text-base font-medium text-gray-500">
          <li>
            <a href="#about">Sobre</a>
          </li>
          <li>
            <a>Contato</a>
          </li>
          <li>
            <a>Blog</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
