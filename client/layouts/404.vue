<template>
  <div>
    <TheMainHeader class="bg-gray-50" />

    <div class="p-6 m-auto w-full min-h-screen">
      <slot />
    </div>

    <TheMainFooter />
  </div>
</template>

<script setup lang="ts">
import TheMainHeader from '@/components/Organisms/base/TheMainHeader.vue'
import TheMainFooter from '@/components/Organisms/base/TheMainFooter.vue'
</script>
