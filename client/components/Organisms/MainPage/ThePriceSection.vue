<template>
  <the-section
    header="Pricing plans for teams of all sizes"
    preheader="Pricing"
    description="Choose an affordable plan that’s packed with the best features for engaging your audience, creating customer loyalty, and driving sales."
  >
    <div class="mt-16 flex justify-center">
      <the-radio-group
        v-model="frequency"
        :options="frequencies"
      />
    </div>
    <div class="isolate mx-auto mt-10 grid max-w-md grid-cols-1 gap-8 md:max-w-2xl md:grid-cols-2 lg:max-w-4xl xl:mx-0 xl:max-w-none xl:grid-cols-4">
      <div
        v-for="tier in tiers"
        :key="tier.id"
        :class="[tier.mostPopular ? 'ring-2 ring-indigo-600' : 'ring-1 ring-gray-200', 'rounded-3xl p-8']"
      >
        <h3
          :id="tier.id"
          :class="[tier.mostPopular ? 'text-indigo-600' : 'text-gray-900', 'text-lg font-semibold leading-8']"
        >
          {{ tier.name }}
        </h3>
        <p class="mt-4 text-sm leading-6 text-gray-600">
          {{ tier.description }}
        </p>
        <p class="mt-6 flex items-baseline gap-x-1">
          <span class="text-4xl font-bold tracking-tight text-gray-900">{{ tier.price[selectedFrequency.value] }}</span>
          <span class="text-sm font-semibold leading-6 text-gray-600">{{ selectedFrequency.priceSuffix }}</span>
        </p>

        <the-button
          :link="tier.href"
          :color="tier.mostPopular ? 'indigo' : 'transparent'"
          class="inline-block mt-6"
        >
          Buy plan
        </the-button>

        <ul
          role="list"
          class="mt-8 space-y-3 text-sm leading-6 text-gray-600"
        >
          <li
            v-for="feature in tier.features"
            :key="feature"
            class="flex gap-x-3"
          >
            <CheckIcon
              class="h-6 w-5 flex-none text-indigo-600"
              aria-hidden="true"
            />
            {{ feature }}
          </li>
        </ul>
      </div>
    </div>
  </the-section>
</template>

<script setup>
import { ref } from 'vue'
import { CheckIcon } from '@heroicons/vue/20/solid'
import TheButton from '@/components/Atoms/TheButton.vue'
import TheRadioGroup from '@/components/Atoms/TheRadioGroup.vue'

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
