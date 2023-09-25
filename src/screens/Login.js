import React from 'react';

// Utils
import { BackBtn } from '../utils/BackBtn';

// Styles
import { ScreenContainer } from '../styles/screens/Login.styles'


const Login = () => {
  return (
    <ScreenContainer>
      <BackBtn />
      <h1>Login</h1>
    </ScreenContainer>
  )
}

export default Login