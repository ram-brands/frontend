<template>
  <div class="mb-4">
    <label
      :for="id"
      class="block text-gray-700 text-sm font-bold mb-2"
    >
      {{ label }}
    </label>
    <input
      :id="id"
      v-model="inputValue"
      :placeholder="placeholder"
      class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      :type="type"
    >
  </div>
</template>

<script>
export default {
  name: 'TextField',

  props: {
    id: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      default: '',
    },
    modelValue: {
      type: String,
      default: '',
    },
    placeholder: {
      type: String,
      default: '',
    },
    type: {
      type: String,
      required: true,
    },
  },

  computed: {
    inputValue: {
      get() {
        return this.modelValue
      },
      set(value) {
        this.$emit('update:modelValue', value)
      },
    },
  },
}
</script>
