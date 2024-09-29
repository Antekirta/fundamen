<template>
  <span @click="onSortClick">
    <slot />
    {{ sortingDirection }}
  </span>
</template>

<script lang="ts" setup>
import type { ColumnInterface } from './TheDataTable.vue'
import type { SortingInterface } from '@/shared/types/sorting'

const emit = defineEmits(['sort'])

const props = defineProps<{
      column: ColumnInterface
      sorting: SortingInterface
    }>()

const { sortingDirection, onSortClick } = useSort()

function useSort () {
  const sortSymbolsMap : Record<SortingInterface['sortDirection'], string> = {
    asc: '▲',
    desc: '▼'
  }

  const sortingDirection = computed(() => {
    if (props.column.isSortable) {
      if (props.sorting.sortBy === props.column.id) {
        return sortSymbolsMap[props.sorting.sortDirection]
      }

      return sortSymbolsMap.desc
    } else {
      return ''
    }
  })

  function onSortClick () {
    const { column } = props
    if (!column.isSortable) { return }

    emit('sort', {
      sortBy: column.id,
      sortDirection: props.sorting.sortDirection === 'asc' ? 'desc' : 'asc'
    } as SortingInterface)
  }

  return {
    sortingDirection,
    onSortClick
  }
}

</script>
