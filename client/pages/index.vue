<template>
  <div>
    <main>
      <the-hero-section />
    </main>

    <section>
      <the-feature-section />
    </section>

    <section>
      <the-price-section />
    </section>

    <section>
      <the-stats-section />
    </section>

    <section>
      <the-testimonial-section />
    </section>

    <section>
      <the-email-section />
    </section>

    <section>
      <the-blog-section />
    </section>

    <section>
      <the-logo-cloud />
    </section>

    <section>
      <the-faq-section />
    </section>

    <section>
      <the-cta-section />
    </section>
  </div>
</template>

<script lang="ts" setup>
// noinspection TypeScriptUnresolvedFunction
import TheButton from '@/components/Atoms/TheButton.vue'
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
