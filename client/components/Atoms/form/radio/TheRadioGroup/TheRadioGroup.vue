<template>
  <div class="the-radio-group">
    <label class="the-radio-group__title">{{ title }}</label>
    <p class="the-radio-group__description">
      {{ description }}
    </p>
    <fieldset class="the-radio-group__fieldset">
      <div class="the-radio-group__options">
        <div
          v-for="option in options"
          :key="option.value"
          class="the-radio-group__option"
          @click="model = option.value"
        >
          <input
            :id="option.value"
            name="notification-method"
            type="radio"
            :checked="option.value === 'email'"
            class="the-radio-group__input"
          >
          <label
            :for="option.value"
            class="the-radio-group__label"
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

<style lang="scss">
.the-radio-group {
  &__title {
    @apply text-base font-semibold text-gray-900;
  }

  &__description {
    @apply text-sm text-gray-500;
  }

  &__fieldset {
    @apply mt-4;
  }

  &__options {
    @apply space-y-4 sm:flex sm:items-center sm:space-x-10 sm:space-y-0;
  }

  &__option {
    @apply flex items-center;
  }

  &__input {
    @apply h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600;
  }

  &__label {
    @apply ml-3 block text-sm font-medium leading-6 text-gray-900;
  }
}
</style>
