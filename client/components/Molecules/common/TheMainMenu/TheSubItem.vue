<template>
  <div class="the-sub-item">
    <div
      v-if="item.icon"
      class="the-sub-item__icon-container"
    >
      <component
        :is="item.icon"
        class="the-sub-item__icon"
        aria-hidden="true"
      />
    </div>

    <div class="the-sub-item__container">
      <a
        :href="item.href"
        class="the-sub-item__title"
      >
        {{ item.name }}
        <span class="absolute inset-0" />
      </a>

      <p
        v-if="item.description"
        class="the-sub-item__description"
      >
        {{ item.description }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { ListItemInterface } from '@/shared/shared.interface'

defineProps<{
  item: ListItemInterface
}>()
</script>

<style lang="scss">
.the-sub-item {
  @apply relative flex gap-x-6 rounded-lg p-4 leading-6 text-lg hover:bg-gray-50;

  &__icon-container {
    @apply mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white;
  }

  &__icon {
    @apply h-6 w-6 text-gray-600 hover:text-indigo-600;
  }

  &__container {
    @apply flex-1;
  }

  &__title {
    @apply block text-lg font-semibold text-gray-900;
  }

  &___description {
    @apply mt-1 text-gray-600;
  }
}
</style>
