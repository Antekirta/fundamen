<template>
  <the-special-offer
    class="z-20"
    :items="[
      { title: 'Special offer 1' },
      { title: 'Special offer 2' },
      { title: 'Special offer 3' }
    ]"
  />

  <div class="-mt-0 px-6 m-auto max-w-7xl min-h-screen">
    <section>
      <the-hero-section-slider :slides="slides" />
    </section>

        <the-feature-section />

    <!--    <the-price-section />-->

    <!--    <the-stats-section />-->

    <!--    <the-testimonial-section bottom-padding="none" />-->

    <!--    <the-email-section top-padding="none" />-->

    <!--    <the-blog-section />-->

    <!--    <the-logo-cloud />-->

    <!--    <the-faq-section />-->

    <the-cta-section />
  </div>
</template>

<script lang="ts" setup>
import TheFeatureSection from '@/components/Organisms/sections/TheFeatureSection.vue'
import ThePriceSection from '@/components/Organisms/sections/ThePriceSection.vue'
import TheStatsSection from '@/components/Organisms/sections/TheStatsSection.vue'
import TheTestimonialSection from '@/components/Organisms/sections/TheTestimonialSection.vue'
import TheEmailSection from '@/components/Organisms/sections/TheEmailSection.vue'
import TheBlogSection from '@/components/Organisms/sections/TheBlogSection.vue'
import TheLogoCloud from '@/components/Organisms/sections/TheLogoCloud.vue'
import TheFaqSection from '@/components/Organisms/sections/TheFaqSection.vue'
import TheCtaSection from '@/components/Organisms/sections/TheCtaSection.vue'
import TheHeroSectionSlider from '@/components/Organisms/sections/TheHeroSection/TheHeroSectionSlider.vue'
import TheSpecialOffer from '@/components/Organisms/sections/TheSpecialOffer/TheSpecialOffer.vue'

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

// noinspection TypeScriptUnresolvedFunction
definePageMeta({
  layout: 'main'
})
</script>
