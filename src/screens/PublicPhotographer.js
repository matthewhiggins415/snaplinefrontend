import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getAPhotographer } from '../api/photographer.js';
import { getAllPublicAlbums, getASingleAlbum } from '../api/album.js';
import { getAllImagesOfAnAlbum } from '../api/image.js';
import { ScreenContainer, PhotographerContainer, PhotographerInfo, PhotographerImage, SubscribeBtn, AlbumCollectionContainer, Album, ImageContainer, ImageContainerAlbumInfo, ImageListingsContainer } from '../styles/screens/PublicPhotographer.styles.js';
import ImageListing from '../components/imagelisting/ImageListing.js';

const PublicPhotographer = ({ user, notify }) => {
  const [photographer, setPhotographer] = useState({})
  const [albums, setAlbums] = useState([])
  const { id } = useParams();
  const [selectedAlbum, setSelectedAlbum] = useState({});
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);

  const photographerName = photographer.firstName + " " + photographer.lastName

  console.log("selectedAlbum: ", selectedAlbum)

  useEffect(() => {
    const retrievePhotographer = async (id) => {
      const response = await getAPhotographer(id);
      console.log("response: ", response)
      setPhotographer(response.data.user)
    }

    retrievePhotographer(id)
  }, [])

  useEffect(() => {
    const getAlbums = async (id) => {
      const albumResponse = await getAllPublicAlbums(id);
      console.log("albums: ", albumResponse);
      setAlbums(albumResponse.data.albums);
      setSelectedAlbum(albumResponse.data.albums[0]);

      setLoading(true)
      
      const imageResponse = await getAllImagesOfAnAlbum(albumResponse.data.albums[0]._id);
      console.log("image response", imageResponse);
      setImages(imageResponse.data.images)

      setLoading(false)
    }


    getAlbums(id)
  }, [])

  const handleClick = async (id) => {
    const getAlbum = await getASingleAlbum(id)
    console.log("get album: ", getAlbum)
    setSelectedAlbum(getAlbum.data.album)

    setLoading(true)
    
    const getImages = await getAllImagesOfAnAlbum(getAlbum.data.album._id)
    setImages(getImages.data.images)

    setLoading(false)

  }

  return (
    <ScreenContainer>
      <PhotographerContainer>
        <PhotographerInfo>
          <PhotographerImage src={photographer.picture} />
          <h3>{photographer.fullName}</h3>
          <p>{photographer?.albums?.length} Albums</p>
          <SubscribeBtn>subscribe</SubscribeBtn>
        </PhotographerInfo>
      </PhotographerContainer>
      <AlbumCollectionContainer>
        {albums.map((album) => (
          <Album onClick={() => handleClick(album._id)} key={album._id}>
            <h2>{album.location}</h2>
            <h2>{album.sport}</h2>
            <h2>{album.date}</h2>
          </Album>
        ))}
      </AlbumCollectionContainer>
      <ImageContainer>
        <ImageContainerAlbumInfo>
          <p>{selectedAlbum.location}</p> 
          <p>{selectedAlbum.sport}</p>    
          <p>{selectedAlbum.date}</p> 
        </ImageContainerAlbumInfo>
        <ImageListingsContainer>
          {loading === "true" ? <p>Loading..</p> : images.map((image) => (
            <ImageListing notify={notify} listing={image} name={image.photographerName}/>
          ))}
        </ImageListingsContainer>
      </ImageContainer>
    </ScreenContainer>
  )
}

export default PublicPhotographer