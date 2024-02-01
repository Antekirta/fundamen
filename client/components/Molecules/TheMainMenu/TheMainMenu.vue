<template>
  <PopoverGroup class="lg:flex lg:gap-x-12">
    <component
      :is="menuComponent"
      v-for="item in items"
      :key="item.title"
      :title="item.title"
      :items="item.items"
      :calls-to-action="item.callsToAction"
      :is-large="item.isLarge"
    />
  </PopoverGroup>
</template>

<script setup lang="ts">
import {
  PopoverGroup
} from '@headlessui/vue'
import { PhoneIcon, PlayCircleIcon } from '@heroicons/vue/20/solid'
import {
  ArrowPathIcon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon
} from '@heroicons/vue/24/outline'
import TheMainMenuItemHorizontal from '@/components/Molecules/TheMainMenu/TheMainMenuItem/TheMainMenuItemHorizontal.vue'
import TheMainMenuItemVertical from '@/components/Molecules/TheMainMenu/TheMainMenuItem/TheMainMenuItemVertical.vue'

const props = defineProps<{
  isMobile?: boolean
}>()

const menuComponent = props.isMobile ? TheMainMenuItemVertical : TheMainMenuItemHorizontal

const items = [
  {
    title: 'Product',
    items: [
      { name: 'Analytics', description: 'Get a better understanding of your traffic', href: '#', icon: ChartPieIcon },
      { name: 'Engagement', description: 'Speak directly to your customers', href: '#', icon: CursorArrowRaysIcon },
      { name: 'Security', description: 'Your customers’ data will be safe and secure', href: '#', icon: FingerPrintIcon },
      { name: 'Integrations', description: 'Connect with third-party tools', href: '#', icon: SquaresPlusIcon },
      { name: 'Automations', description: 'Build strategic funnels that will convert', href: '#', icon: ArrowPathIcon }
    ],
    callsToAction: [
      { name: 'Watch demo', href: '#', icon: PlayCircleIcon },
      { name: 'Contact sales', href: '#', icon: PhoneIcon }
    ],
    isLarge: true
  },
  {
    title: 'Features',
    href: '#'
  },
  {
    title: 'Marketplace',
    href: '#'
  },
  {
    title: 'Company',
    items: [
      { name: 'About Us', href: '#' },
      { name: 'Careers', href: '#' },
      { name: 'Support', href: '#' },
      { name: 'Press', href: '#' },
      { name: 'Blog', href: '#' }
    ]
  }
]

</script>
