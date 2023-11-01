import React, { useState, useEffect } from 'react';
import { BackBtn } from '../utils/BackBtn';
import UploadProgressBar from '../components/uploadprogress/uploadProgress.js';
import CreateAlbum from '../components/createalbum/createAlbum.js';
import AddPhotos from '../components/addphotos/addPhotos';
import PricePhotos from '../components/pricephotos/pricePhotos';

import { ScreenContainer, Instructions, LinkContainer, UploadLink } from '../styles/screens/AddScreen.styles'

import { useNavigate } from "react-router-dom";

const AddScreen = ({ user, notify }) => {
  const [stepOne, setStepOne] = useState(true);
  const [stepTwo, setStepTwo] = useState(false);
  const [stepThree, setStepThree] = useState(false);
  const [albumID, setAlbumID] = useState('');

  const navigate = useNavigate();

  useEffect(() => {
    if (Object.keys(user).length === 0) {
      navigate("/");
    } 
  }, [])
  
  return (
    <ScreenContainer>
      <UploadProgressBar stepOne={stepOne} stepTwo={stepTwo} stepThree={stepThree}/>
      { stepOne && <CreateAlbum user={user} notify={notify} setStepTwo={setStepTwo} setStepOne={setStepOne} setAlbumID={setAlbumID}/> }
      { stepTwo && <AddPhotos user={user} notify={notify} setStepTwo={setStepTwo} setStepThree={setStepThree} albumID={albumID}/>}
      { stepThree && <PricePhotos user={user} notify={notify} albumID={albumID} /> }
    </ScreenContainer>
  )
}

export default AddScreen