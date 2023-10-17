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
        <h1>Add Media</h1>
        <h4>Every piece of media you post will need a price, location, and date.</h4>
        <br></br>
        <LinkContainer>
          <UploadLink to="/addphotos">add your media</UploadLink>
        </LinkContainer>
      </Instructions>
    </ScreenContainer>
  )
}

export default AddScreen