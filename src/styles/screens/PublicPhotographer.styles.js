import styled from 'styled-components';

export const ScreenContainer = styled.div`
  min-height: 90vh;
  padding: 20px;
`

export const PhotographerContainer = styled.div`
  min-height: 300px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`

export const PhotographerInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
  margin-bottom: 50px;
`

export const PhotographerImage = styled.img`
  height: 200px;
  width: 200px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 10px;
`

export const SubscribeBtn = styled.button`
  width: 100%;
  padding: 10px;
  margin-top: 10px;
  background-color: black;
  border: none;
  outline: none;
  transition: 150ms ease-in-out;
  cursor: pointer;
  border-radius: 15px;
  color: white;
`

export const AlbumCollectionContainer = styled.div`
  width: 100%;
  min-height: 20vh;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  overflow-x: scroll;
  background-color: #ececec;
  overflow-x: scroll;
`

export const Album = styled.button`
  padding: 15px;
  border: 1px solid white;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  outline: none;
  max-height: 100px;
  cursor: pointer;
  background-color: white;

`

export const ImageContainer = styled.div`
  min-height: 50vh;
  padding: 20px;
`

export const ImageContainerAlbumInfo = styled.div`
  width: 90%;
  margin: 0 auto;
  margin-top: 25px;
  margin-bottom: 25px;
`

export const ImageListingsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`