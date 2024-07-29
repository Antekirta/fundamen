import type { $Fetch } from 'nitropack'

export class Repository {
  public readonly $fetch: $Fetch

  constructor ($fetch : $Fetch) {
    this.$fetch = $fetch
  }
}
