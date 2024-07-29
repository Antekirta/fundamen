<template>
  <RadioGroup
    v-model="model"
    class="the-size-picker"
  >
    <RadioGroupLabel class="the-size-picker__label">
      {{ label }}
    </RadioGroupLabel>

    <div class="the-size-picker__grid">
      <RadioGroupOption
        v-for="size in sizes"
        :key="size.name"
        v-slot="{ active, checked }"
        as="template"
        :value="size.name"
        :disabled="!size.inStock"
        class="the-size-picker__option"
      >
        <div
          :class="[
            size.inStock ? 'the-size-picker__button' : 'the-size-picker__button--disabled',
            active ? 'the-size-picker__button--active' : '',
            checked ? 'the-size-picker__button--checked' : 'the-size-picker__button--unchecked'
          ]"
        >
          <RadioGroupLabel
            as="span"
            class="the-size-picker__button-label"
          >
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
