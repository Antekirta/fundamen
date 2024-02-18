<template>
  <div>
    <RadioGroup v-model="model">
      <RadioGroupLabel>
        {{ label }}
      </RadioGroupLabel>

      <div class=" mt-2 flex items-center space-x-3">
        <RadioGroupOption
          v-for="color in colors"
          :key="color.name"
          v-slot="{ active, checked }"
          as="template"
          :value="color.name"
        >
          <div :class="[model, active && checked ? 'ring ring-offset-1' : '', !active && checked ? 'ring-2' : '', 'relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none']">
            <RadioGroupLabel
              as="span"
              class="sr-only"
            >
              {{ color.name }}
            </RadioGroupLabel>
            <span
              aria-hidden="true"
              :class="[color.bgColor, 'h-8 w-8 rounded-full border border-black border-opacity-10']"
            />
          </div>
        </RadioGroupOption>
      </div>
    </RadioGroup>
  </div>
</template>

<script setup lang="ts">
import { RadioGroup, RadioGroupLabel, RadioGroupOption } from '@headlessui/vue'

defineProps<{
  label: string
  colors: {
    name: string
    bgColor: string
  }[]
}>()

const model = defineModel()
</script>
