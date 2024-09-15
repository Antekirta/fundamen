<template>
  <div>
    <the-header
      size="giant"
      class="pb-4"
    >
      Profile
    </the-header>

    <the-user-info :user="userStore.userInfo" />
  </div>
</template>

<script lang="ts" setup>
import { AdminProfilePageRepository } from './repository'
import TheHeader from '@/components/Atoms/typography/TheHeader/TheHeader.vue'
import TheUserInfo from '@/components/pages/admin/profile/components/TheUserInfo.vue'
import { useUserStore } from '@/stores/user/user.store'

const userStore = useUserStore()

await userStore.fetchUserInfo(1)

</script>
