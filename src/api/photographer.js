import axios from 'axios';
import apiUrl from '../apiConfig.js';

// get a photographer 
export const getAPhotographer = (id) => {
  return axios.get(apiUrl + `/photographer/${id}`)
}
  
export const getFeaturedPhotographers = () => {
  return axios.get(apiUrl + `/featuredPhotographers`)
}