import React from 'react';

const Projects = () => {
  const projectData = [
    {
      title: 'Web Scraper',
      description: `Backend Developer for a web scraping tool using Puppeteer and Cheerio. 
                    Deployed frontend on Netlify; hosted backend locally. Integrated 
                    Google Gemini API for data translation, employing a caching system 
                    for efficiency.`,
      github: 'https://github.com/yourusername/web-scraper',
    },
    {
      title: 'Booking System',
      description: `Independent Backend Developer designing a RESTful API and handling data. 
                    Deployed the backend locally and hosted the frontend on Netlify. 
                    Used Nodemailer to send email notifications and implemented PDF 
                    generation. Utilized JSON Web Tokens and bcrypt.js for secure 
                    authentication. Integrated Socket.io for real-time notifications on bookings.`,
      github: 'https://github.com/yourusername/booking-system',
    },
    {
      title: 'Blog Website',
      description: `Full Stack Developer for a blogging platform for a job fair using 
                    Express.js and MongoDB. Developed a Content Management System (CMS) 
                    with Quill for enhanced user experience. Deployed backend on Render 
                    and frontend on Netlify.`,
      github: 'https://github.com/yourusername/blog-website',
    },
    {
      title: 'QUIRCOM',
      description: `Full Stack Developer for a freelancing website using Express.js and 
                    MongoDB. Implemented RESTful APIs for data handling and integrated 
                    PayMongo for payment testing. Hosted backend on Render and frontend 
                    on Netlify. Runner-up for Best Thesis.`,
      github: 'https://github.com/yourusername/quircom',
    },
  ];

  return (
    <section
      id="projects"
      className="snap-start h-screen flex flex-col items-center justify-center px-4"
    >
      <h1 className="text-3xl md:text-4xl font-bold text-black mb-4">
        My Projects
      </h1>
      <p className="text-base md:text-lg text-black mb-8">
        Here are some of my recent projects.
      </p>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-4xl">
        {projectData.map((project, index) => (
          <div
            key={index}
            className="bg-white p-4 md:p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
          >
            <h2 className="text-xl md:text-2xl font-bold mb-2 uppercase">
              {project.title}
            </h2>
            <p className="text-sm md:text-base text-gray-600 text-justify">
              {project.description}
            </p>
            {/* <a
              href={project.github}
              className="text-blue-500 underline mt-4 block"
              target="_blank"
              rel="noopener noreferrer"
            >
              View on GitHub
            </a> */}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
