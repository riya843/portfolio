import React from 'react';
import Header from './components/header'
import AboutMe from './components/AboutMe';

import Skills from './components/Skills';
import Contact from './components/Contact';

const App = () => {
  return (
    <div>
      <Header />
      <AboutMe />
      
      <Skills />
      <Contact />
    </div>
  );
};

export default App;
