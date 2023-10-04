import React from 'react';

import { ScreenContainer } from '../styles/screens/UserProfile.styles';
import { BackBtn } from '../utils/BackBtn';

const UserProfile = ({ user }) => {

  console.log("user from profile screen", user); 
  
  return (
    <ScreenContainer>
      <BackBtn />
      <h1>User Profile</h1>
    </ScreenContainer>
  )   
}

export default UserProfile