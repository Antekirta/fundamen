<template>
  <component
    :is="as"
    :href="link"
    class="the-button"
    v-bind="$attrs"
  >
    <slot />
  </component>
</template>

<script setup lang="ts">
withDefaults(defineProps<{
  as?: string
  link?: string,
}>(), {
  as: 'a',
  link: '#'
})

</script>

<style lang="scss">
.the-button {
  @apply inline-block rounded-md px-3.5 py-2.5;
  @apply shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2;
  @apply text-center font-semibold;
}
</style>
