<template>
  <section :class="classes">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <the-section-header
        :header="header"
        :preheader="preheader"
        :description="description"
      />

      <slot />
    </div>
  </section>
</template>
<script setup lang="ts">
import TheSectionHeader from '@/components/Molecules/TheSectionHeader.vue'

const props = withDefaults(defineProps<{
  header: string
  preheader?: string
  description?: string
  topPadding?: 'none' | 'small' | 'large'
  bottomPadding?: 'none' | 'small' | 'large'
}>(), {
  preheader: '',
  description: '',
  topPadding: 'large',
  bottomPadding: 'large'
})

const classes : string[] = []

switch (props.bottomPadding) {
  case 'none':
    classes.push('pb-0')
    break
  case 'small':
    classes.push('pb-12 sm:pb-16')
    break
  case 'large':
    classes.push('pb-24 sm:pb-32')
    break
}

switch (props.topPadding) {
  case 'none':
    classes.push('pt-0')
    break
  case 'small':
    classes.push('pt-12 sm:pt-16')
    break
  case 'large':
    classes.push('pt-24 sm:pt-32')
    break
}
</script>
