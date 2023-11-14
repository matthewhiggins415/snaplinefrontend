import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getAPhotographer, subscribeToPhotographer, unsubscribeToPhotographer } from '../api/photographer.js';
import { getAllPublicAlbums, getASingleAlbum } from '../api/album.js';
import { getAllImagesOfAnAlbum } from '../api/image.js';
import { BackBtn } from '../utils/BackBtn';
import { ScreenContainer, PhotographerContainer, PhotographerInfo, PhotographerImage, SubscribeBtn, AlbumCollectionContainer, Album, ImageContainer, ImageContainerAlbumInfo, ImageListingsContainer } from '../styles/screens/PublicPhotographer.styles.js';
import ImageListing from '../components/imagelisting/ImageListing.js';

const PublicPhotographer = ({ user, notify, setUser }) => {
  const [photographer, setPhotographer] = useState({})
  const [albums, setAlbums] = useState([])
  const { id } = useParams();
  const [selectedAlbum, setSelectedAlbum] = useState({});
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [alreadySubscribed, setAlreadySubscribed] = useState(false);

  // get the photographer 
  useEffect(() => {
    const retrievePhotographer = async (id) => {
      const response = await getAPhotographer(id);
      setPhotographer(response.data.user)
    }

    retrievePhotographer(id)
  }, [])

  // get the albums of photographer
  useEffect(() => {
    const getAlbums = async (id) => {
      const albumResponse = await getAllPublicAlbums(id);
      setAlbums(albumResponse.data.albums);
      setSelectedAlbum(albumResponse.data.albums[0]);

      setLoading(true)
      
      if (albumResponse.data.albums.length > 0) {
        const imageResponse = await getAllImagesOfAnAlbum(albumResponse.data.albums[0]._id);
        setImages(imageResponse.data.images)
      }

      setLoading(false)
    }


    getAlbums(id)
  }, [])

  // logic if user is subscribed already or not
  useEffect(() => {
    if (Object.keys(user).length > 0) {
      if (user?.subscribedTo.indexOf(id) !== -1) {
        setAlreadySubscribed(true)
      }
    }
  }, [])

  // handle selecting an album
  const handleClick = async (id) => {
    const getAlbum = await getASingleAlbum(id)
    setSelectedAlbum(getAlbum.data.album)

    setLoading(true)
    
    const getImages = await getAllImagesOfAnAlbum(getAlbum.data.album._id)
    setImages(getImages.data.images)

    setLoading(false)

  }

  // handle subscribe to photographer
  const handleSubscribe = async (user, id) => {
    if (Object.keys(user).length > 0) {
      try {
        const response = await subscribeToPhotographer(user, id);
        setUser(response.data.user)
        setAlreadySubscribed(true)
        notify("subscribed")
      } catch(error) {
        console.log(error);
      }
    } else { 
      notify('login/register to subscribe', 'warning')
    }
  }

  // handle unsubscribe to photographer
  const handleUnsubscribe = async (user, id) => {
    try {
      const response = await unsubscribeToPhotographer(user, id)
      console.log(response)
      setUser(response.data.user)
      setAlreadySubscribed(false)
      notify('unsubscribed')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <ScreenContainer>
      <BackBtn />
      <PhotographerContainer>
        <PhotographerInfo>
          <PhotographerImage src={photographer?.picture} />
          <h3>{photographer?.fullName}</h3>
          <p>{photographer?.albums?.length} Albums</p>
         {alreadySubscribed  === false ? <SubscribeBtn onClick={() => handleSubscribe(user, id)}>subscribe</SubscribeBtn> : <SubscribeBtn onClick={() => handleUnsubscribe(user, id)}>unsubscribe</SubscribeBtn>}
        </PhotographerInfo>
      </PhotographerContainer>
      <AlbumCollectionContainer>
        {Object.keys(albums).length > 0 ? albums?.map((album) => (
          <Album onClick={() => handleClick(album._id)} key={album._id}>
            <h2>{album.location}</h2>
            <h2>{album.sport}</h2>
            <h2>{album.date}</h2>
          </Album>
        )) : <p>no albums</p>
      }
      </AlbumCollectionContainer>
      <ImageContainer>
        {Object.keys(albums).length > 0 ? <ImageContainerAlbumInfo>
          <p>{selectedAlbum.location}</p> 
          <p>{selectedAlbum.sport}</p>    
          <p>{selectedAlbum.date}</p> 
        </ImageContainerAlbumInfo> : <p>no albums selected</p>}
        <ImageListingsContainer>
          {loading === "true" ? <p>Loading..</p> : images.map((image) => (
            <ImageListing key={image._id} notify={notify} listing={image} user={user} name={image.photographerName} setUser={setUser}/>
          ))}
        </ImageListingsContainer>
      </ImageContainer>
    </ScreenContainer>
  )
}

export default PublicPhotographer