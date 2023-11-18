import axios from 'axios';
import apiUrl from '../apiConfig';

// create a faq
export const createAFaq = (data) => {
  return axios.post('http://localhost:8080/newfaq', {data: data})
}

// get all faqs
export const getAllFaqs = () => {
  return axios.get('http://localhost:8080/faqs')
}


// delete a faq 
