import React from 'react'
import Header from 'components/Home/Header.jsx'
import ServicesSection from 'components/Home/Services'
import About from 'components/Home/About'
import Projects from 'components/Home/Projects'
import Achievements from 'components/Home/Achievements'
import Family from 'components/Home/Family'

const Home = () => {
  return (
    <div>
      <Header/>
      <ServicesSection/>
      <Projects/>
      <About/>
      <Achievements/>
      <Family/>
    </div>
  )
}

export default Home