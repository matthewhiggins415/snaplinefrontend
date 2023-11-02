import React, { useState, useEffect} from 'react';
import { Overlay, ImageListingContainer, ImageListingInfo, Image, BottomInfo, ReviewInfo, Location, PhotographerInfoLink, PriceContainer, OriginalPrice} from '../../styles/components/ImageListing.styles';
import { StarIcon } from '../../styles/icons/StarIcon';

const ImageListing = ({ notify, listing, user }) => {
  const { firstName, lastName } = user
  const photographerName = firstName + " " + lastName;

  return (
    <ImageListingContainer>
      <div>
        <Overlay photographerName={photographerName} />
        <Image src={listing.url} />
      </div>
      <ImageListingInfo>
        <Location to="/location/cronkitebeach">{listing.location}</Location>
        <p>{listing.date}</p>
        <BottomInfo>
          <PhotographerInfoLink to="/photographer/dougflaherty">
            <h4>{photographerName}</h4>
            <ReviewInfo>
              <StarIcon />
              <h4>4.95 (27)</h4>
            </ReviewInfo>
          </PhotographerInfoLink>
          <PriceContainer>
            <OriginalPrice>{"$" + listing.price}</OriginalPrice>
            <h2>{!listing.discountPrice ? '' : "$" + listing.discountPrice}</h2>
            <button title="add to cart" onClick={() => {notify('added to cart')}}>+</button>
          </PriceContainer>
        </BottomInfo>
      </ImageListingInfo>
    </ImageListingContainer>
  )
}

export default ImageListing