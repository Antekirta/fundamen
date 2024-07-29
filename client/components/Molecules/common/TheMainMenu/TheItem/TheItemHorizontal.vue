<template>
  <div class="the-item-horizontal">
    <Popover
      v-if="items && items.length"
      v-slot="{ open }"
      class="relative"
    >
      <PopoverButton class="the-item-horizontal__popover-button">
        {{ title }}
        <component
          :is="ChevronDownIcon"
          class="the-item-horizontal__icon"
          :class="{
            'transform rotate-180': open
          }"
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
          class="the-item-horizontal__popover-panel"
        >
          <div>
            <the-sub-item
              v-for="item in items"
              :key="item.name"
              :item="item"
              class="the-item-horizontal__sub-item"
            />
          </div>

          <div
            v-if="callsToAction && callsToAction.length"
            class="the-item-horizontal__call-to-action"
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
      class="tracking-wide"
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

<style lang="scss">
.the-item-horizontal {
  @apply leading-6 tracking-wider text-3xl text-paper hover:text-red;
  @apply transition-colors duration-300;

  &__popover-button {
    outline: none!important;
    @apply flex items-center gap-x-1;
    @apply tracking-wide;
    @apply active:ring-0;
    @apply focus:ring-0 focus:ring-offset-0 focus:shadow-none;
  }

  &__icon {
    @apply h-5 w-5 flex-none;
    @apply transition-transform duration-300;
  }

  &__popover-panel {
    @apply absolute -left-8 top-full z-10 w-screen max-w-md overflow-hidden mt-3;
    @apply shadow-lg ring-1 ring-gray-900/5 rounded-3xl;
    @apply bg-paper;
  }

  &__sub-item {
    @apply relative flex gap-x-6 p-4;
    @apply rounded-none first-of-type:rounded-lg;
  }

  &__call-to-action {
    @apply grid grid-cols-2;
  }
}
</style>
