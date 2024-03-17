<template>
  <div class="the-textarea">
    <label
      :for="name"
      class="the-textarea__label"
    >{{ label }}</label>
    <div class="the-textarea__input-container">
      <textarea
        :id="name"
        v-model="model"
        rows="4"
        :name="name"
        class="the-textarea__input"
        v-bind="$attrs"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { ModelRef } from 'vue'

defineProps<{
  label: string
  name: string
}>()

const model : ModelRef<string | undefined, string> = defineModel()
</script>

<style lang="scss">
.the-textarea {
  &__label {
    @apply block text-sm font-medium leading-6 text-gray-900;
  }

  &__input-container {
    @apply mt-2;
  }

  &__input {
    @apply block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6;
  }
}
</style>
