<template>
  <form>
    <div>
      <the-header
        as="h4"
        color="gray-light"
        size="small"
      >
        Contact information
      </the-header>

      <div class="mt-4">
        <the-input
          v-model="model.email"
          text="Email address"
          name="email"
          type="email"
        />
      </div>
    </div>

    <the-divider class="my-10" />

    <div>
      <the-header
        as="h4"
        color="gray-light"
        size="small"
      >
        Shipping information
      </the-header>

      <div class="mt-4 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-4">
        <div>
          <the-input
            v-model="model.firstName"
            text="First name"
            name="firstName"
          />
        </div>

        <div>
          <the-input
            v-model="model.lastName"
            text="Last name"
            name="lastName"
          />
        </div>

        <div class="sm:col-span-2">
          <the-input
            v-model="model.company"
            text="Company"
            name="company"
          />
        </div>

        <div class="sm:col-span-2">
          <the-input
            v-model="model.address"
            text="Address"
            name="address"
            autocomplete="street-address"
          />
        </div>

        <div class="sm:col-span-2">
          <the-input
            v-model="model.apartment"
            text="Apartment"
            name="apartment"
          />
        </div>

        <div>
          <the-input
            v-model="model.city"
            text="City"
            name="city"
            autocomplete="address-level2"
          />
        </div>

        <div>
          <the-select
            v-model="model.country"
            :options="[
              {text: 'United States', value: 'usa'},
              {text: 'Canada', value: 'canada'},
              {text: 'Brazil', value: 'brazil'},
            ]"
            placeholder="Country"
            label="Country"
            autocomplete="country-name"
          />
        </div>

        <div>
          <the-input
            v-model="model.region"
            text="State / Province"
            name="region"
            autocomplete="address-level1"
          />
        </div>

        <div>
          <the-input
            v-model="model.postalCode"
            text="Postal code"
            name="postal-code"
            autocomplete="postal-code"
          />
        </div>

        <div>
          <the-input
            v-model="model.phone"
            text="Phone"
            name="phone"
            type="tel"
            autocomplete="tel"
          />
        </div>
      </div>
    </div>

    <the-divider class="my-10" />

    <div>
      <the-radio-panel
        v-model="model.deliveryMethod"
        :label="'Delivery method'"
        :options="deliveryMethods"
      />
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
  </form>
</template>

<script setup lang="ts">
import TheHeader from '@/components/Atoms/typography/TheHeader.vue'
import TheInput from '@/components/Atoms/form/TheInput/TheInput.vue'
import TheDivider from '@/components/Atoms/layout/TheDivider.vue'
import TheSelect from '@/components/Atoms/form/TheSelect.vue'
import TheRadioPanel from '@/components/Atoms/form/TheRadioPanel.vue'

const model = reactive({
  email: '',
  firstName: '',
  lastName: '',
  company: '',
  address: '',
  apartment: '',
  city: '',
  country: 'brazil',
  region: '',
  postalCode: '',
  phone: '',
  deliveryMethod: ref(''),
  cardNumber: '',
  nameOnCard: '',
  expirationDate: '',
  cvc: ''
})

const deliveryMethods = [
  { value: '1', title: 'Standard', description: '4–10 business days', bottomValue: '$5.00' },
  { value: '2', title: 'Express', description: '2–5 business days', bottomValue: '$16.00' }
]
const paymentMethods = [
  { id: 'credit-card', title: 'Credit card' },
  { id: 'paypal', title: 'PayPal' },
  { id: 'etransfer', title: 'eTransfer' }
]
</script>
