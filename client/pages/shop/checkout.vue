<template>
  <div class="bg-gray-50">
    <div class="mx-auto max-w-2xl px-4 pb-24 pt-16 sm:px-6 lg:max-w-7xl lg:px-8">
      <div class="lg:grid lg:grid-cols-2 lg:gap-x-12 xl:gap-x-16">
        <the-checkout-form />

        <div class="col-span-1">
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
                readonly
              />
            </ul>
          </section>

          <the-order-summary />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import TheOrderSummary from '@/components/Molecules/page-specific/cart/TheOrderSummary.vue'
import TheProductItem from '@/components/Molecules/page-specific/cart/TheProductItem.vue'
import TheCheckoutForm from '@/components/Organisms/forms/TheCheckoutForm.vue'

definePageMeta({
  middleware: [
    'auth',
    'role-client'
  ]
})

const products = [
  {
    id: 1,
    title: 'Basic Tee',
    href: '#',
    price: '$32.00',
    color: 'Black',
    size: 'Large',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/checkout-page-02-product-01.jpg',
    imageAlt: "Front of men's Basic Tee in black."
  }
  // More products...
]
</script>
