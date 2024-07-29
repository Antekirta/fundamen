<template>
  <Combobox
    :model-value="modelValue"
    as="div"
    class="the-autocomplete"
    @update:model-value="$emit('update:modelValue', $event)"
  >
    <ComboboxLabel class="the-autocomplete__label">
      {{ label }}
    </ComboboxLabel>
    <div class="the-autocomplete__input-container">
      <ComboboxInput
        class="the-autocomplete__input"
        :display-value="() => selectedOption?.text || placeholder"
        @change="query = $event.target.value"
      />
      <ComboboxButton class="the-autocomplete__button">
        <ChevronUpDownIcon
          class="the-autocomplete__icon"
          aria-hidden="true"
        />
      </ComboboxButton>

      <ComboboxOptions
        v-if="filteredOptions.length > 0"
        class="the-autocomplete__options"
      >
        <ComboboxOption
          v-for="option in filteredOptions"
          :key="option.value"
          v-slot="{ active, selected }"
          :value="option.value"
          as="template"
          class="the-autocomplete__option"
        >
          <li
            :class="['the-autocomplete__option-item', active ? 'the-autocomplete__option-item--active' : '', selected ? 'the-autocomplete__option-item--selected' : '']"
          >
            <div class="the-autocomplete__option-content">
              <span
                class="the-autocomplete__option-indicator"
                aria-hidden="true"
              />
              <span class="the-autocomplete__option-text">
                {{ option.text }}
              </span>
            </div>

            <span
              v-if="selected"
              class="the-autocomplete__option-icon-wrapper"
            >
              <CheckIcon
                class="the-autocomplete__option-icon"
                aria-hidden="true"
              />
            </span>
          </li>
        </ComboboxOption>
      </ComboboxOptions>
    </div>
  </Combobox>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/vue/20/solid'
import {
  Combobox,
  ComboboxButton,
  ComboboxInput,
  ComboboxLabel,
  ComboboxOption,
  ComboboxOptions
} from '@headlessui/vue'

import type { SelectOptionInterface } from '@/shared/shared.interface'

defineEmits(['update:modelValue'])

const props = defineProps<{
  modelValue: string | number,
  options: SelectOptionInterface[],
  label: string,
  placeholder?: string,
}>()

const query = ref('')

const filteredOptions = computed(() =>
  query.value === ''
    ? props.options
    : props.options.filter((option) => {
      return option.text.toLowerCase().includes(query.value.toLowerCase())
    })
)
const selectedOption: ComputedRef<SelectOptionInterface | undefined> = computed(() => {
  return props.options.find(option => option.value === props.modelValue)
})
</script>

<style lang="scss">
.the-autocomplete {
  &__label {
    @apply block text-sm font-medium leading-6 text-gray-900;
  }

  &__input-container {
    @apply relative mt-2;
  }

  &__input {
    @apply w-full rounded-md border-0 bg-white py-1.5 pl-3 pr-12 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6;
  }

  &__button {
    @apply absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none;
  }

  &__icon {
    @apply h-5 w-5 text-gray-400;
  }

  &__options {
    @apply absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm;
  }

  &__option-item {
    @apply relative cursor-default select-none py-2 pl-3 pr-9;

    &--active {
      @apply bg-indigo-600 text-white;
    }

    &:not(.the-autocomplete__option-item--active) {
      @apply text-gray-900;
    }

    &--selected {
      @apply font-semibold;
    }
  }

  &__option-content {
    @apply flex items-center;
  }

  &__option-indicator {
    @apply inline-block h-2 w-2 flex-shrink-0 rounded-full;
  }

  &__option-text {
    @apply ml-3 truncate;
  }

  &__option-icon-wrapper {
    @apply absolute inset-y-0 right-0 flex items-center pr-4;
  }

  &__option-icon {
    @apply h-5 w-5;
  }

  &__option-icon-wrapper:not(.the-autocomplete__option-item--active) {
    @apply text-indigo-600;
  }
}
</style>
