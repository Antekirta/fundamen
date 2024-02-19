<template>
  <div>
    <TheBreadcrumbs
      v-if="breadcrumbs && breadcrumbs.length"
      :breadcrumbs="breadcrumbs"
    />

    <div class="mt-4 md:flex md:items-center md:justify-between">
      <div class="min-w-0 flex-1">
        <h2 class="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
          {{ title }}
        </h2>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import TheBreadcrumbs, { type VhBreadcrumbInterface } from '@/components/Molecules/common/TheBreadcrumbs.vue'

defineProps<{
  title: string,
  breadcrumbs?: VhBreadcrumbInterface[]
}>()
</script>
