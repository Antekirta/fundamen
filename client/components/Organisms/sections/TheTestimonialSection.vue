<template>
  <the-section
    class="the-testimonial-section"
    preheader="Testimonials"
    header="We have worked with thousands of amazing people"
    v-bind="$attrs"
  >
    <div class="the-testimonial-section__content">
      <the-bg-vague />

      <div class="the-testimonial-section__outer-container">
        <div class="the-testimonial-section__container">
          <the-testimonial-big
            class="the-testimonial-section__testimonial--big"
            :author="featuredTestimonial.author"
            :body="featuredTestimonial.body"
          />

          <div
            v-for="(columnGroup, columnGroupIdx) in testimonials"
            :key="columnGroupIdx"
            class="the-testimonial-section__list space-y-8 xl:contents xl:space-y-0"
          >
            <div
              v-for="(column, columnIdx) in columnGroup"
              :key="columnIdx"
              :class="[(columnGroupIdx === 0 && columnIdx === 0) || (columnGroupIdx === testimonials.length - 1 && columnIdx === columnGroup.length - 1) ? 'xl:row-span-2' : 'xl:row-start-1', 'space-y-8']"
            >
              <the-testimonial-small
                v-for="testimonial in column"
                :key="testimonial.author.handle"
                class="the-testimonial-section__testimonial--small"
                :author="testimonial.author"
                :body="testimonial.body"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </the-section>
</template>

<script setup>
import TheBgVague from '@/components/Molecules/common/background/TheBgVague/TheBgVague.vue'
import TheTestimonialBig from '@/components/Molecules/common/testimonials/TheTestimonialBig/TheTestimonialBig.vue'
import TheTestimonialSmall from '@/components/Molecules/common/testimonials/TheTestimonialSmall/TheTestimonialSmall.vue'
import TheSection from '@/components/Molecules/common/TheSection.vue'

const featuredTestimonial = {
  body: 'Integer id nunc sit semper purus. Bibendum at lacus ut arcu blandit montes vitae auctor libero. Hac condimentum dignissim nibh vulputate ut nunc. Amet nibh orci mi venenatis blandit vel et proin. Non hendrerit in vel ac diam.',
  author: {
    name: 'Brenna Goyette',
    handle: 'brennagoyette',
    imageUrl:
        'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=1024&h=1024&q=80',
    logoUrl: 'https://tailwindui.com/img/logos/savvycal-logo-gray-900.svg'
  }
}
const testimonials = [
  [
    [
      {
        body: 'Laborum quis quam. Dolorum et ut quod quia. Voluptas numquam delectus nihil. Aut enim doloremque et ipsam.',
        author: {
          name: 'Leslie Alexander',
          handle: 'lesliealexander',
          imageUrl:
              'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
        }
      }
      // More testimonials...
    ],
    [
      {
        body: 'Aut reprehenderit voluptatem eum asperiores beatae id. Iure molestiae ipsam ut officia rem nulla blanditiis.',
        author: {
          name: 'Lindsay Walton',
          handle: 'lindsaywalton',
          imageUrl:
              'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
        }
      }
      // More testimonials...
    ]
  ],
  [
    [
      {
        body: 'Voluptas quos itaque ipsam in voluptatem est. Iste eos blanditiis repudiandae. Earum deserunt enim molestiae ipsum perferendis recusandae saepe corrupti.',
        author: {
          name: 'Tom Cook',
          handle: 'tomcook',
          imageUrl:
              'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
        }
      }
      // More testimonials...
    ],
    [
      {
        body: 'Molestias ea earum quos nostrum doloremque sed. Quaerat quasi aut velit incidunt excepturi rerum voluptatem minus harum.',
        author: {
          name: 'Leonard Krasner',
          handle: 'leonardkrasner',
          imageUrl:
              'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
        }
      },
      {
        body: 'Molestias ea earum quos nostrum doloremque sed. Quaerat quasi aut velit incidunt excepturi rerum voluptatem minus harum.',
        author: {
          name: 'Leonard Krasner',
          handle: 'leonardkrasner',
          imageUrl:
              'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
        }
      },
      {
        body: 'Molestias ea earum quos nostrum doloremque sed. Quaerat quasi aut velit incidunt excepturi rerum voluptatem minus harum.',
        author: {
          name: 'Leonard Krasner',
          handle: 'leonardkrasner',
          imageUrl:
              'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
        }
      }
    ]
  ]
]
</script>

<style lang="scss">
.the-testimonial-section {
  &__content {
    @apply  relative isolate pb-32 pt-6 sm:pt-24;
  }

  &__outer-container {
    @apply mx-auto max-w-7xl px-6 lg:px-8;
  }

  &__container {
    @apply mx-auto mt-0 grid max-w-2xl grid-cols-1 grid-rows-1 gap-8 text-sm leading-6 text-gray-900 sm:grid-cols-2 xl:mx-0 xl:max-w-none xl:grid-flow-col xl:grid-cols-4;
  }

  &__testimonial {
    &--big {
      @apply sm:col-span-2 xl:col-start-2 xl:row-end-1;
    }

    &--small {

    }
  }
}
</style>
