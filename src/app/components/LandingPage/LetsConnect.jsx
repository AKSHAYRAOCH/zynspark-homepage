"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

import ContactImage from "../../../../public/images/ContactUs.png";
import Link from "next/link";

export const LetsConnect = () => {
  return (
    <section className="text-center">
      <div className="bg-black rounded-xl w-full pt-[60px] px-[100px]">
        <h1 className="text-[80px] leading-[96px] font-semibold text-white">
          Transform Your Vision into Reality—Let’s Connect!
        </h1>
        <Link
          href="/contact"
          className="text-white bg-[#A270FF] py-2 px-4 sm:py-[10px] sm:px-[20px] rounded-xl mt-4 sm:mt-[30px] text-sm sm:text-base inline-block text-center"
        >
          Contact Us
        </Link>
        <div className="flex justify-center pt-20">
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
            }}
          >
            <Image
              src={ContactImage}
              width={500}
              height={369}
              alt="ContactImage"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
