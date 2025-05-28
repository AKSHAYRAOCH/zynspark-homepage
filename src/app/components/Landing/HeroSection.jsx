// HeroSection.tsx
"use client";

import React from "react";
import { Header } from "./Header";
import Animations from "../Animations/Animations";

import Image from "next/image";
import Image1 from "../../../../public/images/landingImages/HeroSection/Group 80.png";
import Image2 from "../../../../public/images/landingImages/HeroSection/Group 81.png";
import Image3 from "../../../../public/images/landingImages/HeroSection/Group 82.png";
import Image4 from "../../../../public/images/landingImages/HeroSection/Group 83.png";
import Link from "next/link";
import Arrow from "../../../../public/images/arrow.svg";

const HeroSection = () => {
  return (
    <section className="relative bg-white overflow-hidden h-screen">
      {/* 🧩 Matter.js Canvas Background */}
      <div className="absolute inset-0 z-0">
        <Animations />
      </div>

      {/* 🖼️ Background Decorative Images */}
      <div className="md:block hidden">
        <div className="absolute top-[60px] left-40 z-0 group">
          <Image
            src={Image3}
            alt="decor"
            width={188}
            height={170}
            className="rotate-[-12deg]"
          />
          <Image
            src={Arrow}
            alt="arrow"
            width={60}
            height={60}
            className="absolute left-full top-1/2 -translate-y-1/2 ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rotate-[40deg]"
          />
        </div>

        <div className="absolute top-[70px] right-40 z-0 group">
          <Image
            src={Image2}
            alt="decor"
            width={188}
            height={170}
            className="rotate-[-12deg]"
          />
          <Image
            src={Arrow}
            alt="arrow"
            width={60}
            height={60}
            className="absolute right-full top-1/2 ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rotate-[140deg] transform"
            style={{ transform: "rotate(140deg) scaleX(-1)" }}
          />
        </div>

        <div className="absolute bottom-[180px] left-0 z-0 group">
          <Image
            src={Image4}
            alt="decor"
            width={188}
            height={170}
            className="rotate-[8deg]"
          />
          <Image
            src={Arrow}
            alt="arrow"
            width={60}
            height={60}
            className="absolute left-full ml-2 opacity-0 group-hover:opacity-100  transition-opacity duration-300 rotate-120"
            style={{ top: "50%", transform: "translateY(-50%) scaleX(-1)" }}
          />
        </div>

        <div className="absolute bottom-[200px] right-0 z-0 group">
          <Image
            src={Image1}
            alt="decor"
            width={188}
            height={170}
            className="rotate-[30deg]"
          />
          <Image
            src={Arrow}
            alt="arrow"
            width={60}
            height={60}
            className="absolute -left-10 top-1/4 -translate-y-1/2 ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rotate-190"
          />
        </div>
      </div>

      {/* 🌟 Main Hero Content */}
      <div className="relative z-20 mt-[100px] md:mt-[150px] px-4">
        <div className="flex justify-center items-center gap-2 md:gap-[10px]">
          <h1 className="text-4xl sm:text-5xl md:text-[80px] leading-[1.2] md:leading-[96px] font-semibold text-center">
            End-to-End Support for:
            <br className="hidden sm:block" />
            <span className="text-[#A270FF]">Web Design</span>
          </h1>
        </div>

        <div className="flex justify-center items-center px-2 sm:px-0">
          <h2 className="text-center mt-4 md:mt-[20px] text-sm sm:text-base md:text-lg">
            Zynspark blends creativity and strategy to help your brand grow.
          </h2>
        </div>

        <div className="flex justify-center items-center">
          <Link
            href="/contact"
            className="text-white bg-[#A270FF] py-2 px-4 sm:py-[10px] sm:px-[20px] rounded-xl mt-4 sm:mt-[30px] text-sm sm:text-base inline-block text-center"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
