<template>
  <figure class="the-testimonial-big">
    <blockquote class="the-testimonial-big__quote">
      <p>{{ `“${body}”` }}</p>
    </blockquote>

    <figcaption class="the-testimonial-big__caption">
      <img
        class="the-testimonial-big__img"
        :src="author.imageUrl"
        alt=""
      >

      <div class="the-testimonial-big__footer">
        <div class="the-testimonial-big__name">
          {{ author.name }}
        </div>
        <div class="the-testimonial-big__handle">
          {{ `@${author.handle}` }}
        </div>
      </div>

      <img
        class="the-testimonial-big__logo"
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

<style lang="scss">
.the-testimonial-big {
  &__quote {
    @apply p-6 text-lg font-semibold leading-7 tracking-tight text-gray-900 sm:p-12 sm:text-xl sm:leading-8;
  }

  &__caption {
    @apply flex flex-wrap items-center gap-x-4 gap-y-4 border-t border-gray-900/10 px-6 py-4 sm:flex-nowrap;
  }

  &__img {
    @apply h-10 w-10 flex-none rounded-full bg-gray-50;
  }

  &__footer {
    @apply flex-auto;
  }

  &__name {
    @apply font-semibold;
  }

  &__handle {
    @apply text-gray-600;
  }

  &__logo {
    @apply h-10 w-auto flex-none;
  }
}
</style>

<style lang="scss">
@import 'theme/confectionery.scss';
</style>
