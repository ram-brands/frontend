<template>
  <logged
    v-if="isLogged"
    @refreshLoggedState="refreshLoggedState"
  />
  <login
    v-else
    :refresh-logged-state="refreshLoggedState"
  />
</template>

<script>
import authClient from './api/auth'
import Logged from './pages/Logged.vue'
import Login from './pages/Login.vue'

authClient.restoreSession()

export default {
  name: 'App',

  components: {
    Logged,
    Login,
  },

  data() {
    return {
      isLogged: authClient.isLogged(),
    }
  },

  methods: {
    refreshLoggedState() {
      this.isLogged = authClient.isLogged()
    },
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #f54c40;
  margin-top: 60px;
}
</style>
