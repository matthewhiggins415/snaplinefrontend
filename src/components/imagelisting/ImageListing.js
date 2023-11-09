import React, { useState, useEffect} from 'react';
import { Overlay, ImageListingContainer, ImageListingInfo, Image, BottomInfo, ReviewInfo, Location, PhotographerInfoLink, PriceContainer, OriginalPrice} from '../../styles/components/ImageListing.styles';
import { StarIcon } from '../../styles/icons/StarIcon';
import { addToCart } from '../../api/cart';

const ImageListing = ({ notify, listing, name, user, setUser }) => {
  const handleAddToCart = async (user, id) => {
    if (Object.keys(user).length === 0) {
      notify('register or login to purchase', 'warning')
      return
    }

    try {
      const response = await addToCart(user, id)
      console.log("Response after adding to cart: ", response)

      if (response.status === 200) {
        notify('added to cart')
        setUser(response.data.user)
      }
    } catch(err) {
      console.log(err)
    }
  }

  return (
    <ImageListingContainer>
      <div>
        <Overlay photographerName={name} />
        <Image src={listing.url} />
      </div>
      <ImageListingInfo>
        <p>{listing.location}</p>
        <p>{listing.date}</p>
        <BottomInfo>
          <PhotographerInfoLink to={`/public/photographer/${listing.photographer}`}>
            <h4>{name}</h4>
            <ReviewInfo>
              <StarIcon />
              <h4>4.95 (27)</h4>
            </ReviewInfo>
          </PhotographerInfoLink>
          <PriceContainer>
            <OriginalPrice>{"$" + listing.price}</OriginalPrice>
            <h2>{!listing.discountPrice ? '' : "$" + listing.discountPrice}</h2>
            <button title="add to cart" onClick={() => {handleAddToCart(user, listing._id)}}>+</button>
          </PriceContainer>
        </BottomInfo>
      </ImageListingInfo>
    </ImageListingContainer>
  )
}

export default ImageListing