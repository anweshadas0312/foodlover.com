import React from 'react'
import HeroSection from '../../Components/HeroSection/HeroSection'
import About from '../../Components/About/About'
import Qualities from '../../Components/Qualities/Qualities'
import Menu from '../../Components/Menu/Menu'
import WhoAreWe from '../../Components/WhoAreWe/WhoAreWe'
import Team from '../../Components/Team/Team'
import Reservation from '../../Components/Reservation/Reservation'
import Footer from '../../Components/Footer/Footer'


const Home = () => {
  return (
    <>
    <HeroSection/>
    <About/>
    <Qualities/>
    <Menu/>
    <WhoAreWe/>
    <Team/>
    <Reservation/>
    <Footer/>
    
    </>
  )
}

export default Home