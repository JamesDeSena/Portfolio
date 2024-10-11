import React, { useEffect, useState } from 'react';

const Skills = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const updateDarkMode = () => {
      setIsDarkMode(document.documentElement.classList.contains('dark'));
    };

    updateDarkMode();

    const observer = new MutationObserver(updateDarkMode);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });

    return () => observer.disconnect();
  }, []);

  const skills = [
    { 
      name: 'MongoDB', 
      src: 'https://img.icons8.com/?size=100&id=bosfpvRzNOG8&format=png&color=000000', 
      link: 'https://www.mongodb.com/docs/' 
    },
    { 
      name: 'Express.js', 
      src: 'https://img.icons8.com/?size=100&id=kg46nzoJrmTR&format=png&color=000000', 
      darkSrc: 'https://img.icons8.com/?size=100&id=kg46nzoJrmTR&format=png&color=FFFFFF', 
      link: 'https://expressjs.com/' 
    },
    { 
      name: 'React.js', 
      src: 'https://img.icons8.com/?size=100&id=58811&format=png&color=000000', 
      darkSrc: 'https://img.icons8.com/?size=100&id=58811&format=png&color=FFFFFF', 
      link: 'https://react.dev/learn' 
    },
    { 
      name: 'Node.js', 
      src: 'https://img.icons8.com/?size=100&id=hsPbhkOH4FMe&format=png&color=000000', 
      link: 'https://nodejs.org/en/docs/' 
    },
    { 
      name: 'HTML', 
      src: 'https://img.icons8.com/?size=100&id=20909&format=png&color=000000', 
      link: 'https://developer.mozilla.org/en-US/docs/Web/HTML' 
    },
    { 
      name: 'CSS', 
      src: 'https://img.icons8.com/?size=100&id=21278&format=png&color=000000', 
      link: 'https://developer.mozilla.org/en-US/docs/Web/CSS' 
    },
    { 
      name: 'Flutter', 
      src: 'https://img.icons8.com/?size=100&id=7I3BjCqe9rjG&format=png&color=000000', 
      link: 'https://flutter.dev/docs' 
    },
    { 
      name: 'Blender', 
      src: 'https://img.icons8.com/?size=100&id=65231&format=png&color=000000', 
      link: 'https://www.blender.org/support/' 
    },
    { 
      name: 'Figma', 
      src: 'https://img.icons8.com/?size=100&id=zfHRZ6i1Wg0U&format=png&color=000000', 
      link: 'https://help.figma.com/hc/en-us' 
    },
    { 
      name: 'Postman', 
      src: 'https://img.icons8.com/?size=100&id=IoYmHUxgvrFB&format=png&color=000000', 
      link: 'https://learning.postman.com/docs/getting-started/introduction/' 
    },
    { 
      name: 'VS Code', 
      src: 'https://img.icons8.com/?size=100&id=9OGIyU8hrxW5&format=png&color=000000', 
      link: 'https://code.visualstudio.com/docs' 
    },
    { 
      name: 'Github', 
      src: 'https://img.icons8.com/?size=100&id=62856&format=png&color=000000', 
      darkSrc: 'https://img.icons8.com/?size=100&id=62856&format=png&color=FFFFFF', 
      link: 'https://docs.github.com/en' 
    }
  ];

  return (
    <section
      id="skills"
      className="snap-start h-screen flex flex-col items-center justify-center px-4"
    >
      <h1 className="text-3xl md:text-4xl font-bold text-black dark:text-white mb-4">
        My Skills
      </h1>
      <p className="text-base md:text-lg text-black dark:text-white mb-8">
        Technologies and tools I am proficient in:
      </p>
      <div className="flex flex-wrap justify-center gap-8">
        {skills.map((skill, index) => (
          <a
            key={index}
            href={skill.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-center flex flex-col items-center justify-center transition-transform transform hover:scale-110"
          >
            <img
              src={isDarkMode && skill.darkSrc ? skill.darkSrc : skill.src}
              alt={skill.name}
              className="w-12 h-12 md:w-16 md:h-16 mb-2"
            />
            <p className="text-sm md:text-lg font-semibold dark:text-white">
              {skill.name}
            </p>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Skills;
