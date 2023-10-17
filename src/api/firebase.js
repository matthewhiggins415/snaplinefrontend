import axios from "axios"
import apiUrl from "../apiConfig"

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