import React from 'react'
import HeroSection from '../components/LandingPage/HeroSection'
import { TrustedCompanies } from '../components/LandingPage/TrustedCompanies'
import { Services } from '../components/LandingPage/Services'
import { Testimonials } from '../components/LandingPage/Testimonials'

export const LandingPage = () => {
  return (
    <div>
        <HeroSection />
        <TrustedCompanies />
        <Services />
        <Testimonials />
    </div>
  )
}
