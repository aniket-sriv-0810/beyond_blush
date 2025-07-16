import React from 'react'
import ServiceSection from '../components/Home/ServiceSection/ServiceSection'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import ScrollComponent from '../components/Home/ScrollComponent/ScrollComponent'
import FAQs from '../components/FAQs/FAQs';
const Services = () => {
  return (
    <>
    <Navbar/>
      <ServiceSection/>
      <ScrollComponent/>
      <FAQs/>
      <Footer/>
    </>
  )
}

export default Services
