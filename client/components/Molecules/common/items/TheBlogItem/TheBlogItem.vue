<template>
  <article class="the-article">
    <div class="the-article__image-container">
      <img
        :src="imageUrl"
        alt=""
        class="the-article__image"
      >
      <div class="the-article__image-overlay" />
    </div>
    <div class="the-article__content">
      <div class="the-article__metadata">
        <time
          :datetime="datetime"
          class="the-article__date"
        >{{ date }}</time>
        <a
          :href="category.href"
          class="the-article__category"
        >{{ category.title }}</a>
      </div>
      <div class="the-article__title-container">
        <h3 class="the-article__title">
          <a :href="href">
            <span class="the-article__title-link" />
            {{ title }}
          </a>
        </h3>
        <p class="the-article__description">
          {{ description }}
        </p>
      </div>
      <div class="the-article__author">
        <img
          :src="author.imageUrl"
          alt=""
          class="the-article__author-image"
        >
        <div class="the-article__author-info">
          <p class="the-article__author-name">
            <a :href="author.href">
              <span class="the-article__author-link" />
              {{ author.name }}
            </a>
          </p>
          <p class="the-article__author-role">
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

<style lang="scss">
.the-article {
  @apply flex flex-col items-start justify-between;

  &__image-container {
    @apply relative w-full;
  }

  &__image {
    @apply aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2];
  }

  &__image-overlay {
    @apply absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10;
  }

  &__content {
    @apply max-w-xl;
  }

  &__metadata {
    @apply mt-8 flex items-center gap-x-4 text-xs;
  }

  &__date {
    @apply text-gray-500;
  }

  &__category {
    @apply relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100;
  }

  &__title-container {
    @apply relative;
  }

  &__title {
    @apply mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600;
  }

  &__description {
    @apply mt-5 line-clamp-3 text-sm leading-6 text-gray-600;
  }

  &__author {
    @apply relative mt-8 flex items-center gap-x-4;
  }

  &__author-image {
    @apply h-10 w-10 rounded-full bg-gray-100;
  }

  &__author-info {
    @apply text-sm leading-6;
  }

  &__author-name, &__author-role {
    @apply font-semibold text-gray-900;
  }

  &__author-role {
    @apply text-gray-600;
  }
}
</style>
