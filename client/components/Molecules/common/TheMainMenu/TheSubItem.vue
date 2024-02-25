<template>
  <div class="group relative flex gap-x-6 rounded-lg p-4 leading-6 text-lg hover:bg-gray-50">
    <div
      v-if="item.icon"
      class="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white"
    >
      <component
        :is="item.icon"
        class="h-6 w-6 text-gray-600 group-hover:text-indigo-600"
        aria-hidden="true"
      />
    </div>
    <div class="flex-auto">
      <a
        :href="item.href"
        class="block text-lg font-semibold text-gray-900"
      >
        {{ item.name }}
        <span class="absolute inset-0" />
      </a>
      <p
        v-if="item.description"
        class="mt-1 text-gray-600"
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
