<template>
  <the-section v-bind="$attrs">
    <div class="max-w-2xl text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
      <the-header as="h2">
        Want product news and updates?
      </the-header>

      <the-header as="h2">
        Sign up for our newsletter.
      </the-header>
    </div>

    <form class="mt-10 max-w-md">
      <div class="flex gap-x-4">
        <the-input
          name="email"
          placeholder="Enter your email"
        />

        <the-button color="blue">
          Subscribe
        </the-button>
      </div>

      <the-description>
        We care about your data. Read our <the-link link="#">
          privacy policy
        </the-link>.
      </the-description>
    </form>
  </the-section>
</template>

<script setup lang="ts">
import TheSection from '@/components/Molecules/common/TheSection.vue'
import TheHeader from '@/components/Atoms/typography/TheHeader/TheHeader.vue'
import TheInput from '@/components/Atoms/form/inputs/TheInput/TheInput/TheInput.vue'
import TheButton from '@/components/Atoms/form/buttons/TheButton/TheButton.vue'
import TheLink from '@/components/Atoms/typography/TheLink/TheLink.vue'
import TheDescription from '@/components/Atoms/typography/TheDescription/TheDescription.vue'
</script>
