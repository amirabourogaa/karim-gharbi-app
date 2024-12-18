import React from 'react'
import Navbar from '../components/navbar/Navbar'
import HeroSection from '../components/hero/HeroSection'
import NewsSection from '../components/news/NewsSection'
import Services from '../components/services/Services'
import AboutSection from '../components/about/AboutSection'
import AboutSectionThree from '../components/about/AboutSectionThree'
import ServicesCarousel from '../components/services/ServicesCarousel'
import Footer from '../components/footer/Footer'

export default function Home() {
  return (
    <div>
       
        <HeroSection/>
        <NewsSection/>
        <Services/>
        <AboutSection/>
        <AboutSectionThree/>
        <ServicesCarousel/>
        <Footer/>
    </div>
  )
}
