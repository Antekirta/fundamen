<template>
  <PopoverGroup class="lg:flex lg:gap-x-12 items-baseline">
    <component
      :is="menuComponent"
      v-for="item in items"
      :key="item.title"
      :title="item.title"
      :items="item.items"
      :calls-to-action="item.callsToAction"
    />
  </PopoverGroup>
</template>

<script setup lang="ts">
import {
  PopoverGroup
} from '@headlessui/vue'
import { PhoneIcon, PlayCircleIcon } from '@heroicons/vue/20/solid'
import {
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon
} from '@heroicons/vue/24/outline'
import TheItemHorizontal from '@/components/Molecules/common/TheMainMenu/TheItem/TheItemHorizontal.vue'
import TheItemVertical from '@/components/Molecules/common/TheMainMenu/TheItem/TheItemVertical.vue'

const props = defineProps<{
  isMobile?: boolean
}>()

const menuComponent = props.isMobile ? TheItemVertical : TheItemHorizontal

const items = [
  {
    title: 'Home',
    href: '#'
  },
  {
    title: 'Produtos',
    items: [
      { name: 'Tortas', description: 'Get a better understanding of your traffic', href: '#', icon: ChartPieIcon },
      { name: 'Bolos', description: 'Speak directly to your customers', href: '#', icon: CursorArrowRaysIcon },
      { name: 'Chocolates', description: 'Your customers’ data will be safe and secure', href: '#', icon: FingerPrintIcon },
      { name: 'Mil folhas', description: 'Connect with third-party tools', href: '#', icon: SquaresPlusIcon }
    ],
    callsToAction: [
      { name: 'Escrever', href: '#', icon: PlayCircleIcon },
      { name: 'Ligar', href: '#', icon: PhoneIcon }
    ]
  },
  {
    title: 'Quem somos',
    href: '#'
  },
  {
    title: 'Contato',
    href: '#'
  }
]
</script>
