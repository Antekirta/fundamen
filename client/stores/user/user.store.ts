// define pinha store here
import { defineStore } from 'pinia'
import { reactive, ref } from 'vue'
import type { UserSecureInterface } from '@/shared/types/user.interface.domain.client'
import { UserStoreRepository } from '@/stores/user/user.store.repository'

export const useUserStore = defineStore('useUserStore', () => {
  const { $customFetch } = useNuxtApp()

  const repo = new UserStoreRepository($customFetch)

  // state
  const jwt = ref('')
  const userName = ref('')
  const userId = ref(null)
  const userInfo = reactive({} as UserSecureInterface)

  const fetchUserInfo = async (userId : number) => {
    const user = await repo.getUserInfo(userId)

    Object.assign(userInfo, user)
  }

  return {
    jwt,
    userName,
    userId,
    userInfo,

    fetchUserInfo
  }
}, {
  persist: true
})
