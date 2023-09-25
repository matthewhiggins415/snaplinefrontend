import React from 'react';

// Styles
import { ScreenContainer } from '../styles/screens/PhotographerProfile.styles'

// Utils 
import { BackBtn } from '../utils/BackBtn';

const PhotographerProfile = () => {
  return (
    <ScreenContainer>
      <BackBtn />
      <h1>Photographer Profile</h1>
    </ScreenContainer>
  )
}

export default PhotographerProfile