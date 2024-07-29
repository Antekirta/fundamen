<template>
  <component
    :is="as"
    :href="link"
    :class="`
      the-button
      the-button--color--${color}
      the-button--font--${font}
      the-button--size--${size}
     `"
    v-bind="$attrs"
  >
    <slot />
  </component>
</template>

<script setup lang="ts">
withDefaults(defineProps<{
  color: 'dark' | 'light' | 'transparent-bordered' | 'transparent'
  as?: string
  link?: string
  font: 'fancy'
  size: 'giant' | 'big' | 'large' | 'medium' | 'small' | 'tiny'
}>(), {
  as: 'a',
  link: '#'
})
</script>

<style lang="scss">
@import '@/assets/scss/mixins/size.mixin.scss';
@import '@/assets/scss/mixins/font.mixin.scss';

.the-button {
  @apply inline-block rounded-md px-3.5 py-2.5;
  @apply shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2;
  @apply text-center font-semibold;
  @apply transition-all duration-300 ease-in-out;

  @include font-mixin();
  @include size-mixin();
}
</style>

<style lang="scss">
@import 'theme/confectionery';
</style>
