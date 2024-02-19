<template>
  <div class="the-category-page">
    Category
    <TheProductsList />
  </div>
</template>

<script setup lang="ts">
import TheProductsList from '@/components/Molecules/common/lists/TheProductsList.vue'

// noinspection TypeScriptUnresolvedFunction
definePageMeta({
  layout: 'list'
})
</script>
