import React from 'react';
import { ImageListingsContainer, ScreenContainer } from '../styles/screens/Landing.styles';
import ImageListing from '../components/imagelisting/ImageListing';

const Landing = ({ notify }) => {
  return (
    <ScreenContainer>
      <h1>Most Recent</h1>
      <ImageListingsContainer>
        <ImageListing notify={notify}/>
      </ImageListingsContainer>
    </ScreenContainer> 
  )
}

export default Landing