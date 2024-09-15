<template>
  <div>
    <the-header
      size="giant"
      class="pb-4"
    >
      Profile
    </the-header>

    <the-user-info @update="updateUserInfo" />
  </div>
</template>

<script lang="ts" setup>
import { AdminProfilePageRepository } from './repository'
import TheHeader from '@/components/Atoms/typography/TheHeader/TheHeader.vue'
import TheUserInfo from '@/components/pages/admin/profile/components/TheUserInfo.vue'
import { useUserStore } from '@/stores/user/user.store'
import type { UserSecureInterface } from '@/shared/types/user.interface.domain.client'

const { $customFetch } = useNuxtApp()

const repo = new AdminProfilePageRepository($customFetch)

const userStore = useUserStore()

const updateUserInfo = async (userInfo: UserSecureInterface) => {
  try {
    await repo.updateUserInfo(userStore.userId, userInfo)

    userStore.fetchUserInfo()
  } catch (error) {
    console.error('Error updating user info: ', error)
  }
}
</script>
