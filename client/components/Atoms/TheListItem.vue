<template>
  <component
    :is="as"
    :href="href"
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
