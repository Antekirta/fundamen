<template>
  <div class="the-login-button">
    <the-button
      class="the-login-button__btn"
      color="pink"
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
import TheButton from '@/components/Atoms/form/TheButton.vue'

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

  &__btn {
    @apply bg-pink;
    @apply text-xl tracking-wider font-semibold leading-6 text-brown hover:ring-4 hover:ring-red hover:ring-offset-2 hover:ring-offset-brown;
    @apply transition duration-200;
  }
}
</style>
