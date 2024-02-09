<template>
  <component
    :is="as"
    :href="href"
    class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
  >
    {{ title }}
  </component>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    as: string
    href: string
    title: string
  }>(),
  {
    as: 'a',
    href: '#'
  })
</script>
