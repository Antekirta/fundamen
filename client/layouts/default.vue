<template>
  <div>
    <TheMainHeader class="bg-gray-50" />

    <div class="p-6 m-auto max-w-7xl min-h-screen">
      <ThePageHeader
        class="col-span-4 my-6"
        title="Default layout title"
        :breadcrumbs="breabcrumbs"
      />

      <TheMainContent class="lg:col-span-6 col-span-4 border-gray-400">
        <slot />
      </TheMainContent>
    </div>

    <TheMainFooter />
  </div>
</template>

<script setup lang="ts">
import TheMainHeader from '@/components/Organisms/base/TheMainHeader.vue'
import TheMainContent from '@/components/Organisms/base/TheMainContent.vue'
import TheMainFooter from '@/components/Organisms/base/TheMainFooter.vue'
import ThePageHeader from '@/components/Molecules/common/ThePageHeader.vue'

const breabcrumbs = [
  {
    label: 'Home',
    href: '/'
  },
  {
    label: 'Tools',
    href: '/shop/tools'
  }
]
</script>
