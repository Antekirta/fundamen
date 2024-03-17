<template>
  <component
    :is="as"
    class="the-simple-header"
  >
    <slot />
  </component>
</template>

<script lang="ts" setup>
withDefaults(defineProps<{
  as: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  color: 'gray' | 'blue'
}>(), {
  color: 'gray'
})
</script>

<style lang="scss">
.the-simple-header {
  @apply text-sm font-medium text-gray-900;
}
</style>
