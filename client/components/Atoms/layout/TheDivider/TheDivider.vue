<template>
  <div class="the-divider">
    <div
      class="the-divider__line-container"
      aria-hidden="true"
    >
      <div class="the-divider__line" />
    </div>
    <div class="the-divider__title-container">
      <span class="the-divider__title">{{ title }}</span>
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  title?: string
}>()
</script>

<style lang="scss">
.the-divider {
  @apply relative;

  &__line-container {
    @apply absolute inset-0 flex items-center;
  }

  &__line {
    @apply w-full border-t border-gray-300;
  }

  &__title-container {
    @apply relative flex justify-center;
  }

  &__title {
    @apply bg-white px-2 text-sm text-gray-500;
  }
}
</style>
