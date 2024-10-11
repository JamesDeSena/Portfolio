import React from 'react';

import About from './sections/About';
import Projects from './sections/Projects';
import Skills from './sections/Skills';
import Contacts from './sections/Contacts';

import wp from '../assets/wp3.png';

const Home = () => {
  return (
    <div
      className="absolute inset-0 bg-cover bg-opacity-20"
      style={{ backgroundImage: `url(${wp})` }}
    >
      <div className="h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth">
        <About />
        <Projects />
        <Skills />
        <Contacts />
      </div>
    </div>
  );
};

export default Home;
