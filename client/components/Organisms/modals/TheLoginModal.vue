<template>
  <the-modal
    :is-open="isOpen"
    @close="closeModal"
  >
    <template #default>
      <the-login-form class="w-auto" />
    </template>
  </the-modal>
</template>

<script setup lang="ts">
import TheModal from '@/components/Atoms/other/TheModal/TheModal.vue'
import TheLoginForm from '@/components/Organisms/forms/TheLoginForm.vue'

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
