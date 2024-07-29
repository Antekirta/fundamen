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
import type { sizeProp, colorProp, fontStyleProp, fontProp } from '@/shared/types/props'

withDefaults(defineProps<{
  size: sizeProp
  color: colorProp
  fontStyle: fontStyleProp
  font: fontProp
}>(), {
  size: 'small',
  color: 'dark'
})
</script>

<style lang="scss">
@import "@/assets/scss/mixins/size.mixin.scss";
@import "@/assets/scss/mixins/font-style.mixin.scss";
@import "@/assets/scss/mixins/font.mixin.scss";

.the-description {
  @include size-mixin();
  @include font-mixin();
  @include font-style-mixin();
}
</style>

<style lang="scss">
@import 'theme/confectionery.scss';
</style>
