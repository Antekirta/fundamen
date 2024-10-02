<template>
  <the-header
    as="h2"
    size="big"
    font-style="bold"
  >
    Create Category
  </the-header>

  <div class="the-category-form__content">
    <the-loader v-if="isLoading" />

    <form
      v-else
      @submit.prevent="createCategory"
    >
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

      <the-file-input
        ref="imageRef"
        type="file"
        name="image"
      />

      <the-button
        as="button"
        theme="info"
        size="tiny"
        type="submit"
      >
        <div class="flex gap-1">
          Save
        </div>
      </the-button>
    </form>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue'
import { AdminCategoriesPageRepository } from '../repository'
import TheLoader from './TheDataTable/TheLoader.vue'
import TheHeader from '@/components/Atoms/typography/TheHeader/TheHeader.vue'
import TheInput from '@/components/Atoms/form/inputs/TheInput/TheInput/TheInput.vue'
import TheFileInput from '@/components/Atoms/form/inputs/TheFileInput/TheFileInput.vue'
import TheButton from '@/components/Atoms/form/buttons/TheButton/TheButton.vue'
import type { CategoryInterface } from '@/shared/types/domain/category'

const { repo } : { repo: AdminCategoriesPageRepository } = useRepo(AdminCategoriesPageRepository)

type CategoryUpdateInterface = Omit<CategoryInterface, 'id' | 'primary_image_url'>

const isLoading = ref(false)
const model = reactive<CategoryUpdateInterface>({
  name: '',
  slug: ''
})

const imageRef = ref<HTMLInputElement | null>(null)

const createCategory = async () => {
  isLoading.value = true

  // @ts-ignore
  const files = imageRef.value?.$el?.files || []

  if (files.length > 0) {
    const file = files[0]

    await repo.createCategory(model, file)
  } else {
    console.error('No file selected')
  }

  isLoading.value = false
}
</script>
