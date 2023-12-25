<template>
  <div
    :class="rootClasses"
    v-bind="$attrs"
  >
    <label
      :class="labelClasses"
      :for="id"
    >
      <span>{{ label }}
        <span
          v-if="required"
          class="text-red-700"
        >*</span>
      </span>

      <span
        v-if="cornerHint"
        class="text-slate-700 font-normal"
      >{{ cornerHint }}</span>
    </label>

    <div>
      <div class="flex items-center">
        <div
          v-if="addon"
          class="w-auto px-2 py-1 outline outline-2 outline-slate-300 focus:outline-slate-400 rounded rounded-r-none text-sm text-slate-600"
          :class="{'rounded-full': pill}"
        >
          {{ addon }}
        </div>

        <div class="relative w-full">
          <the-icon
            v-if="prependIcon"
            :icon="prependIcon"
            :width="6"
            :height="6"
            class="absolute top-0 pl-1 pt-1 text-slate-500"
          />

          <input
            :id="id"
            v-model="value"
            :class="inputClasses"
            :type="type"
            :placeholder="placeholder"
            :disabled="disabled"
          >

          <the-icon
            v-if="appendIcon"
            :icon="appendIcon"
            :width="6"
            :height="6"
            class="absolute top-0 pl-1 pt-1 text-slate-500 right-1"
          />
        </div>
      </div>

      <div
        v-if="helpText"
        class="text-slate-700 text-xs pt-2"
      >
        {{ helpText }}
      </div>

      <div
        v-if="errors.length"
        class="text-red-700 text-xs pt-2"
      >
        <div
          v-for="error in errors"
          :key="error"
        >
          {{ error }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import TheIcon from '@/components/Atoms/TheIcon/TheIcon.vue'
import { TailwindHelper } from '@/utils/TailwindHelper'

const INPUT_SIZES = {
  SMALL: 'small',
  MEDIUM: 'medium',
  LARGE: 'large'
}

const LABEL_TYPES = {
  DEFAULT: 'default',
  OVERLAPPING: 'overlapping',
  INSET: 'inset'
}

const BORDER_TYPES = {
  DEFAULT: 'default',
  BOTTOM: 'bottom'
}

const props = defineProps({
  label: {
    type: String,
    default: ''
  },
  cornerHint: {
    type: String,
    default: ''
  },
  // labelType: {
  //   type: String,
  //   validator () {
  //     return Object.values(LABEL_TYPES)
  //   },
  //   default: LABEL_TYPES.DEFAULT
  // },
  // borderType: {
  //   type: String,
  //   validator () {
  //     return Object.values(BORDER_TYPES)
  //   },
  //   default: BORDER_TYPES.DEFAULT
  // },
  helpText: {
    type: String,
    default: ''
  },
  errors: {
    type: Array,
    default: () => []
  },
  type: {
    type: String,
    default: 'text'
  },
  // size: {
  //   type: String,
  //   validator () {
  //     return Object.values(INPUT_SIZES)
  //   },
  //   default: INPUT_SIZES.SMALL
  // },
  placeholder: {
    type: String,
    default: 'placeholder'
  },
  addon: {
    type: String,
    default: ''
  },
  prependIcon: {
    type: String,
    default: ''
  },
  appendIcon: {
    type: String,
    default: ''
  },
  inputExtraClasses: {
    type: String,
    default: ''
  },
  pill: Boolean,
  inline: Boolean,
  required: Boolean,
  disabled: Boolean
})

const value = ref('')

const rootClasses = computed(() => {
  const classes = []

  if (props.inline) {
    classes.push('relative flex flex-wrap items-start')
  }

  return classes
})

const labelClasses = computed(() => {
  const classes = [
    'relative z-10 flex justify-between p-1 w-auto',
    'font-semibold',
    'text-sm text-slate-700'
  ]

  switch (props.labelType) {
    case 'over': classes.push('inline-flex bg-white px-2 pb-1 translate-x-3 translate-y-3  text-xs'); break
    case LABEL_TYPES.INSET: classes.push('text-xs translate-y-7 px-2 pb-1'); break
  }

  switch (props.size) {
    case INPUT_SIZES.SMALL: classes.push('text-sm'); break
    case INPUT_SIZES.MEDIUM: classes.push('text-base'); break
    case INPUT_SIZES.LARGE: classes.push('text-lg'); break
  }

  if (props.inline) {
    if (props.inline) {
      classes.push('pr-2')
    }
  }

  return TailwindHelper.merge(classes)
})
</script>
