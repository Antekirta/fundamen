<template>
  <li class="flex py-6 sm:py-10">
    <div class="flex-shrink-0">
      <img
        :src="product.imageSrc"
        :alt="product.imageAlt"
        class="h-24 w-24 rounded-md object-cover object-center sm:h-48 sm:w-48"
      >
    </div>

    <div class="ml-4 flex flex-1 flex-col justify-between sm:ml-6">
      <div class="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
        <div>
          <div class="flex justify-between">
            <h3 class="text-sm">
              <a
                :href="product.href"
                class="font-medium text-gray-700 hover:text-gray-800"
              >{{ product.name }}</a>
            </h3>
          </div>
          <div class="mt-1 flex text-sm">
            <p class="text-gray-500">
              {{ product.color }}
            </p>
            <p
              v-if="product.size"
              class="ml-4 border-l border-gray-200 pl-4 text-gray-500"
            >
              {{ product.size }}
            </p>
          </div>
          <p class="mt-1 text-sm font-medium text-gray-900">
            {{ product.price }}
          </p>
        </div>

        <div class="mt-4 sm:mt-0 sm:pr-9">
          <span
            v-if="readonly"
            class="text-right"
          >{{ quantity }}</span>

          <the-number-input
            v-else
            v-model="quantity"
            class="w-32"
            :name="`quantity-${productIdx}`"
            :min="product.min"
            :max="product.max"
          />

          <div
            v-if="!readonly"
            class="absolute right-0 top-0"
          >
            <button
              type="button"
              class="-m-2 inline-flex p-2 text-gray-400 hover:text-gray-500"
              @click="removeProduct(product.id)"
            >
              <XMarkIcon
                class="h-5 w-5"
                aria-hidden="true"
              />
            </button>
          </div>
        </div>
      </div>

      <p class="mt-4 flex space-x-2 text-sm text-gray-700">
        <CheckIcon
          v-if="product.inStock"
          class="h-5 w-5 flex-shrink-0 text-green-500"
          aria-hidden="true"
        />
        <ClockIcon
          v-else
          class="h-5 w-5 flex-shrink-0 text-gray-300"
          aria-hidden="true"
        />
        <span>{{ product.inStock ? 'In stock' : `Ships in ${product.leadTime}` }}</span>
      </p>
    </div>
  </li>
</template>

<script setup lang="ts">
import { CheckIcon, ClockIcon, XMarkIcon } from '@heroicons/vue/20/solid'
import TheNumberInput from '@/components/Atoms/form/inputs/TheNumberInput/TheNumberInput.vue'

const quantity = ref(1)

defineProps<{
  product: {
    id: number
    imageSrc: string
    imageAlt: string
    href: string
    name: string
    color: string
    size: string
    price: string
    inStock: boolean
    leadTime: string
    min: number
    max: number
  }
  productIdx: number
  readonly: boolean
}>()

const removeProduct = (productId: number) => {
}
</script>
