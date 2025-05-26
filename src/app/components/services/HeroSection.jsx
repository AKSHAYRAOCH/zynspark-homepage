'use client';
import Image from 'next/image';

const floatingImages = [
  { src: '/avatar1.png', style: 'top-10 left-10' },
  { src: '/avatar2.png', style: 'top-5 right-[30%]' },
  { src: '/avatar3.png', style: 'top-20 right-10' },
  { src: '/avatar4.png', style: 'bottom-10 left-10' },
  { src: '/avatar5.png', style: 'bottom-20 right-20' },
  { src: '/avatar6.png', style: 'bottom-10 right-[40%]' },
  { src: '/avatar6.png', style: 'bottom-10 right-[40%]' },
  { src: '/avatar6.png', style: 'bottom-10 right-[40%]' },
];

export default function ServiceHeroSection() {
  return (
    <div className="relative bg-black min-h-screen text-white flex flex-col justify-center items-center overflow-hidden ">
      {/* Floating Images */}
      {floatingImages.map((img, idx) => (
        <Image
          key={idx}
          src={img.src}
          alt={`avatar-${idx}`}
          width={50}
          height={50}
          className={`absolute ${img.style} rounded-md`}
        />
      ))}

      {/* Centered Content */}
      <div className="text-center">
        <h1 className="text-3xl md:text-5xl font-bold max-w-4xl">
          Seamless Services for a <br />
          Stronger{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-indigo-400">
            Digital Presence
          </span>
        </h1>
        <p className="text-sm md:text-base text-gray-300 mt-4 max-w-xl">
          We don’t just provide services; we create experiences that truly connect, engage, and deliver results.
        </p>
      </div>
    </div>
  );
}
