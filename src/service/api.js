import axios from 'axios'
import { constants } from 'src/utils/constants'

const instance = axios.create({
  baseURL: `${constants.baseUrl}/app/v1`,
  timeout: 100000,
})

// instance interceptors request
instance.interceptors.request.use(async (req) => {
  const token = localStorage.getItem('token')
  console.log('token', token)
  if (token != null) {
    req.headers.Authorization = `Bearer ${token}`
  }
  return req
})

// instance interceptor response
instance.interceptors.response.use(
  (response) => {
    return Promise.resolve(response)
  },
  (error) => {
    return Promise.reject(error)
  }
)

const get = (url, params) => {
  return instance.get(url, { params })
}

const post = (url, data, config) => {
  return instance.post(url, data, config)
}

const put = (url, data, config) => {
  return instance.put(url, data, config)
}

const postFormData = (url, data) => {
  // loop through data and convert to form data
  const formData = new FormData()
  Object.keys(data).forEach((key) => {
    formData.append(key, data[key])
  })
  return instance.post(url, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  })
}

const deleteApi = (url) => {
  return instance.delete(url)
}

export { get, post, put, postFormData, deleteApi }
