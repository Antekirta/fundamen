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
      :categories="categories"
      :columns="columns"
      :pagination-response="paginationRes"
      @pagination="fetchCategories"
    />
  </div>
</template>

<script lang="ts" setup>
import type { $Fetch } from 'nitropack'
import { AdminCategoriesPageRepository } from './repository'
import TheCategoriesList from './components/TheCategoriesList.vue'
import type { PaginationRequestInterface, PaginationResponseInterface } from '@/shared/types/pagination'
import { getDefaultResponsePagination } from '@/shared/utils/helpers'

const { $customFetch } = useNuxtApp()

const repo = new AdminCategoriesPageRepository($customFetch as $Fetch)

const isLoading = ref(true)
const categories = ref([])
let paginationRes = reactive<PaginationResponseInterface>(getDefaultResponsePagination())
const columns = [
  {
    id: 'id',
    label: 'ID'
  },
  {
    id: 'Image',
    label: 'Image'
  },
  {
    id: 'Name',
    label: 'Name'
  },
  {
    id: 'Slug',
    label: 'Slug'
  }
]

fetchCategories()

async function fetchCategories (pagination? : PaginationRequestInterface) {
  isLoading.value = true

  const { data, meta } = await repo.getCategories(pagination)

  paginationRes = Object.assign({}, meta.pagination)

  categories.value = data

  isLoading.value = false
}
</script>
