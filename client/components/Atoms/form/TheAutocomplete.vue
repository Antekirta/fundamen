<template>
  <Combobox
    :model-value="modelValue"
    as="div"
    @update:model-value="$emit('update:modelValue', $event)"
  >
    <ComboboxLabel class="block text-sm font-medium leading-6 text-gray-900">
      {{ label }}
    </ComboboxLabel>
    <div class="relative mt-2">
      <ComboboxInput
        class="w-full rounded-md border-0 bg-white py-1.5 pl-3 pr-12 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        :display-value="() => selectedOption?.text || placeholder"
        @change="query = $event.target.value"
      />
      <ComboboxButton class="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none">
        <ChevronUpDownIcon
          class="h-5 w-5 text-gray-400"
          aria-hidden="true"
        />
      </ComboboxButton>

      <ComboboxOptions
        v-if="filteredOptions.length > 0"
        class="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
      >
        <ComboboxOption
          v-for="option in filteredOptions"
          :key="option.value"
          v-slot="{ active, selected }"
          :value="option.value"
          as="template"
        >
          <li :class="['relative cursor-default select-none py-2 pl-3 pr-9', active ? 'bg-indigo-600 text-white' : 'text-gray-900']">
            <div class="flex items-center">
              <span
                :class="['inline-block h-2 w-2 flex-shrink-0 rounded-full']"
                aria-hidden="true"
              />
              <span :class="['ml-3 truncate', selected && 'font-semibold']">
                {{ option.text }}
              </span>
            </div>

            <span
              v-if="selected"
              :class="['absolute inset-y-0 right-0 flex items-center pr-4', active ? 'text-white' : 'text-indigo-600']"
            >
              <CheckIcon
                class="h-5 w-5"
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
const selectedOption : ComputedRef<SelectOptionInterface | undefined> = computed(() => {
  return props.options.find(option => option.value === props.modelValue)
})
</script>
