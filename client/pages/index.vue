<template>
  <div>
    <h1>Main page</h1>
  </div>
</template>

<script lang="ts" setup>
// noinspection TypeScriptUnresolvedFunction
definePageMeta({
  layout: 'main'
})
</script>

<!--<script setup lang="ts">-->
<!--/* global useFetch, useRuntimeConfig  */-->
<!--import { ref, onMounted, onServerPrefetch } from 'vue'-->
<!--const {-->
<!--  public: {-->
<!--    API_BASE_URL-->
<!--  }-->
<!--} = useRuntimeConfig()-->

<!--const text = 'Default'-->
<!--const response = ref(null)-->
<!--const data = ref(null)-->

<!--// Server-side fetch-->
<!--async function fetchData () {-->
<!--  const { data: fetchedData } = await useFetch(`http://${API_BASE_URL}:3002`)-->
<!--  data.value = fetchedData-->
<!--}-->

<!--// Only run on server-->
<!--if (process.server) {-->
<!--  onServerPrefetch(fetchData)-->
<!--}-->

<!--// Client-side fetch-->
<!--onMounted(async () => {-->
<!--  if (process.client) {-->
<!--    response.value = await $fetch(`${API_BASE_URL}/test`)-->
<!--  }-->
<!--})-->
<!--</script>-->
