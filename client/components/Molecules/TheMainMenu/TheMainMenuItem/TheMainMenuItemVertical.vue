<template>
  <div>
    <Disclosure
      v-if="items && items.length"
      v-slot="{ open }"
      as="div"
      class="-mx-3"
    >
      <DisclosureButton class="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
        {{ title }}
        <ChevronDownIcon
          :class="[open ? 'rotate-180' : '', 'h-5 w-5 flex-none']"
          aria-hidden="true"
        />
      </DisclosureButton>

      <DisclosurePanel class="mt-2 space-y-2">
        <DisclosureButton
          v-for="item in menuItems"
          :key="item.name"
          as="a"
          :href="item.href"
          class="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
        >
          {{ item.name }}
        </DisclosureButton>
      </DisclosurePanel>
    </Disclosure>

    <a
      v-else
      :href="href"
      class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
    >{{ title }}</a>
  </div>
</template>

<script setup lang="ts">
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel
} from '@headlessui/vue'
import { ChevronDownIcon } from '@heroicons/vue/20/solid'
import type {
  TheMainMenuItemPropsInterface
} from '@/components/Molecules/TheMainMenu/TheMainMenuItem/TheMainMenuItem.interface'

const props = defineProps<TheMainMenuItemPropsInterface>()

const menuItems = [
  ...(props.items || []),
  ...(props.callsToAction || [])
]
</script>
