import type { $Fetch } from 'nitropack'

export function useRepo <T extends new ($fetch: $Fetch) => any> (Repo: T) {
  const { $customFetch } = useNuxtApp()

  const repo = new Repo($customFetch as $Fetch)

  return {
    repo
  }
}
