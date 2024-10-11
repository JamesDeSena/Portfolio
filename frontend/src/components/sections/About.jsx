import React from 'react';
import profile from '../../assets/james.jpg';
import resume from '../../assets/De Sena_Resume.pdf';

const About = () => {
  return (
    <section id="about" className="snap-start h-screen flex flex-col items-center justify-center px-4 text-center space-y-4">
      
      <h1 className="text-3xl md:text-4xl font-bold text-black mb-4">
        Developing Impactful Software Solutions
      </h1>

      <p className="text-base md:text-lg text-black mb-4">
        I'm James De Sena, a Full-Stack Developer focused on building functional applications.
      </p>

      <img
        src={profile}
        alt="James De Sena"
        className="w-24 h-24 md:w-32 md:h-32 rounded-full mb-4 shadow-lg transform hover:scale-105 transition duration-300 ease-in-out"
      />

      <p className="text-sm md:text-lg text-black max-w-md text-center">
        Information Systems graduate skilled in the MERN stack, seeking a MERN Developer role. Dedicated to creating user-friendly applications and improving operational efficiency.
      </p>

      <div className="relative mt-8 w-72 h-16 overflow-hidden rounded-full group border-4 border-gray-600 shadow-lg">
        <a
          href={resume}
          download
          className="absolute z-10 w-full h-full flex items-center justify-center text-black font-bold text-xl transition-all duration-300 ease-in-out group-hover:text-white"
        >
          Download Resume
        </a>

        <svg
          className="absolute bottom-0 w-full h-full transition-transform duration-500 ease-out group-hover:translate-y-0 translate-y-full"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="gray"
            d="M0,0L48,16C96,32,192,64,288,69.3C384,75,480,53,576,56C672,59,768,85,864,101.3C960,117,1056,123,1152,117.3C1248,112,1344,96,1392,80L1440,64L1440,320L0,320Z"
          />
        </svg>

        <div className="absolute inset-0 z-0 bg-transparent transition-colors duration-1000 ease-in-out group-hover:bg-custom-gray" />
        </div>

      <div className="mt-4 flex space-x-4">
        <a
          href="https://www.linkedin.com/in/james-desena"
          aria-label="LinkedIn"
          className="text-black transition-transform transform hover:scale-110 hover:text-black duration-300"
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
          className="text-black transition-transform transform hover:scale-110 hover:text-black duration-300"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://img.icons8.com/?size=100&id=62856&format=png&color=000000"
            alt="GitHub"
            className="w-12 h-12 md:w-16 md:h-16 mb-2"
          />
        </a>
      </div>
    </section>
  );
};

export default About;
