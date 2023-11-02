import React, { useState, useEffect } from 'react';
import { getAllAlbums } from '../api/album';
// Styles
import { ScreenContainer, AlbumsContainer, AlbumListingsContainer, ProfileContainer, Album, ProfileImg, ShowMoreBtn } from '../styles/screens/PhotographerProfile.styles'

import ProfilePhotos from '../components/profilephotos/profilePhotos'

import { getAllImagesOfAnAlbum } from '../api/image'

// Utils 
import { BackBtn } from '../utils/BackBtn';

const PhotographerProfile = ({ user, notify }) => {
  const [albums, setAlbums] = useState([]);
  const [photos, setPhotos] = useState([]);
 
  useEffect(() => {
    const fetchAlbums = async (user) => {
      const response = await getAllAlbums(user)
      setAlbums(response.data.albums)
    }

    fetchAlbums(user)
  }, []);

  const getPhotos = async (user, id) => {
    try {
      const response = await getAllImagesOfAnAlbum(user, id); 
      setPhotos(response.data.images)
    } catch(error) {
      console.log(error)
    }
  }

  return (
    <ScreenContainer>
      <BackBtn />
      <ProfileContainer>
        <div>
          <ProfileImg src={user.picture}/>
          <div>
            <h4>{user.firstName}</h4>
            <h4>{user.lastName}</h4>
          </div>
        </div>
      </ProfileContainer>
      <AlbumsContainer>
        <h1>Recent Albums</h1>
        <AlbumListingsContainer>
          {albums.map((album) => (
            <Album 
              key={album._id} 
              onClick={() => {getPhotos(user, album._id)}}
            > 
              <p>{album.sport}</p>
              <p>{album.location}</p>
              <p>{album.images.length + " images"}</p>
              <p>{album.date}</p>
            </Album>
          ))}
        </AlbumListingsContainer>
        <ShowMoreBtn>show more</ShowMoreBtn>
      </AlbumsContainer>
      <ProfilePhotos photos={photos} user={user} notify={notify}/>
    </ScreenContainer>
  )
}

export default PhotographerProfile