<template>
  <div class="the-range-slider">
    <label class="the-range-slider__label">{{ text }}</label>

    <Slider
      v-model="model"
      show-tooltip="focus"
      :options="options"
      :name="name"
      v-bind="$attrs"
      class="the-range-slider__slider"
    />
  </div>
</template>

<script setup lang="ts">
import Slider from '@vueform/slider'

defineProps<{
  text: string,
  name: string,
}>()

const model = defineModel()

const options = {
  classes: {
    connect: 'bg-indigo-600'
  }
}
</script>

<style lang="scss">
.the-range-slider {
  --slider-connect-bg: #4f46e5;
  --slider-tooltip-bg: #4f46e5;
  --slider-handle-ring-color: #4f46e5;
}
</style>

<style src="../../../../node_modules/@vueform/slider/themes/default.css"></style>

<style lang="scss">
.the-range-slider {
  &__label {
    @apply mb-2 text-sm font-medium text-gray-700;
  }

  /* Assuming the Slider component accepts a class for its base styling */
  &__slider {
    @apply mt-1;
  }
}
</style>
