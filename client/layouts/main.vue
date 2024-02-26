<template>
  <div>
    <TheMainHeader class="z-30" />

    <TheMainContent class="lg:col-span-6 col-span-4">
      <slot />
    </TheMainContent>

    <TheMainFooter />
  </div>
</template>

<script setup lang="ts">
import TheMainHeader from '@/components/Organisms/base/TheMainHeader.vue'
import TheMainContent from '@/components/Organisms/base/TheMainContent.vue'
import TheMainFooter from '@/components/Organisms/base/TheMainFooter.vue'
</script>
