'use client';
import { FaBullhorn, FaPaintBrush, FaPencilAlt, FaThLarge, FaAd, FaFileAlt } from 'react-icons/fa';
import { IoIosSearch } from "react-icons/io";
import { CgWebsite } from "react-icons/cg";

const services = [
  { icon: <CgWebsite size={36} />, title: 'Web Development' },
  { icon: <FaPaintBrush size={36}  />, title: 'Web Design' },
  { icon: <FaFileAlt size={36}  />, title: 'Branding' },
  { icon: <FaBullhorn size={36}  />, title: 'Social-Media Marketing' },
  { icon: <FaPencilAlt size={36}  />, title: 'Content Writing' },
  { icon: <FaThLarge size={36}  />, title: 'Product Design' },
  { icon: <IoIosSearch  size={36}  />, title: 'SEO Services' },
  { icon: <FaAd size={36}  />, title: 'Ads Management' },
  { icon: <FaFileAlt size={36}  />, title: 'Pitch Deck' },
];

export default function ElevateBusiness() {
    const firstRow = services.slice(0, 5);
    const secondRow = services.slice(5);
  return (
    <section className="bg-white py-20 px-4">
      <div className="max-w-6xl mx-auto text-center">
      <button className="text-white bg-black py-2 px-4 sm:py-[10px] sm:px-[20px] rounded-xl mt-4 sm:mt-[30px] text-sm sm:text-base">
        Our Services
      </button>
        <h1 className="text-3xl md:text-4xl leading-12 font-semibold mt-6">
          Services Designed to <br /> Elevate Your Business
        </h1>
        <p className="text-[#000000B2] mt-4 text-[16px] leading-8 font-normal">
          Our services drive growth, engagement, and lasting impact with tailored solutions that exceed expectations.
        </p>

        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 place-items-center">
          {firstRow.map((service, index) => (
            <div
              key={index}
              className="bg-[#892ED314] text-[#892ED3] rounded-l w-[162px] h-[162px] p-8
              flex flex-col items-center justify-center text-center transition"
            >
              <div className="mb-2">{service.icon}</div>
              <span className="text-sm font-medium">{service.title}</span>
            </div>
          ))}
        </div>
             {/* Second Row - Centered */}
             <div className="mt-18 flex flex-wrap justify-center gap-20">
          {secondRow.map((service, index) => (
            <div
              key={index + 5}
              className="bg-[#892ED314] text-[#892ED3] rounded-l w-[162px] h-[162px] p-8
              flex flex-col items-center justify-center text-center transition"
            >
              <div className="mb-2">{service.icon}</div>
              <span className="text-sm font-medium">{service.title}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
