<template>
  <component
    :is="as"
    :href="link"
    :class="`
      the-button
      the-button--theme--${theme}
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
  theme: 'dark' | 'light' | 'info' | 'warning' | 'success' | 'danger' | 'transparent-bordered' | 'transparent'
  as?: string
  link?: string
  font: 'fancy'
  size: 'giant' | 'big' | 'large' | 'medium' | 'small' | 'tiny'
}>(), {
  as: 'div',
  link: '#'
})
</script>

<style lang="scss">
@import '@/assets/scss/mixins/size.mixin.scss';
@import '@/assets/scss/mixins/font.mixin.scss';

.the-button {
  @apply inline-block rounded-md px-3.5 py-2.5;
  @apply border-2;
  @apply shadow-sm hover:shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2;
  @apply text-center font-semibold;
  @apply transition-all duration-300 ease-in-out;

  @include font-mixin();
  @include size-mixin();

  &--theme {
    &--dark {
      @apply border-slate-800 bg-slate-800 hover:shadow-slate-800;
      @apply text-gray-50;
    }

    &--light {
      @apply border-slate-800 bg-slate-800 hover:shadow-slate-800;
      @apply text-gray-50;
    }

    &--info {
      @apply border-blue-800 bg-blue-800 hover:shadow-blue-800;
      @apply text-gray-50;
    }

    &--warning {
      @apply border-amber-800 bg-amber-800 hover:shadow-amber-800;
      @apply text-gray-50;
    }

    &--success {
      @apply border-green-800 bg-green-800 hover:shadow-green-800;
      @apply text-gray-50;
    }

    &--danger {
      @apply border-rose-800 bg-rose-800 hover:shadow-rose-800;
      @apply text-gray-50;
    }
  }
}
</style>

<style lang="scss">
//@import 'theme/confectionery';
</style>
