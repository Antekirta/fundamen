<template>
  <div class="py-24 sm:py-32">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-2xl lg:text-center">
        <the-preheader>
          Deploy faster
        </the-preheader>

        <the-header
          class="mt-2"
          as="h2"
        >
          Everything you need to deploy your app
        </the-header>

        <the-description>
          Quis tellus eget adipiscing convallis sit sit eget aliquet quis. Suspendisse eget egestas a elementum pulvinar et feugiat blandit at. In mi viverra elit nunc.
        </the-description>
      </div>

      <div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
        <dl class="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
          <the-item-with-icon
            v-for="feature in features"
            :key="feature.name"
            :title="feature.name"
            :description="feature.description"
            :icon="feature.icon"
          />
        </dl>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ArrowPathIcon, CloudArrowUpIcon, FingerPrintIcon, LockClosedIcon } from '@heroicons/vue/24/outline'
import ThePreheader from '@/components/Atoms/ThePreheader.vue'
import TheHeader from '@/components/Atoms/TheHeader.vue'
import TheDescription from '@/components/Atoms/TheDescription.vue'
import TheItemWithIcon from '@/components/Atoms/TheItemWithIcon.vue'

const features = [
  {
    name: 'Push to deploy',
    description:
        'Morbi viverra dui mi arcu sed. Tellus semper adipiscing suspendisse semper morbi. Odio urna massa nunc massa.',
    icon: CloudArrowUpIcon
  },
  {
    name: 'SSL certificates',
    description:
        'Sit quis amet rutrum tellus ullamcorper ultricies libero dolor eget. Sem sodales gravida quam turpis enim lacus amet.',
    icon: LockClosedIcon
  },
  {
    name: 'Simple queues',
    description:
        'Quisque est vel vulputate cursus. Risus proin diam nunc commodo. Lobortis auctor congue commodo diam neque.',
    icon: ArrowPathIcon
  },
  {
    name: 'Advanced security',
    description:
        'Arcu egestas dolor vel iaculis in ipsum mauris. Tincidunt mattis aliquet hac quis. Id hac maecenas ac donec pharetra eget.',
    icon: FingerPrintIcon
  }
]
</script>
