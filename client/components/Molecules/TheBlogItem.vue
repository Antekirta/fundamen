<template>
  <article
    class="flex flex-col items-start justify-between"
  >
    <div class="relative w-full">
      <img
        :src="imageUrl"
        alt=""
        class="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
      >
      <div class="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
    </div>
    <div class="max-w-xl">
      <div class="mt-8 flex items-center gap-x-4 text-xs">
        <time
          :datetime="datetime"
          class="text-gray-500"
        >{{ date }}</time>
        <a
          :href="category.href"
          class="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
        >{{ category.title }}</a>
      </div>
      <div class="group relative">
        <h3 class="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
          <a :href="href">
            <span class="absolute inset-0" />
            {{ title }}
          </a>
        </h3>
        <p class="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
          {{ description }}
        </p>
      </div>
      <div class="relative mt-8 flex items-center gap-x-4">
        <img
          :src="author.imageUrl"
          alt=""
          class="h-10 w-10 rounded-full bg-gray-100"
        >
        <div class="text-sm leading-6">
          <p class="font-semibold text-gray-900">
            <a :href="author.href">
              <span class="absolute inset-0" />
              {{ author.name }}
            </a>
          </p>
          <p class="text-gray-600">
            {{ author.role }}
          </p>
        </div>
      </div>
    </div>
  </article>
</template>

<script lang="ts" setup>
defineProps<{
  imageUrl: string
  datetime: string
  date: string
  category: {
    href: string
    title: string
  }
  href: string
  title: string
  description: string
  author: {
    imageUrl: string
    href: string
    name: string
    role: string
  }
}>()
</script>
