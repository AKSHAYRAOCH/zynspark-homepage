'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function IndustriesSection() {
  const services = [
    { title: 'Branding/ Strategy', img: '/images/serviceimages/brand.png' },
    { title: 'UI/UX Design', img: '/images/serviceimages/UIUX.png' },
    { title: 'Social Media Marketing', img: '/images/serviceimages/SocialMedia.png' },
  ];

  const industries = ['Tech', 'Real Estate', 'Pharma', 'Food'];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % industries.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-[#f7f7f7]">
      <div className="max-w-6xl mx-auto text-center">
        <button className="text-white bg-black py-2 px-4 sm:py-[10px] sm:px-[20px] rounded-xl mt-4 sm:mt-[30px] text-sm sm:text-base">
          Industries
        </button>

        <h2 className="text-3xl sm:text-4xl font-bold my-4 flex justify-center items-center gap-2">
          We work across{' '}
          <span className="relative h-[40px] w-[100px] inline-block">
            <AnimatePresence mode="wait">
              <motion.span
                key={industries[currentIndex]}
                initial={{ y: '100%', opacity: 0 }}
                animate={{ y: '0%', opacity: 1 }}
                exit={{ y: '-100%', opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="absolute left-0 top-0 w-full text-[#892ED3] text-center whitespace-nowrap"
              >
                {industries[currentIndex]}
              </motion.span>
            </AnimatePresence>
          </span>
        </h2>

        <p className="text-[#000000B2]  mb-10">
          At Prolancers, we craft powerful identities that engage, inspire, and make a lasting impression.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {services.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-[20px] p-20 shadow-sm hover:shadow-md transition"
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-48 object-contain mb-4"
              />
              <h3 className="font-semibold text-lg">{item.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
