import React from 'react';
import { ImageListingContainer, ImageListingInfo, ImageLink, Image, BottomInfo, ReviewInfo, Location, PhotographerInfoLink } from '../../styles/components/ImageListing.styles';
import { StarIcon } from '../../styles/icons/StarIcon';

const ImageListing = () => {
  return (
    <ImageListingContainer>
      <ImageLink to="/image/12345">
        <Image src="https://www.surfer.com/.image/t_share/MTk2Mjc3MTUzMDM1Mzk2NDAw/ryan-burch-fiji.jpg" img />
      </ImageLink>
      <ImageListingInfo>
        <Location to="/location/cronkitebeach">Fort Cronkite/Rodeo Beach</Location>
        <p>02/19/23</p>
        <BottomInfo>
          <PhotographerInfoLink to="/photographer/dougflaherty">
            <h4>Doug Flaherty</h4>
            <ReviewInfo>
              <StarIcon />
              <h4>4.95 (27)</h4>
            </ReviewInfo>
          </PhotographerInfoLink>
          <h2>$20</h2>
        </BottomInfo>

      </ImageListingInfo>
    </ImageListingContainer>
  )
}

export default ImageListing