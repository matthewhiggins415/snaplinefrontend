import React, { useState, useEffect } from 'react';
import { ScreenContainer, UploadContainer, UploadBtn, Form, FileLabel, RemoveFilesBtn, Img, ImgContainer, AlbumHeader, AlbumInput, ImgFormInput } from '../styles/screens/AddPhotosScreen.styles';
import { BackBtn } from '../utils/BackBtn';
import { UploadIcon } from '../styles/icons/Upload';
import { useNavigate } from "react-router-dom";

import { uploadFiles } from '../api/firebase';
// date picker 
import "react-datepicker/dist/react-datepicker.css";


const AddPhotos = ({ user, notify }) => {
  const [files, setFiles] = useState([]);
  const [showUploadBtn, setShowUploadBtn] = useState(false);
  const [loading, setLoading] = useState(false);
  const [resFileNum, setResFileNum] = useState(0)
  const [downloadedURLs, setDownloadedURLs] = useState([]);

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
    date: Date.now()
  })

  const { location, price, date } = normalFormData;

  const onChange = (e) => {
    setNormalFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  }

  const removeFiles = () => {
    setFiles([])
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (files.length === 0) {
      alert('please select an image/video')
    }

    const formData = new FormData();

    for (const file of files) {
      formData.append('images', file);
      formData.append('location', normalFormData.location);
      formData.append('price', normalFormData.price);
      formData.append('date', normalFormData.date);

      try {
        setLoading(true)
        const response = await uploadFiles(user, formData)
        console.log("response: ", response)
        
        if (response.data.msg === "Images uploaded successfully") {
          setLoading(false);
          notify('successfully uploaded media');
          setResFileNum(response.data.downloadURLs.length)
          console.log("response: ", response)
          console.log("response.data.downloadURLs: ", response.data.downloadURLs)
          setDownloadedURLs(response.data.downloadURLs)
        }
      } catch (error) {
        console.error('Error uploading images:', error);
        notify('Error uploading media', 'warning')
      }
    }

    setFiles([])
    setResFileNum(0)
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
      <BackBtn />
      <UploadContainer>
        <UploadIcon />
        <h1>Add a new batch of photos/videos</h1>
        { 
          loading ? 
          <h1>{`uploading... ${resFileNum} of ${files.length}`}</h1> :
          <>
          <Form onSubmit={handleSubmit}>
          {/* <div>
            <label for="location">Location:</label>
            <input id="location" type="text" name="location" value={location} placeholder="enter location" onChange={onChange} required/>
          </div>
          <br></br>
          <div>
            <label for="date">Date:</label>
            <input id="date" type="date" name="date" value={date} onChange={onChange} required/>
          </div>
          <br></br>
          <div>
            <label for="price">Price:</label>
            <input id="price" type="number" name="price" value={price} placeholder="enter price" onChange={onChange} required/>
          </div>
          <br></br> */}
            <input style={{ display: 'none' }} onChange={onImageChange} type="file" accept="image/*" id="fileInput" multiple />
            <FileLabel htmlFor="fileInput">Choose Files</FileLabel>
            { files.length > 0 ? <p>{`${files.length} files chosen`}</p> : <p>no files chosen</p> }
            <UploadBtn showUploadBtn={showUploadBtn} type="submit">Upload</UploadBtn>
          </Form>
          <RemoveFilesBtn showUploadBtn={showUploadBtn} onClick={removeFiles}>Remove Files</RemoveFilesBtn>
          </>
        }
      </UploadContainer>
      <ImgContainer>
        <AlbumHeader>
          <h1>Add Album Details</h1>
          <div>
            <AlbumInput placeholder="location" type="text" required/>
            <AlbumInput placeholder="date" type="date" required/>
          </div>
        </AlbumHeader>
        { downloadedURLs?.map((item, index) => (
          <div>
            <Img key={index + 1} alt="downloaded" src={item} />
            <form>
              <ImgFormInput placeholder='price' type="number" required/>
              <button>submit</button>
              <button>remove</button>
            </form>
          </div>
          ))
        }
      </ImgContainer>
    </ScreenContainer>
  )
}

export default AddPhotos