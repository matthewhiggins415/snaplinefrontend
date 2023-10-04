import React from 'react';

import { ScreenContainer } from '../styles/screens/Cart.styles';
import { BackBtn } from '../utils/BackBtn';

const Cart = ({ user }) => {
  return (
    <ScreenContainer>
      <BackBtn />
      <h1>Cart</h1>
    </ScreenContainer>
  )   
}

export default Cart