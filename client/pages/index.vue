<template>
  <div>
    <section>
      <the-hero-section />
    </section>

    <the-feature-section />

    <the-price-section />

    <the-stats-section />

    <the-testimonial-section bottom-padding="none" />

    <the-email-section top-padding="none" />

    <the-blog-section />

    <the-logo-cloud />

    <the-faq-section />

    <!--    <the-section>-->
    <!--      <the-cta-section />-->
    <!--    </the-section>-->
  </div>
</template>

<script lang="ts" setup>
// noinspection TypeScriptUnresolvedFunction
import TheSection from '@/components/Molecules/TheSection.vue'
import TheFeatureSection from '@/components/Organisms/MainPage/TheFeatureSection.vue'
import ThePriceSection from '@/components/Organisms/MainPage/ThePriceSection.vue'
import TheStatsSection from '@/components/Organisms/MainPage/TheStatsSection.vue'
import TheTestimonialSection from '@/components/Organisms/MainPage/TheTestimonialSection.vue'
import TheEmailSection from '@/components/Organisms/MainPage/TheEmailSection.vue'
import TheBlogSection from '@/components/Organisms/MainPage/TheBlogSection.vue'
import TheLogoCloud from '@/components/Organisms/MainPage/TheLogoCloud.vue'
import TheFaqSection from '@/components/Organisms/MainPage/TheFaqSection.vue'
import TheCtaSection from '@/components/Organisms/MainPage/TheCtaSection.vue'
import TheHeroSection from '@/components/Organisms/MainPage/TheHeroSection.vue'

definePageMeta({
  layout: 'main'
})
</script>
