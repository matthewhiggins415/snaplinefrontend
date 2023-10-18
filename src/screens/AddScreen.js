import React, { useEffect } from 'react';
import { BackBtn } from '../utils/BackBtn';

import { ScreenContainer, Instructions, LinkContainer, UploadLink } from '../styles/screens/AddScreen.styles'

import { useNavigate } from "react-router-dom";

const AddScreen = ({ user }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (Object.keys(user).length === 0) {
      navigate("/");
    } 
  }, [])
  
  return (
    <ScreenContainer>
      <BackBtn />
      <Instructions>
        <h1>Create an Album</h1>
        <h4>Every album needs a location and date</h4>
        <h4>After add your photos to the album</h4>
        <br></br>
        <LinkContainer>
          {/* add a form here with a date and location input. This should hit route to create an album under user that we can add images and media to. */}
          <UploadLink to="/addphotos">add a new Album</UploadLink>
        </LinkContainer>
      </Instructions>
    </ScreenContainer>
  )
}

export default AddScreen