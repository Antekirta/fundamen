<template>
  <TransitionRoot
    as="template"
    :show="isOpen"
    class="the-modal"
  >
    <Dialog
      as="div"
      class="the-modal__backdrop"
      @close="close"
    >
      <TransitionChild
        as="template"
        enter="ease-out duration-300"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="ease-in duration-200"
        leave-from="opacity-100"
        leave-to="opacity-0"
        class="the-modal__overlay-transition"
      >
        <div class="the-modal__overlay" />
      </TransitionChild>

      <div class="the-modal__container">
        <div class="the-modal__inner">
          <TransitionChild
            as="template"
            enter="ease-out duration-300"
            enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enter-to="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leave-from="opacity-100 translate-y-0 sm:scale-100"
            leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            class="the-modal__content-transition"
          >
            <DialogPanel
              class="the-modal__content"
              :class="contentStyles"
            >
              <slot name="default" />
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script lang="ts" setup>
import { Dialog, DialogPanel, TransitionChild, TransitionRoot } from '@headlessui/vue'
import { twMerge } from 'tailwind-merge'

const props = defineProps<{
  isOpen: boolean
  contentClassList?: string
}>()

// eslint-disable-next-line func-call-spacing
const emit = defineEmits<{
  (e: 'close'): void
}>()

defineSlots<{
  default:() => Element
  footer: () => Element
}>()

const contentStyles = twMerge('relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:p-6', props.contentClassList)

const close = () => {
  emit('close')
}
</script>

<style lang="scss">
.the-modal {
  &__content {
    display: inline-block;
    width: auto;
    max-width: 90vw;
  }
}

/* Here you might define transition or other modal-specific styles. */
.the-modal__overlay {
  @apply fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity;
}

.the-modal__container {
  @apply fixed inset-0 z-30 w-screen overflow-y-auto;
}

.the-modal__inner {
  @apply flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0;
}

/* Additional styles for content, backdrop, and transitions can be applied here */
</style>
