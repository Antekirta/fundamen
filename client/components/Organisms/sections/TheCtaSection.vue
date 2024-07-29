<template>
  <div class="the-cta-section">
    <div class="the-cta-section__container">
      <div class="the-cta-section__inner-container">
        <div class="the-cta-section__text-container lg:col-end-1 lg:w-full lg:max-w-lg lg:pb-8">
          <the-header
            as="h2"
            size="giant"
            color="red"
            font="fancy"
            font-style="bold"
          >
            {{ $t('sections.cta.title') }}
          </the-header>

          <the-description
            v-clarifier
            class="the-cta-section__description"
            size="medium"
            font="fancy"
          >
            <p
              v-for="(text, i) in $t('sections.cta.description', { returnObjects: true })"
              :key="i"
              class="the-cta-section__p"
            >
              {{ text }}
            </p>
          </the-description>

          <div class="mt-10">
            <the-button
              as="button"
              color="light"
              font="fancy"
              size="medium"
            >
              {{ $t('sections.cta.button') }}
            </the-button>
          </div>
        </div>

        <div class="the-cta-section__images-container">
          <div class="w-0 flex-auto lg:ml-auto lg:w-auto lg:flex-none lg:self-end">
            <the-image
              img-classes="the-cta-section__image aspect-[7/5] w-[37rem]"
              :src="images.about3.src"
            />
          </div>

          <div class="contents lg:col-span-2 lg:col-end-2 lg:ml-auto lg:flex lg:w-[37rem] lg:items-start lg:justify-end lg:gap-x-8">
            <div class="order-first flex w-96 flex-none justify-end self-end lg:w-auto">
              <the-image
                :src="images.cake.src"
                img-classes="the-cta-section__image aspect-[4/4] w-[24rem] "
              />
            </div>

            <div class="flex w-96 flex-auto justify-end lg:w-auto lg:flex-none translate-y-6">
              <the-image
                :src="images.about2.src"
                img-classes="the-cta-section__image aspect-[7/6] w-[37rem] "
              />
            </div>

            <div class="hidden sm:block sm:w-0 sm:flex-auto lg:w-auto lg:flex-none">
              <the-image
                :src="images.croissant.src"
                img-classes="the-cta-section__image  aspect-[4/3] w-[24rem] "
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import TheButton from '@/components/Atoms/form/buttons/TheButton/TheButton.vue'
import TheHeader from '@/components/Atoms/typography/TheHeader/TheHeader.vue'
import TheDescription from '@/components/Atoms/typography/TheDescription/TheDescription.vue'
import { vClarifier } from '@/directives/v-clarifier/v-clarifier'
import TheImage from '@/components/Atoms/images/TheImage/TheImage.vue'

const images = {
  cake: {
    src: '/cake.jpg',
    alt: 'A cake'
  },
  croissant: {
    src: '/croissant.jpg',
    alt: 'A croissant'
  },
  about2: {
    src: '/about-2.jpg',
    alt: 'A person'
  },
  about3: {
    src: '/about-3.jpg',
    alt: 'A person'
  }
}
</script>

<style lang="scss">
.the-cta-section {
  @apply py-32;

  &__container {
    @apply mx-auto max-w-7xl px-6 lg:flex lg:px-8;
  }

  &__inner-container {
    @apply mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 lg:mx-0 lg:min-w-full lg:max-w-none lg:flex-none lg:gap-y-8;
  }

  &__images-container {
    @apply flex flex-wrap items-start justify-end gap-6 sm:gap-8 hidden lg:contents;
  }

  &__image {
    @apply max-w-none object-cover rounded-3xl;
    @apply shadow-brown shadow-lg;
  }

  &__description {
    @apply mt-4;
    @apply tracking-normal;
  }

  &__p {
    @apply mb-2;
  }
}
</style>
