import React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import Hero from '@layout/Home/Hero';
import About from '@layout/Home/About';
import Contact from '@layout/Home/Contact';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <meta name="description" content="Home page" />
        <title>Tanaca</title>
      </Head>
      <Hero />
      <About />
      <Contact />
    </>
  );
};

export default Home;
