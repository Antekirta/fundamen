<template>
  <div class="bg-gray-50">
    <div class="mx-auto max-w-2xl px-4 pb-24 pt-16 sm:px-6 lg:max-w-7xl lg:px-8">
      <form class="lg:grid lg:grid-cols-2 lg:gap-x-12 xl:gap-x-16">
        <div>
          <div>
            <h2 class="text-lg font-medium text-gray-900">
              Contact information
            </h2>

            <div class="mt-4">
              <label
                for="email-address"
                class="block text-sm font-medium text-gray-700"
              >Email address</label>
              <div class="mt-1">
                <input
                  id="email-address"
                  type="email"
                  name="email-address"
                  autocomplete="email"
                  class="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                >
              </div>
            </div>
          </div>

          <div class="mt-10 border-t border-gray-200 pt-10">
            <h2 class="text-lg font-medium text-gray-900">
              Shipping information
            </h2>

            <div class="mt-4 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-4">
              <div>
                <label
                  for="first-name"
                  class="block text-sm font-medium text-gray-700"
                >First name</label>
                <div class="mt-1">
                  <input
                    id="first-name"
                    type="text"
                    name="first-name"
                    autocomplete="given-name"
                    class="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  >
                </div>
              </div>

              <div>
                <label
                  for="last-name"
                  class="block text-sm font-medium text-gray-700"
                >Last name</label>
                <div class="mt-1">
                  <input
                    id="last-name"
                    type="text"
                    name="last-name"
                    autocomplete="family-name"
                    class="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  >
                </div>
              </div>

              <div class="sm:col-span-2">
                <label
                  for="company"
                  class="block text-sm font-medium text-gray-700"
                >Company</label>
                <div class="mt-1">
                  <input
                    id="company"
                    type="text"
                    name="company"
                    class="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  >
                </div>
              </div>

              <div class="sm:col-span-2">
                <label
                  for="address"
                  class="block text-sm font-medium text-gray-700"
                >Address</label>
                <div class="mt-1">
                  <input
                    id="address"
                    type="text"
                    name="address"
                    autocomplete="street-address"
                    class="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  >
                </div>
              </div>

              <div class="sm:col-span-2">
                <label
                  for="apartment"
                  class="block text-sm font-medium text-gray-700"
                >Apartment, suite, etc.</label>
                <div class="mt-1">
                  <input
                    id="apartment"
                    type="text"
                    name="apartment"
                    class="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  >
                </div>
              </div>

              <div>
                <label
                  for="city"
                  class="block text-sm font-medium text-gray-700"
                >City</label>
                <div class="mt-1">
                  <input
                    id="city"
                    type="text"
                    name="city"
                    autocomplete="address-level2"
                    class="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  >
                </div>
              </div>

              <div>
                <label
                  for="country"
                  class="block text-sm font-medium text-gray-700"
                >Country</label>
                <div class="mt-1">
                  <select
                    id="country"
                    name="country"
                    autocomplete="country-name"
                    class="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  >
                    <option>United States</option>
                    <option>Canada</option>
                    <option>Mexico</option>
                  </select>
                </div>
              </div>

              <div>
                <label
                  for="region"
                  class="block text-sm font-medium text-gray-700"
                >State / Province</label>
                <div class="mt-1">
                  <input
                    id="region"
                    type="text"
                    name="region"
                    autocomplete="address-level1"
                    class="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  >
                </div>
              </div>

              <div>
                <label
                  for="postal-code"
                  class="block text-sm font-medium text-gray-700"
                >Postal code</label>
                <div class="mt-1">
                  <input
                    id="postal-code"
                    type="text"
                    name="postal-code"
                    autocomplete="postal-code"
                    class="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  >
                </div>
              </div>

              <div class="sm:col-span-2">
                <label
                  for="phone"
                  class="block text-sm font-medium text-gray-700"
                >Phone</label>
                <div class="mt-1">
                  <input
                    id="phone"
                    type="text"
                    name="phone"
                    autocomplete="tel"
                    class="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  >
                </div>
              </div>
            </div>
          </div>

          <div class="mt-10 border-t border-gray-200 pt-10">
            <RadioGroup v-model="selectedDeliveryMethod">
              <RadioGroupLabel class="text-lg font-medium text-gray-900">
                Delivery method
              </RadioGroupLabel>

              <div class="mt-4 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-4">
                <RadioGroupOption
                  v-for="deliveryMethod in deliveryMethods"
                  :key="deliveryMethod.id"
                  v-slot="{ checked, active }"
                  as="template"
                  :value="deliveryMethod"
                >
                  <div :class="[checked ? 'border-transparent' : 'border-gray-300', active ? 'ring-2 ring-indigo-500' : '', 'relative flex cursor-pointer rounded-lg border bg-white p-4 shadow-sm focus:outline-none']">
                    <span class="flex flex-1">
                      <span class="flex flex-col">
                        <RadioGroupLabel
                          as="span"
                          class="block text-sm font-medium text-gray-900"
                        >{{ deliveryMethod.title }}</RadioGroupLabel>
                        <RadioGroupDescription
                          as="span"
                          class="mt-1 flex items-center text-sm text-gray-500"
                        >{{ deliveryMethod.turnaround }}</RadioGroupDescription>
                        <RadioGroupDescription
                          as="span"
                          class="mt-6 text-sm font-medium text-gray-900"
                        >{{ deliveryMethod.price }}</RadioGroupDescription>
                      </span>
                    </span>
                    <CheckCircleIcon
                      v-if="checked"
                      class="h-5 w-5 text-indigo-600"
                      aria-hidden="true"
                    />
                    <span
                      :class="[active ? 'border' : 'border-2', checked ? 'border-indigo-500' : 'border-transparent', 'pointer-events-none absolute -inset-px rounded-lg']"
                      aria-hidden="true"
                    />
                  </div>
                </RadioGroupOption>
              </div>
            </RadioGroup>
          </div>

          <!-- Payment -->
          <div class="mt-10 border-t border-gray-200 pt-10">
            <h2 class="text-lg font-medium text-gray-900">
              Payment
            </h2>

            <fieldset class="mt-4">
              <legend class="sr-only">
                Payment type
              </legend>
              <div class="space-y-4 sm:flex sm:items-center sm:space-x-10 sm:space-y-0">
                <div
                  v-for="(paymentMethod, paymentMethodIdx) in paymentMethods"
                  :key="paymentMethod.id"
                  class="flex items-center"
                >
                  <input
                    v-if="paymentMethodIdx === 0"
                    :id="paymentMethod.id"
                    name="payment-type"
                    type="radio"
                    checked=""
                    class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                  >
                  <input
                    v-else
                    :id="paymentMethod.id"
                    name="payment-type"
                    type="radio"
                    class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                  >
                  <label
                    :for="paymentMethod.id"
                    class="ml-3 block text-sm font-medium text-gray-700"
                  >{{ paymentMethod.title }}</label>
                </div>
              </div>
            </fieldset>

            <div class="mt-6 grid grid-cols-4 gap-x-4 gap-y-6">
              <div class="col-span-4">
                <label
                  for="card-number"
                  class="block text-sm font-medium text-gray-700"
                >Card number</label>
                <div class="mt-1">
                  <input
                    id="card-number"
                    type="text"
                    name="card-number"
                    autocomplete="cc-number"
                    class="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  >
                </div>
              </div>

              <div class="col-span-4">
                <label
                  for="name-on-card"
                  class="block text-sm font-medium text-gray-700"
                >Name on card</label>
                <div class="mt-1">
                  <input
                    id="name-on-card"
                    type="text"
                    name="name-on-card"
                    autocomplete="cc-name"
                    class="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  >
                </div>
              </div>

              <div class="col-span-3">
                <label
                  for="expiration-date"
                  class="block text-sm font-medium text-gray-700"
                >Expiration date (MM/YY)</label>
                <div class="mt-1">
                  <input
                    id="expiration-date"
                    type="text"
                    name="expiration-date"
                    autocomplete="cc-exp"
                    class="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  >
                </div>
              </div>

              <div>
                <label
                  for="cvc"
                  class="block text-sm font-medium text-gray-700"
                >CVC</label>
                <div class="mt-1">
                  <input
                    id="cvc"
                    type="text"
                    name="cvc"
                    autocomplete="csc"
                    class="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  >
                </div>
              </div>
            </div>
          </div>
        </div>

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
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { RadioGroup, RadioGroupDescription, RadioGroupLabel, RadioGroupOption } from '@headlessui/vue'
import { CheckCircleIcon } from '@heroicons/vue/20/solid'
import TheOrderSummary from '@/components/Molecules/page-specific/cart/TheOrderSummary.vue'
import TheProductItem from '@/components/Molecules/page-specific/cart/TheProductItem.vue'

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
const deliveryMethods = [
  { id: 1, title: 'Standard', turnaround: '4–10 business days', price: '$5.00' },
  { id: 2, title: 'Express', turnaround: '2–5 business days', price: '$16.00' }
]
const paymentMethods = [
  { id: 'credit-card', title: 'Credit card' },
  { id: 'paypal', title: 'PayPal' },
  { id: 'etransfer', title: 'eTransfer' }
]

const selectedDeliveryMethod = ref(deliveryMethods[0])
</script>
