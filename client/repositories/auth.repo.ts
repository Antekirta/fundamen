import type { $Fetch } from 'nitropack'
import { Repository } from '@/shared/utils/http/Repository'
import { getAuthorizationHeader } from '@/shared/utils/http/headers'

export class AuthRepository extends Repository {
  public readonly $fetch: $Fetch

  constructor ($fetch : $Fetch) {
    super($fetch)

    this.$fetch = $fetch
  }

  /**
   * Authenticate the user
   * @param {string} username
   * @param {string} password
   * @returns {Promise<string>} The JWT token
   */
  login (username : string, password: string) : Promise<string> {
    return this.$fetch('/auth/login', {
      method: 'POST',
      body: JSON.stringify({
        username,
        password
      })
    })
  }

  isAuth () {
    return this.$fetch('/auth', {
      method: 'GET',
      headers: {
        ...getAuthorizationHeader()
      }
    })
  }

  hasRole (role: string) {
    return this.$fetch('/auth/role', {
      method: 'GET',
      params: {
        role
      },
      headers: {
        ...getAuthorizationHeader()
      }
    })
  }
}
