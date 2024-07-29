<template>
  <form class="hidden lg:block">
    <h3 class="sr-only">
      Categories
    </h3>

    <ul
      role="list"
      class="border-b border-gray-200 pb-6 text-sm font-medium text-gray-900"
    >
      <the-list-item
        v-for="category in categories"
        :key="category.name"
        :title="category.name"
        :href="category.href"
        as="a"
        class="-mx-3 my-0 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
      />
    </ul>

    <Disclosure v-slot="{ open }">
      <DisclosureButton class="flex w-full items-center justify-start py-3 text-gray-400 hover:text-gray-500">
        <span class="font-medium text-gray-900">Checkboxes</span>
        <span class="ml-4 flex items-center">
          <component
            :is="open ? MinusIcon : PlusIcon"
            class="w-5 h-5"
            aria-hidden="true"
          />
        </span>
      </DisclosureButton>

      <DisclosurePanel>
        <div class="pl-4">
          <the-checkbox
            v-for="(input) in checkboxFields"
            :key="input.name"
            v-model="checkboxesModel[input.name]"
            :text="input.text"
            :name="input.name"
          />
        </div>
      </DisclosurePanel>
    </Disclosure>

    <Disclosure v-slot="{ open }">
      <DisclosureButton class="flex w-full items-center justify-start py-3 text-gray-400 hover:text-gray-500">
        <span class="font-medium text-gray-900">Inputs</span>
        <span class="ml-4 flex items-center">
          <component
            :is="open ? MinusIcon : PlusIcon"
            class="w-5 h-5"
            aria-hidden="true"
          />
        </span>
      </DisclosureButton>

      <DisclosurePanel>
        <div class="pl-4">
          <the-input
            v-for="(input) in inputFields"
            :key="input.name"
            v-model="inputsModel[input.name]"
            :name="input.name"
            :placeholder="input.text"
            class="mb-2"
          />
        </div>
      </DisclosurePanel>
    </Disclosure>

    <Disclosure v-slot="{ open }">
      <DisclosureButton class="flex w-full items-center justify-start py-3 text-gray-400 hover:text-gray-500">
        <span class="font-medium text-gray-900">Radios</span>
        <span class="ml-4 flex items-center">
          <component
            :is="open ? MinusIcon : PlusIcon"
            class="w-5 h-5"
            aria-hidden="true"
          />
        </span>
      </DisclosureButton>

      <DisclosurePanel>
        <div class="pl-4">
          <the-radio
            v-for="(input) in radioFields"
            :key="input.name"
            v-model="radiosModel[input.name]"
            :text="input.text"
            :name="input.name"
            class="mb-2"
          />
        </div>
      </DisclosurePanel>
    </Disclosure>

    <the-range-slider
      v-model="rangeSliderModel.price"
      :text="rangeSliderFields.price.text"
      :name="rangeSliderFields.price.text"
      class="mt-4"
    />

    <the-select
      v-model="selectsModel.people"
      class="mt-4"
      :options="selectFields.people.options"
      :label="selectFields.people.text"
      :placeholder="selectFields.people.text"
    />

    <the-autocomplete
      v-model="autocompleteModel.people"
      class="mt-4"
      :options="autocompleteFields.people.options"
      :label="autocompleteFields.people.text"
      :placeholder="autocompleteFields.people.text"
    />
  </form>
</template>

<script setup lang="ts">
import { MinusIcon, PlusIcon } from '@heroicons/vue/20/solid'
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
import TheListItem from '@/components/Atoms/items/TheListItem/TheListItem.vue'
import type { FormItemInterface, InputInterface, ListItemInterface } from '@/shared/shared.interface'
import TheCheckbox from '@/components/Atoms/form/TheCheckbox/TheCheckbox.vue'
import TheInput from '@/components/Atoms/form/inputs/TheInput/TheInput/TheInput.vue'
import TheRadio from '@/components/Atoms/form/radio/TheRadio/TheRadio.vue'
import TheRangeSlider from '@/components/Atoms/form/TheRangeSlider/TheRangeSlider.vue'
import TheSelect from '@/components/Atoms/form/select/TheSelect/TheSelect.vue'
import TheAutocomplete from '@/components/Atoms/form/autocompletes/TheAutocomplete/TheAutocomplete.vue'

