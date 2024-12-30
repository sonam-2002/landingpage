import React from 'react'
import Navbar from '../Navbar/Navbar'
import HeroSection from '../HeroSection/HeroSection'
import Footer from '../Footer/Footer'
import { Outlet } from 'react-router-dom'
import Section1 from '../Section1/Section1'
import Section2 from '../section2/Section2'
import Section3 from '../section3/Section3'

const Layout = () => {
  return (
    <>
    <div className='m-5 px-8 mt-0'>
      <Navbar />
      <HeroSection />
      <Section2/>
      <Section1/>
      <Section3/>
    </div>
    <Footer/>
    </>
  )
}

export default Layout
