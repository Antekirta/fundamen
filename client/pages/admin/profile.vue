<template>
  <the-admin-profile-page />
</template>

<script lang="ts" setup>
import TheAdminProfilePage from '@/components/pages/admin/profile/TheAdminProfilePage.vue'

// noinspection TypeScriptUnresolvedFunction
definePageMeta({
  layout: 'admin',
  middleware: [
    'auth'
  ]
})
</script>
