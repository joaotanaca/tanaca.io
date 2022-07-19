import Badge from '@components/atoms/Badge';
import Icon from '@components/atoms/Icon';
import React from 'react';

const Hero = () => {
  return (
    <section className="hero relative overflow-hidden bg-contain bg-no-repeat">
      <div className="absolute w-full h-full -z-10 top-0 left-0">
        <img className="w-full h-full" src="/BG.png" alt="" />
      </div>
      <div className="grid grid-cols-12 justify-center items-center container mx-auto gap-8 h-screen ">
        <div className="info col-span-6 flex flex-col">
          <Badge>Front-end</Badge>
          <h1 className="text-gray-900 font-black text-6xl leading-[4.5rem] pb-6 tracking-tight">
            Olá, eu sou{' '}
            <a
              className="text-green-400 transition-all"
              href="https://www.linkedin.com/in/jo%C3%A3o-pedro-tanaca-ramos/"
              target="_blank"
              rel="noreferrer"
            >
              Tanaca
            </a>
            .
          </h1>
          <p className="text-gray-500 font-medium text-xl">
            Do litoral da baixada santista, marido da{' '}
            <a
              className="cursor-pointer text-green-500"
              href="https://www.linkedin.com/in/juliana-cristina-359877173/"
              target="_blank"
              rel="noreferrer"
            >
              Juliana
            </a>
            , amante de gatos e javascript. Apaixonado pelo front-end desde
            2018, evoluindo a cada dia.
          </p>
        </div>
        <div className="images col-span-6 relative">
          <img className="absolute z-10 -top-14 -left-14" src="/circle.svg" />
          {/* <Image
            className="rounded-3xl"
            quality={90}
            src="/image-test.png"
            alt="Test image"
            width="100%"
            height="75%"
            objectFit="cover"
            layout="responsive"
          /> */}
          <div className="w-full pb-[80%] bg-gray-900 rounded-3xl">
            <Icon icon="html" />
          </div>
          <img
            className="absolute z-10 -bottom-10 -right-12"
            src="/retangulo.svg"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
