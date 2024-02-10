<template>
  <component
    :is="as"
    :href="link"
    :class="classes"
    v-bind="$attrs"
  >
    <slot />
  </component>
</template>

<script setup lang="ts">
import { twMerge } from 'tailwind-merge'

const props = withDefaults(defineProps<{
  as: string
  link: string,
  className: string[]
}>(), {
  as: 'a',
  link: '#',
  className () {
    return []
  }
})

const classes = computed(() => twMerge([
  'rounded-md',
  'bg-indigo-600',
  'px-3.5',
  'py-2.5',
  'text-sm',
  'font-semibold',
  'text-white',
  'shadow-sm',
  'hover:bg-indigo-500',
  'focus-visible:outline',
  'focus-visible:outline-2',
  'focus-visible:outline-offset-2',
  'focus-visible:outline-indigo-600'], props.className))
</script>
