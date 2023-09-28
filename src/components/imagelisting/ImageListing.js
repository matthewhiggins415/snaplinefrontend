import React from 'react';
import { Overlay, ImageListingContainer, ImageListingInfo, Image, BottomInfo, ReviewInfo, Location, PhotographerInfoLink, PriceContainer, OriginalPrice} from '../../styles/components/ImageListing.styles';
import { StarIcon } from '../../styles/icons/StarIcon';

const ImageListing = ({ notify }) => {
  return (
    <ImageListingContainer>
      <div>
        <Overlay />
        <Image src="https://www.surfer.com/.image/t_share/MTk2Mjc3MTUzMDM1Mzk2NDAw/ryan-burch-fiji.jpg" img />
      </div>
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
          <PriceContainer>
            <OriginalPrice>$25</OriginalPrice>
            <h2>$20</h2>
            <button title="add to cart" onClick={() => {notify('added to cart')}}>+</button>
          </PriceContainer>
        </BottomInfo>
      </ImageListingInfo>
    </ImageListingContainer>
  )
}

export default ImageListing