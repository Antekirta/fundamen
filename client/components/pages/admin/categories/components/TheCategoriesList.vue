<template>
  <div class="the-table px-4 sm:px-6 lg:px-8">
    <div class="the-table__container">
      <div class="the-table__scroll-container">
        <div class="the-table__inner">
          <table class="the-table__table">
            <thead>
              <tr>
                <th
                  v-for="column in columns"
                  :key="column.id"
                  scope="col"
                  class="the-table__header-cell"
                >
                  {{ column.label }}
                </th>
                <th
                  scope="col"
                  class="the-table__header-cell--edit"
                >
                  <span class="sr-only">Edit</span>
                </th>
              </tr>
            </thead>

            <tbody class="the-table__body">
              <tr
                v-for="category in categories"
                :key="category.id"
              >
                <td class="the-table__cell--id">
                  {{ category.id }}
                </td>
                <td class="the-table__cell">
                  {{ category.primary_image_url }}
                </td>
                <td class="the-table__cell">
                  {{ category.name }}
                </td>
                <td class="the-table__cell">
                  {{ category.slug }}
                </td>
                <td class="the-table__cell--edit">
                  <a
                    href="#"
                    class="the-table__edit-link"
                  >Edit</a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <pre>{{ currentPage }}</pre>

    <the-pagination
      v-model="currentPage"
      :total="100"
      :items-per-page="10"
    />
  </div>
</template>

<script lang="ts" setup>
import { ref } from '#imports'
import type { CategoryInterface } from '@/shared/types/product.domain.interface.client'
import ThePagination from '@/components/pages/admin/categories/components/ThePagination.vue'

interface ColumnInterface {
  id: string
  label: string
}

defineProps<{
  columns: ColumnInterface[],
  categories: CategoryInterface[]
}>()

const currentPage = ref(1)
</script>

<style lang="scss">
.the-table {
  &__container {
    @apply mt-8 flow-root;
  }

  &__scroll-container {
    @apply -mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8;
  }

  &__inner {
    @apply inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8;
  }

  &__table {
    @apply min-w-full divide-y divide-gray-300;
  }

  &__header-cell {
    @apply py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0;
  }

  &__header-cell--edit {
    @apply relative py-3.5 pl-3 pr-4 sm:pr-0;
  }

  &__body {
    @apply divide-y divide-gray-200;
  }

  &__cell--id {
    @apply whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0;
  }

  &__cell {
    @apply whitespace-nowrap px-3 py-4 text-sm text-gray-500;
  }

  &__cell--edit {
    @apply relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0;
  }

  &__edit-link {
    @apply text-indigo-600 hover:text-indigo-900;
  }
}
</style>
