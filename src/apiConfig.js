let apiUrl

const apiUrls = {
  production: 'https://pix-marketplace-81ae081f1bb9.herokuapp.com',
  development: 'http://localhost:8080'
}

if (window.location.host === 'localhost:3000') {
  apiUrl = apiUrls.development
} else {
  apiUrl = apiUrls.production
}

export default apiUrl