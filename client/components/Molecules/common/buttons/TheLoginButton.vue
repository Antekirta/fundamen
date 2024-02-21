<template>
  <div>
    <a
      href="#"
      class="text-sm font-semibold leading-6 text-gray-900"
      @click.prevent="openLoginModal"
    >Log in <span aria-hidden="true">&rarr;</span></a>

    <the-login-modal
      :is-open="modals.login.isOpen"
      @close="closeLoginModal"
    />
  </div>
</template>

<script lang="ts" setup>
import TheLoginModal from '@/components/Organisms/modals/TheLoginModal.vue'

const modals = reactive({
  login: {
    isOpen: false
  }
})

const openLoginModal = () => {
  modals.login.isOpen = true
}

const closeLoginModal = () => {
  modals.login.isOpen = false
}
</script>
