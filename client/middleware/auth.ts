import { defineNuxtRouteMiddleware, navigateTo } from '#app'
import { AuthRepository } from '@/repositories/auth.repo'

export default defineNuxtRouteMiddleware(async () => {
  const { $customFetch } = useNuxtApp()

  const repository = new AuthRepository($customFetch)

  let isAuthenticated = false

  try {
    isAuthenticated = await repository.isAuth()
  } catch (e) {
    console.log('error', e)
  }

  if (!isAuthenticated) {
    // Redirect to the login page
    return navigateTo('/login')
  }
})
