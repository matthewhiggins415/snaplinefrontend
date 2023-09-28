import React, { useEffect } from 'react';
import jwt_decode from 'jwt-decode';
import { useNavigate } from "react-router-dom";

// Utils
import { BackBtn } from '../utils/BackBtn';

// Styles
import { ScreenContainer, Container, Form, FormH1, FormBtn, FormInput } from '../styles/screens/Register.styles'

const divStyle = {
  "border": "none",
  "marginTop": "10px",
  "textAlign": "center"
}

const Register = ({ user, setUser }) => {
  const navigate = useNavigate();

  const handleCallbackResponse = (response) => {
    console.log("encoded JWT token: ", response.credential)
    console.log(response)
    let userObject = jwt_decode(response.credential)
    console.log("userObject: ", userObject)
    setUser(userObject)
    document.getElementById("signInDiv").hidden = true;
    navigate("/");
  }

  useEffect (() => {
    /* global google */
    google.accounts.id.initialize({
      client_id: "11458210238-ijoqu8aqelskscjkm0f93nvo37c6q9rk.apps.googleusercontent.com", 
      callback: handleCallbackResponse
    })

    if (Object.keys(user).length > 0) {
      document.getElementById("signInDiv").hidden = true;
    } else {
      google.accounts.id.renderButton(
      document.getElementById("signInDiv"),
        { size: 'large', 'borderRadius': '20px' }
      )
    }
  })

  return (
    <ScreenContainer>
      <BackBtn />
      <Container>
        <Form>
          <FormH1>Register</FormH1>
          <FormInput placeholder='email' required/>
          <FormInput placeholder='password' required/>
          <FormInput placeholder='confirm password' required/>
          <FormBtn>Continue</FormBtn>
          <div style={divStyle} id="signInDiv"></div>
        </Form>
      </Container>
    </ScreenContainer>
  )
}

export default Register