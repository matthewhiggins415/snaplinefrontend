import React from 'react';

// Styling
import { ScreenContainer } from '../styles/screens/ImageDetails.styles';

// Utils
import { BackBtn } from '../utils/BackBtn';

const ImageDetails = () => {
  return (
    <ScreenContainer>
      <BackBtn />
      <h1> Image Details</h1>
    </ScreenContainer>
  )
}

export default ImageDetails