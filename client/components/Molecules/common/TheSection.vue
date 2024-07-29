<template>
  <section class="the-section">
    <div class="mx-auto max-w-7xl">
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
import TheSectionHeader from '@/components/Molecules/common/TheSectionHeader.vue'

withDefaults(defineProps<{
  header: string
  preheader?: string
  description?: string
}>(), {
  preheader: '',
  description: ''
})
</script>

<style lang="scss">
.the-section {

}
</style>
