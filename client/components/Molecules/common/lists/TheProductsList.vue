<template>
  <div>
    <div class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
      <div class="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-3 lg:gap-x-8">
        <the-product-item
          v-for="product in products"
          :key="product.id"
          :product="product"
          :category-slug="categorySlug"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import TheProductItem from '@/components/Molecules/common/items/TheProductItem/TheProductItem.vue'
import type { ProductInterface } from '@/shared/types/product.domain.interface.client'

defineProps<{
  products: ProductInterface[],
  categorySlug: string
}>()
</script>
