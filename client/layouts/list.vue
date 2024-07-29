<template>
  <div>
    <TheMainHeader class="bg-gray-50" />

    <div class="p-6 m-auto max-w-7xl grid grid-cols-4">
      <ThePageHeader
        class="col-span-4 my-6"
        title="Category title"
        :breadcrumbs="breabcrumbs"
      />

      <TheMainSidePanel class="lg:col-span-1 col-span-4" />

      <TheMainContent class="lg:col-span-3 col-span-4 border-gray-400 px-6">
        <slot />
      </TheMainContent>
    </div>

    <TheMainFooter class="layout-list__footer" />
  </div>
</template>

<script setup lang="ts">
import TheMainHeader from '@/components/Organisms/base/TheMainHeader.vue'
import TheMainSidePanel from '@/components/Organisms/base/TheMainSidePanel.vue'
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
