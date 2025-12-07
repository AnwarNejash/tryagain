// src/App.js
import React from 'react';
import './App.css';

// Import all components
import Header from './components/Header/Header';

import Footer from './components/Footer/Footer';

import Contact from './components/Contacts/Contact';
import Skills from './components/Skills/Skill';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Experiences from './components/Experience/Experiences';
import Project from './components/Projects/Project';
function App() {
  return (
    <div className="App">
    <main>
     < Header/>
    </main>
    <Hero/>
 <About/>
    <Skills/>
     
   <Experiences/>
   <Project/>
    <Contact/>
    <Footer/>
    </div>
  );
}

export default App;