<template>
  <Disclosure
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
      <slot>
        <DisclosureButton
          v-for="item in items"
          :key="item.name"
          as="a"
          :href="item.href"
          class="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
        >
          {{ item.name }}
        </DisclosureButton>
      </slot>
    </DisclosurePanel>
  </Disclosure>
</template>

<script setup lang="ts">
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
import { ChevronDownIcon } from '@heroicons/vue/20/solid'
import type { ListItemInterface } from '@/shared/shared.interface'

defineProps<{
  title: string
  items?: ListItemInterface[]
}>()
</script>
