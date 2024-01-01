<template>
  <div>
    <h1>Main page</h1>

    <pre>{{ data }}</pre>
  </div>
</template>

<script setup lang="ts">
console.log('eeeeeeeeeeeee')
/* global useFetch */
// const { data } = await useFetch('http://localhost:3002/test')
const { data } = await useFetch('https://fakestoreapi.com/products')
</script>
