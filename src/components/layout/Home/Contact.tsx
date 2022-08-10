import SectionCards from '@organisms/SectionCards';
import React from 'react';

// import { Container } from './styles';

const Contact: React.FC = () => {
  return (
    <>
      <img src="/BG Wave.svg" className="w-full translate-y-[1px]" />
      <div className="bg-gray-900">
        <SectionCards
          className="container mx-auto flex gap-8 justify-center py-[5.5rem] "
          cards={[
            {
              title: <span className="text-white">Email</span>,
              description: (
                <>
                  <a
                    href="mailto:jtanacar@gmail.com"
                    target="_blank"
                    rel="noreferrer"
                    className="text-green-500"
                  >
                    jtanacar@gmail.com
                  </a>
                </>
              ),
              icon: 'email',
              rounded: 'full',
            },
            {
              title: <span className="text-white">Phone</span>,
              description: (
                <>
                  <a
                    href="tel:+5513991887363"
                    target="_blank"
                    rel="noreferrer"
                    className="text-green-500"
                  >
                    (13) 99188-7363
                  </a>
                </>
              ),
              icon: 'tel',
              rounded: 'full',
            },
            {
              title: <span className="text-white">Linkedin</span>,
              description: (
                <>
                  <a
                    href="https://www.linkedin.com/in/joão-pedro-tanaca-ramos/"
                    target="_blank"
                    rel="noreferrer"
                    className="text-green-500"
                  >
                    João Tanaca
                  </a>
                </>
              ),
              icon: 'linkedin',
              rounded: 'full',
            },
            {
              title: <span className="text-white">Github</span>,
              description: (
                <>
                  <a
                    href="https://github.com/joaotanaca"
                    target="_blank"
                    rel="noreferrer"
                    className="text-green-500"
                  >
                    joaotanaca
                  </a>
                </>
              ),
              icon: 'github',
              rounded: 'full',
            },
          ]}
        />
      </div>
      <img
        src="/BG Wave.svg"
        className="w-full rotate-180 -translate-y-[1px]"
      />
    </>
  );
};
export default Contact;
