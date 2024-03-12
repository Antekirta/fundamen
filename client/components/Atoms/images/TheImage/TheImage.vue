<template>
  <figure class="the-image">
    <img
      :src="src"
      :alt="title"
      :class="`${imgClasses}`"
    >
  </figure>
</template>

<script lang="ts" setup>
defineProps<{
  src: string
  title?: string
  imgClasses?: string
}>()
</script>
