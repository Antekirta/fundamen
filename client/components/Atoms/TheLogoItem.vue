<template>
  <div class="bg-gray-400/5 p-8 sm:p-10">
    <img
      class="max-h-12 w-full object-contain"
      :src="src"
      :alt="title"
      :width="width"
      :height="height"
    >
  </div>
</template>
<script setup lang="ts">
withDefaults(defineProps<{
  src: string
  title: string
  width: number
  height: number
}>(), {
  width: 160,
  height: 50
})
</script>
