<template>
  <form
    action="#"
    method="POST"
    class="px-6 pb-24 pt-20 sm:pb-32 lg:px-8 lg:py-48"
  >
    <div class="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
      <div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
        <div>
          <the-input
            label="First name"
            name="first-name"
            type="text"
            autocomplete="given-name"
          />
        </div>

        <div>
          <the-input
            label="Last name"
            name="last-name"
            type="text"
            autocomplete="family-name"
          />
        </div>

        <div class="sm:col-span-2">
          <the-input
            label="Email"
            name="email"
            type="email"
            autocomplete="email"
          />
        </div>

        <div class="sm:col-span-2">
          <the-input
            label="Phone number"
            name="phone-number"
            type="tel"
            autocomplete="tel"
          />
        </div>

        <div class="sm:col-span-2">
          <the-textarea
            label="Message"
            name="message"
          />
        </div>
      </div>

      <div class="mt-8 flex justify-end">
        <the-button color="blue">
          Send message
        </the-button>
      </div>
    </div>
  </form>
</template>

<script setup lang="ts">
import TheInput from '@/components/Atoms/form/inputs/TheInput/TheInput/TheInput.vue'
import TheTextarea from '@/components/Atoms/form/inputs/TheTextarea/TheTextarea.vue'
import TheButton from '@/components/Atoms/form/buttons/TheButton/TheButton.vue'
</script>
