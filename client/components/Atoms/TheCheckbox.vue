<template>
  <fieldset>
    <legend class="sr-only">
      {{ text }}
    </legend>

    <div class="space-y-5">
      <div class="relative flex items-start">
        <div class="flex h-6 items-center">
          <input
            :id="name"
            v-model="model"
            aria-describedby="comments-description"
            :name="name"
            type="checkbox"
            class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-0"
          >
        </div>

        <div class="ml-3 text-sm leading-6">
          <label
            :for="name"
            class="font-medium text-gray-900"
          >{{ text }}</label>
          <p
            id="comments-description"
            class="text-gray-500"
          >
            {{ description }}
          </p>
        </div>
      </div>
    </div>
  </fieldset>
</template>

<script setup lang="ts">
defineProps<{
  text: string
  name: string
  description?: string
}>()

const model = defineModel()
</script>
