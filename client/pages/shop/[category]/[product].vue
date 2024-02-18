<template>
  <div class="bg-white">
    <div class="pb-16 pt-6 sm:pb-24">
      <nav
        aria-label="Breadcrumb"
        class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
      >
        <the-breadcrumbs :breadcrumbs="product.breadcrumbs" />
      </nav>
      <div class="mx-auto mt-8 max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
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
              />
            </div>
          </div>

          <the-product-images-gallery
            class="mt-8"
            :images="product.images"
          />

          <div class="mt-8 lg:col-span-5">
            <form>
              <!-- Color picker -->
              <div>
                <h2 class="text-sm font-medium text-gray-900">
                  Color
                </h2>

                <the-color-picker
                  :colors="product.colors"
                  class="mt-2"
                />
              </div>

              <!-- Size picker -->
              <div class="mt-8">
                <div class="flex items-center justify-between">
                  <h2 class="text-sm font-medium text-gray-900">
                    Size
                  </h2>
                  <a
                    href="#"
                    class="text-sm font-medium text-indigo-600 hover:text-indigo-500"
                  >See sizing chart</a>
                </div>

                <RadioGroup
                  v-model="selectedSize"
                  class="mt-2"
                >
                  <RadioGroupLabel class="sr-only">
                    Choose a size
                  </RadioGroupLabel>
                  <div class="grid grid-cols-3 gap-3 sm:grid-cols-6">
                    <RadioGroupOption
                      v-for="size in product.sizes"
                      :key="size.name"
                      v-slot="{ active, checked }"
                      as="template"
                      :value="size"
                      :disabled="!size.inStock"
                    >
                      <div :class="[size.inStock ? 'cursor-pointer focus:outline-none' : 'cursor-not-allowed opacity-25', active ? 'ring-2 ring-indigo-500 ring-offset-2' : '', checked ? 'border-transparent bg-indigo-600 text-white hover:bg-indigo-700' : 'border-gray-200 bg-white text-gray-900 hover:bg-gray-50', 'flex items-center justify-center rounded-md border py-3 px-3 text-sm font-medium uppercase sm:flex-1']">
                        <RadioGroupLabel as="span">
                          {{ size.name }}
                        </RadioGroupLabel>
                      </div>
                    </RadioGroupOption>
                  </div>
                </RadioGroup>
              </div>

              <button
                type="submit"
                class="mt-8 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Add to cart
              </button>
            </form>

            <!-- Product details -->
            <div class="mt-10">
              <h2 class="text-sm font-medium text-gray-900">
                Description
              </h2>

              <div
                class="prose prose-sm mt-4 text-gray-500"
                v-html="product.description"
              />
            </div>

            <div class="mt-8 border-t border-gray-200 pt-8">
              <h2 class="text-sm font-medium text-gray-900">
                Fabric &amp; Care
              </h2>

              <div class="prose prose-sm mt-4 text-gray-500">
                <ul role="list">
                  <li
                    v-for="item in product.details"
                    :key="item"
                  >
                    {{ item }}
                  </li>
                </ul>
              </div>
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
                <div
                  v-for="policy in policies"
                  :key="policy.name"
                  class="rounded-lg border border-gray-200 bg-gray-50 p-6 text-center"
                >
                  <dt>
                    <component
                      :is="policy.icon"
                      class="mx-auto h-6 w-6 flex-shrink-0 text-gray-400"
                      aria-hidden="true"
                    />
                    <span class="mt-4 text-sm font-medium text-gray-900">{{ policy.name }}</span>
                  </dt>
                  <dd class="mt-1 text-sm text-gray-500">
                    {{ policy.description }}
                  </dd>
                </div>
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
import { StarIcon } from '@heroicons/vue/20/solid'
import { RadioGroup, RadioGroupLabel, RadioGroupOption } from '@headlessui/vue'
import { CurrencyDollarIcon, GlobeAmericasIcon } from '@heroicons/vue/24/outline'
import TheBreadcrumbs from '@/components/Molecules/TheBreadcrumbs.vue'
import TheRating from '@/components/Molecules/TheRating.vue'
import TheProductImagesGallery from '@/components/Molecules/TheProductImagesGallery.vue'
import TheColorPicker from '@/components/Atoms/form/TheColorPicker.vue'

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

const selectedColor = ref(product.colors[0])
const selectedSize = ref(product.sizes[2])
</script>
