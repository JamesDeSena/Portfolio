import React, { useEffect, useState } from 'react';
import profile from '../../assets/james.jpg';
import resume from '../../assets/De Sena_Resume.pdf';

const About = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const handleThemeChange = () => {
      setIsDarkMode(document.documentElement.classList.contains('dark'));
    };

    handleThemeChange();

    const observer = new MutationObserver(handleThemeChange);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="snap-start h-screen flex flex-col items-center justify-center px-4 text-center space-y-4">

      <h1 className="text-3xl md:text-4xl font-bold text-black dark:text-white mb-4">
        Developing Impactful Software Solutions
      </h1>

      <p className="text-base md:text-lg text-black dark:text-gray-300 mb-4">
        I'm James De Sena, a Full-Stack Developer focused on building functional applications.
      </p>

      <img
        src={profile}
        alt="James De Sena"
        className={`w-32 h-32 md:w-40 md:h-40 rounded-full mb-4 shadow-lg transform hover:scale-105 transition duration-300 ease-in-out border-4 ${isDarkMode ? 'border-white' : 'border-black'}`}
      />

      <p className="text-sm md:text-lg text-black dark:text-gray-300 max-w-md text-center">
        Information Systems graduate skilled in the MERN stack, seeking a MERN Developer role. Dedicated to creating user-friendly applications and improving operational efficiency.
      </p>

      <div className="relative mt-8 w-72 h-16 overflow-hidden rounded-full group border-4 border-gray-600 shadow-lg dark:border-gray-400">
        <a
          href={resume}
          download
          className="absolute z-10 w-full h-full flex items-center justify-center text-black dark:text-white font-bold text-xl transition-all duration-300 ease-in-out group-hover:text-white dark:group-hover:text-black"
        >
          Download Resume
        </a>

        <svg
          className="absolute bottom-0 w-full h-full transition-transform duration-500 ease-out group-hover:translate-y-0 translate-y-full"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill={isDarkMode ? 'white' : 'gray'}
            d="M0,64L48,80C96,96,192,128,288,133.3C384,139,480,117,576,120C672,123,768,149,864,165.3C960,181,1056,187,1152,181.3C1248,176,1344,160,1392,144L1440,128V320H0Z"
          />
        </svg>

        <div className="absolute inset-0 z-0 bg-transparent transition-colors duration-1000 ease-in-out group-hover:bg-custom-gray dark:group-hover:bg-white" />
      </div>

      <div className="mt-4 flex space-x-4">
        <a
          href="https://www.linkedin.com/in/james-desena"
          aria-label="LinkedIn"
          className="text-black dark:text-white transition-transform transform hover:scale-110 hover:text-black dark:hover:text-white duration-300"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://img.icons8.com/?size=100&id=13930&format=png&color=000000"
            alt="LinkedIn"
            className="w-12 h-12 md:w-16 md:h-16 mb-2"
          />
        </a>
        <a
          href="https://github.com/JamesDeSena"
          aria-label="GitHub"
          className="text-black dark:text-white transition-transform transform hover:scale-110 hover:text-black dark:hover:text-white duration-300"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={`https://img.icons8.com/?size=100&id=62856&format=png&color=${isDarkMode ? 'FFFFFF' : '000000'}`}
            alt="GitHub"
            className="w-12 h-12 md:w-16 md:h-16 mb-2"
          />
        </a>
      </div>
    </section>
  );
};

export default About;
