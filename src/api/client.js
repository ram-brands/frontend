import axios from 'axios'
import { camelizeKeys, decamelizeKeys } from 'humps'

const client = axios.create({
  baseURL: process.env.VUE_APP_API_BASE_URL,

  timeout: process.env.VUE_APP_API_TIMEOUT,

  headers: {
    'Content-Type': 'application/json',
  },

  transformResponse: [
    ...axios.defaults.transformResponse,
    (data) => camelizeKeys(data),
  ],

  transformRequest: [
    (data) => decamelizeKeys(data),
    ...axios.defaults.transformRequest,
  ],
})

// client.interceptors.request.use((config) => {
//   const { params } = config;

//   return {
//     ...config,
//     params: decamelizeKeys(params),
//   };
// });

export default client
