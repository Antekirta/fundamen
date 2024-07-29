<template>
  <carousel
    class="the-slider-simple"
    :items-to-show="1"
    wrap-around
  >
    <slide
      v-for="slide in slides"
      :key="slide"
      class="the-slider-simple__slide"
    >
      <img
        class="the-slider-simple__slide-image"
        :src="slide.image"
        :alt="slide.title"
        :style="{
          aspectRatio
        }"
      >
    </slide>
  </carousel>
</template>

<script>
// If you are using PurgeCSS, make sure to whitelist the carousel CSS classes
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'

export default {
  name: 'App',
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation
  },
  props: {
    slides: {
      type: Array,
      required: true
    },
    aspectRatio: {
      type: String,
      default: '16/9'
    }
  }
}
</script>

<style lang="scss">
.the-slider-simple {
  @apply w-full;
  overflow: hidden;

  &__slide {
    @apply overflow-hidden;
    height: auto;
    border-bottom-left-radius: 70px;
    border-bottom-right-radius: 70px;
  }
}
</style>
