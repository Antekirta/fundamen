<template>
  <header class="the-main-header">
    <nav
      class="the-main-header__nav"
      aria-label="Global"
    >
      <the-main-logo class="the-main-header__logo" />

      <div class="the-main-header__menu-toggle">
        <the-main-menu-toggle
          color="light"
          @click="openMenu"
        />
      </div>

      <the-main-menu class="the-main-header__main-menu" />

      <div class="the-main-header__login-btn-container">
        <the-login-button />
      </div>
    </nav>

    <div
      class="the-main-header__dialog-panel"
      :class="{
        'the-main-header__dialog-panel--open': mobileMenuOpen
      }"
    >
      <div class="flex items-center justify-end">
        <the-main-menu-toggle
          color="light"
          is-closing
          @click="closeMenu"
        />
      </div>

      <div class="mt-6 flow-root">
        <div class="-my-6 divide-y divide-gray-500/10">
          <div class="space-y-2 py-6">
            <the-main-menu is-mobile />
          </div>

          <div class="py-6">
            <the-login-button />
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'

import TheMainLogo from '@/components/Molecules/common/images/TheMainLogo.vue'
import TheMainMenuToggle from '@/components/Molecules/common/buttons/TheMenuToggle/TheMenuToggle.vue'
import TheMainMenu from '@/components/Molecules/common/TheMainMenu/TheMainMenu.vue'
import TheLoginButton from '@/components/Molecules/common/buttons/TheLoginButton.vue'

const mobileMenuOpen = ref(false)

const openMenu = () => {
  mobileMenuOpen.value = true
}

const closeMenu = () => {
  mobileMenuOpen.value = false
}
</script>

<style lang="scss">
.the-main-header {
  @apply relative;
  @apply bg-brown;
  @apply font-fancy;

  &__nav {
    @apply mx-auto flex max-w-7xl items-center justify-between px-2 py-2 lg:px-8;
  }

  &__logo {
    @apply mr-14;
  }

  &__menu-toggle {
    @apply flex lg:hidden;
  }

  &__main-menu {
    @apply hidden lg:flex;
  }

  &__login-btn-container {
    @apply hidden lg:flex lg:flex-1 lg:justify-end;
  }

  &__dialog {
    @apply lg:hidden;
  }

  &__dialog-panel {
    @apply fixed w-96 h-screen px-3 py-7 top-0 -right-full z-30;
    @apply bg-brown;
    @apply transition-all duration-700;

    &--open {
      @apply right-0;
    }
  }
}
</style>
