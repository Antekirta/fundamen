<template>
  <component
    :is="as"
    :class="`
    the-list-item
     the-list-item--color--${color}
     the-list-item--size--${size}
     `"
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
    size?: 'giant' | 'big' | 'large' | 'medium' | 'small' | 'tiny'
  }>(),
  {
    as: 'a',
    href: '#',
    color: 'dark'
  })
</script>

<style lang="scss">
.the-list-item {
  &--color {
    &--dark {
      @apply text-black;
    }
    &--light {
      @apply text-white;
    }
  }

  &--size {
    &--giant {
      @apply text-5xl;
    }
    &--big {
      @apply text-4xl;
    }
    &--large {
      @apply text-3xl;
    }
    &--medium {
      @apply text-2xl;
    }
    &--small {
      @apply text-xl;
    }
    &--tiny {
      @apply text-base;
    }
  }
}
</style>

<style lang="scss">
@import 'theme/confectionery.scss';
</style>
