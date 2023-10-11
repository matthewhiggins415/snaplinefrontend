import React, { useEffect } from 'react';

import { ScreenContainer, UserContainer, UserInfo, ChangeImg, DeleteProfile } from '../styles/screens/UserProfile.styles';
import { BackBtn } from '../utils/BackBtn';
import { ProfileUser } from '../styles/icons/ProfileUser';

import { useNavigate } from "react-router-dom";

const UserProfile = ({ user }) => {
  const navigate = useNavigate();

  console.log(user.picture)

  const inputDate = new Date(user.createdAt);
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  const formattedDate = inputDate.toLocaleDateString('en-US', options);

  useEffect(() => {
    if (Object.keys(user).length === 0) {
        navigate("/");
      } 
  }, [])

  return (
    <ScreenContainer>
      <BackBtn />
      <UserContainer>
        {user.picture === '' ? <ProfileUser /> : <img alt="" src={user.picture} /> }
        <ChangeImg>edit image</ChangeImg>
        <UserInfo>
          <p><strong>profile created:</strong> {formattedDate}</p>
          <p><strong>email:</strong> {user.email}</p>
          <p><strong>is a photographer: </strong> {user.isPhotographer.toString()}</p>
        </UserInfo>
        <DeleteProfile>delete profile</DeleteProfile>
      </UserContainer>
    </ScreenContainer>
  )   
}

export default UserProfile