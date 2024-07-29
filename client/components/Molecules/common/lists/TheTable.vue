<template>
  <div class="px-4 sm:px-6 lg:px-8">
    <div class="sm:flex sm:items-center">
      <div class="sm:flex-auto">
        <h1 class="text-base font-semibold leading-6 text-gray-900">
          {{ title }}
        </h1>

        <p class="mt-2 text-sm text-gray-700">
          {{ description }}
        </p>
      </div>

      <div class="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
        <the-button color="blue">
          Some action
        </the-button>
      </div>
    </div>

    <div class="mt-8 flow-root">
      <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
          <div class="relative">
            <div
              v-if="selectedRows.length > 0"
              class="absolute left-14 top-0 flex h-12 items-center space-x-3 sm:left-12"
            >
              <button
                type="button"
                class="inline-flex items-center rounded px-2 py-1 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:bg-white"
              >
                Bulk edit
              </button>
              <button
                type="button"
                class="inline-flex items-center rounded px-2 py-1 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:bg-white"
              >
                Delete all
              </button>
            </div>

            <table class="min-w-full table-fixed divide-y divide-gray-300">
              <thead>
                <tr>
                  <th
                    v-if="hasCheckboxes"
                    scope="col"
                    class="relative px-7 sm:w-12 sm:px-6"
                  >
                    <!--suppress HtmlUnknownAttribute -->
                    <input
                      type="checkbox"
                      class="absolute left-4 top-1/2 -mt-2 h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      :checked="indeterminate || selectedRows.length === rows.length"
                      :indeterminate="indeterminate"
                      @change="checkAll"
                    >
                  </th>

                  <th
                    v-for="col in cols"
                    :key="col.name"
                    scope="col"
                    class="min-w-[12rem] py-3.5 pr-3 text-left text-sm font-semibold text-gray-900"
                  >
                    {{ col.title }}
                  </th>

                  <th
                    v-if="actions.length"
                    scope="col"
                    class="relative py-3.5 pl-3 pr-4 sm:pr-3"
                  />
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-200">
                <tr
                  v-for="rowData in rows"
                  :key="rowData.email"
                >
                  <td
                    v-if="hasCheckboxes"
                    class="relative px-7 sm:w-12 sm:px-6"
                  >
                    <div
                      v-if="isChecked(rowData.id)"
                      class="absolute inset-y-0 left-0 w-0.5 bg-indigo-600"
                    />

                    <input
                      v-model="selectedRows"
                      type="checkbox"
                      class="absolute left-4 top-1/2 -mt-2 h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      :value="rowData.email"
                    >
                  </td>

                  <template
                    v-for="col in cols"
                    :key="col.name"
                  >
                    <td :class="['whitespace-nowrap py-4 pr-3 text-sm font-medium']">
                      <template v-if="col.slot">
                        <slot
                          :name="col.slot"
                          :row="rowData"
                        />
                      </template>

                      <template v-else>
                        {{ rowData[col.name] }}
                      </template>
                    </td>
                  </template>

                  <td
                    v-if="actions.length"
                    class="whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-3"
                  >
                    <a
                      v-for="action in actions"
                      :key="action.name"
                      href="#"
                      class="text-indigo-600 hover:text-indigo-900"
                    >
                      <component
                        :is="action.icon"
                        class="h-6 w-6"
                      />
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed, type Component } from 'vue'
import TheButton from '@/components/Atoms/form/buttons/TheButton/TheButton.vue'

const props = defineProps<{
  title?: string
  description?: string
  hasCheckboxes?: boolean
  cols: {
    name: string
    title: string
    slot?: string
    isCheckbox?: boolean
  }[]
  actions: {
    name: string
    icon: Component
  }[]
  rows: {
    id: string
    [key: string]: string
  }[]
}>()

const selectedRows = ref([])
const indeterminate = computed(() => selectedRows.value.length > 0 && selectedRows.value.length < rows.length)

const checkAll = () => {
}

const isChecked = (id: string) => {
  return false
}
</script>
