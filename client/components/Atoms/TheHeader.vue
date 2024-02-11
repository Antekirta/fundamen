<template>
  <component
    :is="as"
    :class="classes"
  >
    <slot />
  </component>
</template>

<script lang="ts" setup>
const props = withDefaults(defineProps<{
  as: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  color: 'gray' | 'blue'
}>(), {
  color: 'gray'
})

const classes = reactive(['font-bold tracking-tight'] as string[])

switch (props.color) {
  case 'gray':
    classes.push('text-gray-900')
    break
  case 'blue':
    classes.push('text-indigo-600')
    break
}

switch (props.as) {
  case 'h1':
    classes.push('text-4xl font-bold sm:text-6xl')
    break
  case 'h2':
    classes.push('text-3xl font-bold sm:text-4xl')
    break
  case 'h3':
    classes.push('text-2xl font-bold sm:text-4xl')
    break
  case 'h4':
    classes.push('text-xl')
    break
  case 'h5':
    classes.push('text-lg')
    break
  case 'h6':
    classes.push('text-base')
    break
}
</script>
