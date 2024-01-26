import React from 'react';
import { SectionCardProps } from '@molecules/SectionCard';

const experiences: SectionCardProps[] = [
  {
    title: 'DPF — Estágio em Desenvolvimento Web',
    description: (
      <>
        Outubro de 2018 - Julho de 2019
        <br /> Desenvolvimento de aplicação interna utilizando Laravel, MySql e
        React.
      </>
    ),
    icon: 'php',
  },
  {
    title: 'TV Tribuna — Estágio em Desenvolvimento Web',
    description: (
      <>
        AGOSTO DE 2019 - AGOSTO DE 2020 <br /> Manutenção e desenvolvimento de
        um portal de notícias com a utilização de java, velocity, React e Node.
      </>
    ),
    icon: 'java',
  },
  {
    title: '1M2 — Desenvolvedor React',
    description: (
      <>
        AGOSTO DE 2020 - OUTUBRO DE 2020
        <br /> Arquitetura e Desenvolvimento de um sistema web de
        desburocratização na compra de loteamento de terras utilizando framework
        Next.js para React com typescript, Redux, styled-components e Jest.
      </>
    ),
    icon: 'react',
  },
  {
    title: 'IES2 — Desenvolvedor React Native',
    description: (
      <>
        OUTUBRO DE 2020 - DEZEMBRO DE 2020. <br /> Desenvolvimento de aplicação
        para aulas online com React Native sem hooks, nem functional components
        e com Jest para teste.
      </>
    ),
    icon: 'react',
  },
  {
    title: 'EVT — Desenvolvedor React',
    description: (
      <>
        DEZEMBRO DE 2020 - JULHO DE 2021. <br /> Arquitetura e Desenvolvimento
        de sistemas internos de fábricas com React utilizando o CRA template,
        Webpack, styled-components, carbon-design Jest e Cypress.
      </>
    ),
    icon: 'react',
  },
  {
    title: 'Laborit — Engenheiro Front-end',
    description: (
      <>
        JULHO DE 2021 - SETEMBRO DE 2021. <br /> Engenharia no Front-End com
        utilização do Next.js com typescript, Atomic Design, styled-components,
        tailwindcss, Jest, gerenciamento de CI/CD através do Gitlab, AWS e
        Amplify.
      </>
    ),
    icon: 'react',
  },
  {
    title: 'NTT Data — Desenvolvedor Front-end Senior',
    description: (
      <>
        NOVEMBRO DE 2021 - Atualmente. <br /> Arquitetura e Desenvolvimento de
        sistemas internos na venda de cartões em lojas com Next,
        react-testing-library, tailwind e styled-components.
      </>
    ),
    icon: 'react',
    className: 'col-span-4 col-start-5',
  },
];

export const experiencesLeft = experiences.slice(0, 3);
export const experiencesRight = experiences.slice(4, 7).reverse();
export const experiencesCurrent = experiences[3];
