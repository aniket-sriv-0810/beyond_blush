import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import AboutSection from '../components/About/AboutSection'
import AwardsSection from '../components/About/AwardsSection'
import CertificateGallery from '../components/About/CertificateGallery'
import Footer from '../components/Footer/Footer'
import MapComponent from '../components/Contact/MapComponent'

const About = () => {
  return (
    <>
      <Navbar/>
      <AboutSection/>
      <AwardsSection/>
      <CertificateGallery/>
      <MapComponent/>
      <Footer/>
    </>
  )
}

export default About
