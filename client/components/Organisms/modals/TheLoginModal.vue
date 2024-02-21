<template>
  <the-modal
    :is-open="isOpen"
    @close="closeModal"
  >
    <template #default>
      <div>
        <div class="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
          <CheckIcon
            class="h-6 w-6 text-green-600"
            aria-hidden="true"
          />
        </div>
        <div class="mt-3 text-center sm:mt-5">
          <DialogTitle
            as="h3"
            class="text-base font-semibold leading-6 text-gray-900"
          >
            Payment successful
          </DialogTitle>
          <div class="mt-2">
            <p class="text-sm text-gray-500">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius aliquam laudantium explicabo pariatur iste dolorem animi vitae error totam. At sapiente aliquam accusamus facere veritatis.
            </p>
          </div>
        </div>
      </div>
    </template>

    <template #footer>
      <button
        type="button"
        class="inline-flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 sm:col-start-2"
        @click="closeModal"
      >
        Deactivate
      </button>

      <button
        ref="cancelButtonRef"
        type="button"
        class="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:col-start-1 sm:mt-0"
        @click="closeModal"
      >
        Cancel
      </button>
    </template>
  </the-modal>
</template>

<script setup lang="ts">
import { CheckIcon } from '@heroicons/vue/24/outline'
import { DialogTitle } from '@headlessui/vue'
import TheModal from '@/components/Atoms/TheModal.vue'

// eslint-disable-next-line func-call-spacing
const emit = defineEmits<{
  (e: 'close'): void
}>()

defineProps<{
  isOpen: boolean
}>()

const closeModal = () => {
  emit('close')
}
</script>
