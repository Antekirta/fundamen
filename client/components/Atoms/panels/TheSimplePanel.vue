<template>
  <div
    class="rounded-lg border border-gray-200 bg-gray-50 p-6 text-center"
  >
    <dt>
      <component
        :is="icon"
        class="mx-auto h-6 w-6 flex-shrink-0 text-gray-400"
        aria-hidden="true"
      />
      <span class="mt-4 text-sm font-medium text-gray-900">{{ title }}</span>
    </dt>
    <dd class="mt-1 text-sm text-gray-500">
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
