import React, { useState, useEffect } from 'react';
import { ScreenContainer, UploadContainer, UploadBtn, Form, FileLabel, RemoveFilesBtn, Img, ImgContainer, AlbumHeader, AlbumInput, ImgFormInput } from '../../styles/screens/AddPhotosScreen.styles';
import { BackBtn } from '../../utils/BackBtn';
import { UploadIcon } from '../../styles/icons/Upload';
import { useNavigate } from "react-router-dom";
import { uploadFiles } from '../../api/firebase';
import { createImage } from '../../api/image';

const AddPhotos = ({ user, notify, setStepTwo, setStepThree, albumID }) => {
  const [files, setFiles] = useState([]);
  const [showUploadBtn, setShowUploadBtn] = useState(false);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  
  if (Object.keys(user).length === 0) {
    navigate("/");
  }

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
      alert('please select an image/video')
    }


    for (const file of files) {
      const formData = new FormData();
      formData.append('images', file);
      formData.append('albumID', albumID);

      try {
        setLoading(true)
        console.log("formdata", formData)
        const response = await uploadFiles(user, formData)
        console.log("response: ", response)
        
        if (response.status === 201) {
          setLoading(false);
          notify('successfully uploaded media');
          console.log("response: ", response)

          const imgObj = {
            imgURL: response.data.downloadURL,
            albumID: albumID,
            firebaseName: response.data.firebaseName
          }

          const newImage = await createImage(imgObj, user)
        }
      } catch (error) {
        console.error('Error uploading images:', error);
        notify('Error uploading media', 'warning')
      }
    }

    // for loop is done so need to
    // continue to next screen 
    // set files back to zero 
    setStepTwo(false);
    setStepThree(true);
    setFiles([]);
  }

  useEffect(() => {
    // This effect runs whenever any of the input fields change
    console.log("files.length", files.length)
    console.log(files)
    if (files.length > 0) {
      // All inputs have values
      setShowUploadBtn(true)
    } else {
      // Handle the case where not all inputs have values
      setShowUploadBtn(false)
    }
  }, [files]);


  useEffect(() => {
    if (user.isPhotographer === false) {
      navigate('/')
    }
  }, [])

  return (
    <ScreenContainer>
      <UploadContainer>
        <UploadIcon />
        <h1>Add a new batch of photos/videos</h1>
        { 
          loading ? 
          <h1>{`uploading... ${files.length} files`}</h1> :
          <>
          <Form onSubmit={handleSubmit}>
            <input style={{ display: 'none' }} onChange={onImageChange} type="file" accept="image/*" id="fileInput" multiple />
            <FileLabel htmlFor="fileInput">Choose Files</FileLabel>
            { files.length > 0 ? <p>{`${files.length} files chosen`}</p> : <p>no files chosen</p> }
            <UploadBtn showUploadBtn={showUploadBtn} type="submit">Upload</UploadBtn>
          </Form>
          <RemoveFilesBtn showUploadBtn={showUploadBtn} onClick={removeFiles}>Remove Files</RemoveFilesBtn>
          </>
        }
      </UploadContainer>
    </ScreenContainer>
  )
}

export default AddPhotos