import React from 'react'
import Header from 'components/Home/Header.jsx'
import ServicesSection from 'components/Home/Services'
import About from 'components/Home/About'

const Home = () => {
  return (
    <div>
      <Header/>
      <ServicesSection/>
      <About/>
    </div>
  )
}

export default Home