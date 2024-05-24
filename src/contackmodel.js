import React, { useState } from 'react';

const ContactModal = ({ isOpen, onClose }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = () => {
    setIsSubmitted(!isSubmitted);
  };

  return (
    <div className={`fixed z-10 inset-0 overflow-y-auto ${isOpen ? 'block' : 'hidden'}`}>
      <div className="flex items-center justify-center min-h-screen">
      <div className="bg-white rounded-lg p-8 shadow-xl w-full md:w-2/3 lg:w-1/2">
          {isSubmitted ? (
            <div>
              <h2 className="text-2xl font-bold mb-4">Thank you for your submission!</h2>
              <p>We will get back to you as soon as possible.</p>
              <button className="btnstart bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded" onClick={onClose}>Close</button>
            </div>
          ) : (
            <form className="space-y-4" onSubmit={handleSubmit}>
              <h2 className="text-2xl font-bold mb-4">Contact Form</h2>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                <input type="text" id="name" name="name" className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input type="email" id="email" name="email" className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                <textarea id="message" name="message" rows="4" className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-blue-500 focus:border-blue-500"></textarea>
              </div>
              <button type="submit" className="btnstart bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded">Submit</button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContactModal;
