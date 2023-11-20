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

export const Overlay = styled.div`
  position: absolute;
  height: 300px;
  width: 300px;
  z-index: 5;
  border-radius: 15px;
  background: rgba(0, 0, 0, 0.4);

  &:after {
    position: absolute;
    width: 100%;
    height: 350px;
    overflow: hidden;
    top: -10px;
    left: 10px;
    content: ${(props) => (props.photographerName ? `"${props.photographerName + " " + props.photographerName}"` : '""')};
    transform: rotate(-30deg);
    font-size: 5em;
    color: rgba(255, 255, 255, 0.4);
  }
`

export const Location = styled(Link)`
  font-size: 1.5em;
  font-family: Arial, Helvetica, sans-serif;
  letter-spacing: .8px;
  text-decoration: none;
  color: black;
  z-index: 6;
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
  color: black;
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

export const PriceContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  button {
    padding: 0px 10px;
    margin-left: 20px;
    cursor: pointer;
    border: none;
    outline: none;
    background-color: #ECECEC;
    border-radius: 10px;
    font-size: 2em;
    color: black;
  }
`

export const OriginalPrice = styled.h2`
  text-decoration: line-through;
  color: gray;
  margin-right: 10px;
`