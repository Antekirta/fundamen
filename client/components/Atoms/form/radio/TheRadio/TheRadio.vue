<template>
  <SwitchGroup
    as="div"
    class="the-radio"
  >
    <Switch
      v-model="model"
      :class="{
        'the-radio__switch': true,
        'the-radio__switch--active': model
      }"
    >
      <span
        aria-hidden="true"
        :class="{
          'the-radio__switch-span': true,
          'the-radio__switch-span--active': model
        }"
      />
    </Switch>

    <SwitchLabel
      as="span"
      class="the-radio__label-container"
    >
      <span class="the-radio__label">{{ text }}</span>
    </SwitchLabel>
  </SwitchGroup>
</template>

<script lang="ts" setup>
import { Switch, SwitchGroup, SwitchLabel } from '@headlessui/vue'

defineProps<{
  text: string
  name: string
  description?: string,
  placeholder?: string
}>()

const model = defineModel()
</script>

<style lang="scss">
.the-radio {
  @apply flex items-center;

  &__switch {
    @apply relative inline-flex h-6 w-11 flex-shrink-0;
    @apply cursor-pointer rounded-full border-2 border-transparent;
    @apply bg-gray-200;
    @apply transition-colors duration-200 ease-in-out focus:outline-none;

    &--active {
      @apply bg-indigo-600;
    }
  }

  &__switch-span {
    @apply pointer-events-none inline-block h-5 w-5 transform translate-x-0;
    @apply rounded-full bg-white shadow ring-0;
    @apply transition duration-200 ease-in-out;

    &--active {
      @apply translate-x-5;
    }
  }

  &__label-container {
    @apply ml-3 text-sm;
  }

  &__label {
    @apply font-medium text-gray-900;
  }
}
</style>
