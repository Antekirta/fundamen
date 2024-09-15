import { useUserStore } from '@/stores/user/user.store'

export const getAuthorizationHeader = () => {
  const userStore = useUserStore()

  return {
    Authorization: `Bearer ${userStore.jwt}`
  }
}
