<template>
  <button
    type="button"
    :class="`the-menu-toggle the-menu-toggle--color--${color}`"
  >
    <component
      :is="icon"
      class="h-10 w-10"
      aria-hidden="true"
    />
  </button>
</template>

<script setup lang="ts">
import {
  Bars3Icon,
  ChevronDoubleRightIcon
} from '@heroicons/vue/24/outline'

const props = withDefaults(defineProps<{
  isClosing?: boolean
  color?: 'dark' | 'light'
}>(), {
  isClosing: false,
  color: 'dark'
})

const icon = props.isClosing ? ChevronDoubleRightIcon : Bars3Icon
</script>

<style lang="scss">
@import './theme/confectionery.scss';
</style>
