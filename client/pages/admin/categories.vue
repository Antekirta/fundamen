<template>
  <the-admin-categories-page />
</template>

<script lang="ts" setup>
import TheAdminCategoriesPage from '@/components/pages/admin/categories/TheAdminCategoriesPage.vue'

// noinspection TypeScriptUnresolvedFunction
definePageMeta({
  layout: 'admin',
  middleware: [
    'auth',
    'role-admin'
  ]
})
</script>
