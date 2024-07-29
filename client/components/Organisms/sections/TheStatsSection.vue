<template>
  <the-section>
    <div class="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
      <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        Our mission
      </h2>
      <div class="mt-6 flex flex-col gap-x-8 gap-y-20 lg:flex-row">
        <div class="lg:w-full lg:max-w-2xl lg:flex-auto">
          <p class="text-xl leading-8 text-gray-600">
            Aliquet nec orci mattis amet quisque ullamcorper neque, nibh sem. At arcu, sit dui mi, nibh dui, diam eget aliquam. Quisque id at vitae feugiat egestas ac. Diam nulla orci at in viverra scelerisque eget. Eleifend egestas fringilla sapien.
          </p>
          <p class="mt-10 max-w-xl text-base leading-7 text-gray-700">
            Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper sed amet vitae sed turpis id. Id dolor praesent donec est. Odio penatibus risus viverra tellus varius sit neque erat velit. Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper sed amet vitae sed turpis id.
          </p>
        </div>
        <div class="lg:flex lg:flex-auto lg:justify-center">
          <dl class="w-64 space-y-8 xl:w-80">
            <the-stat-item
              v-for="stat in stats"
              :key="stat.label"
              class="flex flex-col-reverse gap-y-4"
              :description="stat.label"
              :value="stat.value"
              :value-prefix="stat.valuePrefix"
              :value-postfix="stat.valuePostfix"
              :step="stat.step"
            />
          </dl>
        </div>
      </div>
    </div>
  </the-section>
</template>

<script setup>
import TheStatItem from '@/components/Atoms/items/TheStatItem/TheStatItem.vue'

const timeInterval = 100
// 1000ms / timeInterval
const stepsToFinish = 1000 / timeInterval

const stats = [
  { label: 'Transactions every 24 hours', value: 44, valuePostfix: '', valuePrefix: '', step: 44 / stepsToFinish },
  { label: 'Assets under holding', value: 119, valuePostfix: 'trillion', valuePrefix: '$', step: 119 / stepsToFinish },
  { label: 'New users annually', value: 46000, valuePostfix: '', valuePrefix: '', step: 46000 / stepsToFinish }
]
</script>
