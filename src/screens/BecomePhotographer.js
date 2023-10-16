import React from 'react';
import { useNavigate, redirect as Redirect } from "react-router-dom";
// Styling
import { ScreenContainer, Instructions, ThingsYouNeedContainer, GetStarted } from '../styles/screens/BecomePhotographer.styles';

// Utils
import { BackBtn } from '../utils/BackBtn';

// API call 
import { createStandardConnectedAccount, createAccountLink } from '../api/stripe';
import { updateUserStripeId } from '../api/auth';

const BecomePhotographer = ({ user, notify }) => {
  const navigate = useNavigate();

  const handleGetStarted = async (user) => {
    // if not signed in then redirect to signin/register
    // if logged && user.isPhotographer is false THEN hit the stripe route to get started creating account
    // Update database with users stripe account id 
    console.log('clicked: ', user)

    if (Object.keys(user).length === 0) {
      notify('please login or register')
      navigate("/login");
      return
    }

    if (user.isPhotographer === true) {
      notify('already registered photographer')
      return
    } else {
      try {
        if (user.stripeId?.length === 0 || user.stripeId == null) {
          console.log("nothing in the user.stripeId: ", user.stripeId?.length)
          const response = await createStandardConnectedAccount()
          console.log("create connected account: ", response)
          console.log("create connected account data id: ", response.data.account.id)
          const account_id = response.data.account.id;
  
          const updateUser = await updateUserStripeId(user, account_id)
          console.log("updated user: ", updateUser)

          const accountLink = await createAccountLink(account_id)
          console.log("accountLink: ", accountLink.data.accountLink.url)
          return window.location.href = accountLink.data.accountLink.url
        } else {
          console.log("something in the user.stripeId: ", user.stripeId.length)
          const account_id = user.stripeId;
          const accountLink = await createAccountLink(account_id)
          console.log("accountLink: ", accountLink.data.accountLink.url)
          window.location.href = accountLink.data.accountLink.url
        }
      } catch(e) {
        console.log(e)
      }
    }
  }

  return (
    <ScreenContainer>
      <BackBtn />
      <Instructions>
        <h1>Become a photographer</h1>
        <div>
          <h4>Once completed, you will be able to accept payments directly. You will need the following things:</h4>
          <ThingsYouNeedContainer>
            <p>1. Signin/Register</p>
            <p>2. Phone Number</p>
            <p>3. Email</p>
            <p>4. Legal Name</p>
          </ThingsYouNeedContainer>
        </div>
        <GetStarted onClick={() => handleGetStarted(user)}>Get Started</GetStarted>
      </Instructions>
    </ScreenContainer>
  )
}

export default BecomePhotographer