import React, { useEffect, useRef } from 'react';

import { ScreenContainer, UserContainer, UserInfo, ChangeImg, DeleteProfile } from '../styles/screens/UserProfile.styles';
import { BackBtn } from '../utils/BackBtn';
import { ProfileUser } from '../styles/icons/ProfileUser';

import { useNavigate } from "react-router-dom";

const UserProfile = ({ user, notify }) => {
  const navigate = useNavigate();
  const fileInputRef = useRef(null);


  const inputDate = new Date(user.createdAt);
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  const formattedDate = inputDate.toLocaleDateString('en-US', options);

  useEffect(() => {
    if (Object.keys(user).length === 0) {
        navigate("/");
      } 
  });

  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Handle the selected file, for example, upload it to a server or process it.
      console.log('Selected file:', file);
    }
  }
  

  const handleButtonClick = () => {
    // Trigger the hidden file input when the button is clicked.
    fileInputRef.current.click();
  };

  return (
    <ScreenContainer>
      <BackBtn />
      <UserContainer>
        {user.picture === '' ? <ProfileUser /> : <img alt="" src={user.picture} /> }
        <input
          type="file"
          accept="image/*" // Specify the accepted file types
          ref={fileInputRef}
          style={{ display: 'none' }}
          onChange={handleFileInputChange}
        />
        <button onClick={handleButtonClick}>Upload Media</button>
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