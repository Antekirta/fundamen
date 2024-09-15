import type { $Fetch } from 'nitropack'
import { Repository } from '@/shared/utils/http/Repository'
import { UserSecureInterface } from '@/shared/types/user.interface.domain.client'
import { getAuthorizationHeader } from '@/shared/utils/http/headers'

export class UserStoreRepository extends Repository {
  public readonly $fetch: $Fetch

  constructor ($fetch : $Fetch) {
    super($fetch)

    this.$fetch = $fetch
  }

  getUserInfo (userId : number) : Promise<UserSecureInterface[]> {
    return this.$fetch(`/users/id/${userId}`, {
      headers: {
        ...getAuthorizationHeader()
      }
    })
  }
}
