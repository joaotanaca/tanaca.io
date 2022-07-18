import Badge from '@components/atoms/Badge';
import React from 'react';

// import { Container } from './styles';

const Hero = () => {
  return (
    <div>
      <div className="grid grid-cols-12 justify-center items-center container mx-auto gap-8 h-screen ">
        <div className="col-span-6 flex flex-col">
          <Badge>Header</Badge>
          <h1 className="text-gray-900 font-black text-6xl leading-[4.5rem] pb-6 tracking-tight">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit error.
          </h1>
          <p className="text-gray-500 font-medium text-xl">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur
            animi maiores quas eos error suscipit alias cumque aspernatur ab
            natus, labore minus, asperiores rem doloribus cum? Numquam magni
            harum consequuntur!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
