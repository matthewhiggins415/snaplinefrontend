import React from 'react';
import { Container, BarIcon } from '../styles/components/Iconbar.styles';
import { SurfIcon } from '../styles/icons/Surfing';
import { ClimbingIcon } from '../styles/icons/Climbing'

const Iconbar = () => {
  return (
    <Container>
      <BarIcon>
        <SurfIcon />
      </BarIcon>
      <BarIcon>
        <ClimbingIcon />
      </BarIcon>
    </Container>
  )
}

export default Iconbar