import React, { useState } from 'react';
import { ScreenContainer, UploadContainer, UploadBtn } from '../styles/screens/AddMultiplePhotos.styles';
import { BackBtn } from '../utils/BackBtn';
import { UploadIcon } from '../styles/icons/Upload';
import { useNavigate } from "react-router-dom";

const AddMultiplePhotos = ({ user }) => {
  const [files, setFiles] = useState([]);

  const navigate = useNavigate();
  
  if (Object.keys(user).length === 0) {
    navigate("/");
  }

  const onImageChange = (e) => {
    const selectedFiles = e.target.files;
    setFiles(selectedFiles);
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (files.length === 0) {
      alert('please select an image/video')
    }

    const formData = new FormData();

    for (const file of files) {
      formData.append('s3Images', file);
      formData.append('photographer', user._id);
    }

    const result = await fetch('http://localhost:8080/upload', { method: 'POST', body: formData });
    const data = await result.json();
    console.log(data);
  }

  return (
    <ScreenContainer>
      <BackBtn />
      <UploadContainer>
        <UploadIcon />
        <h1>Add a new batch of photos/videos</h1>
        <form onSubmit={handleSubmit}>
          <input onChange={onImageChange} type="file" accept="image/*" multiple/>
          <UploadBtn type="submit">Upload</UploadBtn>
        </form>
      </UploadContainer>
    </ScreenContainer>
  )
}

export default AddMultiplePhotos