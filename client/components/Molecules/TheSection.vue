<template>
  <section class="py-24 sm:py-32">
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

defineProps<{
  preheader?: string
  header: string
  description?: string
}>()
</script>
