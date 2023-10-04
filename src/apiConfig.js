let apiUrl

const apiUrls = {
  production: 'deployed-backend',
  development: 'http://localhost:8080'
}

if (window.location.host === 'localhost:3000') {
  apiUrl = apiUrls.development
} else {
  apiUrl = apiUrls.production
}

export default apiUrl