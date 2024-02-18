<template>
  <figure class="relative">
    <img
      :src="src"
      :alt="title"
      class="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
    >
    <div class="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
  </figure>
</template>

<script lang="ts" setup>
defineProps<{
  src: string
  title?: string
}>()
</script>
