<template>
  <div class="the-category-page">
    Category
    <TheProductsList
      :products="products"
      :category-slug="categorySlug"
    />
  </div>
</template>

<script setup lang="ts">
import TheProductsList from '@/components/Molecules/common/lists/TheProductsList.vue'
import { CategoryPageRepository } from '@/pages-resources/category/repository'

// noinspection TypeScriptUnresolvedFunction
definePageMeta({
  layout: 'list'
})

const route = useRoute()

const { products, categorySlug } = await useProducts()

async function useProducts () {
  const { $customFetch } = useNuxtApp()

  const repository = new CategoryPageRepository($customFetch)

  const categorySlug = route.params.category

  const categoryId = categorySlug.split('-').pop()

  const products = await repository.getProductsBySearch(categoryId)

  return {
    categorySlug,
    products
  }
}
</script>
