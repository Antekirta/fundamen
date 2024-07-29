<template>
  <the-section
    header="Everything you need to know"
    preheader="Deploy faster"
    description="Quis tellus eget adipiscing convallis sit sit eget aliquet quis. Suspendisse eget egestas a elementum pulvinar et feugiat blandit at. In mi viverra elit nunc."
  >
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
  </the-section>
</template>

<script setup>
import TheItemWithIcon from '@/components/Atoms/items/TheItemWithIcon/TheItemWithIcon.vue'
import TheSection from '@/components/Molecules/common/TheSection.vue'
import cakeSvg from '@/assets/icons/cake.svg?component'

const features = [
  {
    name: 'Push to deploy',
    description:
        'Morbi viverra dui mi arcu sed. Tellus semper adipiscing suspendisse semper morbi. Odio urna massa nunc massa.',
    icon: cakeSvg
  },
  {
    name: 'SSL certificates',
    description:
        'Sit quis amet rutrum tellus ullamcorper ultricies libero dolor eget. Sem sodales gravida quam turpis enim lacus amet.',
    icon: cakeSvg
  },
  {
    name: 'Simple queues',
    description:
        'Quisque est vel vulputate cursus. Risus proin diam nunc commodo. Lobortis auctor congue commodo diam neque.',
    icon: cakeSvg
  },
  {
    name: 'Advanced security',
    description:
        'Arcu egestas dolor vel iaculis in ipsum mauris. Tincidunt mattis aliquet hac quis. Id hac maecenas ac donec pharetra eget.',
    icon: cakeSvg
  }
]
</script>
