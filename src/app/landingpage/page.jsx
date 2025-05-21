import React from 'react'
import HeroSection from '../components/LandingPage/HeroSection'
import { TrustedCompanies } from '../components/LandingPage/TrustedCompanies'
import { Services } from '../components/LandingPage/Services'
import { Testimonials } from '../components/LandingPage/Testimonials'
import { LetsConnect } from '../components/LandingPage/LetsConnect'
import AboutUs from '../components/LandingPage/AboutUs'
import OurTeam from '../components/LandingPage/OurTeam'

export const LandingPage = () => {
  return (
    <div>
        <HeroSection />
        <TrustedCompanies />
        <Services />
        <Testimonials />
        <AboutUs />
        <OurTeam />
        <LetsConnect />

    </div>
  )
}
