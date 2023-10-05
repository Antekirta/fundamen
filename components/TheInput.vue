<template>
  <div class="the-input">
    <label>
      <span class="the-input__label-text">Pretty label</span>
      <input
        v-model="value"
        type="text"
      >
    </label>

    {{ value }}
  </div>
</template>

<script>
export default {
  data () {
    return {
      value: ''
    }
  }
}
</script>

<style>
.the-input__label-text {
  display: block;
  margin-bottom: 8px;
}
</style>
