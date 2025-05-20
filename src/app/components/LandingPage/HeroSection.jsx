import React from 'react';
import { Header } from './Header';
import Animations from '../Animations/Animations';
import Image from 'next/image';
import Image1 from '../../../../public/images/Group 80.png';
import Image2 from '../../../../public/images/Group 81.png';
import Image3 from '../../../../public/images/Group 82.png';
import Image4 from '../../../../public/images/Group 83.png';
const HeroSection = () => {
  return (
    <div className="overflow-x-hidden relative bg-white">
      <Header />

<div className='md:block hidden'>
<div className="absolute top-[200px] left-40 z-0  ">
        <Image src={Image3} alt="decor" width={188} height={170} className="rotate-[-12deg]" />
      </div>
      <div className="absolute top-[70px] right-40 z-0">
        <Image src={Image2} alt="decor" width={188} height={170} className="rotate-[-12deg]" />
      </div>
      <div className="absolute bottom-[180px] left-0 z-0">
        <Image src={Image4} alt="decor" width={188} height={170} className="rotate-[8deg]" />
      </div>
      <div className="absolute bottom-[200px] right-0 z-0">
        <Image src={Image1} alt="decor"width={188} height={170} className="rotate-[30deg]" />
      </div>
</div>


      {/* Main Hero Content */}
      <div className="relative z-10 mt-[100px] md:mt-[150px] px-4">
        <div className="flex justify-center items-center gap-2 md:gap-[10px]">
          <h1 className="text-4xl sm:text-5xl md:text-[80px] leading-[1.2] md:leading-[96px] font-semibold text-center">
            End-to-End Support for:<br className="hidden sm:block" />
            <span className="text-[#A270FF]">Web Design</span>
          </h1>
        </div>

        <div className="flex justify-center items-center px-2 sm:px-0">
          <h2 className="text-center mt-4 md:mt-[20px] text-sm sm:text-base md:text-lg">
            Zynspark blends creativity and strtegy to helo your brand grow.
          </h2>
        </div>

        <div className="flex justify-center items-center">
          <button className="text-white bg-[#A270FF] py-2 px-4 sm:py-[10px] sm:px-[20px] rounded-xl mt-4 sm:mt-[30px] text-sm sm:text-base">
            Contact Us
          </button>
        </div>
      </div>

      <Animations />
    </div>
  );
};

export default HeroSection;
