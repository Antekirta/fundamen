<template>
  <section
    aria-labelledby="summary-heading"
    class="mt-16 rounded-lg bg-gray-50 px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8"
  >
    <h2
      id="summary-heading"
      class="text-lg font-medium text-gray-900"
    >
      Order summary
    </h2>

    <the-simple-table
      :rows="[
        { id: '1', name: 'Basic Tee', price: '$32.00', href: '#'},
        { id: '2', name: 'Basic Tee 2', price: '$32.00', href: '#'},
        { id: '3', name: 'Basic Tee 3', price: '$32.00', href: '#'},
        { id: '4', name: 'Basic Tee 4', price: '$32.00', href: '#'},
        { id: '5', name: 'Basic Tee 5', price: '$32.00', href: '#'}
      ]"
      :cols="[{
        name: 'name',
      }, {
        name: 'price',
        slot: 'price'
      }]"
    >
      <template #price="{row}">
        <span class="text-sm font-medium text-gray-900">{{ row.price }}</span>
      </template>
    </the-simple-table>

    <div class="mt-6">
      <the-button
        class="w-full"
        color="blue"
        @click="checkout"
      >
        Checkout
      </the-button>
    </div>
  </section>
</template>

<script setup lang="ts">
import TheButton from '@/components/Atoms/form/TheButton.vue'
import TheSimpleTable from '@/components/Molecules/common/lists/TheSimpleTable.vue'

const checkout = () => {
  console.log('Checkout')
}
</script>
