<template>
  <RadioGroup v-model="model">
    <RadioGroupLabel class="text-lg font-medium text-gray-900">
      {{ label }}
    </RadioGroupLabel>

    <div class="mt-4 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-4">
      <RadioGroupOption
        v-for="option in options"
        :key="option.value"
        v-slot="{ checked, active }"
        as="template"
        :value="option.value"
      >
        <div :class="[checked ? 'border-transparent' : 'border-gray-300', active ? 'ring-2 ring-indigo-500' : '', 'relative flex cursor-pointer rounded-lg border bg-white p-4 shadow-sm focus:outline-none']">
          <span class="flex flex-1">
            <span class="flex flex-col">
              <RadioGroupLabel
                as="span"
                class="block text-sm font-medium text-gray-900"
              >{{ option.title }}</RadioGroupLabel>
              <RadioGroupDescription
                as="span"
                class="mt-1 flex items-center text-sm text-gray-500"
              >{{ option.description }}</RadioGroupDescription>
              <RadioGroupDescription
                as="span"
                class="mt-6 text-sm font-medium text-gray-900"
              >{{ option.bottomValue }}</RadioGroupDescription>
            </span>
          </span>

          <CheckCircleIcon
            v-if="checked"
            class="h-5 w-5 text-indigo-600"
            aria-hidden="true"
          />
          <span
            :class="[active ? 'border' : 'border-2', checked ? 'border-indigo-500' : 'border-transparent', 'pointer-events-none absolute -inset-px rounded-lg']"
            aria-hidden="true"
          />
        </div>
      </RadioGroupOption>
    </div>
  </RadioGroup>
</template>

<script setup lang="ts">
import { RadioGroup, RadioGroupDescription, RadioGroupLabel, RadioGroupOption } from '@headlessui/vue'
import { CheckCircleIcon } from '@heroicons/vue/20/solid'

defineProps<{
  modelValue: string
  label: string
  options: {
    value: string
    title: string
    description: string
    bottomValue: string
  }[]
}>()

const model = defineModel()
</script>
