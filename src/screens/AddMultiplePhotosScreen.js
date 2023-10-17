import React, { useState, useEffect } from 'react';
import { ScreenContainer, UploadContainer, UploadBtn, Form } from '../styles/screens/AddMultiplePhotos.styles';
import { BackBtn } from '../utils/BackBtn';
import { UploadIcon } from '../styles/icons/Upload';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import apiUrl from '../apiConfig';
import { uploadFiles } from '../api/firebase';
// date picker 
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


const AddMultiplePhotos = ({ user }) => {
  const [files, setFiles] = useState([]);
  const [startDate, setStartDate] = useState(new Date());
  const [showUploadBtn, setShowUploadBtn] = useState(false);

  const navigate = useNavigate();
  
  if (Object.keys(user).length === 0) {
    navigate("/");
  }

  const onImageChange = (e) => {
    const selectedFiles = e.target.files;
    setFiles(selectedFiles);
  }

  const [normalFormData, setNormalFormData] = useState({
    location: '', 
    price: 0,
    date: startDate
  })

  const { location, price, date } = normalFormData;

  const onChange = (e) => {
    setNormalFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (files.length === 0) {
      alert('please select an image/video')
    }

    const formData = new FormData();

    for (const file of files) {
      formData.append('images', file);
      // formData.append('photographer', user._id);

      try {
        const response = await uploadFiles(user, formData)
        console.log("response: ", response)
        alert('Images uploaded successfully');
      } catch (error) {
        console.error('Error uploading images:', error);
      }
    }
  }

  useEffect(() => {
    // This effect runs whenever any of the input fields change
    if (location && price && date && files.length > 0) {
      // All inputs have values
      console.log('All inputs have values');
      setShowUploadBtn(true)
    } else {
      // Handle the case where not all inputs have values
      console.log('Not all inputs have values');
      setShowUploadBtn(false)
    }
  }, [location, price, date, files]);


  return (
    <ScreenContainer>
      <BackBtn />
      <UploadContainer>
        <UploadIcon />
        <h1>Add a new batch of photos/videos</h1>
        <Form onSubmit={handleSubmit}>
          <div>
            <label for="location">Location:</label>
            <input id="location" type="text" name="location" value={location} placeholder="enter location" onChange={onChange} required/>
          </div>
          <br></br>
          <div>
            <label for="date">Date:</label>
            <DatePicker id="date" selected={startDate} onChange={(date) => setStartDate(date)} required/>
          </div>
          <br></br>
          <div>
            <label for="price">Price:</label>
            <input id="price" type="number" name="price" value={price} placeholder="enter price" onChange={onChange} required/>
          </div>
          <br></br>
          <input onChange={onImageChange} type="file" accept="image/*" multiple/>
          <UploadBtn showUploadBtn={showUploadBtn} type="submit">Upload</UploadBtn>
        </Form>
      </UploadContainer>
    </ScreenContainer>
  )
}

export default AddMultiplePhotos