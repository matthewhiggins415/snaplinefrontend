import React, { useState, useEffect } from 'react';
import { Container, FeaturedContainer, SectionTitle, ImageContainer, Image, InfoContainer, Overlay } from '../../styles/components/FeaturedImages.styles'
import { getRecentUnpurchasedImages } from '../../api/image';
import { useNavigate } from 'react-router-dom';


const FeaturedImages = ({ user, notify }) => {
  const navigate = useNavigate();

  const [images, setImages] = useState([]);

  console.log("user", user)

  useEffect(() => {
    const getRecentImages = async () => {
      const response = await getRecentUnpurchasedImages()
      console.log("recent images: ", response)
      setImages(response.data.images)
    }

    getRecentImages()
  }, [])

  const handleClick = (id) => {
    navigate(`/public/photographer/${id}`);
  }
  
  return (
    <Container>
      <SectionTitle>Recent Images</SectionTitle>
      <FeaturedContainer>
        {images.map((image) => (
          <ImageContainer onClick={() => handleClick(image.photographer)} key={image._id}>
            <Overlay photographerName={image.photographerName} />
            <Image src={image.url}/>
            <InfoContainer>
              <p>{image.date}</p>
              <p>{image.sport}</p>
              <p>{image.location}</p>
            </InfoContainer>
          </ImageContainer>
        ))}
      </FeaturedContainer>
    </Container>
  )
}

export default FeaturedImages