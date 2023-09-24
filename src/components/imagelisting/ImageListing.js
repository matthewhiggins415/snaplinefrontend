import React from 'react';
import { ImageContainer, ImageListingInfo } from '../../styles/components/ImageListing.styles'

const ImageListing = () => {
  return (
    <ImageContainer>
      <div>
        <h1>Image</h1>
      </div>
      <ImageListingInfo>
        <h2>location</h2>
        <h2>sport</h2>
        <h2>price</h2>
        <h4>photographer</h4>
        <h4>photographer rating</h4>
      </ImageListingInfo>
    </ImageContainer>
  )
}

export default ImageListing