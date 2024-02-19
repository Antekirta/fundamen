<template>
  <div class="bg-white">
    <!--    <div class="mx-auto max-w-7xl overflow-hidden sm:px-6 lg:px-8">-->
    <!--      <h2 class="sr-only">-->
    <!--        Products-->
    <!--      </h2>-->

    <!--      <div class="-mx-px grid grid-cols-2 border-l border-gray-200 sm:mx-0 md:grid-cols-3 lg:grid-cols-4">-->
    <!--        <the-product-item-->
    <!--          v-for="product in products"-->
    <!--          :key="product.id"-->
    <!--          :product="product"-->
    <!--          class="group relative border-b border-r border-gray-200 p-4 sm:p-6"-->
    <!--        />-->
    <!--      </div>-->
    <!--    </div>-->
  </div>
</template>

<script setup>
import TheProductItem from '@/components/Molecules/common/items/TheProductItem.vue'

const products = [
  {
    id: 1,
    name: 'Organize Basic Set (Walnut)',
    price: '$149',
    rating: 5,
    reviewCount: 38,
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-05-image-card-01.jpg',
    imageAlt: 'TODO',
    href: '#'
  },
  {
    id: 2,
    name: 'Organize Pen Holder',
    price: '$15',
    rating: 5,
    reviewCount: 18,
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-05-image-card-02.jpg',
    imageAlt: 'TODO',
    href: '#'
  },
  {
    id: 3,
    name: 'Organize Sticky Note Holder',
    price: '$15',
    rating: 5,
    reviewCount: 14,
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-05-image-card-03.jpg',
    imageAlt: 'TODO',
    href: '#'
  },
  {
    id: 4,
    name: 'Organize Phone Holder',
    price: '$15',
    rating: 4,
    reviewCount: 21,
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-05-image-card-04.jpg',
    imageAlt: 'TODO',
    href: '#'
  }
]
</script>

<style lang="scss">
.the-products-list {
  --the-products-list__grid-gap: 16px;
  --the-products-list__item-width: 220px;

  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(var(--the-products-list__item-width), 1fr));
  gap: var(--the-products-list__grid-gap);
}
</style>
