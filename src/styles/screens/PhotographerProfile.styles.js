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
  width: 100%;
  border: 1px solid black;
  padding: 20px;
`

export const ProfileImg = styled.image`
  width: 200px;
  height: 200px;
`

export const AlbumsContainer = styled.div`
  width: 100%;
  border: 1px solid black;
  padding: 20px;
`

export const Album = styled.div`
  border: 1px solid black;
  padding: 10px;
  width: fit-content;
  border-radius: 10px;
`