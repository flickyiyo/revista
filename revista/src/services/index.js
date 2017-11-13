import Axios from 'axios'

url = 'http://localhost'

const service = Axios.create({
  baseURL: url
})
