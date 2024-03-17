<template>
  <div class="the-color-picker">
    <RadioGroup
      v-model="model"
      class="the-color-picker__group"
    >
      <RadioGroupLabel class="the-color-picker__label">
        {{ label }}
      </RadioGroupLabel>

      <div class="the-color-picker__options-container">
        <RadioGroupOption
          v-for="color in colors"
          :key="color.name"
          v-slot="{ active, checked }"
          as="template"
          :value="color.name"
          class="the-color-picker__option"
        >
          <div
            :class="[
              'the-color-picker__color',
              active && checked ? 'the-color-picker__color--active-checked' : '',
              !active && checked ? 'the-color-picker__color--checked' : '',
            ]"
          >
            <RadioGroupLabel
              as="span"
              class="sr-only"
            >
              {{ color.name }}
            </RadioGroupLabel>
            <span
              aria-hidden="true"
              :class="[color.bgColor, 'the-color-picker__color-display']"
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

<style lang="scss">
.the-color-picker {
  &__group {
    @apply block;
  }

  &__label {
    @apply block;
  }

  &__options-container {
    @apply mt-2 flex items-center space-x-3;
  }

  &__option {
    @apply relative -m-0.5 flex cursor-pointer items-center justify-center p-0.5 focus:outline-none;
  }

  &__color {
    @apply rounded-full;
    &--active-checked {
      @apply ring ring-offset-1;
    }
    &--checked {
      @apply ring-2;
    }
  }

  &__color-display {
    @apply h-8 w-8 rounded-full border border-black border-opacity-10;
  }
}
</style>
