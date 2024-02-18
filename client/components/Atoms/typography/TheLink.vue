<template>
  <a
    :href="link"
    class="font-semibold text-indigo-600 hover:text-indigo-500"
  ><slot /></a>
</template>

<script lang="ts" setup>
defineProps<{
  link: string
}>()
</script>
