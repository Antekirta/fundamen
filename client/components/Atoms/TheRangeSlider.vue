<template>
  <div class="the-range-slider">
    <label>{{ text }}</label>

    <Slider
      v-model="model"
      show-tooltip="focus"
      :options="options"
      :name="name"
      v-bind="$attrs"
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

<style src="@vueform/slider/themes/default.css"></style>
