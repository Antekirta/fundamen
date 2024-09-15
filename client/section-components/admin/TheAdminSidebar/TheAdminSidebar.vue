<template>
  <div class="flex grow flex-col gap-y-5 overflow-y-auto bg-indigo-600 px-6 pb-4">
    <div class="flex h-16 shrink-0 items-center">
      <img
        class="h-8 w-auto"
        src="https://tailwindui.com/img/logos/mark.svg?color=white"
        alt="Your Company"
      >
    </div>
    <nav class="flex flex-1 flex-col">
      <ul
        role="list"
        class="flex flex-1 flex-col gap-y-7"
      >
        <li>
          <ul
            role="list"
            class="-mx-2 space-y-1"
          >
            <li
              v-for="item in navigation"
              :key="item.name"
            >
              <TheLink :item="item">
                {{ item.name }}
              </TheLink>
            </li>
          </ul>
        </li>

        <li class="mt-auto">
          <a
            href="#"
            class="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-indigo-200 hover:bg-indigo-700 hover:text-white"
          >
            <Cog6ToothIcon
              class="h-6 w-6 shrink-0 text-indigo-200 group-hover:text-white"
              aria-hidden="true"
            />
            Settings
          </a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script lang="ts" setup>
import {
  ChartPieIcon, Cog6ToothIcon, DocumentDuplicateIcon, HomeIcon, UsersIcon
} from '@heroicons/vue/24/outline'
import TheLink from '~/new-components/Atoms/TheLink/TheLink.vue'

const route = useRoute()

const navigation = computed(() => [
  { name: 'Categories', href: '/admin/categories', icon: HomeIcon, current: route.fullPath === '/admin/categories' },
  { name: 'Products', href: '/admin/products', icon: UsersIcon, current: route.fullPath === '/admin/products' },
  { name: 'Orders', href: '/admin/orders', icon: DocumentDuplicateIcon, current: route.fullPath === '/admin/orders' },
  { name: 'Users', href: '/admin/users', icon: UsersIcon, current: route.fullPath === '/admin/users' },
  { name: 'Reports', href: '/admin/reports', icon: ChartPieIcon, current: route.fullPath === '/admin/reports' },
  { name: 'Profile', href: '/admin/profile', icon: UsersIcon, current: route.fullPath === '/admin/profile' }
])
</script>
