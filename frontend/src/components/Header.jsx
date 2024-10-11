import React, { useState } from 'react';
import profile from '../assets/logo.png';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <header className="w-full fixed top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0 flex items-end space-x-3">
            <img src={profile} alt="Profile" className="h-8" />
            <h1 className="text-2xl font-bold text-gray-800 dark:text-white">James De Sena</h1>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <button
                onClick={() => scrollToSection('about')}
                className="text-gray-800 dark:text-white hover:text-blue-500 px-3 py-2 rounded-md text-sm font-medium focus:outline-none"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('projects')}
                className="text-gray-800 dark:text-white hover:text-blue-500 px-3 py-2 rounded-md text-sm font-medium focus:outline-none"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection('skills')}
                className="text-gray-800 dark:text-white hover:text-blue-500 px-3 py-2 rounded-md text-sm font-medium focus:outline-none"
              >
                Skills
              </button>
              <button
                onClick={() => scrollToSection('contacts')}
                className="text-gray-800 dark:text-white hover:text-blue-500 px-3 py-2 rounded-md text-sm font-medium focus:outline-none"
              >
                Contact
              </button>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-800 dark:text-white hover:text-blue-500 focus:outline-none"
            >
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white dark:bg-gray-800 border-t border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <button
              onClick={() => {
                scrollToSection('about');
                setIsOpen(false);
              }}
              className="text-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium focus:outline-none"
            >
              About
            </button>
            <button
              onClick={() => {
                scrollToSection('projects');
                setIsOpen(false);
              }}
              className="text-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium focus:outline-none"
            >
              Projects
            </button>
            <button
              onClick={() => {
                scrollToSection('skills');
                setIsOpen(false);
              }}
              className="text-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium focus:outline-none"
            >
              Skills
            </button>
            <button
              onClick={() => {
                scrollToSection('contacts');
                setIsOpen(false);
              }}
              className="text-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium focus:outline-none"
            >
              Contact
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
