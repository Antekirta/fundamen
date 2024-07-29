<template>
  <div class="the-special-offer">
    <ul class="the-special-offer__list">
      <li
        v-for="item in items"
        :key="item.title"
        class="the-special-offer__item"
      >
        {{ item.title }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  items: {
    title: string
  }[]
}>()
</script>

<style lang="scss">
.the-special-offer {
  @apply relative w-full;
  @apply bg-paper border-b-2 border-b-brown shadow-md shadow-brown;
  @apply font-fancy text-2xl;

  &__list {
    @apply h-16 max-w-7xl m-auto flex justify-around items-center;
  }
}
</style>
