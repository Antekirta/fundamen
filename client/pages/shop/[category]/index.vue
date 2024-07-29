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

const { products, categorySlug } = await useProducts()

async function useProducts () {
  const { $customFetch } = useNuxtApp()

  const repository = new CategoryPageRepository($customFetch)

  const categoryId = '2'

  const products = await repository.getProductsBySearch(categoryId)

  return {
    categorySlug,
    products
  }
}
</script>
