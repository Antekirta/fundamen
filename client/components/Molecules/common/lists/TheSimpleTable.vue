<template>
  <dl class="mt-6 space-y-4">
    <template
      v-for="(rowData, i) in rows"
      :key="i"
    >
      <div class="flex items-center justify-between">
        <template
          v-for="col in cols"
          :key="col.name"
        >
          <div class="text-sm text-gray-600">
            <template v-if="col.slot">
              <slot
                :name="col.slot"
                :row="rowData"
              />
            </template>

            <template v-else>
              {{ rowData[col.name] }}
            </template>
          </div>
        </template>
      </div>

      <the-divider />
    </template>
  </dl>
</template>

<script setup lang="ts">
import TheDivider from '@/components/Atoms/layout/TheDivider/TheDivider.vue'

defineProps<{
  title?: string
  description?: string
  cols: {
    name: string
    slot?: string
  }[]
  rows: {
    id: string
    [key: string]: string
  }[]
}>()
</script>
