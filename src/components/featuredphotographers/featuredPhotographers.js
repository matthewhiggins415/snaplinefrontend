import React, { useState, useEffect } from 'react';
import { Container, FeaturedPhotographerImage, FeaturedNameContainer, PhotographerContainer, FeaturedPhotographerContainer, SectionTitle, Name } from '../../styles/components/FeaturedPhotographers.styles';
import { getFeaturedPhotographers } from '../../api/photographer';

const FeaturedPhotographers = () => {
  const [photographers, setPhotographers] = useState([])

  console.log("photographers: ", photographers)

  useEffect(() => {
    const getPhotographers = async () => {
      const response = await getFeaturedPhotographers();
      console.log(response);
      setPhotographers(response.data.users)
    }

    getPhotographers()
  }, [])

  return (
    <Container>
      <SectionTitle>Featured Photographers</SectionTitle>
      <PhotographerContainer>
        {photographers.map((photographer) => (
          <FeaturedPhotographerContainer to={`/public/photographer/${photographer._id}`} key={photographer._id}>
            <FeaturedPhotographerImage src={photographer.picture} />
            <FeaturedNameContainer>
              <Name>{photographer.firstName + " " + photographer.lastName}</Name>
            </FeaturedNameContainer>
          </FeaturedPhotographerContainer>
        ))}
      </PhotographerContainer>

    </Container>
  )
}

export default FeaturedPhotographers