// define pinha store here
import { defineStore } from 'pinia'
import type { UserSecureInterface } from '@/shared/types/user.interface.domain.client'

interface userStoreStateInterface {
    testProp: string,
    jwt: string,
    userName: string,
    userId: number | null
    // user: UserSecureInterface
}

export const useUserStore = defineStore('useUserStore', {
  state: (): userStoreStateInterface => ({
    testProp: 'test value',
    jwt: '',
    userName: '',
    userId: null
  }),
  getters: {
    // testPropGetter: state => state.testProp
  },
  actions: {
    setJwt (value: string) {
      // @ts-ignore
      this.jwt = value
    }
  },
  persist: true
})
