<template>
  <a
    :href="link"
    class="the-link"
  >
    <slot />
  </a>
</template>

<script lang="ts" setup>
defineProps<{
  link: string
}>()
</script>

<style lang="scss">
.the-link {
  @apply font-semibold text-indigo-600 hover:text-indigo-500;
}
</style>
In each case,
