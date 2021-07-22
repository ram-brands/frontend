<template>
  <div
    class="space-y-16"
  >
    <section
      class="container content-center mx-auto"
    >
      <img
        class="mx-auto"
        src="../assets/logo.png"
        alt="RAM Web Services logo"
      >
    </section>
    <section
      class="container content-center mx-auto"
    >
      <login-form
        class="mx-auto"
        @refreshLoggedState="refreshLoggedState"
      />
    </section>
  </div>
</template>

<script>
import LoginForm from '../components/LoginForm.vue'

export default {
  name: 'Login',

  components: {
    LoginForm,
  },

  props: {
    refreshLoggedState: {
      type: Function,
      required: true,
    },
  },
}
</script>
