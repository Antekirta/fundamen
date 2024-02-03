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
      <DisclosureButton class="flex w-full items-center justify-start bg-white py-3 text-gray-400 hover:text-gray-500">
        <span class="font-medium text-gray-900">Checkboxes</span>
        <span class="ml-6 flex items-center">
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
            v-for="(checkbox) in checkboxes"
            :key="checkbox.name"
            v-model="checkboxesModel[checkbox.name]"
            :text="checkbox.text"
            :name="checkbox.name"
          />
        </div>
      </DisclosurePanel>
    </Disclosure>
  </form>
</template>

<script setup lang="ts">
import { ChevronDownIcon, MinusIcon, PlusIcon } from '@heroicons/vue/20/solid'
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
import TheListItem from '@/components/Atoms/TheListItem.vue'
import type { FormItemInterface, ListItemInterface } from '@/shared/shared.interface'
import TheCheckbox from '@/components/Atoms/TheCheckbox.vue'
import TheDisclosure from '@/components/Molecules/TheDisclosure.vue'

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

const checkboxes : FormItemInterface[] = [
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

const checkboxesModel = reactive(checkboxes.reduce((acc : Record<string, string | boolean>, { name, value }) => {
  return {
    ...acc,
    [name]: value
  }
}, {}))
</script>
