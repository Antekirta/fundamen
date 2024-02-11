<template>
  <component
    :is="as"
    :href="link"
    class="rounded-md px-3.5 py-2.5 font-semibold shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
    :class="classes"
    v-bind="$attrs"
  >
    <slot />
  </component>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{
  as: string
  link: string,
  color: 'indigo' | 'transparent'
}>(), {
  as: 'a',
  link: '#',
  color: 'transparent'
})

const classes = reactive([] as string[])

if (props.color === 'indigo') {
  classes.push('bg-indigo-600', 'text-white')
} else if (props.color === 'transparent') {
  classes.push('bg-transparent', 'text-indigo-600')
}
</script>
