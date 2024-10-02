<template>
  <the-header
    as="h2"
    size="big"
    font-style="bold"
  >
    Create Category
  </the-header>

  <form>
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
      ref="imageRef"
      text="Image"
      name="image"
      type="file"
    />
  </form>
</template>

<script lang="ts" setup>
import TheHeader from '@/components/Atoms/typography/TheHeader/TheHeader.vue'
import TheInput from '@/components/Atoms/form/inputs/TheInput/TheInput/TheInput.vue'
import type { CategoryInterface } from '@/shared/types/domain/category'

type CategoryUpdateInterface = Omit<CategoryInterface, 'id' | 'primary_image_url'>

const model = reactive<CategoryUpdateInterface>({
  name: '',
  slug: ''
})

const imageRef = ref('imageRef')
</script>
