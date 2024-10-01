<template>
  <NuxtLink
    :href="item.href"
    class="the-link group"
    :class="[item.current ? 'the-link--current' : 'the-link--default']"
  >
    <component
      :is="item.icon"
      v-if="item.icon"
      :class="[
        'the-link__icon',
        item.current ? 'the-link__icon--current' : 'the-link__icon--default'
      ]"
      aria-hidden="true"
    />
    <slot />
  </NuxtLink>
</template>

<script lang="ts" setup>
export interface TheLinkItem {
  href: string
  icon?: string
  current?: boolean
}

defineProps<{
  item: TheLinkItem
}>()
</script>

<style lang="scss">
.the-link {
  @apply flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6;

  &--current {
    @apply bg-indigo-700 text-white;
  }

  &--default {
    @apply text-indigo-200 hover:bg-indigo-700 hover:text-white;
  }

  &__icon {
    @apply h-6 w-6 shrink-0;

    &--current {
      @apply text-white;
    }

    &--default {
      @apply text-indigo-200 group-hover:text-white;
    }
  }
}
</style>
