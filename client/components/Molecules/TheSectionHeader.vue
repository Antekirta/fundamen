<template>
  <div class="mx-auto max-w-4xl text-center">
    <the-preheader>{{ preheader }}</the-preheader>

    <the-header as="h2">
      {{ header }}
    </the-header>
  </div>

  <the-description class="mt-6 mx-auto max-w-2xl text-center">
    {{ description }}
  </the-description>
</template>
<script setup lang="ts">
import ThePreheader from '@/components/Atoms/ThePreheader.vue'
import TheHeader from '@/components/Atoms/TheHeader.vue'
import TheDescription from '@/components/Atoms/TheDescription.vue'

defineProps<{
  preheader?: string
  header: string
  description?: string
}>()
</script>
