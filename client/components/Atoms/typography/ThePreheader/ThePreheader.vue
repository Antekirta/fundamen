<template>
  <component
    :is="as"
    :class="`the-preheader
     the-preheader--size--${size}
     the-preheader--color--${color}
     the-preheader--font--${font}
     the-preheader--fontStyle--${fontStyle}
    `"
  >
    <slot />
  </component>
</template>

<script setup lang="ts">
import type { sizeProp, colorProp, fontStyleProp, fontProp } from '@/shared/types/props.ts'

withDefaults(defineProps<{
  as: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  size: sizeProp
  color: colorProp
  fontStyle: fontStyleProp,
  font: fontProp
}>(), {
  as: 'h3',
  size: 'large',
  color: 'dark'
})
</script>

<style lang="scss">
@import '@/assets/scss/mixins/size.mixin.scss';
@import '@/assets/scss/mixins/font.mixin.scss';
@import '@/assets/scss/mixins/font-style.mixin.scss';

.the-preheader {
  @include size-mixin();
  @include font-mixin();
  @include font-style-mixin();
}
</style>

<style lang="scss">
@import 'theme/confectionery.scss';
</style>
