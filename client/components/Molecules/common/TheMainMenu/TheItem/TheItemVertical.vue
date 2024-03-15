<template>
  <div>
    <TheDisclosure
      v-if="items && items.length"
      :items="menuItems"
      :title="title"
    />

    <the-list-item
      v-else
      :title="title"
      :href="href"
      :color="itemColor"
      as="a"
    />
  </div>
</template>

<script setup lang="ts">
import TheListItem from '@/components/Atoms/items/TheListItem/TheListItem.vue'
import TheDisclosure from '@/components/Molecules/common/TheDisclosure.vue'
import type { ListItemInterface } from '@/shared/shared.interface'

const props = defineProps<{
  title: string,
  href: string,
  items?: ListItemInterface[],
  callsToAction?: ListItemInterface[],
  itemColor?: 'dark' | 'light'
}>()

const menuItems = [
  ...(props.items || []),
  ...(props.callsToAction || [])
]
</script>
