<template>
  <div
    class="the-number-input"
    v-bind="$attrs"
  >
    <label
      for="company-website"
      class="the-number-input__label"
    >{{ label }}</label>

    <div class="the-number-input__container">
      <div
        class="the-number-input__handle the-number-input__handle--decrease"
        @click="reduce"
      >
        -
      </div>

      <input
        v-bind="$attrs"
        :id="name"
        v-model="model"
        type="text"
        :name="name"
        class="the-number-input__input"
        :placeholder="placeholder"
        readonly
      >

      <span
        class="the-number-input__handle the-number-input__handle--increase"
        @click="add"
      >+</span>
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
  name: string
  label?: string
  placeholder?: string
  min?: number
  max?: number
}>()

const model = defineModel({ default: 1 })

const add = () => {
  if (props.max) {
    if (model.value < props.max) {
      model.value++
    }
  } else {
    model.value++
  }
}

const reduce = () => {
  if (props.min) {
    if (model.value > props.min) {
      model.value--
    }
  } else {
    model.value--
  }
}
</script>

<style lang="scss">
//.the-number-input {
//  &__label {
//    @apply block text-sm font-medium leading-6 text-gray-900;
//  }
//
//  &__container {
//    @apply mt-2 flex justify-start rounded-md shadow-sm;
//  }
//
//  &__handle {
//    @apply bg-slate-200 hover:bg-slate-300 inline-flex items-center text-center border border-gray-300 px-3 text-gray-500 sm:text-sm;
//    cursor: pointer;
//    user-select: none;
//    transition: 0.15s ease-in-out;
//
//    &--decrease {
//      @apply rounded-l-md border-r-0;
//    }
//
//    &--increase {
//      @apply rounded-r-md;
//    }
//  }
//
//  &__input {
//    @apply min-w-0 inline-flex flex-1 rounded-none border-0 py-1.5 text-center text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400
//    @apply focus:ring-1 focus:ring-inset focus:ring-gray-300 sm:text-sm sm:leading-6;
//  }
//}
</style>
