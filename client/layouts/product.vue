<template>
  <div class="">
    <TheMainHeader class="bg-gray-50" />

    <div class="p-6 m-auto max-w-7xl grid grid-cols-4">
      <TheMainContent class="lg:col-span-4 col-span-4 border-gray-400 px-6">
        <slot />
      </TheMainContent>
    </div>

    <TheMainFooter class="layout-list__footer" />
  </div>
</template>

<script setup lang="ts">
import TheMainFooter from '@/components/Organisms/base/TheMainFooter.vue'
import TheMainHeader from '@/components/Organisms/base/TheMainHeader.vue'
import TheMainContent from '@/components/Organisms/base/TheMainContent.vue'
</script>
