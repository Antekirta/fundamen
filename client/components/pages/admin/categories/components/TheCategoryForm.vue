<template>
  <the-header
    as="h2"
    size="big"
    font-style="bold"
  >
    Create Category
  </the-header>

  <the-input
    v-model="model.name"
    text="Name"
    name="name"
    type="text"
  />

  <the-input
    v-model="model.slug"
    text="Slug"
    name="slug"
    type="text"
  />

  <the-input
    v-model="model.image"
    text="Image"
    name="image"
    type="file"
  />
</template>

<script lang="ts" setup>
import TheHeader from '@/components/Atoms/typography/TheHeader/TheHeader.vue'
import TheInput from '@/components/Atoms/form/inputs/TheInput/TheInput/TheInput.vue'

const model = reactive({
  name: '',
  slug: '',
  image: ''
})
</script>
