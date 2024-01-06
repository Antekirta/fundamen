<template>
  <div>
    <h1>Main page</h1>
    <pre>{{ text }}</pre>
    <pre>{{ response }}</pre>
    <pre>{{ data }}</pre>
  </div>
</template>

<script setup lang="ts">
/* global useFetch, useRuntimeConfig  */
import { ref, onMounted, onServerPrefetch } from 'vue'
const config = useRuntimeConfig()

console.log('process: ', process)

if (process.server) {
  console.log('process.env: ', process.server)
}

console.log('config: ', config)
console.log('config.FUN_HOST: ', config.FUN_HOST)

const text = 'Default'
const response = ref(null)
const data = ref(null)

// Server-side fetch
async function fetchData () {
  const { data: fetchedData } = await useFetch('http://nest:3002')
  data.value = fetchedData
}

// Only run on server
if (process.server) {
  onServerPrefetch(fetchData)
}

// Client-side fetch
onMounted(async () => {
  if (process.client) {
    response.value = await $fetch('http://localhost:3002/test')
  }
})
</script>
