import React from 'react';
import Badge from '@atoms/Badge';
import Icon from '@atoms/Icon';
import Image from 'next/image';

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
        Gain more insight into how people use your
      </h2>
      <p className="text-gray-500 text-center text-xl font-medium md:col-span-10 md:col-start-2">
        With our integrated CRM, project management, collaboration and invoicing
        capabilities, you can manage every aspect of your business in one secure
        platform.
      </p>
      <div className="col-span-12 grid grid-cols-3 gap-x-8 mt-8">
        <div className="col-span-1 flex flex-col gap-3">
          <div className="flex flex-col gap-4 items-center py-8">
            <div className="p-5 bg-green-500 rounded-md">
              <Icon icon="test" />
            </div>
            <h3 className="font-bold text-gray-900 text-center text-2xl">
              Measure your performance
            </h3>
            <p className="text-gray-500 text-center text-base font-medium md:col-span-10 md:col-start-2 px-8">
              Stay connected with your team and make quick decisions wherever
              you are.
            </p>
          </div>
          <div className="flex flex-col gap-4 items-center py-8">
            <div className="p-5 bg-green-500 rounded-md">
              <Icon icon="test" />
            </div>
            <h3 className="font-bold text-gray-900 text-center text-2xl">
              Build your website
            </h3>
            <p className="text-gray-500 text-center text-base font-medium md:col-span-10 md:col-start-2 px-8">
              A tool that lets you build a dream website even if you know
              nothing about web design or programming.
            </p>
          </div>
        </div>
        <div className="col-span-1 relative">
          <Image
            width="100%"
            height="100%"
            layout="fill"
            className="w-full h-full rounded-3xl object-cover object-top"
            src="/perfil.JPG"
          />
        </div>
        <div className="col-span-1 flex flex-col gap-3">
          <div className="flex flex-col gap-4 items-center py-8">
            <div className="p-5 bg-green-500 rounded-md">
              <Icon icon="test" />
            </div>
            <h3 className="font-bold text-gray-900 text-center text-2xl">
              Custom analytics
            </h3>
            <p className="text-gray-500 text-center text-base font-medium md:col-span-10 md:col-start-2 px-8">
              Get a complete sales dashboard in the cloud. See activity, revenue
              and social metrics all in one place.
            </p>
          </div>
          <div className="flex flex-col gap-4 items-center py-8">
            <div className="p-5 bg-green-500 rounded-md">
              <Icon icon="test" />
            </div>
            <h3 className="font-bold text-gray-900 text-center text-2xl">
              Connect multiple apps
            </h3>
            <p className="text-gray-500 text-center text-base font-medium md:col-span-10 md:col-start-2 px-8">
              The first business platform to bring together all of your products
              from one place.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
