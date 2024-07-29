<template>
  <!-- Payment -->
  <div class="mt-10 border-t border-gray-200 pt-10">
    <h2 class="text-lg font-medium text-gray-900">
      Payment
    </h2>

    <div class="mt-4">
      <the-radio-group
        v-model="model.paymentType"
        :options="paymentMethods"
      />
    </div>

    <div class="mt-6 grid grid-cols-4 gap-x-4 gap-y-6">
      <div class="col-span-4">
        <the-input
          v-model="model.cardNumber"
          text="Card number"
          name="card-number"
          autocomplete="cc-number"
        />
      </div>

      <div class="col-span-4">
        <the-input
          v-model="model.nameOnCard"
          text="Name on card"
          name="name-on-card"
          autocomplete="cc-name"
        />
      </div>

      <div class="col-span-3">
        <the-input
          v-model="model.expirationDate"
          text="Expiration date (MM/YY)"
          name="expiration-date"
          autocomplete="cc-exp"
        />
      </div>

      <div>
        <the-input
          v-model="model.cvc"
          text="CVC"
          name="cvc"
          autocomplete="csc"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import TheInput from '@/components/Atoms/form/inputs/TheInput/TheInput/TheInput.vue'
import TheRadioGroup from '@/components/Atoms/form/radio/TheRadioGroup/TheRadioGroup.vue'

const model = reactive({
  paymentType: '',
  cardNumber: '',
  nameOnCard: '',
  expirationDate: '',
  cvc: ''
})

const paymentMethods = [
  { value: 'credit-card', text: 'Credit card' },
  { value: 'paypal', text: 'PayPal' },
  { value: 'etransfer', text: 'eTransfer' }
]
</script>
