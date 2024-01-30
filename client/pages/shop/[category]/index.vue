<template>
  <div class="the-category-page">
    <TheProductsList />
  </div>
</template>

<script setup lang="ts">
import TheProductsList from '@/components/Organisms/TheProductsList'

// noinspection TypeScriptUnresolvedFunction
definePageMeta({
  layout: 'list'
})
</script>
