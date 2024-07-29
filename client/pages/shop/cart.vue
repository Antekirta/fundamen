<template>
  <div class="bg-white">
    <div class="mx-auto max-w-2xl px-4 pb-24 pt-16 sm:px-6 lg:max-w-7xl lg:px-8">
      <the-header
        as="h1"
        size="medium"
      >
        Shopping Cart
      </the-header>

      <form class="mt-12 lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-12 xl:gap-x-16">
        <section
          aria-labelledby="cart-heading"
          class="lg:col-span-7"
        >
          <ul
            role="list"
            class="divide-y divide-gray-200 border-b border-t border-gray-200"
          >
            <the-product-item
              v-for="(product, productIdx) in products"
              :key="product.id"
              :product="product"
              :product-idx="productIdx"
            />
          </ul>
        </section>

        <the-order-summary class="col-span-5" />
      </form>
    </div>
  </div>
</template>

<script setup>
import TheProductItem from '@/components/Molecules/page-specific/cart/TheProductItem.vue'
import TheOrderSummary from '@/components/Molecules/page-specific/cart/TheOrderSummary.vue'
import TheHeader from '@/components/Atoms/typography/TheHeader/TheHeader.vue'

const products = [
  {
    id: 1,
    name: 'Basic Tee',
    href: '#',
    price: '$32.00',
    color: 'Sienna',
    inStock: true,
    size: 'Large',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-01-product-01.jpg',
    imageAlt: "Front of men's Basic Tee in sienna.",
    leadTime: '3–4 weeks',
    min: 1,
    max: 10
  },
  {
    id: 2,
    name: 'Basic Tee',
    href: '#',
    price: '$32.00',
    color: 'Black',
    inStock: false,
    leadTime: '3–4 weeks',
    size: 'Large',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-01-product-02.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    min: 1,
    max: 10
  },
  {
    id: 3,
    name: 'Nomad Tumbler',
    href: '#',
    price: '$35.00',
    color: 'White',
    inStock: true,
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-01-product-03.jpg',
    imageAlt: 'Insulated bottle with white base and black snap lid.',
    min: 1,
    max: 10
  }
]
</script>
