import { defineNuxtRouteMiddleware, navigateTo } from '#app'
import { AuthRepository } from '@/repositories/auth.repo'

export default defineNuxtRouteMiddleware(async () => {
  const { $customFetch } = useNuxtApp()

  const repository = new AuthRepository($customFetch)

  let hasAccess = false

  try {
    hasAccess = await repository.hasRole('superadmin')
  } catch (e) {
    console.log('error', e)
  }

  if (!hasAccess) {
    // Redirect to the login page
    return navigateTo('/')
  }
})
