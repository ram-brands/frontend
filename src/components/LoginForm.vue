<template>
  <div
    class="w-full max-w-xs"
  >
    <form
      class="border-2 border-gray-300 bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      @submit.prevent
    >
      <text-field
        id="email"
        v-model="inputs.email"
        label="Email"
        placeholder="ejemplo@correo.com"
        type="text"
      />
      <text-field
        id="password"
        v-model="inputs.password"
        label="Contraseña"
        placeholder="******"
        type="password"
      />
      <div
        class="flex items-center justify-between"
      >
        <submit-button
          class="mx-auto"
          text="Iniciar sesión"
          @click="login()"
        />
      </div>
    </form>
  </div>
</template>

<script>
import authClient from '../api/auth'
import TextField from './TextField.vue'
import SubmitButton from './SubmitButton.vue'

export default {
  name: 'LoginForm',

  components: {
    TextField,
    SubmitButton,
  },

  data() {
    return {
      inputs: {
        email: "",
        password: "",
      },
    }
  },

  methods: {
    login() {
      authClient.login({ email: this.inputs.email, password: this.inputs.password })
        .then(() => this.$emit('refreshLoggedState'))
    },
  },
}
</script>
