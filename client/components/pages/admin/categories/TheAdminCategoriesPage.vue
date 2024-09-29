<template>
  <div>
    <the-header
      size="giant"
      class="pb-4"
    >
      Categories
    </the-header>

    <the-data-table
      :is-loading="isLoading"
      :items="computedItems"
      :columns="columns"
      :pagination-response="paginationRes"
      :sorting="sorting"
      @update-meta="fetchCategories"
    />
  </div>
</template>

<script lang="ts" setup>
import { AdminCategoriesPageRepository } from './repository'
import TheDataTable, { type ColumnInterface, type TableMetaInterface } from './components/TheDataTable/TheDataTable.vue'
import { useDataTableItems } from './components/TheDataTable/composables/items.composable'
import { usePagination } from './components/TheDataTable/composables/pagination.composable'
import type { CategoryInterface } from '@/shared/types/product.domain.interface.client'
import { updateReactiveArray, updateReactiveObject } from '@/shared/utils/helpers'
import type { SortingInterface } from '@/shared/types/sorting'

const { repo } : { repo: AdminCategoriesPageRepository } = useRepo(AdminCategoriesPageRepository)
const { columns } = useColumns()
const { categories, isLoading, fetchCategories } = useCategories()
const { paginationRes, updatePaginationRes } = usePagination()
const { computedItems } = useDataTableItems<CategoryInterface>(categories, columns)

const sorting = reactive<SortingInterface>({
  sortBy: 'id',
  sortDirection: 'asc'
})

onMounted(() => {
  fetchCategories({
    pagination: {
      page: 1,
      itemsPerPage: 10
    },
    sorting: {
      sortBy: 'id',
      sortDirection: 'desc'
    }
  })
})

function useCategories () {
  const isLoading = ref(true)
  const categories = reactive<CategoryInterface[]>([])

  async function fetchCategories (tableMeta : TableMetaInterface) {
    isLoading.value = true

    const { data, meta } = await repo.getCategories(tableMeta)

    updateReactiveObject(sorting, meta.sorting)

    updatePaginationRes(meta.pagination)

    updateReactiveArray(categories, data)

    isLoading.value = false
  }

  return {
    isLoading,
    categories,

    fetchCategories
  }
}

function useColumns () {
  const columns : ColumnInterface[] = [
    {
      id: 'id',
      label: 'ID',
      isSortable: true,
      width: '100px'
    },
    {
      id: 'primary_image_url',
      label: 'Image',
      width: '200px'
    },
    {
      id: 'name',
      label: 'Name',
      isSortable: true,
      width: '300px'
    },
    {
      id: 'slug',
      label: 'Slug'
    }
  ]

  return {
    columns
  }
}
</script>
