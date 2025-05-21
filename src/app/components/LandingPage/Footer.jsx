import React from "react";
import { FaLinkedin } from "react-icons/fa6";
import { BsTwitterX } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import { RiFacebookCircleFill } from "react-icons/ri";

export const Footer = () => {
  return (
    <footer className="bg-black text-white py-20 px-4 h-[326px] flex flex-col justify-between">
      <div className="max-w-7xl mx-auto w-full flex flex-col items-center sm:items-start sm:flex-row justify-between">
        <div className="text-blue-500 font-semibold mb-1">Zynspark</div>
        <div className="flex gap-4 mb-4 sm:mb-0">
          <RiFacebookCircleFill />
          <FaInstagram />
          <BsTwitterX />
          <FaLinkedin />
        </div>
      </div>

      <div className="border-t border-gray-700 my-4" />

      <div className="flex flex-wrap justify-center items-center gap-4 text-sm text-gray-400">
  <a href="#" className="hover:underline">
    Privacy Policy
  </a>
  <a href="#" className="hover:underline">
    Terms of Service
  </a>
  <a href="#" className="hover:underline">
    Cookies Settings
  </a>
  <span>© 2025 Zynspark. All rights reserved.</span>
</div>

    </footer>
  );
};
