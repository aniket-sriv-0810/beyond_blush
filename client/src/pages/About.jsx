import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import AboutSection from '../components/About/AboutSection'
import AwardsSection from '../components/About/AwardsSection'
import CertificateGallery from '../components/About/CertificateGallery'

const About = () => {
  return (
    <>
      <Navbar/>
      <AboutSection/>
      <AwardsSection/>
      <CertificateGallery/>
    </>
  )
}

export default About
