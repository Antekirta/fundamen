<template>
  <div
    :key="title"
    class="the-item-with-icon"
  >
    <dt class="the-item-with-icon__title">
      <div class="the-item-with-icon__icon-container">
        <component
          :is="icon"
          class="the-item-with-icon__icon"
          aria-hidden="true"
        />
      </div>
      {{ title }}
    </dt>
    <dd class="the-item-with-icon__description">
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
.the-item-with-icon {
  @apply relative pl-16;

  &__title {
    @apply text-base font-semibold leading-7 text-gray-900;
  }

  &__icon-container {
    @apply absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600;
  }

  &__icon {
    @apply h-6 w-6 text-white;
  }

  &__description {
    @apply mt-2 text-base leading-7 text-gray-600;
  }
}
</style>
