<template>
  <div>
    <h1>Main page</h1>

    <pre>{{ data }}</pre>
  </div>
</template>

<script setup lang="ts">
/* global useFetch */
const { data } = await useFetch('http://localhost:3002/test')
</script>
