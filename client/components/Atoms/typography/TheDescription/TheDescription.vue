<template>
  <div
    :class="`the-description
   the-description--size--${size}
   the-description--color--${color}
   the-description--font--${font}
   the-description--fontStyle--${fontStyle}
   `"
  >
    <slot />
  </div>
</template>

<script lang="ts" setup>
withDefaults(defineProps<{
  size: 'sm' | 'md' | 'lg'
  color: 'dark' | 'light'
  fontStyle: 'bold'
  font: 'fancy'
}>(), {
  size: 'sm',
  color: 'dark'
})
</script>

<style lang="scss">
@import 'theme/confectionery.scss';
</style>
