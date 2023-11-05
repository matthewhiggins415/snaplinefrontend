import React, { useState } from 'react';
import ImageListing from '../imagelisting/ImageListing';
import { ProfilePhotosContainer } from '../../styles/components/ProfilePhotos.styles'

const ProfilePhotos = ({ photos, user, notify }) => {
  return (
    <ProfilePhotosContainer>
      {photos.map((listing) => (
        <ImageListing key={listing._id} listing={listing} name={listing.photographerName} notify={notify}/>
      ))}
    </ProfilePhotosContainer>
  )
}

export default ProfilePhotos