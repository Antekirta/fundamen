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

    <the-cta-section />
  </div>
</template>

<script lang="ts" setup>
// noinspection TypeScriptUnresolvedFunction
import TheFeatureSection from '@/components/Organisms/sections/TheFeatureSection.vue'
import ThePriceSection from '@/components/Organisms/sections/ThePriceSection.vue'
import TheStatsSection from '@/components/Organisms/sections/TheStatsSection.vue'
import TheTestimonialSection from '@/components/Organisms/sections/TheTestimonialSection.vue'
import TheEmailSection from '@/components/Organisms/sections/TheEmailSection.vue'
import TheBlogSection from '@/components/Organisms/sections/TheBlogSection.vue'
import TheLogoCloud from '@/components/Organisms/sections/TheLogoCloud.vue'
import TheFaqSection from '@/components/Organisms/sections/TheFaqSection.vue'
import TheCtaSection from '@/components/Organisms/sections/TheCtaSection.vue'
import TheHeroSection from '@/components/Organisms/sections/TheHeroSection.vue'

definePageMeta({
  layout: 'main'
})
</script>
