import React from 'react';
import Badge from '@atoms/Badge';
import Image from 'next/image';
import SectionCard from '@molecules/SectionCard';
import SectionCards from '@organisms/SectionCards';
import {
  experiencesCurrent,
  experiencesLeft,
  experiencesRight,
} from 'constants/about';

const About = () => {
  return (
    <section
      id="about"
      className="container grid grid-cols-12 gap-4 justify-center items-center py-[89px] px-8 md:px-0 mx-auto w-full"
    >
      <div className="col-span-12 flex justify-center">
        <Badge>Sobre</Badge>{' '}
      </div>

      <h2 className="font-black text-gray-900 text-center text-6xl leading-[4.5rem] pb-6 tracking-tight md:col-span-8 md:col-start-3">
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
      </h2>
      <p className="text-gray-500 text-center text-xl font-medium md:col-span-10 md:col-start-2">
        Do litoral da baixada santista, marido da{' '}
        <a
          className="cursor-pointer text-green-500"
          href="https://www.linkedin.com/in/juliana-cristina-359877173/"
          target="_blank"
          rel="noreferrer"
        >
          Juliana
        </a>
        , amante de gatos e javascript. <br />
        Desenvolvedor desde 2018, curioso desde sempre e com um ideal de evoluir
        e contribuir em projetos open source.
        <br />
        Disposto a ajudar, ensinar e mentorar pessoas a entrar na área.
      </p>
      <div className="col-span-12 grid grid-cols-3 gap-x-8 mt-8">
        <SectionCards
          className="col-span-1 flex flex-col gap-3"
          cards={experiencesLeft}
        />
        <div className="col-span-1">
          <div className="relative h-[66%]">
            <Image
              layout="fill"
              className="w-full h-full rounded-3xl object-cover object-top"
              src="/perfil.JPG"
            />
          </div>

          <SectionCard {...experiencesCurrent} />
        </div>
        <SectionCards
          className="col-span-1 flex flex-col gap-3"
          cards={experiencesRight}
        />
      </div>
    </section>
  );
};

export default About;
