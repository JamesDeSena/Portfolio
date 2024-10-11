import React, { useRef, useEffect, useState } from 'react';
import emailjs from '@emailjs/browser';

const Contacts = () => {
  const form = useRef();
  const [isFormDirty, setIsFormDirty] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_6ncr7pn', 'template_jltakje', form.current, '4kytIpb4cmnRX9Bjf')
      .then(
        (result) => {
          console.log('SUCCESS!', result.text); 
          e.target.reset();
          setIsFormDirty(false);
        },
        (error) => {
          console.error('Error sending email:', error);
          alert(`Failed to send email. Error: ${error.text || error.message}`);
        },
      );
  };

  const handleInputChange = () => {
    setIsFormDirty(true);
  };

  useEffect(() => {
    const handleBeforeUnload = (event) => {
      if (isFormDirty) {
        event.preventDefault();
        event.returnValue = '';
        console.warn('Warning: You have unsaved changes. Are you sure you want to leave?');
      }
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [isFormDirty]);

  return (
    <section
      id="contacts"
      className="snap-start h-screen flex flex-col items-center justify-center px-4"
    >
      <h1 className="text-3xl md:text-4xl font-bold text-black dark:text-white mb-4">
        Get In Touch
      </h1>
      <p className="text-base md:text-lg text-black dark:text-gray-300 mb-8">
        Feel free to reach out for collaborations or just a friendly chat!
      </p>

      <form className="w-full max-w-md bg-white dark:bg-gray-800 p-4 md:p-6 rounded-lg shadow-md" ref={form} onSubmit={sendEmail}>
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-gray-700 dark:text-gray-200 font-semibold mb-2"
          >
            Name
          </label>
          <input
            type="text"
            name="from_name"
            className="w-full border border-gray-300 dark:border-gray-600 p-2 rounded-md text-sm md:text-base dark:bg-gray-700 dark:text-white"
            required
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-gray-700 dark:text-gray-200 font-semibold mb-2"
          >
            Email
          </label>
          <input
            type="email"
            name="from_email"
            className="w-full border border-gray-300 dark:border-gray-600 p-2 rounded-md text-sm md:text-base dark:bg-gray-700 dark:text-white"
            required
            onChange={handleInputChange} 
          />
        </div>
        <div className="mb-4 hidden">
          <input
            type="text"
            name="to_name"
            defaultValue="James De Sena"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="message"
            className="block text-gray-700 dark:text-gray-200 font-semibold mb-2"
          >
            Message
          </label>
          <textarea
            name="message"
            className="w-full border border-gray-300 dark:border-gray-600 p-2 rounded-md text-sm md:text-base dark:bg-gray-700 dark:text-white"
            rows="4"
            required
            onChange={handleInputChange} 
          ></textarea>
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-gray-500 dark:bg-gray-700 text-white px-4 py-2 rounded-md text-sm md:text-base hover:bg-gray-600 dark:hover:bg-gray-800 transition-colors"
          >
            Send
          </button>
        </div>
      </form>
    </section>
  );
};

export default Contacts;
