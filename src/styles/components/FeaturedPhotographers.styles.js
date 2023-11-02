import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  min-height: 30vh;
  width: 100%;
  padding: 20px;
`

export const SectionTitle = styled.p`
  font-size: large;
  font-family: Arial, Helvetica, sans-serif;
  letter-spacing: 1.2px;
  margin-bottom: 10px;
`

export const FeaturedPhotographerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const FeaturedPhotographerImage = styled.img`
  height: 170px;
  width: 170px;
  border-radius: 50%;
  border: 3px solid lightgray;
  padding: 5px;
  object-fit: cover;
`

export const FeaturedNameContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: fit-content;
  font-size: large;
  font-family: Arial, Helvetica, sans-serif;
  letter-spacing: 1.2px;
`

export const NameLink = styled(Link)`
  color: black;
  text-decoration: none;
  cursor: pointer;
  text-align: center;
`