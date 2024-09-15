<template>
  <div class="the-input">
    <label
      v-if="text"
      :for="name"
      class="the-input__label"
    >{{ text }}</label>

    <div class="the-input__input-container">
      <div class="the-input__icon the-input__icon--leading">
        <slot name="leading" />
      </div>

      <input
        :id="name"
        v-model="model"
        type="text"
        :name="name"
        class="the-input__input"
        :placeholder="placeholder"
        v-bind="$attrs"
      >

      <div class="the-input__icon the-input__icon--trailing">
        <slot name="trailing" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  text?: string
  name: string
  description?: string,
  placeholder?: string
  }>()

const model = defineModel()
</script>

<style lang="scss">
.the-input {
  @apply border-0 bg-transparent;

  &__label {
    @apply block text-sm font-medium leading-6 text-gray-900;
  }

  &__input-container {
    @apply relative mt-1 rounded-md shadow-sm;
  }

  &__icon {
    @apply pointer-events-none absolute inset-y-0 flex items-center;

    &--leading {
      @apply left-0 pl-3;
    }

    &--trailing {
      @apply right-0 pr-3;
    }
  }

  &__input {
    @apply block w-full rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6;
    @apply pl-4 pr-12; // Adjust padding based on leading/trailing elements presence
  }
}
</style>
