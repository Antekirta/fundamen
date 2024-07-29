<template>
  <div class="bg-white">
    <div class="pb-16 pt-6 sm:pb-24">
      <nav
        aria-label="Breadcrumb"
        class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
      >
        <the-breadcrumbs :breadcrumbs="product.breadcrumbs" />
      </nav>

      <div class="mx-auto mt-8 max-w-2xl px-4 sm:px-6 lg:max-w-7xl">
        <div class="lg:grid lg:auto-rows-min lg:grid-cols-12 lg:gap-x-8">
          <div class="lg:col-span-5 lg:col-start-8">
            <div class="flex justify-between">
              <h1 class="text-xl font-medium text-gray-900">
                {{ product.name }}
              </h1>
              <p class="text-xl font-medium text-gray-900">
                {{ product.price }}
              </p>
            </div>
            <!-- Reviews -->
            <div class="mt-4">
              <the-rating
                :review-count="product.reviewCount"
                :rating="product.rating"
                has-see-all
              />
            </div>
          </div>

          <the-product-images-gallery
            class="mt-8"
            :images="product.images"
          />

          <div class="mt-8 lg:col-span-5">
            <form>
              <the-color-picker
                v-model="selectedColor"
                :colors="product.colors"
                label="Color"
                class="mb-4"
              />

              <the-size-picker
                v-model="selectedSize"
                :sizes="product.sizes"
                label="Size"
              />

              <the-button
                color="blue"
                class="mt-8"
              >
                Add to cart
              </the-button>
            </form>

            <!-- Product details -->
            <div class="mt-10">
              <the-simple-header as="h4">
                Description
              </the-simple-header>

              <the-text
                class="mt-4"
                v-html="product.description"
              />
            </div>

            <div class="mt-8 border-t border-gray-200 pt-8">
              <the-simple-header as="h4">
                Fabric &amp; Care
              </the-simple-header>

              <the-simple-list class="mt-4">
                <li
                  v-for="item in product.details"
                  :key="item"
                >
                  {{ item }}
                </li>
              </the-simple-list>
            </div>

            <!-- Policies -->
            <section
              aria-labelledby="policies-heading"
              class="mt-10"
            >
              <h2
                id="policies-heading"
                class="sr-only"
              >
                Our Policies
              </h2>

              <dl class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                <the-simple-panel
                  v-for="policy in policies"
                  :key="policy.name"
                  :title="policy.name"
                  :description="policy.description"
                  :icon="policy.icon"
                />
              </dl>
            </section>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { CurrencyDollarIcon, GlobeAmericasIcon } from '@heroicons/vue/24/outline'
import TheBreadcrumbs from '@/components/Molecules/common/TheBreadcrumbs.vue'
import TheRating from '@/components/Molecules/common/TheRating.vue'
import TheProductImagesGallery from '@/components/Molecules/common/TheProductImagesGallery.vue'
import TheColorPicker from '@/components/Atoms/form/TheColorPicker/TheColorPicker.vue'
import TheSizePicker from '@/components/Atoms/form/TheSizePicker/TheSizePicker.vue'
import TheButton from '@/components/Atoms/form/buttons/TheButton/TheButton.vue'
import TheSimpleHeader from '@/components/Atoms/typography/TheSimpleHeader/TheSimpleHeader.vue'
import TheText from '@/components/Atoms/typography/TheText/TheText.vue'
import TheSimpleList from '@/components/Atoms/typography/TheSimpleList/TheSimpleList.vue'
import TheSimplePanel from '@/components/Atoms/panels/TheSimplePanel/TheSimplePanel.vue'

const product = {
  name: 'Basic Tee',
  price: '$35',
  rating: 3.9,
  reviewCount: 512,
  href: '#',
  breadcrumbs: [
    { id: 1, name: 'Women', href: '#' },
    { id: 2, name: 'Clothing', href: '#' }
  ],
  images: [
    {
      id: 1,
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-featured-product-shot.jpg',
      imageAlt: "Back of women's Basic Tee in black.",
      primary: true
    },
    {
      id: 2,
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-product-shot-01.jpg',
      imageAlt: "Side profile of women's Basic Tee in black.",
      primary: false
    },
    {
      id: 3,
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-product-shot-02.jpg',
      imageAlt: "Front of women's Basic Tee in black.",
      primary: false
    }
  ],
  colors: [
    { name: 'Black', bgColor: 'bg-gray-900', selectedColor: 'ring-gray-900' },
    { name: 'Heather Grey', bgColor: 'bg-gray-400', selectedColor: 'ring-gray-400' }
  ],
  sizes: [
    { name: 'XXS', inStock: true },
    { name: 'XS', inStock: true },
    { name: 'S', inStock: true },
    { name: 'M', inStock: true },
    { name: 'L', inStock: true },
    { name: 'XL', inStock: false }
  ],
  description: `
    <p>The Basic tee is an honest new take on a classic. The tee uses super soft, pre-shrunk cotton for true comfort and a dependable fit. They are hand cut and sewn locally, with a special dye technique that gives each tee it's own look.</p>
    <p>Looking to stock your closet? The Basic tee also comes in a 3-pack or 5-pack at a bundle discount.</p>
  `,
  details: [
    'Only the best materials',
    'Ethically and locally made',
    'Pre-washed and pre-shrunk',
    'Machine wash cold with similar colors'
  ]
}
const policies = [
  { name: 'International delivery', icon: GlobeAmericasIcon, description: 'Get your order in 2 years' },
  { name: 'Loyalty rewards', icon: CurrencyDollarIcon, description: "Don't look at other tees" }
]

const selectedColor = ref(product.colors[0].name)
const selectedSize = ref(product.sizes[2].name)
</script>
