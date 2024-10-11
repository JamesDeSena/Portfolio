import React, { useEffect, useState } from 'react';
import About from './sections/About';
import Projects from './sections/Projects';
import Skills from './sections/Skills';
import Contacts from './sections/Contacts';

import wpLight from '../assets/wp3.png';
import wpDark from '../assets/wp4.png';

const Home = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem('theme') === 'dark';
  });

  const [currentSection, setCurrentSection] = useState('about'); // Default to 'about'
  const [showScrollIndicators, setShowScrollIndicators] = useState(false); // New state for scroll indicators
  const sectionOrder = ['about', 'projects', 'skills', 'contacts']; // Define section order

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  useEffect(() => {
    const preventZoom = (event) => {
      if (event.ctrlKey || event.metaKey) {
        event.preventDefault();
        console.warn('Zooming with Ctrl or Command key is disabled on this page.');
      }
    };
    window.addEventListener('wheel', preventZoom, { passive: false });

    return () => {
      window.removeEventListener('wheel', preventZoom);
    };
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll('section');
    const options = {
      root: null, // use the viewport as the root
      threshold: 0.5 // trigger when 50% of the section is visible
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setShowScrollIndicators(false); // Hide indicators immediately on section change
          setTimeout(() => {
            setCurrentSection(entry.target.id);
            setShowScrollIndicators(true); // Show indicators after 500ms
          }, 300);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, options);
    sections.forEach(section => {
      observer.observe(section);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const handleKeyDown = (event) => {
    const currentIndex = sectionOrder.indexOf(currentSection);
    if (event.key === 'ArrowDown') {
      if (currentIndex < sectionOrder.length - 1) {
        const nextSection = sectionOrder[currentIndex + 1];
        setCurrentSection(nextSection);
        setShowScrollIndicators(false); // Hide indicators immediately
        document.getElementById(nextSection).scrollIntoView({ behavior: 'smooth' });
      }
    } else if (event.key === 'ArrowUp') {
      if (currentIndex > 0) {
        const prevSection = sectionOrder[currentIndex - 1];
        setCurrentSection(prevSection);
        setShowScrollIndicators(false); // Hide indicators immediately
        document.getElementById(prevSection).scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [currentSection]);

  const renderScrollIndicator = () => {
    if (!showScrollIndicators) return null; // Only render if true

    switch (currentSection) {
      case 'about':
        return (
          <div className="absolute left-1/2 bottom-4 flex flex-col items-center transform -translate-x-1/2">
            <span className="text-s text-gray-600 dark:text-gray-300">Scroll Down</span>
            <div className="w-5 h-5 animate-bounce mt-2">
              <svg
                className="w-full h-full"
                fill="none"
                viewBox="0 0 24 24"
                stroke={isDarkMode ? 'white' : 'black'}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 4v16m0 0l-4-4m4 4l4-4"
                />
              </svg>
            </div>
          </div>
        );

      case 'projects':
      case 'skills':
        return (
          <>
            <div className="absolute left-1/2 top-14 flex flex-col items-center transform -translate-x-1/2">
              <div className="w-5 h-5 animate-bounce mt-2">
                <svg
                  className="w-full h-full"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke={isDarkMode ? 'white' : 'black'}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 20V4m0 0l-4 4m4-4l4 4"
                  />
                </svg>
              </div>
              <span className="text-s text-gray-600 dark:text-gray-300">Scroll Up</span>
            </div>
            <div className="absolute left-1/2 bottom-4 flex flex-col items-center transform -translate-x-1/2">
              <span className="text-s text-gray-600 dark:text-gray-300">Scroll Down</span>
              <div className="w-5 h-5 animate-bounce mt-2">
                <svg
                  className="w-full h-full"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke={isDarkMode ? 'white' : 'black'}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4v16m0 0l-4-4m4 4l4-4"
                  />
                </svg>
              </div>
            </div>
          </>
        );

      case 'contacts':
        return (
          <div className="absolute left-1/2 top-14 flex flex-col items-center transform -translate-x-1/2">
            <div className="w-5 h-5 animate-bounce mt-2">
              <svg
                className="w-full h-full"
                fill="none"
                viewBox="0 0 24 24"
                stroke={isDarkMode ? 'white' : 'black'}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 20V4m0 0l-4 4m4-4l4 4"
                />
              </svg>
            </div>
            <span className="text-s text-gray-600 dark:text-gray-300">Scroll Up</span>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div
      className="absolute inset-0 bg-cover bg-opacity-20 transition-all duration-500"
      style={{
        backgroundImage: `url(${isDarkMode ? wpDark : wpLight})`,
      }}
    >
      <div className="h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth hide-scrollbar">
        <About />
        <Projects />
        <Skills />
        <Contacts />
      </div>

      {renderScrollIndicator()}

      <button
        onClick={toggleTheme}
        className="fixed bottom-4 right-4 p-3 rounded-full shadow-lg bg-gray-300 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 focus:outline-none transition-all duration-300"
        aria-label="Toggle Theme"
      >
        <img
          src={isDarkMode
            ? 'https://img.icons8.com/?size=100&id=648&format=png&color=FFFFFF'
            : 'https://img.icons8.com/?size=100&id=26031&format=png&color=000000'
          }
          alt="Theme Toggle Icon"
          className="w-6 h-6"
        />
      </button>
    </div>
  );
};

export default Home;
