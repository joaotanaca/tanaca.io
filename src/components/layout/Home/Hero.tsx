import React, { memo, useMemo } from 'react';
import Badge from '@atoms/Badge';
import Icon from '@atoms/Icon';
import { carroselHero } from 'constants/carroselHero';

const Hero = () => {
  const renderIcons = useMemo(
      () =>
        carroselHero?.map((icons, index) => {
          const renderIcon = icons?.map(icon => (
            <Icon key={icon} icon={icon} size={80} />
          ));
          return (
            <div
              key={`container-icons-${index}`}
              className={`${
              index % 2 ? 'animate-scrollReverse' : 'animate-scroll'
              } flex w-fit overflow-hidden gap-3 p-3`}
            >
              {renderIcon}
              {renderIcon}
            </div>
          );
        }),
      [carroselHero],
  );

  return (
    <section className="hero relative overflow-hidden bg-contain bg-no-repeat">
      <div className="absolute w-full h-full -z-10 top-0 left-0">
        <img className="w-full h-full" src="/BG.png" alt="" />
      </div>
      <div className="grid grid-cols-12 justify-center items-center container mx-auto gap-8 h-screen px-8 md:px-0">
        <div className="info col-span-12 md:col-span-6 flex flex-col">
          <Badge>Front-end</Badge>
          <h1 className="text-gray-900 font-black text-6xl leading-[4.5rem] pb-6 tracking-tight">
            Dev javascript, apaixonado pelo Front.
          </h1>
          <p className="text-gray-500 font-medium text-xl">
            Tenho uma frase que gosto e que pra mim descreve o que é programar
            &quot;fazer o simples é o mais dificil&quot;.
          </p>
        </div>
        <div className="images hidden md:block col-span-6 relative">
          <img className="absolute -z-10 -top-14 -left-14" src="/circle.svg" />
          <div className="relative w-auto bg-gray-900 rounded-3xl overflow-hidden">
            {renderIcons}
          </div>
          <img
            className="absolute -z-10 -bottom-10 -right-12"
            src="/retangulo.svg"
          />
        </div>
      </div>
    </section>
  );
};

export default memo(Hero);
