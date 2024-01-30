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

<style lang="scss">
.layout-list {
  min-height: 100vh;
  display: grid;
  grid-template-columns: repeat(24, 1fr);
  grid-template-rows: [header] 150px [content] 1fr [footer] 300px;

  &__header {
    grid-column: 1 / var(--the-grid__cols-lines-number);
  }

  &__sidebar {
    grid-column: 1 / var(--the-grid__cols-number--quarter);
  }

  &__content {
    grid-column: var(--the-grid__cols-number--quarter) / var(--the-grid__cols-lines-number);
  }

  &__footer {
    grid-column: 1 / var(--the-grid__cols-lines-number);
  }
}
</style>
