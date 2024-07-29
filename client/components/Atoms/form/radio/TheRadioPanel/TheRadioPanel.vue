<template>
  <RadioGroup
    v-model="model"
    class="radio-group"
  >
    <RadioGroupLabel class="radio-group__label">
      {{ label }}
    </RadioGroupLabel>

    <div class="radio-group__options-container">
      <RadioGroupOption
        v-for="option in options"
        :key="option.value"
        v-slot="{ checked, active }"
        as="template"
        :value="option.value"
        class="radio-group__option"
      >
        <div
          :class="[
            checked ? 'radio-group__option--checked' : 'radio-group__option--unchecked',
            active ? 'radio-group__option--active' : '',
            'radio-group__option-container'
          ]"
        >
          <span class="radio-group__option-content">
            <span class="radio-group__option-details">
              <RadioGroupLabel
                as="span"
                class="radio-group__option-title"
              >{{ option.title }}</RadioGroupLabel>
              <RadioGroupDescription
                as="span"
                class="radio-group__option-description"
              >{{ option.description }}</RadioGroupDescription>
              <RadioGroupDescription
                as="span"
                class="radio-group__option-bottom-value"
              >{{ option.bottomValue }}</RadioGroupDescription>
            </span>
          </span>

          <CheckCircleIcon
            v-if="checked"
            class="radio-group__check-icon"
            aria-hidden="true"
          />
          <span
            :class="[
              active ? 'radio-group__option-overlay--active' : 'radio-group__option-overlay--inactive',
              checked ? 'radio-group__option-overlay--checked' : 'radio-group__option-overlay--unchecked',
            ]"
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

<style lang="scss">
.radio-group {
  &__label {
    @apply text-lg font-medium text-gray-900;
  }

  &__options-container {
    @apply mt-4 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-4;
  }

  &__option {
    @apply relative flex cursor-pointer rounded-lg border bg-white p-4 shadow-sm focus:outline-none;
  }

  &__option--checked {
    @apply border-transparent;
  }

  &__option--unchecked {
    @apply border-gray-300;
  }

  &__option--active {
    @apply ring-2 ring-indigo-500;
  }

  &__option-container {
    @apply flex;
  }

  &__option-content {
    @apply flex flex-1;
  }

  &__option-details {
    @apply flex flex-col;
  }

  &__option-title, &__option-bottom-value {
    @apply block text-sm font-medium text-gray-900;
  }

  &__option-description {
    @apply mt-1 flex items-center text-sm text-gray-500;
  }

  &__check-icon {
    @apply h-5 w-5 text-indigo-600;
  }

  &__option-overlay {
    &--active, &--inactive {
      @apply absolute -inset-px rounded-lg;
    }
    &--checked {
      @apply border-indigo-500;
    }
    &--unchecked {
      @apply border-transparent;
    }
  }
}
</style>
