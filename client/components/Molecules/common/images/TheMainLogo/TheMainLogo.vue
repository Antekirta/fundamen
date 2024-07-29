<template>
  <div
    class="the-logo"
    v-bind="$attrs"
  >
    <a
      href="#"
      class="the-logo__link"
    >
      <img
        class="the-logo__image"
        src="../../../../../assets/images/logo.png"
        alt=""
      >
    </a>
  </div>
</template>

<style lang="scss">
.the-logo {
  @apply hover:opacity-90;

  &__link {
    @apply -m-1.5 p-1.5;
  }

  &__image {
    @apply h-12 w-auto;
  }
}
</style>
