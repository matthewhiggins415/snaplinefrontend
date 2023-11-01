import React, { useState } from 'react';
import { Img, Form, Input, Btn, ImgContainer } from '../../styles/components/PricePhoto.styles';
import { updateImageWithPricing } from '../../api/image';
import { CheckCircle } from '../../styles/icons/CheckCircle';

const PricePhoto = ({ user, image, notify }) => {
  const [updated, setUpdated] = useState(false)
  const [imageInfo, setImageInfo] = useState({ image })

  console.log("imageInfo", imageInfo)

  const [formData, setFormData] = useState({
    price: imageInfo.price, 
    discountPrice: imageInfo.discountPrice
  })
    
  const { price, discountPrice } = formData
    
  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  }
    

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('submit')

    try {
      let response = await updateImageWithPricing(image._id, formData, user)
      console.log(response)

      if (response.data.newImage) {
        notify('image updated')
        setUpdated(true)
      }
    } catch (error) {
      console.log(error)
    }
  }
  
  return (
    <ImgContainer>
      <Img key={imageInfo.image._id} src={imageInfo.image.url} />
      { updated && <p>updated</p>}
      <Form onSubmit={handleSubmit}>
        <div>
          <label>price: </label>
          <Input type="number" name="price" value={imageInfo.price} placeholder="price" onChange={onChange} required />
        </div>
        <div>
          <label>discounted price: </label>
          <Input type="number" name="discountPrice" value={imageInfo.discountPrice} placeholder="discounted price" onChange={onChange} />
        </div>

        <Btn type="submit">submit</Btn>
      </Form>
    </ImgContainer>
  )
}

export default PricePhoto