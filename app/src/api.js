import axios from 'axios'

const HOST = 'localhost:8000'

const api = axios.create({
  baseURL: '${HOST}/api/'
})

export default {
  hannanum: (sentence) => { return api.get(`${baseUrl}hannanum?sentence=${sentence}`) },
}
