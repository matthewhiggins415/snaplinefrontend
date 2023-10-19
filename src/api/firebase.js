import axios from "axios"
import apiUrl from "../apiConfig"

// UPLOAD MULTIPLE FILES FOR AN ALBUM 
export const uploadFiles = (user, data) => {
  console.log("data: ", data)

  return axios.post(apiUrl + '/upload', 
    data,
    {
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: `Bearer ${user.token}`
      }
   })
}

// UPLOAD A USERS PROFILE IMAGE
export const uploadUserProfImage = (user, data) => {
  console.log("data from updating user prof image:", data);

  return axios.post(apiUrl + `/user/upload-user-image`, 
    data,
    {
      headers: {
        Authorization: `Bearer ${user.token}`
      }
    }
  )
}
