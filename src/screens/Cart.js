import React, { useEffect } from 'react';

import { ScreenContainer } from '../styles/screens/Cart.styles';
import { BackBtn } from '../utils/BackBtn';

import { useNavigate } from "react-router-dom";

const Cart = ({ user }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (Object.keys(user).length === 0) {
        navigate("/");
      } 
  }, [])

  return (
    <ScreenContainer>
      <BackBtn />
      <h1>Cart</h1>
    </ScreenContainer>
  )   
}

export default Cart