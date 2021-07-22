<template>
  <div
    class="space-y-16"
  >
    <h1>
      Bienvenido
    </h1>
    <submit-button
      class="mx-auto"
      text="Cerrar sesión"
      @click="logout()"
    />
  </div>
</template>

<script>
import authClient from '../api/auth'
import SubmitButton from '../components/SubmitButton.vue'

export default {
  name: 'Logged',

  components: {
    SubmitButton,
  },

  methods: {
    logout() {
      authClient.logout()
      this.$emit('refreshLoggedState')
    },
  },
}
</script>
