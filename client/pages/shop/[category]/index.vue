<template>
  <div class="the-category-page">
    Category
    <TheProductsList />
  </div>
</template>

<script setup lang="ts">
import TheProductsList from '@/components/Organisms/TheProductsList.vue'

// noinspection TypeScriptUnresolvedFunction
definePageMeta({
  layout: 'list'
})
</script>
