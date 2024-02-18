<template>
  <figure class="rounded-2xl bg-white shadow-lg ring-1 ring-gray-900/5 sm:col-span-2 xl:col-start-2 xl:row-end-1">
    <blockquote class="p-6 text-lg font-semibold leading-7 tracking-tight text-gray-900 sm:p-12 sm:text-xl sm:leading-8">
      <p>{{ `“${body}”` }}</p>
    </blockquote>
    <figcaption class="flex flex-wrap items-center gap-x-4 gap-y-4 border-t border-gray-900/10 px-6 py-4 sm:flex-nowrap">
      <img
        class="h-10 w-10 flex-none rounded-full bg-gray-50"
        :src="author.imageUrl"
        alt=""
      >
      <div class="flex-auto">
        <div class="font-semibold">
          {{ author.name }}
        </div>
        <div class="text-gray-600">
          {{ `@${author.handle}` }}
        </div>
      </div>
      <img
        class="h-10 w-auto flex-none"
        :src="author.logoUrl"
        alt=""
      >
    </figcaption>
  </figure>
</template>

<script lang="ts" setup>
const props = defineProps<{
  body: string
  author: {
    imageUrl: string
    name: string
    handle: string
    logoUrl: string
  }
}>()
</script>
