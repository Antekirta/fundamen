<template>
  <a
    :href="item.href"
    class="the-call-to-action"
  >
    <component
      :is="item.icon"
      class="the-call-to-action__icon"
      aria-hidden="true"
    />
    {{ item.name }}
  </a>
</template>

<script setup lang="ts">
import type { ListItemInterface } from '@/shared/shared.interface'

defineProps<{
  item: Omit<ListItemInterface, 'description'>
}>()
</script>

<style lang="scss">
.the-call-to-action {
  @apply flex items-center justify-center gap-x-2.5 p-3;
  @apply bg-brown;
  @apply text-lg font-semibold leading-6 text-paper hover:text-red;

  &__icon {
    @apply h-5 w-5 flex-none;
  }
}
</style>
