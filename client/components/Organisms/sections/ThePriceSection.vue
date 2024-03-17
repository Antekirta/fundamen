<template>
  <the-section
    header="Pricing plans for teams of all sizes"
    preheader="Pricing"
    description="Choose an affordable plan that’s packed with the best features for engaging your audience, creating customer loyalty, and driving sales."
  >
    <div class="mt-16 flex justify-center">
      <!--      <the-radio-toggle-->
      <!--        v-model="frequency"-->
      <!--        :options="frequencies"-->
      <!--      />-->
    </div>
    <div class="isolate mx-auto mt-10 grid max-w-md grid-cols-1 gap-8 md:max-w-2xl md:grid-cols-2 lg:max-w-4xl xl:mx-0 xl:max-w-none xl:grid-cols-4">
      <the-price-block
        v-for="tier in tiers"
        :key="tier.id"
        :title="tier.name"
        :description="tier.description"
        :price="tier.price[selectedFrequency.value]"
        :price-suffix="selectedFrequency.priceSuffix"
        :link="tier.href"
        :is-recommended="tier.recommended"
        :is-special="tier.mostPopular"
        :features="tier.features"
      />
    </div>
  </the-section>
</template>

<script setup>
import { ref } from 'vue'
import ThePriceBlock from '@/components/Molecules/common/ThePriceBlock.vue'
import TheSection from '@/components/Molecules/common/TheSection.vue'

const frequencies = [
  { value: 'monthly', text: 'Monthly', priceSuffix: '/month' },
  { value: 'annually', text: 'Annually', priceSuffix: '/year' }
]
const tiers = [
  {
    name: 'Hobby',
    id: 'tier-hobby',
    href: '#',
    price: { monthly: '$15', annually: '$144' },
    description: 'The essentials to provide your best work for clients.',
    features: ['5 products', 'Up to 1,000 subscribers', 'Basic analytics'],
    mostPopular: false
  },
  {
    name: 'Freelancer',
    id: 'tier-freelancer',
    href: '#',
    price: { monthly: '$30', annually: '$288' },
    description: 'The essentials to provide your best work for clients.',
    features: ['5 products', 'Up to 1,000 subscribers', 'Basic analytics', '48-hour support response time'],
    mostPopular: false
  },
  {
    name: 'Startup',
    id: 'tier-startup',
    href: '#',
    price: { monthly: '$60', annually: '$576' },
    description: 'A plan that scales with your rapidly growing business.',
    features: [
      '25 products',
      'Up to 10,000 subscribers',
      'Advanced analytics',
      '24-hour support response time',
      'Marketing automations'
    ],
    mostPopular: true
  },
  {
    name: 'Enterprise',
    id: 'tier-enterprise',
    href: '#',
    price: { monthly: '$90', annually: '$864' },
    description: 'Dedicated support and infrastructure for your company.',
    features: [
      'Unlimited products',
      'Unlimited subscribers',
      'Advanced analytics',
      '1-hour, dedicated support response time',
      'Marketing automations',
      'Custom reporting tools'
    ],
    mostPopular: false
  }
]

const frequency = ref(frequencies[0].value)
const selectedFrequency = computed(() => frequencies.find(f => f.value === frequency.value))
</script>
