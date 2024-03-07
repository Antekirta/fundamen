<template>
  <div class="the-login-button">
    <the-button
      color="light"
      @click.prevent="openLoginModal"
    >
      <span class="uppercase">sign in</span>
    </the-button>

    <the-login-modal
      :is-open="modals.login.isOpen"
      @close="closeLoginModal"
    />
  </div>
</template>

<script lang="ts" setup>
import TheLoginModal from '@/components/Organisms/modals/TheLoginModal.vue'
import TheButton from '@/components/Atoms/form/TheButton/TheButton.vue'

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

<style lang="scss">
.the-login-button {
}
</style>
