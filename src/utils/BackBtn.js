import React from 'react';
import { useNavigate } from "react-router-dom";
import { BackIcon } from '../styles/icons/BackIcon';
import { BackButton } from '../styles/utils/BackBtn.styles'

export const BackBtn = () => {
  let navigate = useNavigate();
  return (
    <>
      <BackButton onClick={() => navigate(-1)}><BackIcon /></BackButton> 
    </>
  );
}