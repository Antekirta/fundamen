<template>
  <RadioGroup v-model="model">
    <RadioGroupLabel>
      {{ label }}
    </RadioGroupLabel>

    <div class="mt-2 grid grid-cols-3 gap-3 sm:grid-cols-6">
      <RadioGroupOption
        v-for="size in sizes"
        :key="size.name"
        v-slot="{ active, checked }"
        as="template"
        :value="size.name"
        :disabled="!size.inStock"
      >
        <div :class="[size.inStock ? 'cursor-pointer focus:outline-none' : 'cursor-not-allowed opacity-25', active ? 'ring-2 ring-indigo-500 ring-offset-2' : '', checked ? 'border-transparent bg-indigo-600 text-white hover:bg-indigo-700' : 'border-gray-200 bg-white text-gray-900 hover:bg-gray-50', 'flex items-center justify-center rounded-md border py-3 px-3 text-sm font-medium uppercase sm:flex-1']">
          <RadioGroupLabel as="span">
            {{ size.name }}
          </RadioGroupLabel>
        </div>
      </RadioGroupOption>
    </div>
  </RadioGroup>
</template>
<script setup lang="ts">
import { RadioGroup, RadioGroupLabel, RadioGroupOption } from '@headlessui/vue'

defineProps<{
  label: string
  sizes: {
    name: string
    inStock: boolean
  }[]
}>()

const model = defineModel()
</script>
