import React from 'react'
import Header from 'components/Home/Header/Header.jsx'
import ServicesSection from 'components/Home/Services'
import About from 'components/Home/About'
import Projects from 'components/Home/Projects'
import Achievements from 'components/Home/Achievements'
import Family from 'components/Home/Family'
import styled from '@emotion/styled'
import Reviews from 'components/Home/Reviews'

const Home = () => {
  return (
    <Container>
      <Header/>
      <Achievements/>
      <About/>
      <Projects/>
      <ServicesSection/>
      <Family/>
      <Reviews />
    </Container>
  )
}

const Container = styled.div`
  position: relative;
`

export default Home