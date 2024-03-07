<template>
  <component
    :is="as"
    :class="`the-header
     the-header--size--${size}
     the-header--color--${color}
     the-header--font--${font}
     the-header--fontStyle--${fontStyle}
    `"
  >
    <slot />
  </component>
</template>

<script lang="ts" setup>
withDefaults(defineProps<{
  as: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  size: 'giant' | 'big' | 'large' | 'medium' | 'small' | 'tiny'
  color: 'dark' | 'light',
  fontStyle: 'bold',
  font: 'fancy'
}>(), {
  size: 'large',
  color: 'dark'
})
</script>

<style lang="scss">
@import 'theme/confectionery.scss';
</style>
