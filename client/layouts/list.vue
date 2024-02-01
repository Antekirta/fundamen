<template>
  <div class="layout-list">
    <TheMainHeader class="layout-list__header" />

    <TheMainSidePanel class="layout-list__sidebar" />

    <TheMainContent class="layout-list__content">
      <slot />
    </TheMainContent>

    <TheMainFooter class="layout-list__footer" />
  </div>
</template>

<script setup lang="ts">
import TheMainHeader from '@/components/Organisms/TheMainHeader'
import TheMainSidePanel from '@/components/Organisms/TheMainSidePanel'
import TheMainContent from '@/components/Organisms/TheMainContent'
import TheMainFooter from '@/components/Organisms/TheMainFooter'
</script>
