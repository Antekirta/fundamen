<template>
  <a
    :href="item.href"
    class="flex items-center justify-center gap-x-2.5 p-3 bg-red text-lg font-semibold leading-6 text-white"
  >
    <component
      :is="item.icon"
      class="h-5 w-5 flex-none text-gray-400"
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
