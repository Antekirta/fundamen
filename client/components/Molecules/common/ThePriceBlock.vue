<template>
  <div
    :class="[isSpecial ? 'ring-2 ring-indigo-600' : 'ring-1 ring-gray-200', 'rounded-3xl p-8']"
    class="hover:shadow-lg transition-shadow duration-200 ease-in-out"
  >
    <the-header
      as="h3"
      :color="isRecommended ? 'blue' : 'gray'"
    >
      {{ title }}
    </the-header>

    <the-description>{{ description }}</the-description>

    <p class="mt-6 flex items-baseline gap-x-1">
      <span class="text-4xl font-bold tracking-tight text-gray-900">{{ price }}</span>
      <span class="text-sm font-semibold leading-6 text-gray-600">{{ priceSuffix }}</span>
    </p>

    <the-button
      :link="link"
      :color="isSpecial ? 'blue' : 'transparent'"
      class="inline-block mt-6"
    >
      Buy plan
    </the-button>

    <ul
      role="list"
      class="mt-8 space-y-3 text-sm leading-6 text-gray-600"
    >
      <li
        v-for="feature in features"
        :key="feature"
        class="flex gap-x-3"
      >
        <CheckIcon
          class="h-6 w-5 flex-none text-indigo-600"
          aria-hidden="true"
        />
        {{ feature }}
      </li>
    </ul>
  </div>
</template>
<script setup lang="ts">
import { CheckIcon } from '@heroicons/vue/20/solid'
import TheHeader from '@/components/Atoms/typography/TheHeader/TheHeader.vue'
import TheButton from '@/components/Atoms/form/buttons/TheButton/TheButton.vue'
import TheDescription from '@/components/Atoms/typography/TheDescription/TheDescription.vue'

withDefaults(defineProps<{
  title: string
  description: string
  price: string
  priceSuffix: string
  link: string
  isRecommended: boolean
  isSpecial: boolean
  features: string[]
}>(), {
  isRecommended: false,
  isSpecial: false
})
</script>
