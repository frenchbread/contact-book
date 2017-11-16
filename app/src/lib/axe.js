import axios from 'axios'

const axe = axios.create({
  baseURL: process.env.API_HOST,
  validateStatus (status) {
    return (status >= 200 && status < 300) || status === 401
  }
})

export default axe
