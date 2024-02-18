<template>
  <div class="rounded-md px-3 pb-1.5 pt-2.5 shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-indigo-600">
    <label
      :for="name"
      class="block text-xs font-medium text-gray-900"
    >{{ text }}</label>

    <input
      :id="name"
      v-model="model"
      type="text"
      :name="name"
      class="block w-full border-0 p-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
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
