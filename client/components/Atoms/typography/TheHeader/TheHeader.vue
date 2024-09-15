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
import type { sizeProp, colorProp, fontStyleProp, fontProp } from '@/shared/types/props.ts'

withDefaults(defineProps<{
  as: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  size: sizeProp
  color: colorProp
  fontStyle: fontStyleProp,
  font: fontProp
}>(), {
  as: 'h1',
  size: 'large',
  color: 'dark'
})
</script>

<style lang="scss">
@import '@/assets/scss/mixins/size.mixin.scss';
@import '@/assets/scss/mixins/font.mixin.scss';
@import '@/assets/scss/mixins/font-style.mixin.scss';

.the-header {
  @include size-mixin();
  @include font-mixin();
  @include font-style-mixin();
}
</style>

<style lang="scss">
@import 'theme/confectionery.scss';
</style>
