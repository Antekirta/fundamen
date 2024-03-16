<template>
  <div class="the-item-vertical">
    <TheDisclosure
      v-if="items && items.length"
      class="the-item-vertical__item"
      :items="menuItems"
      :title="title"
      :color="itemColor"
      :size="itemSize"
    />

    <the-list-item
      v-else
      class="the-item-vertical__item"
      :title="title"
      :href="href"
      :color="itemColor"
      :size="itemSize"
      as="a"
    />
  </div>
</template>

<script setup lang="ts">
import TheListItem from '@/components/Atoms/items/TheListItem/TheListItem.vue'
import TheDisclosure from '@/components/Molecules/common/TheDisclosure/TheDisclosure.vue'
import type { ListItemInterface } from '@/shared/shared.interface'

const props = defineProps<{
  title: string,
  href: string,
  items?: ListItemInterface[],
  callsToAction?: ListItemInterface[],
  itemColor?: 'dark' | 'light'
  itemSize?: 'giant' | 'big' | 'large' | 'medium' | 'small' | 'tiny'
}>()

const menuItems = [
  ...(props.items || []),
  ...(props.callsToAction || [])
]
</script>

<style lang="scss">
.the-item-vertical {
  &__item {
    @apply pb-3;
  }
}
</style>
