import React from 'react';

export const Header = () => {
  return (
    <header className="flex flex-wrap items-center justify-between px-6 py-4 text-black shadow-md gap-4 md:flex-nowrap">
      {/* Logo */}
      <h1 className="text-2xl font-bold w-full md:w-auto text-center md:text-left">
        Zynspark
      </h1>

      {/* Navigation Links */}
      <nav className="w-full md:w-auto">
        <ul className="flex flex-wrap justify-center md:justify-start space-x-6 text-sm">
          <li>
            <a href="/" className="hover:text-[#A270FF] transition">Home</a>
          </li>
          <li>
            <a href="/service" className="hover:text-[#A270FF] transition">Service</a>
          </li>
          <li>
            <a href="/contact" className="hover:text-[#A270FF] transition">Contact Us</a>
          </li>
        </ul>
      </nav>

      <div className="w-full md:w-auto flex justify-center md:justify-start gap-4 px-4 py-2 bg-[#A270FF1A] rounded-xl text-sm">
      <a href="/pitchdesk" >
          Pitch Desk
        </a>
      </div>

      {/* Contact Button */}
      <nav className="w-full md:w-auto flex justify-center md:justify-end">
        <a href="/contact" className="px-4 py-2 bg-black text-white rounded-xl text-sm">
          Contact Us
        </a>
      </nav>
    </header>
  );
};
