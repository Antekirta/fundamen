<template>
  <figure
    class="the-testimonial-small"
  >
    <blockquote class="the-testimonial-small__quote">
      <p>{{ `“${body}”` }}</p>
    </blockquote>

    <figcaption class="the-testimonial-small__caption">
      <img
        class="the-testimonial-small__img"
        :src="author.imageUrl"
        alt=""
      >

      <div>
        <div class="the-testimonial-small__name">
          {{ author.name }}
        </div>
        <div class="the-testimonial-small__handle">
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

<style lang="scss">
.the-testimonial-small {
  @apply rounded-2xl bg-white p-6 shadow-lg ring-1 ring-gray-900/5;

  &__quote {
    @apply text-gray-900;
  }

  &__caption {
    @apply mt-6 flex items-center gap-x-4
  }

  &__img {
    @apply h-10 w-10 rounded-full bg-gray-50;
  }

  &__name {
    @apply font-semibold
  }

  &__handle {
    @apply text-gray-600;
  }
}
</style>

<style lang="scss">
@import 'theme/confectionery.scss';
</style>
