<template>
  <div class="the-section-header">
    <the-preheader
      class="the-section-header__preheader"
      as="h3"
      font="fancy"
      size="large"
    >
      {{ preheader }}
    </the-preheader>

    <the-header
      as="h2"
      font="fancy"
      font-style="bold"
      size="giant"
      color="red"
      class="the-section-header__main"
    >
      {{ header }}
    </the-header>
  </div>

  <the-description
    v-clarifier
    class="the-section-header__description"
    font="fancy"
    size="medium"
  >
    {{ description }}
  </the-description>
</template>
<script setup lang="ts">
import { vClarifier } from '@/directives/v-clarifier/v-clarifier'

import ThePreheader from '@/components/Atoms/typography/ThePreheader/ThePreheader.vue'
import TheHeader from '@/components/Atoms/typography/TheHeader/TheHeader.vue'
import TheDescription from '@/components/Atoms/typography/TheDescription/TheDescription.vue'

defineProps<{
  preheader?: string
  header: string
  description?: string
}>()
</script>

<style lang="scss">
.the-section-header {
  @apply mx-auto max-w-2xl text-center;

  &__preheader {
    @apply tracking-normal;
  }

  &__main {
    @apply mt-2;
    @apply tracking-normal;
  }

  &__description {
    @apply mt-6 mx-auto max-w-2xl ;
    @apply text-center tracking-normal;
  }
}
</style>
