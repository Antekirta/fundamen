import type { $Fetch } from 'nitropack'
import { Repository } from '@/shared/utils/http/Repository'

export class AdminProfilePageRepository extends Repository {
  public readonly $fetch: $Fetch

  constructor ($fetch : $Fetch) {
    super($fetch)

    this.$fetch = $fetch
  }
}
