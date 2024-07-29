<template>
  <!-- <the-special-offer
    class="z-20"
    :items="[
      { title: 'Special offer 1' },
      { title: 'Special offer 2' },
      { title: 'Special offer 3' }
    ]"
  /> -->

  <div class="-mt-0 px-6 m-auto max-w-7xl min-h-screen">
    <the-hero-section-slider :slides="slides" />

    <!--    <the-cta-section />-->

    <!--    <the-feature-section />-->

    <the-categories-section
      :categories="categories"
      class="mt-24"
    />

    <!--    <the-price-section />-->

    <!--    <the-stats-section />-->

    <!--    <the-testimonial-section class="mt-24" />-->

    <!--    <the-email-section top-padding="none" />-->

    <!--    <the-blog-section />-->

    <!--    <the-logo-cloud />-->

    <the-faq-section />
  </div>
</template>

<script lang="ts" setup>
import TheHeroSectionSlider from '@/components/Organisms/sections/TheHeroSection/TheHeroSectionSlider.vue'
import TheCategoriesSection from '@/components/Organisms/sections/TheCategoriesSection/TheCategoriesSection.vue'
// import TheFeatureSection from '@/components/Organisms/sections/TheFeatureSection.vue'
// import TheCategoriesSection from '@/components/Organisms/sections/TheCategoriesSection/TheCategoriesSection.vue'
// // import ThePriceSection from '@/components/Organisms/sections/ThePriceSection.vue'
// // import TheStatsSection from '@/components/Organisms/sections/TheStatsSection.vue'
// import TheTestimonialSection from '@/components/Organisms/sections/TheTestimonialSection.vue'
// // import TheEmailSection from '@/components/Organisms/sections/TheEmailSection.vue'
// // import TheBlogSection from '@/components/Organisms/sections/TheBlogSection.vue'
// // import TheLogoCloud from '@/components/Organisms/sections/TheLogoCloud.vue'
// import TheFaqSection from '@/components/Organisms/sections/TheFaqSection.vue'
// import TheCtaSection from '@/components/Organisms/sections/TheCtaSection.vue'
// import TheSpecialOffer from '@/components/Organisms/sections/TheSpecialOffer/TheSpecialOffer.vue'
import { IndexPageRepository } from '@/pages-resources/index/repository'

// noinspection TypeScriptUnresolvedFunction
definePageMeta({
  layout: 'main'
})

const { categories } = await useCategories()
const { slides } = useSlides()

async function useCategories () {
  const { $customFetch } = useNuxtApp()

  const repository = new IndexPageRepository($customFetch)

  const categories = await repository.getCategories()

  return { categories }
}

function useSlides () {
  const slides = [
    {
      title: 'Slide 1',
      description: 'Slide 1 description',
      image: '/slider/conf-shop.png'
    },
    {
      title: 'Slide 2',
      description: 'Slide 2 description',
      image: '/slider/conf-shop.png'
    },
    {
      title: 'Slide 3',
      description: 'Slide 3 description',
      image: '/slider/conf-shop.png'
    }
  ]

  return {
    slides
  }
}
</script>

<style lang="scss">
.the-index-page {
  &__section {
    @apply mt-16;
  }
}
</style>
