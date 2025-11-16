import React, { useEffect, useState } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Download, ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  const [text, setText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const titles = [
    "Full Stack Developer",
    "Problem Solver",
    "Tech Enthusiast"
  ];

  useEffect(() => {
    const title = titles[currentIndex];
    let index = 0;
    const timer = setInterval(() => {
      setText(title.slice(0, index));
      index++;
      if (index > title.length) {
        clearInterval(timer);
        setTimeout(() => {
          setCurrentIndex((prev) => (prev + 1) % titles.length);
        }, 2000);
      }
    }, 100);

    return () => clearInterval(timer);
  }, [currentIndex]);

  useEffect(() => {
    const cursorTimer = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => clearInterval(cursorTimer);
  }, []);

  const socialLinks = [
    {
      icon: <Github size={24} />,
      href: "https://github.com/Snehaa-B",
      label: "GitHub",
      color: "hover:text-gray-900 dark:hover:text-white"
    },
    {
      icon: <Linkedin size={24} />,
      href: "https://www.linkedin.com/in/sneha-bargale-783970349/",
      label: "LinkedIn",
      color: "hover:text-blue-600"
    },
    // {
    //   icon: <ExternalLink size={24} />,
    //   href: "https://leetcode.com/u/Sneha_13/",
    //   label: "LeetCode",
    //   color: "hover:text-orange-500"
    // },
    {
      icon: <Mail size={24} />,
      href: "mailto: snehabargali@gmail.com",
      label: "Email",
      color: "hover:text-red-500"
    }
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-20 relative overflow-hidden">
      <div className="container mx-auto text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="animate-fade-in-up">
            <div className="mb-8">
              <img
                src="https://images.pexels.com/photos/3184317/pexels-photo-3184317.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop&crop=face"
                alt="Sneha Bargale"
                className="w-32 h-32 rounded-full mx-auto mb-6 border-4 border-white dark:border-gray-800 shadow-xl transform hover:scale-105 transition-transform duration-300"
              />
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6">
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 bg-clip-text text-transparent">
                Sneha Bargale
              </span>
            </h1>
            
            <div className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 h-16 flex items-center justify-center">
              <span className="min-h-[2rem]">
                {text}
                {showCursor && <span className="animate-pulse ml-1">|</span>}
              </span>
            </div>
            
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
              {/* Passionate final year CSE student with expertise in full-stack development, 
              problem-solving, and creating innovative digital solutions. Always eager to 
              learn new technologies and tackle challenging projects. */}
              "Final-year student passionate about full-stack development and building impactful
               digital solutions.Skilled in problem-solving and driven by curiosity, I thrive on learning new technologies and tackling real-world challenges through code."
            </p>
          </div>

          <div className="animate-fade-in-up delay-300 flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button 
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center gap-2"
            >
              Get In Touch
              <Mail size={20} className="group-hover:rotate-12 transition-transform duration-300" />
            </button>
            
            <button 
              onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="group border-2 border-blue-600 text-blue-600 dark:text-blue-400 px-8 py-4 rounded-full font-semibold hover:bg-blue-600 hover:text-white dark:hover:text-white transition-all duration-300 flex items-center gap-2"
            >
              View My Work
              <ExternalLink size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
            </button>
            
            <a
              href="https://drive.google.com/file/d/1AXbSucj2_FbOXrLlsncAjoFerMZRkypB/view?usp=sharing"
              download
              className="group border-2 border-teal-600 text-teal-600 dark:text-teal-400 px-8 py-4 rounded-full font-semibold hover:bg-teal-600 hover:text-white dark:hover:text-white transition-all duration-300 flex items-center gap-2"
            >
              Download CV
              <Download size={20} className="group-hover:translate-y-1 transition-transform duration-300" />
            </a>
          </div>

          <div className="animate-fade-in-up delay-500 flex justify-center space-x-6 mb-16">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`group p-4 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 text-gray-700 dark:text-gray-300 ${link.color}`}
                aria-label={link.label}
              >
                <div className="group-hover:rotate-12 transition-transform duration-300">
                  {link.icon}
                </div>
              </a>
            ))}
          </div>

          <div className="animate-bounce">
            <ArrowDown 
              size={32} 
              className="mx-auto text-gray-400 dark:text-gray-600 cursor-pointer hover:text-blue-600 transition-colors duration-300"
              onClick={() => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })}
            />
          </div>
        </div>
      </div>
      
      {/* Floating elements for visual interest */}
      <div className="absolute top-1/4 left-10 w-20 h-20 bg-blue-200 dark:bg-blue-800 rounded-full opacity-20 animate-float"></div>
      <div className="absolute top-1/3 right-10 w-16 h-16 bg-purple-200 dark:bg-purple-800 rounded-full opacity-20 animate-float-delayed"></div>
      <div className="absolute bottom-1/4 left-20 w-24 h-24 bg-teal-200 dark:bg-teal-800 rounded-full opacity-20 animate-float"></div>
    </section>
  );
};

export default Hero;
