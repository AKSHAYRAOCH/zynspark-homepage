import Image from 'next/image'
import React from 'react'
import Logo1 from '../../../../public/images/landingImages/brands/Blumi LOGO.svg'
import Logo2 from '../../../../public/images/landingImages/brands/VR LOGO.svg'

export const TrustedCompanies = () => {
  return (
    <section className='text-center'>
        <h1 className='text-[56px] leading-16 '>
        Trusted Companies
            </h1>
            <div className='flex justify-center pt-12 gap-8'>
            <Image src={Logo1} alt='logo' className='' />
            <Image src={Logo2} alt='logo' className='' />
            </div>
           
            </section>
  )
}

