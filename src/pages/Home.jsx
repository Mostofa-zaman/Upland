import React from 'react'
import Menu from '../components/navigation'
import Banner from '../components/banner/Banner'
import Feature from '../components/feature/Feature'
import Popular from '../components/popular/Popular'
import Presentation from '../components/prsentation/Presentation'
import Easy from '../components/easy/Easy'


const Home = () => {
  return (
    <>
    <Menu/>
    <Banner/>
    <Feature/>
    <Popular/>
    <Presentation/>
    <Easy/>
    
    </>
  )
}

export default Home