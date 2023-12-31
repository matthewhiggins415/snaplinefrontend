import axios from 'axios'
import apiUrl from '../apiConfig.js'

//register
export const signUp = (data) => {
  let { firstName, lastName, email, password, passwordConfirmation } = data
      
  return axios.post(apiUrl + '/register', {
    credentials: {
      firstName, 
      lastName,
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
  
//sign out 
export const signOut = (user) => {
  return axios.delete(apiUrl + '/sign-out', {
    headers: {
      Authorization: `Bearer ${user.token}`
    }
  })
}

// update User's profile image
export const updateUserProfileImage = (user, data) => {
  return axios.put(apiUrl + `/user-image-update`, 
    {data: data},
    {
      headers: {
        Authorization: `Bearer ${user.token}`
      }
    }
  )
}

// update user with new stripe id
export const updateUserStripeId = (user, newId) => {
  return axios.patch(apiUrl + `/user/${user._id}/update-id`, 
    {
      newStripeId: newId
    },
    {
      headers: {
        Authorization: `Bearer ${user.token}`
      }
    }
  )
}
  
// get the user
export const getUser = (id) => {
  return axios.get(apiUrl + `/user/${id}`)
}

// delete user forever
export const deleteUser = (user) => {
  return axios.delete(apiUrl + `/user/${user._id}`, 
  {
    headers: {
      Authorization: `Bearer ${user.token}`
    }
  })
}