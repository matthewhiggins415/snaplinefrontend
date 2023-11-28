import React, { useState, useEffect } from 'react';

import { ScreenContainer, UserContainer, UserInfo, ChangeImg, DeleteProfile, UploadBtn, RemoveBtn, UserImageForm, PhotographerContainer, PhotographerImage, PhotographerLink } from '../styles/screens/UserProfile.styles';
import { BackBtn } from '../utils/BackBtn';
import { ProfileUser } from '../styles/icons/ProfileUser';
import { deleteUser } from '../api/auth';

// functionality for upload and user update
import { uploadUserProfImage } from '../api/firebase';
import { updateUserProfileImage } from '../api/auth';
import { getPhotographersUsersSubscribedTo } from '../api/photographer';

import { useNavigate } from "react-router-dom";

const UserProfile = ({ user, notify, setUser, handleSignOut }) => {
  const navigate = useNavigate();
  const [files, setFiles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [photographers, setPhotographers] = useState([]);

  const inputDate = new Date(user.createdAt);
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  const formattedDate = inputDate.toLocaleDateString('en-US', options);

  
  useEffect(() => {
    if (Object.keys(user).length === 0) {
      navigate("/");
    } else {
      const getPhotographers = async (user) => {
        let response = await getPhotographersUsersSubscribedTo(user);
        setPhotographers(response.data.photographers)
      }

      getPhotographers(user)
    }
  }, []); 

  const onImageChange = (e) => {
    const selectedFiles = e.target.files;
    setFiles(selectedFiles);
  }

  const removeFiles = () => {
    setFiles([])
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (files.length === 0) {
      notify('please select an image', 'warning')
    }

    const formData = new FormData();

    for (const file of files) {
      formData.append('images', file);
      console.log("files: ", files)

      try {
        setLoading(true)
        // upload the image to firebase 
        const response = await uploadUserProfImage(user, formData);
        console.log("response from uploading new user image", response)
        let newImgUrl = response.data.downloadURLs[0]
        console.log("newImgUrl", newImgUrl)

        console.log("response.data.downloadURLs.length: ", response.data.downloadURLs.length)

        // if response successful do some shit
        if (response.data.downloadURLs.length > 0) {
          //make api call to update user profile image
          const userImageChangeRes = await updateUserProfileImage(user, newImgUrl)
          console.log("response from server user updated: ", userImageChangeRes)
          setUser(userImageChangeRes.data.updatedUser);
          setLoading(false);
          setFiles([]);
        }

      } catch (error) {
        console.error('Error uploading images:', error);
        notify('Error uploading media', 'warning');
      }
    }
    console.log(e)
  }

  const handleDeleteUser = async () => {
    let res = await deleteUser(user)
    console.log("delete profile response", res)

    if (res.data.msg === "successfully deleted user") {
      handleSignOut()
    } else {
      notify('something went wrong', 'warning')
    }
  }

  return (
    <ScreenContainer>
      <BackBtn />
      <UserContainer>
        {user.picture === '' ? <ProfileUser /> : <ChangeImg alt="" src={user.picture} /> }
        {loading ?
          <h1>Loading...</h1>
        : <UserImageForm onSubmit={handleSubmit}> 
          <input
            type="file"
            accept="image/*" // Specify the accepted file types
            onChange={onImageChange}
          />
          {files.length > 0 ? <UploadBtn type="submit">Upload Media</UploadBtn> : <></>}
        </UserImageForm>}
        { files.length && !loading > 0 ? <RemoveBtn onClick={removeFiles}>remove file</RemoveBtn> : <></> }
        <UserInfo>
          <p><strong>profile created:</strong> {formattedDate}</p>
          <p><strong>email:</strong> {user.email}</p>
          <p><strong>is a photographer: </strong> {user?.isPhotographer?.toString()}</p>
        </UserInfo>
        <DeleteProfile onClick={handleDeleteUser}>delete profile</DeleteProfile>
      </UserContainer>
      {photographers.length > 0 ? <PhotographerContainer>
        <h3>photographers you're subscribed to:</h3>
        <div>
          {photographers.map((photographer) => (
            <PhotographerLink key={photographer._id} to={`/public/photographer/${photographer._id}`}>
              <PhotographerImage src={photographer.picture}/>
              <p>{photographer.fullName}</p>
            </PhotographerLink>
          ))}
        </div>
      </PhotographerContainer> : ""}
    </ScreenContainer>
  )   
}

export default UserProfile