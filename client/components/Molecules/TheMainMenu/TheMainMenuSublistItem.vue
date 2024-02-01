<template>
  <div class="group relative flex gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50">
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
        class="block font-semibold text-gray-900"
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
import type { TheMainMenuSublistItemInterface } from '@/components/Molecules/TheMainMenu/the-main-menu.interface'

defineProps<{
  item: TheMainMenuSublistItemInterface
}>()
</script>
