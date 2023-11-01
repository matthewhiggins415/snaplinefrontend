import React, { useState } from 'react';
import { Container, Form, Input, SubmitBtn } from '../../styles/components/CreateAlbum.styles';
import { createAlbum } from '../../api/album';

const CreateAlbum = ({ user, notify, setStepOne, setStepTwo, setAlbumID}) => {
  const [formData, setFormData] = useState({
    sport: '', 
    location: '',
    date: ''
  })

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = async (e) => {
    console.log("user", user)
    e.preventDefault();

    try {
      const response = await createAlbum(formData, user);
      console.log("Response", response)
      
      if (response.status === 201) {
        setAlbumID(response.data._id);
        setStepOne(false);
        setStepTwo(true);
        notify('album created');
      } else {
        notify('issue occurred', 'warning');
      }
    } catch(error) {
      console.error();
    }
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <div>
          <label>sport: </label>
          <Input name="sport" value={formData.sport} type="string" onChange={onChange} required/>
        </div>
        <div>
          <label>location: </label>
          <Input name="location" value={formData.location} type="string" onChange={onChange} required/>
        </div>
        <div>
          <label>date: </label>
          <Input name="date" value={formData.date} type="date" onChange={onChange} required/>
        </div>
        <SubmitBtn type="submit">next</SubmitBtn>
      </Form>
    </Container>
  )
}

export default CreateAlbum