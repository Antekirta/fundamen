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
  size: 'small' | 'medium' | 'large'
  color: 'gray' | 'gray-light' | 'blue'
}>(), {
  size: 'large',
  color: 'gray'
})

const classes = reactive(['font-bold tracking-tight'] as string[])

switch (props.color) {
  case 'gray':
    classes.push('text-gray-900')
    break
  case 'gray-light':
    classes.push('text-gray-500')
    break
  case 'blue':
    classes.push('text-indigo-600')
    break
}

switch (props.as) {
  case 'h1':
    if (props.size === 'large') {
      classes.push('text-4xl font-bold sm:text-6xl')
    } else if (props.size === 'medium') {
      classes.push('text-3xl font-bold sm:text-5xl')
    } else {
      classes.push('text-2xl font-bold sm:text-4xl')
    }
    break
  case 'h2':
    if (props.size === 'large') {
      classes.push('text-3xl font-bold sm:text-5xl')
    } else if (props.size === 'medium') {
      classes.push('text-2xl font-bold sm:text-4xl')
    } else {
      classes.push('text-xl font-bold sm:text-3xl')
    }
    break
  case 'h3':
    if (props.size === 'large') {
      classes.push('text-2xl font-bold sm:text-4xl')
    } else if (props.size === 'medium') {
      classes.push('text-xl font-bold sm:text-3xl')
    } else {
      classes.push('text-lg font-bold sm:text-2xl')
    }
    break
  case 'h4':
    if (props.size === 'large') {
      classes.push('text-xl font-bold sm:text-3xl')
    } else if (props.size === 'medium') {
      classes.push('text-lg font-bold sm:text-2xl')
    } else {
      classes.push('text-base font-bold sm:text-xl')
    }
    break
  case 'h5':
    if (props.size === 'large') {
      classes.push('text-lg font-bold sm:text-2xl')
    } else if (props.size === 'medium') {
      classes.push('text-base font-bold sm:text-xl')
    } else {
      classes.push('text-sm font-bold sm:text-lg')
    }
    break
  case 'h6':
    if (props.size === 'large') {
      classes.push('text-base font-bold sm:text-xl')
    } else if (props.size === 'medium') {
      classes.push('text-sm font-bold sm:text-lg')
    } else {
      classes.push('text-xs font-bold sm:text-base')
    }
    break
}
</script>
