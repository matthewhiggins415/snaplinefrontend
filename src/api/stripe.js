import axios from 'axios'
import apiUrl from '../apiConfig.js'

// create a stripe connected account 
export const createStandardConnectedAccount = () => {        
  return axios.get(apiUrl + '/create-account')
}

// create account links once connected account created
export const createAccountLink = (id) => {
  return axios.post(apiUrl + '/account-link', { id })
}