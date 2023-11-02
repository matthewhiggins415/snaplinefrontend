import styled from 'styled-components';

export const ScreenContainer = styled.div`
  width: 100%;
  min-height: 90vh;
  padding: 40px; 
  font-size: medium;
  font-family: Arial, Helvetica, sans-serif;
  letter-spacing: 1.2px;

  h1 {
    padding: 10px;
  }
`

export const ProfileContainer = styled.div`
  width: 90%;
  padding: 20px;
  margin: 0 auto;
`

export const ProfileImg = styled.image`
  width: 200px;
  height: 200px;
`

export const AlbumsContainer = styled.div`
  width: 90%;
  padding: 20px;
  margin: 0 auto;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
`

export const AlbumListingsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-wrap: wrap;
  padding: 10px;
`

export const Album = styled.button`
  font-size: large;
  font-family: Arial, Helvetica, sans-serif;
  letter-spacing: 1.2px;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;  padding: 10px;
  width: fit-content;
  border-radius: 10px;
  background-color: white;
  text-align: start;
  min-width: 250px;
  border: none;
  cursor: pointer;
  transition: 150ms ease-in-out;

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  }

`

export const ShowMoreBtn = styled.button`
  position: relative;
  width: 20%;
  margin: 0 auto;
  margin-top: 10px;
  background-color: white;
  cursor: pointer;
  border: none;
`