import Title from 'designs/Title.jsx'
import React from 'react'
import { HeaderSection, HeaderContainer } from 'styles/Home/Header.js'
import Btn from 'designs/Button'
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';

const Header = () => {
  return (
    <HeaderSection>
      <HeaderContainer></HeaderContainer>
      <Title>العربي جيم</Title>
      <Title.Sub>هنحققلك هدفك بما يتناسب مع نظام حياتك وبالسعر المناسب ليك</Title.Sub>
      <Btn>أبدأ رحلتك <RocketLaunchIcon className='rock-icon' /> </Btn>
    </HeaderSection>
  )
}

export default Header