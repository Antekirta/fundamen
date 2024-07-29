<template>
  <div class="the-input-inset-label">
    <label
      :for="name"
      class="the-input-inset-label__label"
    >{{ text }}</label>

    <input
      :id="name"
      v-model="model"
      type="text"
      :name="name"
      class="the-input-inset-label__input"
      :placeholder="placeholder"
    >
  </div>
</template>

<script setup lang="ts">
defineProps<{
  text: string
  name: string
  description?: string,
  placeholder?: string
}>()

const model = defineModel()
</script>

<style lang="scss">
.the-input-inset-label {
  @apply rounded-md px-3 pb-1.5 pt-2.5 shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-indigo-600;

  &__label {
    @apply block text-xs font-medium text-gray-900;
  }

  &__input {
    @apply block w-full border-0 p-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6;
  }
}
</style>
