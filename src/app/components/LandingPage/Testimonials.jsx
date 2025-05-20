import React from 'react'

const testimonialCategories = [
  'Web Design',
  'App Development',
  'Brand Strategy',
  'Other',
  'Marketing',
]

export const Testimonials = () => {
  // Split categories into two groups
  const firstLine = testimonialCategories.slice(0, 3)
  const secondLine = testimonialCategories.slice(3)

  return (
    <section className=" px-10 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-screen-xl mx-auto pl-[120px] ">
        <div className="sm:text-left text-center mb-6">
          <button className="text-white bg-black py-2 px-4 sm:py-[10px] sm:px-[20px] rounded-xl text-sm sm:text-base">
            Testimonials
          </button>
        </div>

        <div className="sm:w-2/3 lg:w-1/2 sm:text-left text-center mx-auto sm:mx-0">
          <h1 className="text-3xl sm:text-4xl lg:text-[56px] font-semibold leading-[120%] py-5">
            What Our Clients Are Saying
          </h1>
          <p className="text-sm sm:text-base font-normal leading-[150%] font-roboto pb-8">
            We believe in building strong, lasting relationships with our clients. Hear how we’ve helped businesses succeed and grow, from brand building to digital transformation.
          </p>

          <div className="pb-4">
            <span className="text-base sm:text-lg font-semibold text-[#892ED3]">
              Filter by Service
            </span>
          </div>

          {/* First line - 3 categories */}
          <div className="flex flex-wrap gap-2.5 mb-4">
            {firstLine.map((category, idx) => (
              <p
                key={idx}
                className="bg-[#EBE8FF] py-2.5 px-4 rounded-full text-center text-[#892ED3] font-normal leading-[27px] text-sm cursor-pointer hover:bg-[#d5d0f5] transition"
              >
                {category}
              </p>
            ))}
          </div>

          {/* Second line - rest of the categories */}
          {secondLine.length > 0 && (
            <div className="flex flex-wrap gap-2.5">
              {secondLine.map((category, idx) => (
                <p
                  key={idx}
                  className="bg-[#EBE8FF] py-2.5 px-4 rounded-full text-center text-[#892ED3] font-normal leading-[27px] text-sm cursor-pointer hover:bg-[#d5d0f5] transition"
                >
                  {category}
                </p>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
