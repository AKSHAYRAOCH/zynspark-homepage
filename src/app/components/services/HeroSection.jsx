'use client';
import Image from 'next/image';

const floatingImages = [
  { src: 'images/serviceimages/avatar1.svg', style: 'top-40 left-10', name: 'Ads Management' },
  { src: 'images/serviceimages/avatar2.svg', style: 'top-10 right-[60%]', name: 'Web Design' },
  { src: 'images/serviceimages/avatar3.svg', style: 'top-20 right-60', name: 'Social Media Marketing' },
  { src: 'images/serviceimages/avatar4.svg', style: 'bottom-40 left-10', name: 'Branding' },
  { src: 'images/serviceimages/avatar5.svg', style: 'top-[380px] right-20', name: 'Pitch Desk' },
  { src: 'images/serviceimages/avatar6.svg', style: 'bottom-60 right-[70%]', name: 'Content Writing' },
  { src: 'images/serviceimages/avatar7.svg', style: 'bottom-25 right-[35%]', name: 'Web development' },
  { src: 'images/serviceimages/avatar8.svg', style: 'bottom-32 right-[10%]', name: 'SEO Services' },
];

export default function ServiceHeroSection() {
  return (
    <div className="relative bg-black min-h-screen text-white flex flex-col justify-center items-center overflow-hidden">
      {/* Floating Images - Hidden on mobile, visible on md and up */}
      <div className="hidden md:block">
        {floatingImages.map((img, idx) => (
          <div key={idx} className={`absolute ${img.style} group`}>
            <Image
              src={img.src}
              alt={`avatar-${idx}`}
              width={50}
              height={50}
              className="rounded-md z-10"
            />
            <span className="absolute left-full top-1/2 -translate-y-1/2 ml-3 px-2 py-1 text-sm text-[#892ED3] rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
              {img.name}
            </span>
          </div>
        ))}
      </div>

      {/* Centered Content */}
      <div className="text-center z-20 px-4">
        <h1 className="text-3xl md:text-5xl font-bold max-w-4xl">
          Seamless Services for a <br />
          Stronger{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-indigo-400">
            Digital Presence
          </span>
        </h1>
        <p className="text-sm md:text-base text-gray-300 mt-4 max-w-xl">
          We don't just provide services; we create experiences that truly connect, engage, and deliver results.
        </p>
      </div>
    </div>
  );
}