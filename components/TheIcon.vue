<template>
  <div
    v-show="svgContent"
    :style="svgStyles"
    v-bind="$attrs"
    v-html="svgContent"
  />
</template>

<script>
import { TailwindHelper } from '@/utils/TailwindHelper'

export default {
  name: 'TheIcon',
  props: {
    icon: {
      type: String,
      default: null
    },
    width: {
      type: Number,
      default: 6
    },
    height: {
      type: Number,
      default: 6
    }
  },
  data () {
    return {
      svg: null
    }
  },
  computed: {
    svgContent () {
      return this.svg && this.svg.default
    },
    svgStyles () {
      const { base } = TailwindHelper.getConfig().width
      const { multiplyUnits } = TailwindHelper

      return {
        width: multiplyUnits(base, this.width, 'rem'),
        height: multiplyUnits(base, this.width, 'rem')
      }
    }
  },
  async created () {
    this.svg = await import(`../assets/icons/${this.icon}.svg?raw`)
  }
}
</script>
