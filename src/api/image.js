import axios from 'axios';
import apiUrl from '../apiConfig.js';

// create an image 
export const createImage = (data, user) => {
  console.log("data from create image api call:", data)
  return axios.post(apiUrl + '/newimage', 
    {data: data},
    {
      headers: {
        Authorization: `Bearer ${user.token}`
      }
    })
}

// get all images of an album 
export const getAllImagesOfAnAlbum = (user, id) => {
  return axios.get(apiUrl + `/album/${id}/images`, 
  {
    headers: {
      Authorization: `Bearer ${user.token}`
    }
  })
}

// update image with prices
export const updateImageWithPricing = (id, data, user) => {
  console.log("data from updating image price:", data)
  return axios.put(apiUrl + `/imageprice/${id}`, 
    {data: data},
    {
      headers: {
        Authorization: `Bearer ${user.token}`
      }
    })
}
