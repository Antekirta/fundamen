<template>
  <div class="group relative border-b border-r border-gray-200 p-4 sm:p-6">
    <div class="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-200 group-hover:opacity-75">
      <img
        :src="product.imageSrc"
        :alt="product.imageAlt"
        class="h-full w-full object-cover object-center"
      >
    </div>
    <div class="pb-4 pt-10 text-center">
      <h3 class="text-sm font-medium text-gray-900">
        <a :href="product.href">
          <span
            aria-hidden="true"
            class="absolute inset-0"
          />
          {{ product.name }}
        </a>
      </h3>
      <div class="mt-3 flex flex-col items-center">
        <p class="sr-only">
          {{ product.rating }} out of 5 stars
        </p>
        <div class="flex items-center">
          <StarIcon
            v-for="rating in [0, 1, 2, 3, 4]"
            :key="rating"
            :class="[product.rating > rating ? 'text-yellow-400' : 'text-gray-200', 'h-5 w-5 flex-shrink-0']"
            aria-hidden="true"
          />
        </div>
        <p class="mt-1 text-sm text-gray-500">
          {{ product.reviewCount }} reviews
        </p>
      </div>
      <p class="mt-4 text-base font-medium text-gray-900">
        {{ product.price }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
import { StarIcon } from '@heroicons/vue/20/solid'

const props = defineProps({
  product: {
    type: Object,
    default: {}
  }
})
</script>
