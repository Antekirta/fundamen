<template>
  <div class="the-categories-section">
    <div
      v-if="categories.length"
      class="the-categories-section__list"
    >
      <div
        v-for="category in categories"
        :key="category.id"
        class="the-categories-section__item"
      >
        <the-image
          :src="category.primary_image_url"
          :title="category.name"
        />
        {{ category.name }}
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import TheImage from '@/components/Atoms/images/TheImage/TheImage.vue'
import type { CategoryInterface } from '@/shared/types/domain/category'

defineProps<{
  categories: CategoryInterface[]
}>()
</script>

<style lang="scss">
.the-categories-section {
  &__list {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    gap: 1rem;
  }

  &__item {
    max-width: 30%;
    min-width: 300px;
    border-radius: 0.5rem;
  }
}
</style>
