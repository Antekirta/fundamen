<template>
  <div>
    <svg
      viewBox="0 0 100 100"
      width="0"
      height="0"
    >
      <linearGradient :id="FILL.HALF">
        <stop
          offset="0%"
          stop-color="gold"
        />
        <stop
          offset="55%"
          stop-color="gold"
        />
        <stop
          offset="55%"
          stop-color="white"
        />
        <stop
          offset="100%"
          stop-color="white"
        />
      </linearGradient>

      <linearGradient :id="FILL.FULL">
        <stop
          offset="0%"
          stop-color="gold"
        />
        <stop
          offset="100%"
          stop-color="gold"
        />
      </linearGradient>
    </svg>

    <div class="flex justify-start">
      <div
        v-for="starIndex in 5"
        :key="starIndex"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-5 h-5"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            :fill="`url(#${calculateStarFill(starIndex - 1)})`"
            d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
          />
        </svg>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'

const FILL = {
  HALF: 'half',
  FULL: 'full'
}

const props = defineProps({ grade: { type: Number, default: 4.76 } })

const calculateStarFill = (starIndex) : string => {
  const diff = props.grade - starIndex

  if (diff > 0.75) {
    return FILL.FULL
  }

  if (diff > 0.25) {
    return FILL.HALF
  }

  return ''
}
</script>
