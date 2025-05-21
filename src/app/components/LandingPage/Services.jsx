"use client";
import React, { useRef, useEffect, useState } from "react";
import { ServiceCard } from "../cards/ServiceCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";

const services = [
  {
    title: "Branding",
    description:
      "We create bold, memorable brand identities that cut through the noise. From strategy to visuals, we turn your vision into a cohesive brand experience.",
    image: "/images/service1.png",
  },
  {
    title: "Social Media Marketing",
    description:
      "We build and execute social strategies that grow your brand and spark engagement. From content planning to analytics, we handle it all—platform to post.",
    image: "/images/service1.png",
  },
  {
    title: "Pitch Deck",
    description:
      "We design compelling pitch decks that tell your story with clarity and impact. From visuals to messaging, we help you win over investors and clients.",
    image: "/images/service1.png",
  },
  {
    title: "Pitch Deck",
    description:
      "We design compelling pitch decks that tell your story with clarity and impact. From visuals to messaging, we help you win over investors and clients.",
    image: "/images/service1.png",
  },
  {
    title: "Pitch Deck",
    description:
      "We design compelling pitch decks that tell your story with clarity and impact. From visuals to messaging, we help you win over investors and clients.",
    image: "/images/service1.png",
  },
];

export const Services = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [swiperReady, setSwiperReady] = useState(false); // <-- to wait for refs to attach

  useEffect(() => {
    setSwiperReady(true); // Trigger render after refs are mounted
  }, []);

  return (
    <section className="text-center">
      <button className="text-white bg-black py-2 px-4 sm:py-[10px] sm:px-[20px] rounded-xl mt-4 sm:mt-[30px] text-sm sm:text-base">
        Our Services
      </button>
      <div className="w-[40%] mx-auto flex flex-col gap-8 text-center pt-8">
        <p className="text-[56px] leading-16">
          What We Do - Crafted for Your Success
        </p>
        <span className="text-[18px] leading-7">
          From SEO and branding to web design and content, Zynspark crafts
          strategies that deliver real results. Let’s bring your vision to life.
        </span>
      </div>

      <div className="py-12">
        {swiperReady && (
          <Swiper
            modules={[Navigation]}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            onInit={(swiper) => {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
              swiper.navigation.init();
              swiper.navigation.update();
            }}
            spaceBetween={0}
            slidesPerView={1.5}
            breakpoints={{
              640: { slidesPerView: 1.5 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {services.map((service, index) => (
              <SwiperSlide key={index}>
                <ServiceCard {...service} />
              </SwiperSlide>
            ))}
          </Swiper>
        )}

        <div className="flex justify-center mt-8 gap-4">
          <button ref={prevRef} className="">
            <ChevronLeft />
          </button>
          <button ref={nextRef} className="">
            <ChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
};