const categories : ListItemInterface[] = [
  {
    name: 'Tools',
    href: '/shop/tools'
  },
  {
    name: 'Furniture',
    href: '/shop/furniture'
  },
  {
    name: 'Decor',
    href: '/shop/decor'
  },
  {
    name: 'Lighting',
    href: '/shop/lighting'
  }
]

const checkboxFields : FormItemInterface<boolean>[] = [
  {
    text: 'Apple',
    name: 'apple',
    value: false
  },
  {
    text: 'Banana',
    name: 'banana',
    value: false
  },
  {
    text: 'Cherry',
    name: 'cherry',
    value: true
  }
]

const checkboxesModel = reactive(checkboxFields.reduce((acc : Record<string, boolean>, { name, value }) => {
  return {
    ...acc,
    [name]: value
  }
}, {}))

const inputFields : InputInterface[] = [
  {
    value: '',
    text: 'Name',
    name: 'name'
  },
  {
    value: '',
    text: 'Description',
    name: 'description'
  }
]

const inputsModel = reactive(inputFields.reduce((acc : Record<string, string>, { name, value }) => {
  return {
    ...acc,
    [name]: value
  }
}, {}))

const radioFields : FormItemInterface<boolean>[] = [
  {
    value: true,
    text: 'Active',
    name: 'active'
  },
  {
    value: false,
    text: 'Discount',
    name: 'discount'
  }
]

const radiosModel = reactive(radioFields.reduce((acc : Record<string, boolean>, { name, value }) => {
  return {
    ...acc,
    [name]: value
  }
}, {}))

const rangeSliderFields : any = {
  price: {
    text: 'Price',
    name: 'price',
    min: 0,
    max: 100,
    step: 1,
    value: [10, 40]
  }
}

// @ts-ignore TODO: fix this
const rangeSliderModel = reactive(Object.values(rangeSliderFields).reduce((acc : Record<string, number[]>, { name, value }) => {
  return {
    ...acc,
    [name]: value
  }
}, {}))

const selectFields = {
  people: {
    text: 'People',
    name: 'people',
    options: [
      { value: '1', text: 'Wade Cooper' },
      { value: '2', text: 'Arlene Mccoy' },
      { value: '3', text: 'Devon Webb' },
      { value: '4', text: 'Tom Cook' },
      { value: '5', text: 'Tanya Fox' },
      { value: '6', text: 'Hellen Schmidt' },
      { value: '7', text: 'Caroline Schultz' },
      { value: '8', text: 'Mason Heaney' },
      { value: '9', text: 'Claudie Smitham' }
    ],
    value: '3'
  }
}

const selectsModel = reactive(Object.values(selectFields).reduce((acc : Record<string, any>, { name, value }) => {
  return {
    ...acc,
    [name]: value
  }
}, {}))

const autocompleteFields = {
  people: {
    text: 'People',
    name: 'people',
    options: [
      { value: '1', text: 'Wade Cooper' },
      { value: '2', text: 'Arlene Mccoy' },
      { value: '3', text: 'Devon Webb' },
      { value: '4', text: 'Tom Cook' },
      { value: '5', text: 'Tanya Fox' },
      { value: '6', text: 'Hellen Schmidt' },
      { value: '7', text: 'Caroline Schultz' },
      { value: '8', text: 'Mason Heaney' },
      { value: '9', text: 'Claudie Smitham' }
    ],
    value: '5'
  }
}

const autocompleteModel = reactive(Object.values(autocompleteFields).reduce((acc : Record<string, any>, { name, value }) => {
  return {
    ...acc,
    [name]: value
  }
}, {}))
</script>
