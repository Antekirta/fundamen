<template>
  <div>
    <the-header
      size="giant"
      class="pb-4"
    >
      Categories
    </the-header>

    <the-categories-list
      :is-loading="isLoading"
      :items="computedItems"
      :columns="columns"
      :pagination-response="paginationRes"
      @pagination="fetchCategories"
    />
  </div>
</template>

<script lang="ts" setup>
import { AdminCategoriesPageRepository } from './repository'
import TheCategoriesList, { type ColumnInterface } from './components/TheDataTable/TheDataTable.vue'
import { useDataTableItems } from './components/TheDataTable/composables/items.composable'
import { usePagination } from './components/TheDataTable/composables/pagination.composable'
import type { CategoryInterface } from '@/shared/types/product.domain.interface.client'
import type { PaginationRequestInterface } from '@/shared/types/pagination'
import { updateReactiveArray } from '@/shared/utils/helpers'

const { repo } = useRepo(AdminCategoriesPageRepository)
const { columns } = useColumns()
const { categories, isLoading, fetchCategories } = useCategories()
const { paginationRes, updatePaginationRes } = usePagination()
const { computedItems } = useDataTableItems<CategoryInterface>(categories, columns)

onMounted(() => {
  fetchCategories()
})

function useCategories () {
  const isLoading = ref(true)
  const categories = reactive<CategoryInterface[]>([])

  async function fetchCategories (pagination? : PaginationRequestInterface) {
    isLoading.value = true

    const { data, meta } = await repo.getCategories(pagination)

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
      label: 'ID'
    },
    {
      id: 'primary_image_url',
      label: 'Image'
    },
    {
      id: 'name',
      label: 'Name'
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
