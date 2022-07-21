import React from 'react';
import Badge from '@atoms/Badge';
import Icon from '@atoms/Icon';

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
          <div className="relative w-auto bg-gray-900 rounded-3xl overflow-hidden">
            <div className="animate-scroll flex w-fit overflow-hidden gap-3 p-3">
              <Icon icon="html" size={80} />
              <Icon icon="javascript" size={80} />
              <Icon icon="typescript" size={80} />
              <Icon icon="php" size={80} />
              <Icon icon="java" size={80} />
              <Icon icon="C#" size={80} />
              <Icon icon="kotlin" size={80} />
              <Icon icon="python" size={80} />
              <Icon icon="html" size={80} />
              <Icon icon="javascript" size={80} />
              <Icon icon="typescript" size={80} />
              <Icon icon="php" size={80} />
              <Icon icon="java" size={80} />
              <Icon icon="C#" size={80} />
              <Icon icon="kotlin" size={80} />
              <Icon icon="python" size={80} />
            </div>
            <div className="animate-scrollReverse flex w-fit overflow-hidden gap-3 p-3">
              <Icon icon="css" size={80} />
              <Icon icon="bootstrap" size={80} />
              <Icon icon="tailwind" size={80} />
              <Icon icon="chakra" size={80} />
              <Icon icon="material" size={80} />
              <Icon icon="less" size={80} />
              <Icon icon="stylus" size={80} />
              <Icon icon="sass" size={80} />
              <Icon icon="css" size={80} />
              <Icon icon="bootstrap" size={80} />
              <Icon icon="tailwind" size={80} />
              <Icon icon="chakra" size={80} />
              <Icon icon="material" size={80} />
              <Icon icon="less" size={80} />
              <Icon icon="stylus" size={80} />
              <Icon icon="sass" size={80} />
            </div>
            <div className="animate-scroll flex w-fit overflow-hidden gap-3 p-3">
              <Icon icon="react" size={80} />
              <Icon icon="vue" size={80} />
              <Icon icon="angular" size={80} />
              <Icon icon="gatsby" size={80} />
              <Icon icon="node" size={80} />
              <Icon icon="dotnet" size={80} />
              <Icon icon="nextjs" size={80} />
              <Icon icon="composer" size={80} />
              <Icon icon="react" size={80} />
              <Icon icon="vue" size={80} />
              <Icon icon="angular" size={80} />
              <Icon icon="gatsby" size={80} />
              <Icon icon="node" size={80} />
              <Icon icon="dotnet" size={80} />
              <Icon icon="nextjs" size={80} />
              <Icon icon="composer" size={80} />
            </div>
            <div className="animate-scrollReverse flex w-fit overflow-hidden gap-3 p-3">
              <Icon icon="docker" size={80} />
              <Icon icon="heroku" size={80} />
              <Icon icon="git" size={80} />
              <Icon icon="azure" size={80} />
              <Icon icon="github" size={80} />
              <Icon icon="bitbucket" size={80} />
              <Icon icon="aws" size={80} />
              <Icon icon="gitlab" size={80} />
              <Icon icon="docker" size={80} />
              <Icon icon="heroku" size={80} />
              <Icon icon="git" size={80} />
              <Icon icon="azure" size={80} />
              <Icon icon="github" size={80} />
              <Icon icon="bitbucket" size={80} />
              <Icon icon="aws" size={80} />
              <Icon icon="gitlab" size={80} />
            </div>
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
