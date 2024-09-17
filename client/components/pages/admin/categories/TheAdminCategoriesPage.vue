<template>
  <div>
    <the-header
      size="giant"
      class="pb-4"
    >
      Categories
    </the-header>

    <the-categories-list
      :categories="categories"
      :columns="columns"
    />
  </div>
</template>

<script lang="ts" setup>
import { AdminCategoriesPageRepository } from './repository'
import TheCategoriesList from './components/TheCategoriesList.vue'

const { $customFetch } = useNuxtApp()

const repo = new AdminCategoriesPageRepository($customFetch)

const categories = ref([])
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

categories.value = await repo.getCategories()
</script>
