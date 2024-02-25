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
  @apply relative flex gap-x-6;
  @apply rounded-lg p-4;
  @apply hover:bg-red;
  @apply leading-6 text-lg text-brown hover:text-white;

  &:hover {
    .the-sub-item__icon {
      @apply text-white;
    }
  }

  &__icon-container {
    @apply mt-1 flex h-11 w-11 flex-none items-center justify-center;
    @apply rounded-lg;
  }

  &__icon {
    @apply h-8 w-8;
    @apply text-red;
  }

  &__container {
    @apply flex-1;
    @apply tracking-normal;
  }

  &__title {
    @apply block;
    @apply text-lg font-semibold;
  }

  &__description {
    @apply mt-1;
  }
}
</style>
