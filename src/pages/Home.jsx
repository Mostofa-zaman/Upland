import React from 'react'
import Menu from '../components/navigation'
import Banner from '../components/banner/Banner'
import Feature from '../components/feature/Feature'
import Popular from '../components/popular/Popular'
import Presentation from '../components/prsentation/Presentation'
import Easy from '../components/easy/Easy'
import AboutSlider from '../components/testimonial/AboutSlider'
import Get300 from '../components/get300/Get300'
import FAQ from '../components/faq/FAQ'


const Home = () => {
  return (
    <>
    <Menu/>
    <Banner/>
    <Feature/>
    <Popular/>
    <Presentation/>
    <Easy/>
    <AboutSlider/>
    <Get300/>
    <FAQ/>
    
    </>
  )
}

export default Home