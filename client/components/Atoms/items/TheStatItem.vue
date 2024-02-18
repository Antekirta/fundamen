<template>
  <div
    class="flex flex-col gap-y-4"
  >
    <dd class="text-5xl font-semibold tracking-tight text-gray-900">
      {{ valuePrefix }} {{ valueToRender }} {{ valuePostfix }}
    </dd>

    <dt class="text-base leading-7 text-gray-600">
      {{ description }}
    </dt>
  </div>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{
  description: string
  value: number
  valuePrefix: string
  valuePostfix: string
  step: number
  timeInterval: number
}>(), {
  step: 10,
  timeInterval: 100
})

const valueToRender = ref(0)

const interval = setInterval(() => {
  if (valueToRender.value < props.value) {
    valueToRender.value = Math.round(valueToRender.value + props.step)
  } else {
    clearInterval(interval)
  }
}, props.timeInterval)
</script>
