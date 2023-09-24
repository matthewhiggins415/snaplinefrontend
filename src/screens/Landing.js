import React from 'react';
import Navbar from '../components/Navbar';
import { ScreenContainer, ImageListingsContainer } from '../styles/screens/Landing.styles';
import ImageListing from '../components/imagelisting/ImageListing';

const Landing = () => {
  return (
    <ScreenContainer>
      <h1>Most Recent</h1>
      <ImageListingsContainer>
        <ImageListing />
      </ImageListingsContainer>
    </ScreenContainer> 
  )
}

export default Landing