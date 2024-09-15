<template>
  <div class="the-user-info">
    <div class="the-user-info__header">
      <h3 class="the-user-info__title">
        User Information
      </h3>
    </div>

    <div class="the-user-info__content">
      <dl class="the-user-info__list">
        <div class="the-user-info__item the-user-info__item--gray">
          <dt class="the-user-info__item-title">
            Full name
          </dt>
          <dd class="the-user-info__item-detail">
            <the-input
              v-model="model.first_name"
              text="First name"
              name="first_name"
              type="text"
            />

            <the-input
              v-model="model.last_name"
              text="Last name"
              name="last_name"
              type="text"
            />
          </dd>
        </div>

        <div class="the-user-info__item the-user-info__item--white">
          <dt class="the-user-info__item-title">
            Email
          </dt>
          <dd class="the-user-info__item-detail">
            <the-input
              v-model="model.email"
              text="Email"
              name="email"
              type="email"
            />
          </dd>
        </div>

        <div class="the-user-info__item the-user-info__item--gray">
          <dt class="the-user-info__item-title">
            User Type
          </dt>
          <dd class="the-user-info__item-detail">
            {{ userStore.userInfo.user_type }}
          </dd>
        </div>
      </dl>
    </div>

    <div class="the-user-info__buttons">
      <the-button
        theme="danger"
        @click="reset"
      >
        Reset
      </the-button>

      <the-button
        theme="info"
        @click="update"
      >
        Update
      </the-button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import TheInput from '@/components/Atoms/form/inputs/TheInput/TheInput/TheInput.vue'
import TheButton from '@/components/Atoms/form/buttons/TheButton/TheButton.vue'
import { useUserStore } from '@/stores/user/user.store'

const emit = defineEmits(['update'])

const userStore = useUserStore()

const getDefaultModel = () => ({
  first_name: userStore.userInfo.first_name,
  last_name: userStore.userInfo.last_name,
  email: userStore.userInfo.email
})

const model = reactive(getDefaultModel())

const update = () => {
  console.log('update: ', model)

  emit('update', model)
}

const reset = () => {
  Object.assign(model, getDefaultModel())
}
</script>

<style lang="scss">
.the-user-info {
  &__header {
    @apply px-4 sm:px-0;
  }

  &__title {
    @apply text-base font-semibold leading-7 text-gray-900;
  }

  &__description {
    @apply mt-1 max-w-2xl text-sm leading-6 text-gray-500;
  }

  &__content {
    @apply mt-6 border-t border-gray-100;
  }

  &__list {
    @apply divide-y divide-gray-100;
  }

  &__item {
    @apply px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-3;

    &--gray {
      @apply bg-gray-50;
    }

    &--white {
      @apply bg-white;
    }
  }

  &__item-title {
    @apply text-sm font-medium leading-6 text-gray-900;
  }

  &__item-detail {
    @apply mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 0;
  }

  &__buttons {
    @apply mt-8;
    display: flex;
    justify-content: flex-end;
    gap: 10px;
  }
}
</style>
