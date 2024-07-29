<template>
  <div class="product-card group relative flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white">
    <div class="product-card__image-container aspect-h-4 aspect-w-3 bg-gray-200 sm:aspect-none group-hover:opacity-75 sm:h-96">
      <img
        :src="product.primary_image_url"
        :alt="product.primary_image_url"
        class="product-card__image"
      >
    </div>
    <div class="product-card__content flex flex-1 flex-col space-y-2 p-4">
      <h3 class="product-card__name text-sm font-medium text-gray-900">
        <a :href="getProductLink(product)">
          <span
            aria-hidden="true"
            class="product-card__link-cover absolute inset-0"
          />
          {{ product.name }}
        </a>
      </h3>

      <TheRating
        class="product-card__rating"
        :rating="4"
        :review-count="52"
      />

      <p class="product-card__description text-sm text-gray-500">
        {{ product.description }}
      </p>

      <div class="product-card__footer flex flex-1 flex-col justify-end">
        <p class="product-card__price text-base font-medium text-gray-900">
          {{ product.price }}
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import TheRating from '@/components/Molecules/common/TheRating.vue'
import type { ProductInterface } from '@/shared/types/product.domain.interface.client'

const props = defineProps<{
  product: ProductInterface,
  categorySlug: string
}>()

const getProductLink = (product: ProductInterface) => `/shop/${props.categorySlug}/${product.slug}`
</script>

<style lang="scss">
.product-card {
  @apply relative flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white;

  &__image-container {
    @apply aspect-h-4 aspect-w-3 bg-gray-200 sm:aspect-none group-hover:opacity-75 sm:h-96;
  }

  &__image {
    @apply h-full w-full object-cover object-center sm:h-full sm:w-full;
  }

  &__content {
    @apply flex flex-1 flex-col space-y-2 p-4;
  }

  &__name {
    @apply text-sm font-medium text-gray-900;
  }

  &__link-cover {
    @apply absolute inset-0;
  }

  &__rating {
    // Rating component specific styles if needed
  }

  &__description {
    @apply text-sm text-gray-500;
  }

  &__footer {
    @apply flex flex-1 flex-col justify-end;
  }

  &__options {
    @apply text-sm italic text-gray-500;
  }

  &__price {
    @apply text-base font-medium text-gray-900;
  }
}
</style>
