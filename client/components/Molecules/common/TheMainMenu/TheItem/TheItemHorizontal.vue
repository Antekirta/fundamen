<template>
  <div>
    <Popover
      v-if="items && items.length"
      class="relative"
    >
      <PopoverButton class="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
        {{ title }}
        <ChevronDownIcon
          class="h-5 w-5 flex-none text-gray-400"
          aria-hidden="true"
        />
      </PopoverButton>

      <transition
        enter-active-class="transition ease-out duration-200"
        enter-from-class="opacity-0 translate-y-1"
        enter-to-class="opacity-100 translate-y-0"
        leave-active-class="transition ease-in duration-150"
        leave-from-class="opacity-100 translate-y-0"
        leave-to-class="opacity-0 translate-y-1"
      >
        <PopoverPanel
          class="absolute -left-8 top-full z-10 mt-3 bg-white shadow-lg ring-1 ring-gray-900/5 w-screen max-w-md overflow-hidden rounded-3xl"
        >
          <div class="p-4">
            <the-sub-item
              v-for="item in items"
              :key="item.name"
              :item="item"
              class="group relative flex gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
            />
          </div>

          <div
            v-if="callsToAction && callsToAction.length"
            class="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50"
          >
            <the-call-to-action
              v-for="item in callsToAction"
              :key="item.name"
              :item="item"
            />
          </div>
        </PopoverPanel>
      </transition>
    </Popover>

    <a
      v-else
      href="#"
      class="text-sm font-semibold leading-6 text-gray-900"
    >{{ title }}</a>
  </div>
</template>

<script setup lang="ts">
import {
  Popover,
  PopoverButton,
  PopoverPanel
} from '@headlessui/vue'
import { ChevronDownIcon } from '@heroicons/vue/20/solid'
import TheSubItem from '../TheSubItem.vue'
import TheCallToAction from '../TheCallToAction.vue'
import type { ListItemInterface } from '@/shared/shared.interface'

defineProps<{
  title: string,
  href: string,
  items?: ListItemInterface[],
  callsToAction?: ListItemInterface[],
}>()
</script>
