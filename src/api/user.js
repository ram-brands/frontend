import client from './client'

export default {
  create: (params) => client.post('users', params),

  retrieve: (id) => client.get(`users/${id}`),
}
