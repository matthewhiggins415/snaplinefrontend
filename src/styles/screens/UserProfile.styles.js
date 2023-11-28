import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const ScreenContainer = styled.div`
  max-width: 100%;
  min-height: 90vh;
  padding: 40px; 
  font-size: medium;
  font-family: Arial, Helvetica, sans-serif;
  letter-spacing: 1.2px;

  h1 {
    padding: 10px;
  }
`

export const UserContainer = styled.div`
  width: 80%;
  min-width: 300px;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.08) 0px 4px 12px;
`

export const UserInfo = styled.div`
  margin: 30px auto;
`

export const UserImg = styled.img`
  
`

export const ChangeImg = styled.img`
  width: 200px;
  height: 200px;
  padding: 5px;
  background-color: #F5F5F5;
  border-radius: 50%;
  border: 2px solid #F5F5F5;
  object-fit: cover;

`

export const DeleteProfile = styled.button`
  font-size: medium;
  font-family: Arial, Helvetica, sans-serif;
  letter-spacing: 1.2px;
  width: 300px;
  padding: 15px;
  background-color: #F5F5F5;
  border-radius: 20px;
  border: none;
  cursor: pointer;
  transition: 150ms ease-in-out;

  &:hover {
    background-color: red;
    color: white;
  }
`

export const UserImageForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  input {
    width: 50%;
    padding: 10px 20px;
    border-radius: 10px;
    border: none;
    cursor: pointer;
    margin: 10px auto;
    background-color: white;
    transition: 150ms ease-in-out;

    &:hover {
      background-color: #F5F5F5;
    }
  }
`

export const UploadBtn = styled.button`
  padding: 10px 20px;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  margin: 10px auto;
  background-color: white;
  transition: 150ms ease-in-out;

  &:hover {
    background-color: #F5F5F5;
  }
`

export const RemoveBtn = styled.button`
  padding: 10px 20px;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  margin: 0px auto;
  background-color: white;
  transition: 150ms ease-in-out;

  &:hover {
    background-color: red;
    color: white;
  }
`

export const PhotographerContainer = styled.div`
  width: 80%;
  min-width: 300px;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  border-radius: 20px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.08) 0px 4px 12px;

  h3 {
    margin-bottom: 20px;
    margin-top: 20px;
  }

  div {
    display: flex;
    flex-wrap: wrap;
  }
`

export const PhotographerLink = styled(Link)`
  cursor: pointer;
  transition: 150ms ease-in-out;
  padding: 20px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  text-decoration: none;
  color: black;

  &:hover {
    background-color: #ececec;
  }
`

export const PhotographerImage = styled.img`
  height: 150px;
  width: 150px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 10px;
`