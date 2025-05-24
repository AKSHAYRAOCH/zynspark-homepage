'use client';

import Image from 'next/image';
import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    terms: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Integrate with your API here
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-10 relative">

      {/* Contact Card */}
      <div className="bg-white rounded-3xl shadow-lg overflow-hidden flex flex-col lg:flex-row w-full max-w-4xl">
      <div className="hidden lg:block lg:w-1/2  relative min-h-[500px]">
  <Image
    src="/images/landingImages/Contact.png"
    alt=""
    fill
    className="object-cover"
    role="presentation"
  />
</div>

        {/* Form Section */}
        <div className="w-full lg:w-1/2 p-8 sm:p-10">
          <h2 className="text-3xl font-bold text-center mb-2">Contact us</h2>
          <p className="text-center text-gray-500 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="name" className="block mb-1 font-medium text-sm">Name</label>
              <input
                id="name"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-purple-500"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block mb-1 font-medium text-sm">Email</label>
              <input
                id="email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-purple-500"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block mb-1 font-medium text-sm">Message</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 resize-none outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Type your message..."
              ></textarea>
            </div>

            <div className="flex items-start space-x-2 text-sm">
              <input
                id="terms"
                type="checkbox"
                name="terms"
                checked={formData.terms}
                onChange={handleChange}
                className="mt-1"
                required
              />
              <label htmlFor="terms">
                I accept the <a href="#" className="underline">Terms</a>
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-black text-white py-2 rounded-lg font-medium hover:bg-gray-800 transition"
            >
              Submit
            </button>
          </form>
        </div>

        {/* You could add an image or additional content here in lg:w-1/2 */}
   
      </div>
    </div>
  );
}
