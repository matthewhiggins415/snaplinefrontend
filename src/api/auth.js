import axios from 'axios'
import apiUrl from '../apiConfig.js'

//register
export const signUp = (data) => {
    let { email, password, passwordConfirmation } = data
      
    return axios.post(apiUrl + '/register', {
      credentials: {
        email,
        password,
        password_confirmation: passwordConfirmation
      }
    })
  }
  
  //login
  export const signIn = (data) => {
      let { email, password } = data
      return axios.post(apiUrl + '/login', {
        credentials: {
          email,
          password
        }
    })
  }
  
  //signout 
  export const signOut = (user) => {
      return axios.delete(apiUrl + '/sign-out', {
        headers: {
          Authorization: `Bearer ${user.token}`
        }
      })
    }
  