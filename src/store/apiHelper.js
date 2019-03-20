import axios from 'axios'
import { PRODUCTION, DEVELOPMENT, TEST } from './env'
import {
  PRODUCTION_ENDPOINT,
  DEVELOPMENT_ENDPOINT,
  TEST_ENDPOINT
} from './endPoints'

function getDefaultUrl (env = DEVELOPMENT) {
  switch (env.toLowerCase()) {
    case PRODUCTION: return PRODUCTION_ENDPOINT
    case DEVELOPMENT: return DEVELOPMENT_ENDPOINT
    case TEST: return TEST_ENDPOINT
    default: return DEVELOPMENT_ENDPOINT
  }
}

axios.defaults.baseURL = getDefaultUrl(process.env.NODE_ENV)

axios.interceptors.request.use(config => {
  const token = localStorage.getItem('token')
  // const token = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6IkltcGFjdCIsInVzZXJuYW1lIjoiaW1wYWN0dXNlciIsImVtYWlsIjoiaW1wYWN0QGltcGFjdGFuYWx5dGljcy5jbyIsInBhc3N3b3JkX2hhc2giOiI2M2VlMjA1NDAxMmVmMzUxZWUwZDZhNDM0ZDViNjc2Yjk1M2M0MjZiOGRmZjZkYzc1M2YxNDNlNDk2MmQzOTZlMTcyNmY1OTYxODRjMzQ5YjgxZDIyMGViNGQ3OWQ1NjI3ZmFiZjc0YjU4ZGY1ZmMxNjAwM2M3ZjBmYjEzYjQ5NyIsInNhbHQiOiJkZmNmNDVjZTFmIiwiYWN0aXZlIjpmYWxzZSwiY3JlYXRlZEF0IjoiMjAxOS0wMi0yMlQxMzozMzoxNC45MzFaIiwidXBkYXRlZEF0IjoiMjAxOS0wMi0yMlQxMzozMzoxNC45MzFaIiwiaWF0IjoxNTUxNzI1NzI5LCJleHAiOjE1NTE5MDU3Mjl9.zt04T7qwJkaXgl2k4b3HeftENbPVJ1GhSM9NGzmC3B4'
  if (token) {
    config.headers.token = token
    config.headers.Authorization = `Bearer${token}`
  }
  return config
}, error => {
  return Promise.reject(error)
})

axios.interceptors.response.use(function (response) {
  // Do something with response data
  return response
}, function (error) {
  const errorObject = {
    code: error.response.status,
    ...error.response.data
  }

  if (errorObject.code === 401) {
    window.localStorage.removeItem('token')
    window.localStorage.removeItem('status')
    window.localStorage.removeItem('userName')
    window.localStorage.removeItem('name')
    window.localStorage.removeItem('editAllocationId')
  }
  // Do something with response error
  return Promise.reject(errorObject)
})

export default function api ({ url, method, data = null, params = {} }) {
  const requestConfig = (data === null) ? { url, method, params } : { url, method, data, params }
  return new Promise((resolve, reject) => {
    axios.request(requestConfig)
      .then(res => resolve(res.data))
      .catch(err => reject(err))
  })
}
