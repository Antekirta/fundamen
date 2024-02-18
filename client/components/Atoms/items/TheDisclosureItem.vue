<template>
  <Disclosure
    v-slot="{ open }"
    as="div"
    class="pt-6"
  >
    <dt>
      <DisclosureButton class="flex w-full items-start justify-between text-left text-gray-900">
        <span class="text-base font-semibold leading-7">
          <slot name="title">
            {{ title }}
          </slot>
        </span>
        <span class="ml-6 flex h-7 items-center">
          <PlusSmallIcon
            v-if="!open"
            class="h-6 w-6"
            aria-hidden="true"
          />
          <MinusSmallIcon
            v-else
            class="h-6 w-6"
            aria-hidden="true"
          />
        </span>
      </DisclosureButton>
    </dt>
    <DisclosurePanel
      as="dd"
      class="mt-2 pr-12"
    >
      <slot name="content" />
      <p class="text-base leading-7 text-gray-600">
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
