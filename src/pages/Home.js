import React from 'react'
import Header from 'components/Home/Header.jsx'
import ServicesSection from 'components/Home/Services'
import About from 'components/Home/About'
import Projects from 'components/Home/Projects'

const Home = () => {
  return (
    <div>
      <Header/>
      <ServicesSection/>
      <About/>
      <Projects/>
    </div>
  )
}

export default Home