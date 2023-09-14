<template>
  <div class="the-input">
    {{ value }}

    <br>

    <input type="text" v-model="value">
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: ''
    }
  }
}
</script>
