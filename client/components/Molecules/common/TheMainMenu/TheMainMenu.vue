<template>
  <PopoverGroup class="the-main-menu">
    <component
      :is="menuComponent"
      v-for="item in items"
      :key="item.title"
      :title="item.title"
      :item-color="isMobile ? 'light' : 'dark'"
      :item-size="isMobile ? 'medium' : 'medium'"
      :items="item.items"
      :calls-to-action="item.callsToAction"
      class="min-h-10"
    />
  </PopoverGroup>
</template>

<script setup lang="ts">
import {
  PopoverGroup
} from '@headlessui/vue'
import { PhoneIcon, PlayCircleIcon } from '@heroicons/vue/20/solid'
import { CakeIcon } from '@heroicons/vue/16/solid'
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
      { name: 'Tortas', description: 'Get a better understanding of your traffic', href: '#', icon: CakeIcon },
      { name: 'Bolos', description: 'Speak directly to your customers', href: '#', icon: CakeIcon },
      { name: 'Chocolates', description: 'Your customers’ data will be safe and secure', href: '#', icon: CakeIcon },
      { name: 'Mil folhas', description: 'Connect with third-party tools', href: '#', icon: CakeIcon }
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

<style lang="scss">
.the-main-menu {
  @apply lg:flex lg:gap-x-12 items-baseline;
}
</style>
