import React, { useState, useEffect } from 'react';
import jwt_decode from 'jwt-decode';
import { useNavigate } from "react-router-dom";
import { signIn } from '../api/auth'

// Utils
import { BackBtn } from '../utils/BackBtn';

// Styles
import { ScreenContainer, Container, Form, FormH1, FormBtn, FormInput } from '../styles/screens/Login.styles'

const divStyle = {
  "border": "none",
  "marginTop": "10px",
  "textAlign": "center"
}

const Login = ({ user, setUser, notify }) => {
  const navigate = useNavigate();

  const handleCallbackResponse = (response) => {
    console.log("encoded JWT token: ", response.credential)
    console.log(response)
    let userObject = jwt_decode(response.credential) 
    setUser(userObject)
    document.getElementById("signInDiv").hidden = true;
    navigate("/");
    notify('logged in')
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

  const [formData, setFormData] = useState({
    email: '', 
    password: ''
  })

  const { email, password } = formData

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  }

  const onSignIn = async (e) => {
    e.preventDefault()

    try {
      let res = await signIn(formData);
      console.log("res.data.user: ", res);
      setUser(res.data.user);
      navigate('/');
      notify('login successful');
    } catch(e) {
      setFormData({ email: '', password: '' })
      notify('login denied', 'danger')
    }
  }
  

  return (
    <ScreenContainer>
      <BackBtn />
      <Container>
        <Form onSubmit={onSignIn}>
          <FormH1>Login</FormH1>
          <FormInput type="text" name="email" value={email} placeholder="enter email" onChange={onChange} required/>
          <FormInput type="password" name="password" value={password} placeholder="enter pw" onChange={onChange} required/>
          <FormBtn type="submit">Continue</FormBtn>
          <div style={divStyle} id="signInDiv"></div>
        </Form>
      </Container>
    </ScreenContainer>
  )
}

export default Login