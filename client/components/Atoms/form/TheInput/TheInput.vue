<template>
  <div class="border-0 bg-transparent">
    <label
      v-if="text"
      :for="name"
      class="block text-sm font-medium leading-6 text-gray-900"
    >{{ text }}</label>

    <div class="relative mt-1 rounded-md shadow-sm">
      <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
        <slot name="leading" />
      </div>

      <input
        :id="name"
        v-model="model"
        type="text"
        :name="name"
        class="block w-full rounded-md border-0 py-1.5 pl-7 pr-12 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        :placeholder="placeholder"
        v-bind="$attrs"
      >

      <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
        <slot name="trailing" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  text?: string
  name: string
  description?: string,
  placeholder?: string
  }>()

const model = defineModel()
</script>
