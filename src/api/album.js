import axios from 'axios';
import apiUrl from '../apiConfig';

// create an album 
export const createAlbum = (data, user) => {
  return axios.post(apiUrl + '/newAlbum', 
    {data: data},
    {
      headers: {
        Authorization: `Bearer ${user.token}`
      }
    })
}

// get all albums of a photographer
export const getAllAlbums = (user) => {
  return axios.get(apiUrl + `/albums/${user._id}`)
}

// get an individual album of a photographer
export const getASingleAlbum = (id) => {
  return axios.get(apiUrl + `/album/${id}`)
}

// update an album

// delete an album 