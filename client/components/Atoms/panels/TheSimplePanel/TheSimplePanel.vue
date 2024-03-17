<template>
  <div class="the-simple-panel">
    <dt class="the-simple-panel__title-container">
      <component
        :is="icon"
        class="the-simple-panel__icon"
        aria-hidden="true"
      />
      <span class="the-simple-panel__title">{{ title }}</span>
    </dt>
    <dd class="the-simple-panel__description">
      {{ description }}
    </dd>
  </div>
</template>

<script setup lang="ts">
import type { Component } from 'vue'

defineProps<{
  title: string
  description: string
  icon: Component
}>()
</script>

<style lang="scss">
.the-simple-panel {
  @apply rounded-lg border border-gray-200 bg-gray-50 p-6 text-center;

  &__title-container {
    @apply flex flex-col items-center;
  }

  &__icon {
    @apply mx-auto h-6 w-6 flex-shrink-0 text-gray-400;
  }

  &__title {
    @apply mt-4 text-sm font-medium text-gray-900;
  }

  &__description {
    @apply mt-1 text-sm text-gray-500;
  }
}
</style>
