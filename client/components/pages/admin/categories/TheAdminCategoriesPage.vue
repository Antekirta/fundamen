<template>
  <div class="the-admin-categories-page">
    <the-header
      as="h1"
      size="big"
      class="pb-4"
      font-style="bold"
    >
      Categories
    </the-header>

    <hr>

    <the-button
      theme="info"
      size="tiny"
      @click="openModal('category')"
    >
      <div class="flex gap-1">
        <PlusIcon class="w-5 h-5" /> New Category
      </div>
    </the-button>

    <the-data-table
      :is-loading="isLoading"
      :items="computedItems"
      :columns="columns"
      :pagination-response="paginationRes"
      :sorting="sorting"
      @update-meta="fetchCategories"
    />

    <the-modal
      :is-open="modals.category.isOpen"
      class="the-admin-categories-page__modal"
      @close="closeModal('category')"
    >
      <the-category-form />
    </the-modal>
  </div>
</template>

<script lang="ts" setup>
import { PlusIcon } from '@heroicons/vue/20/solid'
import TheDataTable, { type ColumnInterface, type TableMetaInterface } from './components/TheDataTable/TheDataTable.vue'
import { useDataTableItems } from './components/TheDataTable/composables/items.composable'
import { usePagination } from './components/TheDataTable/composables/pagination.composable'
import { AdminCategoriesPageRepository } from './repository'
import TheCategoryForm from './components/TheCategoryForm.vue'
import { updateReactiveArray, updateReactiveObject } from '@/shared/utils/helpers'
import type { SortingInterface } from '@/shared/types/sorting'
import TheModal from '@/components/Atoms/other/TheModal/TheModal.vue'
import TheHeader from '@/components/Atoms/typography/TheHeader/TheHeader.vue'
import TheButton from '@/components/Atoms/form/buttons/TheButton/TheButton.vue'
import type { CategoryInterface } from '@/shared/types/product.domain.interface.client'

const { repo } : { repo: AdminCategoriesPageRepository } = useRepo(AdminCategoriesPageRepository)
const { columns } = useColumns()
const { categories, isLoading, fetchCategories } = useCategories()
const { paginationRes, updatePaginationRes } = usePagination()
const { computedItems } = useDataTableItems<CategoryInterface>(categories, columns)

const sorting = reactive<SortingInterface>({
  sortBy: 'id',
  sortDirection: 'asc'
})

onMounted(() => {
  fetchCategories({
    pagination: {
      page: 1,
      itemsPerPage: 10
    },
    sorting: {
      sortBy: 'id',
      sortDirection: 'desc'
    }
  })
})

const { modals, openModal, closeModal } = useModals()

function useModals () {
  const modals = reactive({
    category: {
      isOpen: false
    }
  })

  type ModalName = keyof typeof modals

  function openModal (modalName : ModalName) {
    modals[modalName].isOpen = true
  }

  function closeModal (modalName : ModalName) {
    modals[modalName].isOpen = false
  }

  return {
    modals,
    openModal,
    closeModal
  }
}

function useCategories () {
  const isLoading = ref(true)
  const categories = reactive<CategoryInterface[]>([])

  async function fetchCategories (tableMeta : TableMetaInterface) {
    isLoading.value = true

    const { data, meta } = await repo.getCategories(tableMeta)

    updateReactiveObject(sorting, meta.sorting)

    updatePaginationRes(meta.pagination)

    updateReactiveArray(categories, data)

    isLoading.value = false
  }

  return {
    isLoading,
    categories,

    fetchCategories
  }
}

function useColumns () {
  const columns : ColumnInterface[] = [
    {
      id: 'id',
      label: 'ID',
      isSortable: true,
      width: '100px'
    },
    {
      id: 'primary_image_url',
      label: 'Image',
      width: '200px'
    },
    {
      id: 'name',
      label: 'Name',
      isSortable: true,
      width: '300px'
    },
    {
      id: 'slug',
      label: 'Slug'
    }
  ]

  return {
    columns
  }
}
</script>

<style lang="scss">
.the-admin-categories-page {
  &__modal {
    .the-modal__content {
      width: 500px;
      min-height: 300px;
    }
  }
}
</style>
