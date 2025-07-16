import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import AboutSection from '../components/About/AboutSection'
import AwardsSection from '../components/About/AwardsSection'
import CertificateGallery from '../components/About/CertificateGallery'
import Footer from '../components/Footer/Footer'
import ScrollComponent from '../components/Home/ScrollComponent/ScrollComponent'



const About = () => {
  return (
    <>

      <Navbar/>
      <div className='md:pt-16'>
      <AboutSection/>
      </div>
      <AwardsSection/>
      <CertificateGallery/>
    <ScrollComponent/>

      <Footer/>
    </>
  )
}

export default About
