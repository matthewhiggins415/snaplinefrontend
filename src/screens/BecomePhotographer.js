import React from 'react';

// Styling
import { ScreenContainer } from '../styles/screens/BecomePhotographer.styles';

// Utils
import { BackBtn } from '../utils/BackBtn';

const BecomePhotographer = () => {
  return (
    <ScreenContainer>
      <BackBtn />
      <h1>Become Photographer</h1>
    </ScreenContainer>
  )
}

export default BecomePhotographer