<template>
  <Disclosure
    v-slot="{ open }"
    :class="`the-disclosure the-disclosure--size--${size}`"
    as="div"
  >
    <DisclosureButton :class="`the-disclosure__button the-disclosure__button--color--${color}`">
      {{ title }}
      <ChevronDownIcon
        :class="{
          'the-disclosure__icon': true,
          'the-disclosure__icon--open': open
        }"
        aria-hidden="true"
      />
    </DisclosureButton>

    <DisclosurePanel class="the-disclosure__panel">
      <slot>
        <DisclosureButton
          v-for="item in items"
          :key="item.name"
          as="a"
          :href="item.href"
          :class="`
          the-disclosure__button
          the-disclosure__button--sub
          the-disclosure__button--color--${color}`"
        >
          {{ item.name }}
        </DisclosureButton>
      </slot>
    </DisclosurePanel>
  </Disclosure>
</template>

<script setup lang="ts">
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
import { ChevronDownIcon } from '@heroicons/vue/20/solid'
import type { ListItemInterface } from '@/shared/shared.interface'

defineProps<{
  title: string
  items?: ListItemInterface[]
  color?: 'dark' | 'light'
  size?: 'giant' | 'big' | 'large' | 'medium' | 'small' | 'tiny'
}>()
</script>

<style lang="scss">
.the-disclosure {
  &--size {
    &--giant {
      @apply text-5xl;
    }
    &--big {
      @apply text-4xl;
    }
    &--large {
      @apply text-3xl;
    }
    &--medium {
      @apply text-2xl;
    }
    &--small {
      @apply text-xl;
    }
    &--tiny {
      @apply text-lg;
    }
  }

  &__button {
    @apply flex w-full items-center justify-start pr-3.5;

    &--sub {
      @apply block ml-4;
    }
  }

  &__icon {
    @apply h-5 w-5 flex-none;

    &--open {
      @apply rotate-180;
    }
  }
}
</style>

<style lang="scss">
@import './theme/confectionery.scss';
</style>
