<template>
  <div class="flex items-center">
    <p class="text-sm text-gray-700">
      {{ rating }}
      <span class="sr-only"> out of 5 stars</span>
    </p>
    <div class="ml-1 flex items-center">
      <StarIcon
        v-for="i in [0, 1, 2, 3, 4]"
        :key="i"
        :class="[rating > i ? 'text-yellow-400' : 'text-gray-200', 'h-5 w-5 flex-shrink-0']"
        aria-hidden="true"
      />
    </div>
    <div
      aria-hidden="true"
      class="ml-4 text-sm text-gray-300"
    >
      ·
    </div>

    <div
      v-if="hasSeeAll"
      class="ml-4 flex"
    >
      <a
        href="#"
        class="text-sm font-medium text-indigo-600 hover:text-indigo-500"
      >See all {{ reviewCount }} reviews</a>
    </div>
  </div>
</template>

<script setup lang="ts">
import { StarIcon } from '@heroicons/vue/20/solid'

defineProps<{
  rating: number
  reviewCount: number
  hasSeeAll: boolean
}>()
</script>
