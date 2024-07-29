<template>
  <div class="py-24 sm:py-32">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="-mx-6 grid grid-cols-2 gap-0.5 overflow-hidden sm:mx-0 sm:rounded-2xl md:grid-cols-3">
        <the-logo-item
          v-for="logo in logos"
          :key="logo.alt"
          :title="logo.alt"
          :src="logo.img"
        />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import TheLogoItem from '@/components/Atoms/images/TheLogoItem/TheLogoItem.vue'

const logos = [
  {
    img: 'https://tailwindui.com/img/logos/158x48/transistor-logo-gray-900.svg',
    alt: 'Transistor',
    width: 158,
    height: 48
  },
  {
    img: 'https://tailwindui.com/img/logos/158x48/reform-logo-gray-900.svg',
    alt: 'Reform',
    width: 158,
    height: 48
  },
  {
    img: 'https://tailwindui.com/img/logos/158x48/tuple-logo-gray-900.svg',
    alt: 'Tuple',
    width: 158,
    height: 48
  },
  {
    img: 'https://tailwindui.com/img/logos/158x48/laravel-logo-gray-900.svg',
    alt: 'Laravel',
    width: 158,
    height: 48
  },
  {
    img: 'https://tailwindui.com/img/logos/158x48/savvycal-logo-gray-900.svg',
    alt: 'SavvyCal',
    width: 158,
    height: 48
  },
  {
    img: 'https://tailwindui.com/img/logos/158x48/statamic-logo-gray-900.svg',
    alt: 'Statamic',
    width: 158,
    height: 48
  }
]
</script>
