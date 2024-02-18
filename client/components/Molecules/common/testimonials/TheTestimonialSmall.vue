<template>
  <figure
    class="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-gray-900/5"
  >
    <blockquote class="text-gray-900">
      <p>{{ `“${body}”` }}</p>
    </blockquote>
    <figcaption class="mt-6 flex items-center gap-x-4">
      <img
        class="h-10 w-10 rounded-full bg-gray-50"
        :src="author.imageUrl"
        alt=""
      >
      <div>
        <div class="font-semibold">
          {{ author.name }}
        </div>
        <div class="text-gray-600">
          {{ `@${author.handle}` }}
        </div>
      </div>
    </figcaption>
  </figure>
</template>

<script lang="ts" setup>
defineProps<{
  body: string
  author: {
    imageUrl: string
    name: string
    handle: string
  }
}>()
</script>
