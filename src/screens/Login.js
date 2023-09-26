import React from 'react';

// Utils
import { BackBtn } from '../utils/BackBtn';

// Styles
import { ScreenContainer, Container, Form, FormH1, FormBtn, FormInput } from '../styles/screens/Login.styles'


const Login = () => {
  return (
    <ScreenContainer>
      <BackBtn />
      <Container>
        <Form>
          <FormH1>Login</FormH1>
          <FormInput placeholder='email'/>
          <FormInput placeholder='password'/>
          <FormBtn>Continue</FormBtn>
        </Form>
      </Container>
    </ScreenContainer>
  )
}

export default Login