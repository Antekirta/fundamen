<template>
  <section
    aria-labelledby="summary-heading"
    class="rounded-lg bg-gray-50 px-4 py-6 sm:p-6 lg:p-8"
  >
    <the-header
      as="h3"
      size="small"
      color="gray-light"
    >
      Order summary
    </the-header>

    <the-simple-table
      :rows="[
        { id: '1', name: 'Subtotal', price: '$64.00', href: '#'},
        { id: '2', name: 'Shipping', price: '$5.00', href: '#'},
        { id: '3', name: 'Taxes', price: '$7.00', href: '#'},
        { id: '4', name: 'Total', price: '$76.00', href: '#', isTotal: true},
      ]"
      :cols="[{
        name: 'name',
        slot: 'name'
      }, {
        name: 'price',
        slot: 'price'
      }]"
    >
      <template #name="{row}">
        <span
          class="text-gray-900"
          :class="row.isTotal ? 'font-semibold text-base' : 'font-normal text-sm'"
        >{{ row.name }}</span>
      </template>

      <template #price="{row}">
        <span
          class="text-gray-900"
          :class="row.isTotal ? 'font-semibold text-base' : 'font-medium text-sm'"
        >{{ row.price }}</span>
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
import TheButton from '@/components/Atoms/form/buttons/TheButton/TheButton.vue'
import TheSimpleTable from '@/components/Molecules/common/lists/TheSimpleTable.vue'
import TheHeader from '@/components/Atoms/typography/TheHeader/TheHeader.vue'

const checkout = () => {
}
</script>
