<template>
  <div>
    <label class="text-base font-semibold text-gray-900">{{ title }}</label>

    <p class="text-sm text-gray-500">
      {{ description }}
    </p>

    <fieldset class="mt-4">
      <div class="space-y-4 sm:flex sm:items-center sm:space-x-10 sm:space-y-0">
        <div
          v-for="option in options"
          :key="option.value"
          class="flex items-center"
          @click="model = option.value"
        >
          <input
            :id="option.value"
            name="notification-method"
            type="radio"
            :checked="option.value === 'email'"
            class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
          >
          <label
            :for="option.value"
            class="ml-3 block text-sm font-medium leading-6 text-gray-900"
          >{{ option.text }}</label>
        </div>
      </div>
    </fieldset>
  </div>
</template>

<script lang="ts" setup>
import type { RadioGroupOptionInterface } from '@/shared/shared.interface'

defineProps<{
  title?: string
  description?: string
  options: RadioGroupOptionInterface[]
}>()

const model = defineModel()
</script>
