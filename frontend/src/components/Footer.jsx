import React, { useEffect, useState } from 'react';

const Footer = () => {
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
    <footer
      id="footer"
      className={`snap-start py-4 mt-8 ${isDarkMode ? 'bg-gray-900' : 'bg-gray-800'} text-${isDarkMode ? 'gray-200' : 'white'}`}
    >
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="text-center md:text-left">
          <p>© 2024 James De Sena. All rights reserved.</p>
          <p>Email: jamesdesena27@gmail.com | Phone: (+63) 966 235 5141</p>
        </div>
        <div className="flex space-x-4 mt-2 md:mt-0">
          <a href="https://www.linkedin.com/in/james-desena" target="_blank" rel="noopener noreferrer">
            <img
              src="https://img.icons8.com/?size=100&id=13930&format=png&color=FFFFFF"
              alt="LinkedIn"
              className="w-12 h-12 md:w-16 md:h-16 mb-2"
            />
          </a>
          <a href="https://github.com/JamesDeSena" target="_blank" rel="noopener noreferrer">
            <img
              src={`https://img.icons8.com/?size=100&id=62856&format=png&color=${isDarkMode ? 'FFFFFF' : '000000'}`}
              alt="GitHub"
              className="w-12 h-12 md:w-16 md:h-16 mb-2"
            />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <img
              src="https://img.icons8.com/?size=100&id=Xy10Jcu1L2Su&format=png&color=000000"
              alt="Instagram"
              className="w-12 h-12 md:w-16 md:h-16 mb-2"
            />
          </a>
        </div>
        <div className="mt-4 md:mt-0">
          <a href="/privacy" className={`text-${isDarkMode ? 'gray-400' : 'gray-600'} hover:text-white mx-2`}>Privacy Policy</a>
          <a href="/terms" className={`text-${isDarkMode ? 'gray-400' : 'gray-600'} hover:text-white mx-2`}>Terms of Service</a>
          <a href="/contact" className={`text-${isDarkMode ? 'gray-400' : 'gray-600'} hover:text-white mx-2`}>Contact Us</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
