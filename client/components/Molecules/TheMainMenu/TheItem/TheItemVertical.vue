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
      as="a"
    />
  </div>
</template>

<script setup lang="ts">
import TheListItem from '@/components/Atoms/items/TheListItem.vue'
import TheDisclosure from '@/components/Molecules/TheDisclosure.vue'
import type { ListItemInterface } from '@/shared/shared.interface'

const props = defineProps<{
  title: string,
  href: string,
  items?: ListItemInterface[],
  callsToAction?: ListItemInterface[],
}>()

const menuItems = [
  ...(props.items || []),
  ...(props.callsToAction || [])
]
</script>
