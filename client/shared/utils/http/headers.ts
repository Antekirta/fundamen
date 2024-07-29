import { useCookie } from '#imports'
import { COOKIE_KEYS } from '@/shared/registry'

export const getAuthorizationHeader = () => {
  const jwtToken = useCookie(COOKIE_KEYS.JWT)

  return {
    Authorization: `Bearer ${jwtToken.value}`
  }
}
