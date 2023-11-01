import React, { useState, useEffect } from 'react';
import { getAllImagesOfAnAlbum } from '../../api/image';
import { Container } from '../../styles/components/PricePhotos.styles';
import PricePhoto from '../pricephoto/pricePhoto';
import { Link } from 'react-router-dom';

const PricePhotos = ({ user, notify, albumID}) => {
  const [images, setImages] = useState([])

  useEffect(() => {
    console.log('fetch images');

    async function getImages(user, albumID) {
      try {
        console.log("albumID: ", albumID)
        const response = await getAllImagesOfAnAlbum(user, albumID);
        console.log("response", response)
        setImages(response.data.images)
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    getImages(user, albumID)
  }, [])

  return (
    <Container>
      { images?.length > 0 ? images.map((image) => (
        <PricePhoto user={user} image={image} notify={notify}/>
        )): <div></div>
      }
      <Link to={`/photographer/${user._id}`}>continue</Link>
    </Container>
  )
}

export default PricePhotos