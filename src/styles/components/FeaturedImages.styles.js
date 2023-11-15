import styled from 'styled-components';

export const Container = styled.div`
  min-height: 75vh;
  padding: 20px;
  overflow: none;
  overflow-y: scroll;
`

export const FeaturedContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-wrap: wrap;
  overflow: none;
`

export const SectionTitle = styled.p`
  font-size: large;
  font-family: Arial, Helvetica, sans-serif;
  letter-spacing: 1.2px;
  margin-bottom: 10px;
`

export const ImageContainer = styled.button`
  display: flex;
  align-items: center;
  margin: 10px;
  flex-direction: column;
  text-decoration: none;
  color: black;
  cursor: pointer;
  transition: 150ms ease-in-out;
  padding: 10px;
  border-radius: 20px;
  outline: none;
  border: none;
  background-color: white;

  &:hover {
    background-color: #ECECEC;
  }
`

export const Overlay = styled.div`
  position: absolute;
  height: 300px;
  width: 200px;
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

export const Image = styled.img`
  height: 300px;
  width: 200px;
  object-fit: cover;
  border-radius: 15px;
`

export const InfoContainer = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: small;
  font-family: Arial, Helvetica, sans-serif;
  letter-spacing: 1.2px;
`