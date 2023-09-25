import React from 'react';

// Utils
import { BackBtn } from '../utils/BackBtn';

// Styles
import { ScreenContainer } from '../styles/screens/Location.styles'


const LocationScreen = () => {
  return (
    <ScreenContainer>
      <BackBtn />
      <h1>Location</h1>
    </ScreenContainer>
  )
}

export default LocationScreen