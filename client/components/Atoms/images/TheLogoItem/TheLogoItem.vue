<template>
  <div class="the-logo-item">
    <img
      class="the-logo-item__image"
      :src="src"
      :alt="title"
      :width="width"
      :height="height"
    >
  </div>
</template>

<script setup lang="ts">
withDefaults(defineProps<{
  src: string
  title: string
  width: number
  height: number
}>(), {
  width: 160,
  height: 50
})
</script>

<style lang="scss">
.the-logo-item {
  @apply bg-gray-400/5 p-8 sm:p-10;

  &__image {
    @apply max-h-12 w-full object-contain;
  }
}
</style>
