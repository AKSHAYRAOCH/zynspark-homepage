'use client';

export default function ImpactSection() {
  const stats = [
    { value: '86%', label: 'Growth' },
    { value: '5', label: 'Current Projects' },
    { value: '90%', label: 'Customer Satisfaction' },
    { value: '200+', label: 'Number of Clients' },
  ];

  return (
    <div className="bg-[#f9f9f9] pb-60 ">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <button className="text-white bg-black py-2 px-4 sm:py-[10px] sm:px-[20px] rounded-xl mt-4 sm:mt-[30px] text-sm sm:text-base">
          Testimonials
        </button>

        <h2 className="text-3xl sm:text-4xl font-bold my-8">
          Here's a glimpse of our impact and success
        </h2>

        <p className="text-gray-500 mb-20 max-w-2xl mx-auto">
          Our results speak for themselves—driving engagement, conversions, and success.
        </p>

     
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 justify-items-center">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="border-l-2 border-[#892ED3] pl-12 h-[196px] w-[166px] flex flex-col justify-center items-start"
            >
              <h3 className="text-5xl font-semibold text-[#892ED3]">{stat.value}</h3>
              <p className="text-[#892ED3] font-normal text-2xl mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
    </div>
  );
}
