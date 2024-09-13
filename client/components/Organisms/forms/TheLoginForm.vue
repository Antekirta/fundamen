<template>
  <div class="the-login-form flex flex-1 flex-col justify-center px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
    <div class="mx-auto w-full max-w-sm lg:w-96">
      <div>
        <the-header
          class="mt-4"
          as="h4"
          size="small"
        >
          Sign in to your account
        </the-header>

        <p class="mt-2 text-sm leading-6 text-gray-500">
          Not a member?
          {{ ' ' }}
          <a
            href="#"
            class="font-semibold text-indigo-600 hover:text-indigo-500"
          >Register</a>
        </p>
      </div>

      <div class="mt-10">
        <div>
          <form
            action="#"
            method="POST"
            class="space-y-6"
          >
            <div>
              <the-input
                id="email"
                v-model="model.login"
                name="email"
                type="email"
                autocomplete="email"
                required
                placeholder="Email address"
              />
            </div>

            <div>
              <the-input
                id="password"
                v-model="model.password"
                name="password"
                type="password"
                autocomplete="current-password"
                required
                placeholder="Password"
              />
            </div>

            <div class="flex items-center justify-between px-4">
              <the-checkbox
                name="rememberMe"
                text="Remember me"
              />

              <!--              <the-link link="#">-->
              <!--                Forgot password?-->
              <!--              </the-link>-->
            </div>

            <the-button
              class="w-full"
              color="blue"
              @click="login"
            >
              Sign in
            </the-button>

            <the-button
              class="w-full"
              color="blue"
              @click="fetchProfile"
            >
              fetch profile
            </the-button>
          </form>
        </div>

        <div class="mt-10">
          <div class="relative">
            <div
              class="absolute inset-0 flex items-center"
              aria-hidden="true"
            >
              <div class="w-full border-t border-gray-200" />
            </div>
            <div class="relative flex justify-center text-sm font-medium leading-6">
              <span class="bg-white px-6 text-gray-900">Or continue with</span>
            </div>
          </div>

          <div class="mt-6 grid grid-cols-2 gap-4">
            <the-google-auth-btn />

            <the-github-auth-button />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import { useCookie } from '#app'
import TheInput from '@/components/Atoms/form/inputs/TheInput/TheInput/TheInput.vue'
import TheCheckbox from '@/components/Atoms/form/TheCheckbox/TheCheckbox.vue'
import TheLink from '@/components/Atoms/typography/TheLink/TheLink.vue'
import TheButton from '@/components/Atoms/form/buttons/TheButton/TheButton.vue'
import TheHeader from '@/components/Atoms/typography/TheHeader/TheHeader.vue'
import TheGoogleAuthBtn from '@/components/Molecules/common/buttons/TheGoogleAuthBtn/TheGoogleAuthBtn.vue'
import TheGithubAuthButton from '@/components/Molecules/common/buttons/TheGithubAuthButton/TheGithubAuthButton.vue'
import { AuthRepository } from '@/repositories/auth.repo'
import { COOKIE_KEYS } from '@/shared/registry'

const jwtToken = useCookie(COOKIE_KEYS.JWT)
const userNameToken = useCookie(COOKIE_KEYS.USER_NAME)
const userIdToken = useCookie(COOKIE_KEYS.USER_ID)

const { $customFetch } = useNuxtApp()

const authRepository = new AuthRepository($customFetch)

const model = reactive({
  login: '',
  password: ''
})

const login = async () => {
  try {
    const { jwt, userName, userId } = await authRepository.login(model.login, model.password)

    jwtToken.value = jwt
    userNameToken.value = userName
    userIdToken.value = userId
  } catch (error) {
    console.error('Error logging in: ', error)
  }
}

const fetchProfile = async () => {
  try {
    await authRepository.isAuth()
  } catch (error) {
    console.error('Error logging in: ', error)
  }
}
</script>
