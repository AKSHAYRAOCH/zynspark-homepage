import React from 'react'

export const ServiceCard = ({ title, description, image }) => {
  return (
    <div className="rounded-3xl border p-4 shadow-md bg-white w-full max-w-xs sm:max-w-sm flex-shrink-0">


    <div className="rounded-3xl border p-4 shadow-md bg-white w-full max-w-xs sm:max-w-sm flex-shrink-0">
      <img
        src={image}
        alt={title}
        className="rounded-xl w-full h-[150px] object-cover"
      />
      <div className="border mt-4 rounded-2xl p-4">
        <p className="bg-black text-white inline-block px-4 py-2 rounded-xl mb-4">
          {title}
        </p>
        <p className="text-gray-700 text-sm">{description}</p>
      </div>
    </div>
    </div>
  )
}
