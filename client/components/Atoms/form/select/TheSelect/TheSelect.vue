<template>
  <Listbox
    :model-value="modelValue"
    as="div"
    class="custom-listbox"
    @update:model-value="$emit('update:modelValue', $event)"
  >
    <ListboxLabel class="custom-listbox__label">
      {{ label }}
    </ListboxLabel>
    <div class="custom-listbox__container">
      <ListboxButton class="custom-listbox__button">
        <span class="custom-listbox__button-text">{{ selectedOption?.text || placeholder }}</span>
        <span class="custom-listbox__icon-container">
          <ChevronUpDownIcon
            class="custom-listbox__icon"
            aria-hidden="true"
          />
        </span>
      </ListboxButton>

      <transition
        leave-active-class="transition ease-in duration-100"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <ListboxOptions class="custom-listbox__options">
          <ListboxOption
            v-for="option in options"
            :key="option.value"
            v-slot="{ active, selected }"
            as="template"
            :value="option.value"
            class="custom-listbox__option"
          >
            <li :class="{'custom-listbox__option--active': active, 'custom-listbox__option--selected': selected}">
              <span class="custom-listbox__option-text">{{ option.text }}</span>

              <span
                v-if="selected"
                class="custom-listbox__check-icon-container"
              >
                <CheckIcon
                  class="custom-listbox__check-icon"
                  aria-hidden="true"
                />
              </span>
            </li>
          </ListboxOption>
        </ListboxOptions>
      </transition>
    </div>
  </Listbox>
</template>

<script lang="ts" setup generic="T">
import { computed } from 'vue'
import { Listbox, ListboxButton, ListboxLabel, ListboxOption, ListboxOptions } from '@headlessui/vue'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/vue/20/solid'
import type { SelectOptionInterface } from '@/shared/shared.interface'

defineEmits(['update:modelValue'])

const props = defineProps<{
  modelValue: string | number,
  options: SelectOptionInterface[],
  label: string,
  placeholder?: string,
}>()

const selectedOption : ComputedRef<SelectOptionInterface | undefined> = computed(() => {
  return props.options.find(option => option.value === props.modelValue)
})
</script>

<style lang="scss">
.custom-listbox {
  &__label {
    @apply block text-sm font-medium leading-6 text-gray-900;
  }

  &__container {
    @apply relative mt-1;
  }

  &__button {
    @apply relative w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 sm:text-sm sm:leading-6;
  }

  &__button-text {
    @apply block truncate;
  }

  &__icon-container {
    @apply pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2;
  }

  &__icon {
    @apply h-5 w-5 text-gray-400;
  }

  &__options {
    @apply absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm;
  }

  &__option {
    @apply relative cursor-default select-none py-2 pl-3 pr-9;
    &--active {
      @apply bg-indigo-600 text-white;
    }
    &--selected {
      @apply font-semibold;
    }
  }

  &__option-text {
    @apply block truncate;
  }

  &__check-icon-container {
    @apply absolute inset-y-0 right-0 flex items-center pr-4;
  }

  &__check-icon {
    @apply h-5 w-5;
  }
}
</style>
