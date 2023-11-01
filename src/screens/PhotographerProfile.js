import React, { useState, useEffect } from 'react';
import { getAllAlbums } from '../api/album';
// Styles
import { ScreenContainer, AlbumsContainer, ProfileContainer, Album, ProfileImg } from '../styles/screens/PhotographerProfile.styles'

// Utils 
import { BackBtn } from '../utils/BackBtn';

const PhotographerProfile = ({ user }) => {
  console.log("user:", user)
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    const fetchAlbums = async (user) => {
      const response = await getAllAlbums(user)
      console.log("response: ", response)
      setAlbums(response.data.albums)
    }

    fetchAlbums(user)
  }, []);

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
        {albums.map((album) => (
          <Album key={album._id}>
            <p>{album.sport}</p>
            <p>{album.location}</p>
            <p>{album.images.length + " images"}</p>
            <p>{album.date}</p>
          </Album>
        ))}
      </AlbumsContainer>
      <div>
        <h1>Photos</h1>
      </div>
    </ScreenContainer>
  )
}

export default PhotographerProfile