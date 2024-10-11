import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contacts = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_6ncr7pn', 'template_jltakje', form.current, '4kytIpb4cmnRX9Bjf')
      .then(
        (result) => {
          console.log('SUCCESS!', result.text); 
          e.target.reset();
        },
        (error) => {
          console.error('Error sending email:', error);
          alert(`Failed to send email. Error: ${error.text || error.message}`);
        },
      );
  };

  return (
    <section
      id="contacts"
      className="snap-start h-screen flex flex-col items-center justify-center px-4"
    >
      <h1 className="text-3xl md:text-4xl font-bold text-black mb-4">
        Get In Touch
      </h1>
      <p className="text-base md:text-lg text-black mb-8">
        Feel free to reach out for collaborations or just a friendly chat!
      </p>

      <form className="w-full max-w-md bg-white p-4 md:p-6 rounded-lg shadow-md" ref={form} onSubmit={sendEmail}>
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-gray-700 font-semibold mb-2"
          >
            Name
          </label>
          <input
            type="text"
            name="from_name"
            className="w-full border border-gray-300 p-2 rounded-md text-sm md:text-base"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-gray-700 font-semibold mb-2"
          >
            Email
          </label>
          <input
            type="email"
            name="from_email"
            className="w-full border border-gray-300 p-2 rounded-md text-sm md:text-base"
            required
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
            className="block text-gray-700 font-semibold mb-2"
          >
            Message
          </label>
          <textarea
            name="message"
            className="w-full border border-gray-300 p-2 rounded-md text-sm md:text-base"
            rows="4"
            required
          ></textarea>
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-gray-500 text-white px-4 py-2 rounded-md text-sm md:text-base hover:bg-gray-600 transition-colors"
          >
            Send
          </button>
        </div>
      </form>
    </section>
  );
};

export default Contacts;
