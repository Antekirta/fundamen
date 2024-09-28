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
                  :class="{ 'the-table__header-cell--sortable': column.isSortable }"
                >
                  {{ column.label }}

                  <template v-if="column.isSortable">
                    <the-sorting
                      :column="column"
                      :sorting="sorting"
                      @sort="onSorting"
                    />
                  </template>
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
                v-for="(item, i) in items"
                :key="i"
              >
                <td
                  v-for="column in columns"
                  :key="column.id"
                  class="the-table__cell"
                >
                  <slot
                    v-if="hasSlot(column.id)"
                    :name="column.id"
                    :item="item"
                  />

                  <template v-else>
                    {{ item[column.id].value }}
                  </template>
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

      <the-pagination
        v-model="currentPage"
        :total="paginationResponse.total"
        :items-per-page="paginationResponse.itemsPerPage"
        @pagination="onPagination"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import ThePagination from './ThePagination.vue'
import TheSorting from './TheSorting.vue'
import type { SortingInterface } from '@/shared/types/sorting'
import type { PaginationResponseInterface, PaginationRequestInterface } from '@/shared/types/pagination'

const emit = defineEmits(['update-meta', 'pagination', 'sort'])

export interface ColumnInterface {
  id: string
  label: string
  isSortable?: boolean
}

export interface ItemInterface {
  [columnId: string]: {
    value: string
  }
}

export interface TableMetaInterface {
  pagination: PaginationRequestInterface
  sorting: SortingInterface
}

const props = defineProps<{
  isLoading: boolean
  columns: ColumnInterface[]
  items: ItemInterface[]
  paginationResponse: PaginationResponseInterface
  sorting: SortingInterface
}>()

const currentPage = ref(1)
const tableMeta : TableMetaInterface = {
  pagination: {
    page: currentPage.value,
    itemsPerPage: props.paginationResponse.itemsPerPage
  },
  sorting: props.sorting
}
const { hasSlot } = useHasSlot()

const onPagination = (pagination: PaginationRequestInterface) => {
  tableMeta.pagination = pagination

  emit('update-meta', tableMeta)
}

const onSorting = (sorting: SortingInterface) => {
  tableMeta.sorting = sorting

  emit('update-meta', tableMeta)
}
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

    &--sortable {
      @apply cursor-pointer;
    }
  }

  &__header-cell--edit {
    @apply relative py-3.5 pl-3 pr-4 sm:pr-0;
  }

  &__body {
    @apply divide-y divide-gray-200;
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
