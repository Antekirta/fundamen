<template>
  <RadioGroup
    v-model="model"
    class="grid grid-cols-2 gap-x-1 rounded-full p-1 text-center text-xs font-semibold leading-5 ring-1 ring-inset ring-gray-200"
  >
    <RadioGroupOption
      v-for="option in options"
      :key="option.value"
      v-slot="{ checked }"
      as="template"
      :value="option.value"
    >
      <div :class="[checked ? 'bg-indigo-600 text-white' : 'text-gray-500', 'cursor-pointer rounded-full px-2.5 py-1']">
        <span>{{ option.text }}</span>
      </div>
    </RadioGroupOption>
  </RadioGroup>
</template>

<script setup lang="ts">
import { RadioGroup, RadioGroupOption } from '@headlessui/vue'
import type { RadioGroupOptionInterface } from '@/shared/shared.interface'

defineProps<{
  modelValue: string
  options: RadioGroupOptionInterface[]
}>()

const model = defineModel()
</script>
