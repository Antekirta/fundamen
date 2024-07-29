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

        <div class="sm:col-span-2">
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

    <the-payment-form />
  </form>
</template>

<script setup lang="ts">
import TheHeader from '@/components/Atoms/typography/TheHeader/TheHeader.vue'
import TheInput from '@/components/Atoms/form/inputs/TheInput/TheInput/TheInput.vue'
import TheDivider from '@/components/Atoms/layout/TheDivider/TheDivider.vue'
import TheSelect from '@/components/Atoms/form/select/TheSelect/TheSelect.vue'
import TheRadioPanel from '@/components/Atoms/form/radio/TheRadioPanel/TheRadioPanel.vue'
import ThePaymentForm from '@/components/Organisms/forms/ThePaymentForm.vue'

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
</script>
