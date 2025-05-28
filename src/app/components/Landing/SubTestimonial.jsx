import React from "react";
import Image from "next/image";

const testimonials = [
  {
    name: "Name Surname",
    position: "Position, Company name",
    image: "/images/serviceimages/avatar1.svg",
    stars: 5,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.",
  },
  {
    name: "Name Surname",
    position: "Position, Company name",
    image: "/images/serviceimages/avatar1.svg",
    stars: 5,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.",
  },
  {
    name: "Name Surname",
    position: "Position, Company name",
    image: "/images/serviceimages/avatar1.svg",
    stars: 5,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.",
  },
  {
    name: "Name Surname",
    position: "Position, Company name",
    image: "/images/serviceimages/avatar1.svg",
    stars: 5,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.",
  },
  {
    name: "Name Surname",
    position: "Position, Company name",
    image: "/images/serviceimages/avatar1.svg",
    stars: 5,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.",
  },
];

const Star = ({ filled }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5"
    viewBox="0 0 20 20"
    fill={filled ? "#facc15" : "#e5e7eb"}
  >
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.158 3.561a1 1 0 00.95.69h3.746c.969 0 1.371 1.24.588 1.81l-3.03 2.2a1 1 0 00-.364 1.118l1.158 3.561c.3.921-.755 1.688-1.538 1.118l-3.03-2.2a1 1 0 00-1.175 0l-3.03 2.2c-.783.57-1.838-.197-1.538-1.118l1.158-3.561a1 1 0 00-.364-1.118l-3.03-2.2c-.783-.57-.38-1.81.588-1.81h3.746a1 1 0 00.95-.69l1.158-3.561z" />
  </svg>
);

const TestimonialCard = ({ name, position, image, stars, text }) => (
  <div className="rounded-2xl border border-gray-200 p-6 shadow-sm bg-white max-w-sm">
    <div className="flex mb-3">
      {[...Array(5)].map((_, i) => (
        <Star key={i} filled={i < stars} />
      ))}
    </div>
    <p className="text-sm text-gray-700 mb-4">"{text}"</p>
    <div className="flex items-center gap-3">
      <Image
        src={image}
        alt={name}
        width={40}
        height={40}
        className="rounded-full object-cover"
      />
      <div>
        <p className="text-sm font-semibold">{name}</p>
        <p className="text-xs text-gray-500">{position}</p>
      </div>
    </div>
  </div>
);

const SubTestimonials = () => {
  return (
    <div className="bg-white flex gap-10">
      <div className="w-[235px] h-[500px] overflow-y-auto hide-scrollbar mt-[200px]">
        <div className="grid grid-cols-1 gap-8 place-items-center">
          {testimonials.map((t, index) => (
            <TestimonialCard key={index} {...t} />
          ))}
        </div>
      </div>
      <div className="h-[700px] w-[235px] overflow-y-auto hide-scrollbar">
        <div className="grid grid-cols-1 gap-8 place-items-center">
          {testimonials.map((t, index) => (
            <TestimonialCard key={index} {...t} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SubTestimonials;
