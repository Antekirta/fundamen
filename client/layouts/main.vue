<template>
  <div>
    <TheMainHeader />

    <div class="p-6 m-auto max-w-7xl min-h-screen">
      <TheMainContent class="lg:col-span-6 col-span-4 border-gray-400">
        <slot />
      </TheMainContent>
    </div>

    <TheMainFooter />
  </div>
</template>

<script setup lang="ts">
import TheMainHeader from '@/components/Organisms/TheMainHeader.vue'
import TheMainContent from '@/components/Organisms/TheMainContent.vue'
import TheMainFooter from '@/components/Organisms/TheMainFooter.vue'
</script>
