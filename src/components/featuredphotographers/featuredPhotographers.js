import React, { useState, useEffect } from 'react';
import { Container, FeaturedPhotographerImage, FeaturedNameContainer, FeaturedPhotographerContainer, SectionTitle, NameLink } from '../../styles/components/FeaturedPhotographers.styles';
import { getFeaturedPhotographers } from '../../api/photographer';

const FeaturedPhotographers = () => {
  const [photographers, setPhotographers] = useState([])

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
      <div>
        {photographers.map((photographer) => (
          <FeaturedPhotographerContainer key={photographer._id}>
            <FeaturedPhotographerImage src={photographer.picture} />
            <FeaturedNameContainer>
              <NameLink to="/piublic/profile">{photographer.firstName + " " + photographer.lastName}</NameLink>
              <p>32 subscribers</p>
            </FeaturedNameContainer>
          </FeaturedPhotographerContainer>
        ))}
      </div>

    </Container>
  )
}

export default FeaturedPhotographers