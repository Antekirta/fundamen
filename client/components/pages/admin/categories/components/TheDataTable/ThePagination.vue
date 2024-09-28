<template>
  <div class="the-pagination">
    <!-- Desktop view with page numbers -->
    <div class="the-pagination__desktop-view">
      <nav
        class="the-pagination__nav"
        aria-label="Pagination"
      >
        <button
          :disabled="currentPage === 1"
          class="the-pagination__nav-button the-pagination__nav-button--first"
          @click="firstPage"
        >
          <span class="sr-only">Previous</span>
          <ChevronDoubleLeftIcon
            class="the-pagination__icon"
            aria-hidden="true"
          />
        </button>

        <button
          :disabled="currentPage === 1"
          class="the-pagination__nav-button"
          @click="previousPage"
        >
          <span class="sr-only">Previous</span>
          <ChevronLeftIcon
            class="the-pagination__icon"
            aria-hidden="true"
          />
        </button>

        <div class="pagination__input-container">
          <input
            v-if="isInputFocused"
            ref="pageInputRef"
            v-mask="dynamicInputMask"
            :class="['the-pagination__page-input']"
            @focus="onInputFocus"
            @blur="onInputBlur"
            @change="onInputChange"
            @keypress.enter="blurInput"
          >

          <div
            v-else
            class="the-pagination__page-indicator"
            @click="focusInput"
          >
            {{ currentPage }} of {{ maxPage }}
          </div>
        </div>

        <button
          :disabled="currentPage === maxPage"
          class="the-pagination__nav-button"
          @click="nextPage"
        >
          <span class="sr-only">Next</span>
          <ChevronRightIcon
            class="the-pagination__icon"
            aria-hidden="true"
          />
        </button>

        <button
          :disabled="currentPage === maxPage"
          class="the-pagination__nav-button the-pagination__nav-button--last"
          @click="lastPage"
        >
          <span class="sr-only">Next</span>
          <ChevronDoubleRightIcon
            class="the-pagination__icon"
            aria-hidden="true"
          />
        </button>
      </nav>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ChevronLeftIcon, ChevronDoubleLeftIcon, ChevronRightIcon, ChevronDoubleRightIcon } from '@heroicons/vue/20/solid'
import type { PaginationRequestInterface } from '@/shared/types/pagination'

const emit = defineEmits(['pagination'])

const props = defineProps<{
  total: number;
  itemsPerPage: number;
  modelValue: number;
}>()

const currentPage = ref(props.modelValue)

const pageInputRef = ref('pageInputRef')
const isInputFocused = ref(false)
const totalPages = computed(() => Math.ceil(props.total / props.itemsPerPage))
const maxPage = computed(() => totalPages.value)
const minPage = 1
const dynamicInputMask = computed(() => {
  if (totalPages.value < 10) {
    return '#'
  }

  if (totalPages.value < 100) {
    return '##'
  }

  return '###'
})

function onInputChange ({ target: { value } } : any) {
  let page = parseInt(value)

  if (page > totalPages.value) {
    page = totalPages.value
  }

  if (page < minPage) {
    page = minPage
  }

  goToPage(page)
}

function onInputFocus () {
  isInputFocused.value = true
}

function onInputBlur () {
  isInputFocused.value = false
}

function focusInput () {
  onInputFocus()

  nextTick(() => {
    if (pageInputRef.value) {
      // @ts-ignore
      pageInputRef.value.focus()
    }
  })
}

function blurInput () {
  onInputBlur()

  nextTick(() => {
    if (pageInputRef.value) {
      // @ts-ignore
      pageInputRef.value.blur()
    }
  })
}

function goToPage (page: number) {
  if (page >= 1 && page <= totalPages.value) {
    currentPage.value = page

    const pagination : PaginationRequestInterface = {
      page,
      itemsPerPage: props.itemsPerPage
    }

    emit('pagination', pagination)
  }
}

function firstPage () {
  if (currentPage.value > minPage) {
    goToPage(minPage)
  }
}

function previousPage () {
  if (currentPage.value > minPage) {
    goToPage(currentPage.value - 1)
  }
}

function nextPage () {
  if (currentPage.value < totalPages.value) {
    goToPage(currentPage.value + 1)
  }
}

function lastPage () {
  if (currentPage.value < totalPages.value) {
    goToPage(maxPage.value)
  }
}
</script>

<style lang="scss">
.the-pagination {
  @apply flex items-center justify-between px-4 py-3 sm:px-6;
  @apply border-t border-gray-200 ;

  &__mobile-view {
    @apply flex flex-1 justify-between sm:hidden;
  }

  &__button {
    @apply relative inline-flex items-center rounded-md;
    @apply border border-gray-300 bg-white px-4 py-2;
    @apply text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:opacity-50;

    &--next {
      @apply ml-3;
    }
  }

  &__desktop-view {
    @apply hidden sm:flex sm:flex-1 sm:items-center sm:justify-between;
  }

  &__nav {
    @apply isolate inline-flex -space-x-px;
    @apply rounded-md shadow-sm;
  }

  &__nav-button {
    @apply relative inline-flex items-center px-2 py-2;
    @apply text-gray-400 ring-1 ring-inset ring-gray-300;
    @apply hover:bg-gray-50 focus:outline-offset-0 disabled:opacity-50;

    &--first {
      @apply rounded-l-md;
    }

    &--last {
      @apply rounded-r-md;
    }
  }

  &__page-indicator {
    @apply relative inline-flex items-center justify-center px-4 py-3;
    @apply text-sm font-semibold;
    @apply ring-1 ring-inset ring-gray-300;
    width: 100px;
    height: 100%;
    background: transparent;
    border: none;
  }

  &__page-input {
    @apply relative inline-flex items-center px-4 py-3;
    @apply text-sm font-semibold;
    @apply ring-1 ring-inset ring-gray-300;
    width: 100px;
    height: 100%;
    background: transparent;
    border: none;
    text-align: center;

    &:focus {
      @apply ring-1 ring-inset ring-gray-300;
    }
  }

  &__icon {
    @apply h-5 w-5;
  }
}
</style>
