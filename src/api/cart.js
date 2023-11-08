import axios from 'axios';
import apiUrl from '../apiConfig';

// get cart of user 
export const getCart = (user) => {
  return axios.get(apiUrl + '/cart', 
    {
      headers: {
        Authorization: `Bearer ${user.token}`
      }
    }
  )
}

// add item from cart
export const addToCart = (user, id) => {
  let data
  return axios.patch(apiUrl + `/cart/${id}/add`,
    data,
    {
      headers: {
        Authorization: `Bearer ${user.token}`
      }
    }
  )
}

// remove item from cart
export const removeFromCart = (user, id) => {
  let data
  return axios.patch(apiUrl + `/cart/${id}/remove`, 
    data, 
    {
      headers: {
        Authorization: `Bearer ${user.token}`
      }
    }
  )
}