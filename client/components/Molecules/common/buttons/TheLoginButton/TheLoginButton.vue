<template>
  <div class="the-login-button">
    <the-button
      class="the-login-button__button"
      color="light"
      @click.prevent="openLoginModal"
    >
      <span class="the-login-button__text">sign in</span>
    </the-button>

    <the-login-modal
      class="the-login-button__modal"
      :is-open="modals.login.isOpen"
      @close="closeLoginModal"
    />
  </div>
</template>

<script lang="ts" setup>
import TheLoginModal from '@/components/Organisms/modals/TheLoginModal.vue'
import TheButton from '@/components/Atoms/form/buttons/TheButton/TheButton.vue'

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
  &__button {
    @apply uppercase;
  }

  &__text {
    @apply uppercase;
  }

  &__modal {
    // Styles if necessary
  }
}
</style>
