<template>
  <ul
    class="the-simple-list"
    role="list"
  >
    <slot />
  </ul>
</template>

<style lang="scss">
.the-simple-list {
  @apply prose prose-sm text-gray-500;
}
</style>
