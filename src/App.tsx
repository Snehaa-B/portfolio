import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import AnimatedBackground from './components/AnimatedBackground';
import ScrollProgress from './components/ScrollProgress';

function App() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const stored = localStorage.getItem('darkMode');
    if (stored === null) {
      setDarkMode(true); // default to dark
      localStorage.setItem('darkMode', 'true');
    } else {
      setDarkMode(stored === 'true');
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('darkMode', darkMode.toString());
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      darkMode ? 'dark bg-gray-900' : 'bg-white'
    }`}>
      <ScrollProgress />
      <AnimatedBackground />
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <main className="relative">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
    </div>
  );
}

export default App;