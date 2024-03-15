<template>
  <component
    :is="as"
    :class="`the-list-item the-list-item--color--${color}`"
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
    color?: 'dark' | 'light'
  }>(),
  {
    as: 'a',
    href: '#',
    color: 'dark'
  })
</script>

<style lang="scss">
@import 'theme/confectionery.scss';
</style>
