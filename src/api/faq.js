import axios from 'axios';
import apiUrl from '../apiConfig';

// create a faq
export const createAFaq = (data) => {
  return axios.post(apiUrl + '/newfaq', {data: data})
}

// get all faqs
export const getAllFaqs = () => {
  return axios.get(apiUrl + '/faqs')
}


// delete a faq 
