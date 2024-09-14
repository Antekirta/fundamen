<template>
  <div>
    <h2>Profile</h2>

    <pre>{{ user }}</pre>
  </div>
</template>

<script lang="ts" setup>
import { AdminProfilePageRepository } from '@/pages-resources/admin/profile/repository'

// noinspection TypeScriptUnresolvedFunction
definePageMeta({
  layout: 'admin',
  middleware: [
    'auth'
  ]
})

const { user } = await useUser()

async function useUser () {
  // noinspection TypeScriptUnresolvedFunction
  const { $customFetch } = useNuxtApp()

  const repo = new AdminProfilePageRepository($customFetch)

  const user = await repo.getUserInfo(1)

  return { user }
}
</script>
