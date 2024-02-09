<template>
  <Menu
    as="div"
    class="relative inline-block text-left"
  >
    <div>
      <MenuButton class="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
        {{ title }}
        <ChevronDownIcon
          class="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
          aria-hidden="true"
        />
      </MenuButton>
    </div>

    <transition
      enter-active-class="transition ease-out duration-100"
      enter-from-class="transform opacity-0 scale-95"
      enter-to-class="transform opacity-100 scale-100"
      leave-active-class="transition ease-in duration-75"
      leave-from-class="transform opacity-100 scale-100"
      leave-to-class="transform opacity-0 scale-95"
    >
      <MenuItems class="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none">
        <div class="py-1">
          <MenuItem
            v-for="option in options"
            :key="option.text"
            v-slot="{ active }"
          >
            <a
              :class="[option.current ? 'font-medium text-gray-900' : 'text-gray-500', active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm']"
            >{{ option.text }}</a>
          </MenuItem>
        </div>
      </MenuItems>
    </transition>
  </Menu>
</template>
<script setup lang="ts">
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
import { ChevronDownIcon } from '@heroicons/vue/20/solid'
import type { DropdownItemInterface } from '@/shared/shared.interface'

interface OptionInterface extends DropdownItemInterface {
  current: boolean
}

withDefaults(defineProps<{
  title: string
  options: OptionInterface[]
}>(), {
  title: 'Sort'
})
</script>
