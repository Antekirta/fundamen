<template>
  <div
    class="the-number-input"
    v-bind="$attrs"
  >
    <label
      for="company-website"
      class="block text-sm font-medium leading-6 text-gray-900"
    >{{ label }}</label>

    <div class="mt-2 flex direction-horizontal justify-start rounded-md shadow-sm">
      <span
        class="the-number-input__handle bg-slate-200 hover:bg-slate-300 inline-flex items-center text-center rounded-l-md border border-r-0 border-gray-300 px-3 text-gray-500 sm:text-sm"
        @click="reduce"
      >-</span>

      <input
        v-bind="$attrs"
        :id="name"
        v-model="model"
        type="text"
        :name="name"
        class="min-w-0 inline-flex flex-1 rounded-none border-0 py-1.5 text-center text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-gray-300 sm:text-sm sm:leading-6"
        :placeholder="placeholder"
        readonly
      >

      <span
        class="the-number-input__handle bg-slate-200 hover:bg-slate-300 inline-flex items-center text-center rounded-r-md border border-gray-300 px-3 text-gray-500 sm:text-sm"
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
.the-number-input__handle {
  cursor: pointer;
  user-select: none;
  transition: 0.15s ease-in-out;
}
</style>
