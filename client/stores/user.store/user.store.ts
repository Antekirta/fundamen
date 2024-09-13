// define pinha store here
import { defineStore } from 'pinia'
import type { UserSecureInterface } from '@/shared/types/user.interface.domain.client'

interface userStoreStateInterface {
  testProp: string,
  // user: UserSecureInterface
}

export const useUserStore = defineStore('useUserStore', {
  state: () : userStoreStateInterface => ({
    testProp: 'test value'
  }),
  getters: {
    // testPropGetter: state => state.testProp
  },
  actions: {
    setTestProp (value: string) {
      // @ts-ignore
      this.testProp = value
    }
  }
})
