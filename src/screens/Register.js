import React, { useState, useEffect } from 'react';
import jwt_decode from 'jwt-decode';
import { useNavigate, Link } from "react-router-dom";
import { signUp } from '../api/auth';

// Utils
import { BackBtn } from '../utils/BackBtn';

// Styles
import { ScreenContainer, Container, Form, FormH1, FormBtn, FormInput, ToLogin } from '../styles/screens/Register.styles'

const divStyle = {
  "border": "none",
  "marginTop": "10px",
  "textAlign": "center"
}

const Register = ({ user, setUser, notify }) => {
  const [formData, setFormData] = useState({
    email: '', 
    password: '', 
    passwordConfirmation: ''
  })

  const { email, password, passwordConfirmation } = formData

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  }

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

  const onRegister = async (e) => {
    e.preventDefault()
    try {
      // api call 
      if (formData.password !== formData.passwordConfirmation) {
        notify('passwords do NOT match', 'danger')
      } else if (!formData.password || !formData.passwordConfirmation || !formData.email) {
        notify('missing input', 'danger')
        return
      } else {
        let res = await signUp(formData)
        notify('registration successful') 
        setUser(res.data.user)
        localStorage.setItem('token', res.data.user.token)
        navigate("/");
      }

    } catch(e) {
      // empty form inputs
      setFormData({
        email: '', 
        password: '', 
        passwordConfirmation: ''
      })

      // danger message 
      notify('registration failed', 'danger')
    }
  }

  return (
    <ScreenContainer>
      <BackBtn />
      <Container>
        <Form onSubmit={onRegister}>
          <FormH1>Register</FormH1>
          <FormInput type="text" name="email" value={email} placeholder="email" onChange={onChange} required />
          <FormInput type="password" name="password" value={password} placeholder="password" onChange={onChange} required />
          <FormInput type="password" name="passwordConfirmation" value={passwordConfirmation} placeholder="confirm password" onChange={onChange} required />
          <FormBtn type="submit">Continue</FormBtn>
          {/* <div style={divStyle} id="signInDiv"></div> */}
          <ToLogin to="/login">to login</ToLogin>
        </Form>
      </Container>
    </ScreenContainer>
  )
}

export default Register