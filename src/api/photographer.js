import axios from 'axios';
import apiUrl from '../apiConfig.js';

// get a single photographer 
export const getAPhotographer = (id) => {
  return axios.get(apiUrl + `/photographer/${id}`)
}

// get all featured photographers
export const getFeaturedPhotographers = () => {
  return axios.get(apiUrl + `/featuredPhotographers`)
}

// search for photographers
export const searchForPhotographer = (input) => {
  return axios.post(apiUrl + `/photographers/search`, {
    searchValue: input
  })
}

// subscribe to a photographer
export const subscribeToPhotographer = (user, id) => {
  let data
  return axios.patch(apiUrl + `/photographer/${id}/subscribe`,
  data, 
  {
    headers: {
      Authorization: `Bearer ${user.token}`
    }
  })
}

// unsubscribe from photographer
export const unsubscribeToPhotographer = (user, id) => {
  return axios.delete(apiUrl + `/photographer/${id}/unsubscribe`,
  {
    headers: {
      Authorization: `Bearer ${user.token}`
    }
  })
}

// get all photographers a user is subscribed to
export const getPhotographersUsersSubscribedTo = (user ) => {
  return axios.get(apiUrl + `/photographers/subscribed`, 
  {
    headers: {
      Authorization: `Bearer ${user.token}`
    }
  })
}