import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import HeroSection from '../components/Home/HeroSection/HeroSection'
import Footer from '../components/Footer/Footer'
import AboutSection from '../components/About/AboutSection'
import ImageGallery from '../components/Home/ImageSlideShow/ImageGallery'
import ServiceSection from '../components/Home/ServiceSection/ServiceSection'
import PricingSection from '../components/Home/PricingSection/PricingSection'
import FAQs from '../components/FAQs/FAQs'

const Home = () => {
  return (
    <div>
    <Navbar/>
    <div className="pt-0 md:pt-0"> {/* ~64-80px */}
  <HeroSection />
</div>
    <AboutSection/>
    <ImageGallery/>
    <ServiceSection/>
    <PricingSection/>
    <FAQs/>
    <Footer/>
    </div>
  )
}

export default Home
