import client from './client'

export default {
  isLogged() {
    return Boolean(client.defaults.headers.common.Authorization)
  },

  setToken(token) {
    client.defaults.headers.common.Authorization = `Bearer ${token}`
    localStorage.setItem('token', token)
  },

  async login({ email, password }) {
    try {
      const { data } = await client.post('login', { email, password })
      return this.setToken(data.token)
    } catch (e) {
      return console.log("ERROR")
    }
  },

  restoreSession() {
    const token = localStorage.getItem('token')

    if (token) {
      this.setToken(token)
    }
  },

  logout() {
    localStorage.removeItem('token')
    delete client.defaults.headers.common.Authorization
  },
}
