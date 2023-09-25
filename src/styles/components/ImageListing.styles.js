import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ImageListingContainer = styled.button`
  width: fit-content;
  min-width: 250px;
  min-height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: white;
  border: none;
  transition: 150ms ease-in-out;
  border-radius: 15px;
  padding: 10px;

  &:hover {
    background-color: #F5F5F5;
  }
`

export const Location = styled(Link)`
  font-size: 1.5em;
  font-family: Arial, Helvetica, sans-serif;
  letter-spacing: .8px;
  text-decoration: none;
  color: black;
`

export const ImageLink = styled(Link)`
  cursor: pointer;
`

export const Image = styled.img`
  width: 300px;
  height: 300px;
  object-fit: cover;
  border-radius: 15px;
`

export const ImageListingInfo = styled.div`
  display: flex;
  flex-direction: column;
  text-align: start;
  width: 100%;
  margin-top: 5px;
`

export const ReviewInfo = styled.div`
  display: flex;
  margin-top: 5px;
`

export const BottomInfo = styled.div`
  display: flex;
  align-items: end;
  width: 100%;
  margin-top: 10px;
  justify-content: space-between;
`

export const PhotographerInfoLink = styled(Link)`
  color: black;
  text-decoration: none;
`