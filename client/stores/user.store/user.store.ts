// define pinha store here
import { defineStore } from 'pinia'
import type { UserSecureInterface as UserSecureInterfaceClient } from '@/shared/types/user.interface.domain.client'

export const useUserStore = defineStore({
  state: () => ({
    user: UserSecureInterfaceClient
  }),
  getters: {

  },
  actions: {

  }
})
