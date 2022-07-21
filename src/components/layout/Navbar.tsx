import Badge from '@atoms/Badge';
import React from 'react';

const Navbar = () => {
  return (
    <div className="relative z-20">
      <div className="absolute w-full py-7 flex items-center justify-between px-[5.5rem]">
        <span className="text-3xl font-bold">Tanaca</span>
        <ul className="flex relative gap-12 text-base font-medium text-gray-500">
          <div className="absolute -top-full -left-7 w-full flex gap-12">
            <Badge className="whitespace-nowrap -top-full -left-12 text-xs">
              Em breve
            </Badge>
            <Badge className="whitespace-nowrap -top-full -left-12 text-xs">
              Em breve
            </Badge>
            <Badge className="whitespace-nowrap -top-full -left-12 text-xs">
              Em breve
            </Badge>{' '}
          </div>
          <li>
            <a>Sobre</a>
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
