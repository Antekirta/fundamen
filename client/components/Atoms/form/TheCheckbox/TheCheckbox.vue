<template>
  <fieldset class="the-checkbox">
    <legend class="the-checkbox__legend sr-only">
      {{ text }}
    </legend>

    <div class="the-checkbox__group">
      <div class="the-checkbox__container">
        <div class="the-checkbox__input-wrapper">
          <input
            :id="name"
            v-model="model"
            aria-describedby="comments-description"
            :name="name"
            type="checkbox"
            class="the-checkbox__input"
          >
        </div>

        <div class="the-checkbox__content">
          <label
            :for="name"
            class="the-checkbox__label"
          >{{ text }}</label>
          <p
            id="comments-description"
            class="the-checkbox__description"
          >
            {{ description }}
          </p>
        </div>
      </div>
    </div>
  </fieldset>
</template>

<script setup lang="ts">
defineProps<{
  text: string
  name: string
  description?: string
}>()

const model = defineModel()
</script>

<style lang="scss">
.the-checkbox {
  &__legend {
    @apply sr-only;
  }

  &__group {
    @apply space-y-5;
  }

  &__container {
    @apply relative flex items-start;
  }

  &__input-wrapper {
    @apply flex h-6 items-center;
  }

  &__input {
    @apply h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-0;
  }

  &__content {
    @apply ml-3 text-sm leading-6;
  }

  &__label {
    @apply font-medium text-gray-900;
  }

  &__description {
    @apply text-gray-500;
  }
}
</style>
