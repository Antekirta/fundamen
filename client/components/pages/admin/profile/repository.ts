import type { $Fetch } from 'nitropack'
import { Repository } from '@/shared/utils/http/Repository'
import { UserSecureInterface } from '@/shared/types/user.interface.domain.client'
import { getAuthorizationHeader } from '@/shared/utils/http/headers'

export class AdminProfilePageRepository extends Repository {
  public readonly $fetch: $Fetch

  constructor ($fetch : $Fetch) {
    super($fetch)

    this.$fetch = $fetch
  }

  updateUserInfo (userId: number, userInfo: UserSecureInterface) : Promise<void> {
    return this.$fetch(`/users/${userId}`, {
      method: 'PATCH',
      body: JSON.stringify(userInfo),
      headers: {
        ...getAuthorizationHeader()
      }
    })
  }
}
