<template>
  <div
    :key="title"
    v-clarifier
    class="the-item-with-icon"
  >
    <dt class="the-item-with-icon__title">
      <div class="the-item-with-icon__icon-container">
        <slot
          v-if="$slots.icon"
          name="icon"
        />

        <component
          :is="icon"
          v-else
          class="the-item-with-icon__icon"
          aria-hidden="true"
        />
      </div>

      <the-header
        as="h3"
        size="medium"
        font="fancy"
      >
        {{ title }}
      </the-header>
    </dt>

    <the-description
      class="the-item-with-icon__description"
      font="fancy"
      size="small"
    >
      {{ description }}
    </the-description>
  </div>
</template>

<script setup lang="ts">
import type { Component } from 'vue'
import { vClarifier } from '@/directives/v-clarifier/v-clarifier'
import TheHeader from '@/components/Atoms/typography/TheHeader/TheHeader.vue'
import TheDescription from '@/components/Atoms/typography/TheDescription/TheDescription.vue'

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
    @apply text-3xl font-bold;
  }

  &__icon-container {
    @apply absolute left-0 top-0 flex h-14 w-14 items-center justify-center rounded-lg;
  }

  &__icon {
    @apply h-12 w-12 text-red fill-red;
  }

  &__description {
    @apply mt-2;
  }
}
</style>
