<template>
  <Disclosure
    v-slot="{ open }"
    as="div"
    class="the-disclosure"
  >
    <dt>
      <DisclosureButton class="the-disclosure__button">
        <span class="the-disclosure__title">
          <slot name="title">
            {{ title }}
          </slot>
        </span>
        <span class="the-disclosure__icon-container">
          <PlusSmallIcon
            v-if="!open"
            class="the-disclosure__icon the-disclosure__icon--plus"
            aria-hidden="true"
          />
          <MinusSmallIcon
            v-else
            class="the-disclosure__icon the-disclosure__icon--minus"
            aria-hidden="true"
          />
        </span>
      </DisclosureButton>
    </dt>
    <DisclosurePanel
      as="dd"
      class="the-disclosure__panel"
    >
      <slot name="content" />
      <p class="the-disclosure__content">
        {{ content }}
      </p>
    </DisclosurePanel>
  </Disclosure>
</template>

<script setup lang="ts">
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/vue/24/outline'

defineProps<{
  title: string
  content: string
}>()
</script>

<style lang="scss">
.the-disclosure {
  @apply pt-6;

  &__button {
    @apply flex w-full items-start justify-between text-left text-gray-900;
  }

  &__title {
    @apply text-base font-semibold leading-7;
  }

  &__icon-container {
    @apply ml-6 flex h-7 items-center;
  }

  &__icon {
    @apply h-6 w-6;
    &--plus {
      // Additional styles if needed
    }
    &--minus {
      // Additional styles if needed
    }
  }

  &__panel {
    @apply mt-2 pr-12;
  }

  &__content {
    @apply text-base leading-7 text-gray-600;
  }
}
</style>
