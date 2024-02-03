<template>
  <button
    type="button"
    class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
  >
    <span class="sr-only">{{ srText }}</span>

    <component
      :is="icon"
      class="h-6 w-6"
      aria-hidden="true"
    />
  </button>
</template>

<script setup lang="ts">
import {
  Bars3Icon,
  XMarkIcon
} from '@heroicons/vue/24/outline'

const props = defineProps<{
  isClosing?: boolean
}>()

const srText = props.isClosing ? 'Close menu' : 'Open menu'
const icon = props.isClosing ? XMarkIcon : Bars3Icon
</script>
