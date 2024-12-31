import React from 'react'
import Navbar from '../Navbar/Navbar'
import HeroSection from '../HeroSection/HeroSection'
import Footer from '../Footer/Footer'
import { Outlet } from 'react-router-dom'
import Section1 from '../Section1/Section1'
import Section2 from '../section2/Section2'
import Section3 from '../section3/Section3'
import Section4 from '../section4/Section4'
import Blog from '../blogs/Blog';

const Layout = () => {
  return (
    <>
    <div className='m-5 md:px-36 mt-0'>
      <Navbar />
      <HeroSection />
      <Section2/>
      <Section1/>
      <Section3/>
      <Section4/>
      <Blog/>
    </div>
    <Footer/>
    </>
  )
}

export default Layout
