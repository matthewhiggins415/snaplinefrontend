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
        <h4>If every piece of media is from the same price, same location, and date then upload by bulk in one group.</h4>
        <br></br>
        <h4>Do you want to add your media idividually or multiple at a time?</h4>
        <LinkContainer>
          <UploadLink to="/add/uploadsingle">add media one by one</UploadLink>
          <UploadLink to="/add/uploadmultiple">add media in bulk</UploadLink>
        </LinkContainer>
      </Instructions>
    </ScreenContainer>
  )
}

export default AddScreen